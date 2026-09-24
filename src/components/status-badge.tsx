import { STATUS_LABEL, type ProjectStatus } from "@/lib/projects";

// Modeled on the SP's power LED: green = on (live), amber = charging (in progress),
// steady neutral = done (shipped). The label always carries the meaning; the dot is a cue.
const STATUS_STYLE: Record<ProjectStatus, { badge: string; dot: string }> = {
  live: {
    badge: "bg-live-bg text-live border-live-border",
    dot: "bg-live shadow-[0_0_6px_var(--color-live)]",
  },
  "in-progress": {
    badge: "bg-progress-bg text-progress border-progress-border",
    dot: "bg-progress animate-blink",
  },
  shipped: {
    badge: "bg-shipped-bg text-shipped border-shipped-border",
    dot: "bg-shipped",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = STATUS_STYLE[status];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded border px-2 py-0.5 font-pixel text-sm font-semibold tracking-wider ${style.badge}`}
    >
      <span aria-hidden className={`size-1.5 rounded-full ${style.dot}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}
