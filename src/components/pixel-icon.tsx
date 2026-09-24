// Tiny pixel-art icons drawn from text grids: "#" is a filled pixel, "." is empty.
// Rendered with currentColor, so they take the surrounding text color.
const ICONS = {
  cap: [
    "....#....",
    "..#####..",
    "#########",
    "..#####.#",
    "..#...#.#",
    "..#####.#",
    "........#",
  ],
  spark: [
    "....#....",
    "....#....",
    "...###...",
    "#########",
    "...###...",
    "....#....",
    "....#....",
  ],
  briefcase: [
    "...###...",
    "...#.#...",
    "#########",
    "#.......#",
    "####.####",
    "#.......#",
    "#########",
  ],
  mic: [
    "..###..",
    ".#####.",
    ".#####.",
    "#.###.#",
    "#.....#",
    ".#####.",
    "...#...",
  ],
} as const;

export type PixelIconName = keyof typeof ICONS;

export function PixelIcon({ name, className = "" }: { name: PixelIconName; className?: string }) {
  const rows = ICONS[name];
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${rows[0].length} ${rows.length}`}
      shapeRendering="crispEdges"
      fill="currentColor"
      className={`h-[0.875em] w-auto shrink-0 ${className}`}
    >
      {rows.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null,
        ),
      )}
    </svg>
  );
}
