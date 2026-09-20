import { STATUS_LABEL, type ProjectStatus } from "@/lib/projects";

const STATUS_STYLE: Record<ProjectStatus, string> = {
  live: "bg-live-bg text-live ring-live-border",
  "in-progress": "bg-progress-bg text-progress ring-progress-border",
  shipped: "bg-shipped-bg text-shipped ring-shipped-border",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${STATUS_STYLE[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
