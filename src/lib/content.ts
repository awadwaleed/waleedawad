import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Shared loader for MDX collections in `content/<name>/*.mdx`. Each collection supplies a
 * `parse` function that turns raw frontmatter into a typed object, using the field helpers
 * below so a missing or mistyped field fails the build with the file name, instead of
 * rendering `undefined`.
 */

export type Entry<T> = T & { slug: string; content: string };

type Frontmatter = Record<string, unknown>;
export type Parse<T> = (fields: FieldReader, content: string) => T;

export function loadCollection<T>(name: string, parse: Parse<T>): Entry<T>[] {
  const dir = path.join(process.cwd(), "content", name);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const parsed = parse(fieldReader(data, `content/${name}/${file}`), content);
      return { ...parsed, slug: file.replace(/\.mdx$/, ""), content };
    });
}

export function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
}

export type FieldReader = ReturnType<typeof fieldReader>;

function fieldReader(data: Frontmatter, file: string) {
  const fail = (key: string, expected: string): never => {
    throw new Error(`${file}: frontmatter "${key}" must be ${expected} (got ${JSON.stringify(data[key])})`);
  };

  const optionalString = (key: string): string | undefined => {
    const value = data[key];
    if (value === undefined || value === null || value === "") return undefined;
    if (typeof value !== "string") return fail(key, "a string");
    return value;
  };

  return {
    string(key: string): string {
      return optionalString(key) ?? fail(key, "a non-empty string");
    },
    optionalString,
    /** Accepts "YYYY-MM-DD" strings and unquoted YAML dates; always returns "YYYY-MM-DD". */
    date(key: string): string {
      const value = data[key];
      if (value instanceof Date) return value.toISOString().slice(0, 10);
      if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
      return fail(key, 'a date like "2026-06-01"');
    },
    boolean(key: string): boolean {
      const value = data[key];
      if (value === undefined) return false;
      if (typeof value !== "boolean") return fail(key, "true or false");
      return value;
    },
    stringArray(key: string): string[] {
      const value = data[key];
      if (value === undefined) return [];
      if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
        return fail(key, "a list of strings");
      }
      return value;
    },
    oneOf<const V extends string>(key: string, options: readonly V[]): V {
      const value = data[key];
      if (typeof value !== "string" || !options.includes(value as V)) {
        return fail(key, `one of ${options.map((o) => `"${o}"`).join(", ")}`);
      }
      return value as V;
    },
    /** Reads a nested object of optional string fields, e.g. `links: { github, demo }`. */
    stringRecord<K extends string>(key: string, keys: readonly K[]): Partial<Record<K, string>> {
      const value = data[key];
      if (value === undefined || value === null) return {};
      if (typeof value !== "object" || Array.isArray(value)) return fail(key, "an object");
      const nested = fieldReader(value as Frontmatter, `${file} → ${key}`);
      const result: Partial<Record<K, string>> = {};
      for (const k of keys) {
        const v = nested.optionalString(k);
        if (v) result[k] = v;
      }
      return result;
    },
  };
}
