import type { ProductDimension } from "@/types";

/**
 * Schematic dimension diagram. Reads width/length, depth, and height from the
 * product's dimension list and labels a simple elevation + plan drawing.
 */
export function DimensionDiagram({
  dimensions,
}: {
  dimensions: ProductDimension[];
}) {
  const find = (keys: string[]) =>
    dimensions.find((d) =>
      keys.some((k) => d.label.toLowerCase().includes(k)),
    )?.value;

  const width = find(["width", "length"]) ?? "—";
  const depth = find(["depth"]) ?? "—";
  const height = find(["height"]) ?? "—";

  return (
    <svg
      viewBox="0 0 420 240"
      role="img"
      aria-label={`Dimensions: width ${width}, depth ${depth}, height ${height}`}
      className="w-full text-ink"
      fill="none"
    >
      {/* Elevation (front) */}
      <rect
        x="40"
        y="60"
        width="200"
        height="120"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-sage"
      />
      <rect x="40" y="150" width="200" height="30" rx="2" className="fill-chalk-deep" />
      {/* width dim line */}
      <line x1="40" y1="200" x2="240" y2="200" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <line x1="40" y1="194" x2="40" y2="206" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <line x1="240" y1="194" x2="240" y2="206" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <text x="140" y="222" textAnchor="middle" className="fill-ink-soft font-mono text-[11px]">
        {width}
      </text>
      {/* height dim line */}
      <line x1="22" y1="60" x2="22" y2="180" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <line x1="16" y1="60" x2="28" y2="60" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <line x1="16" y1="180" x2="28" y2="180" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <text
        x="14"
        y="120"
        textAnchor="middle"
        transform="rotate(-90 14 120)"
        className="fill-ink-soft font-mono text-[11px]"
      >
        {height}
      </text>

      {/* Plan (side / depth) */}
      <rect
        x="300"
        y="60"
        width="80"
        height="120"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-sage"
      />
      <line x1="300" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <line x1="300" y1="194" x2="300" y2="206" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <line x1="380" y1="194" x2="380" y2="206" stroke="currentColor" strokeWidth="1" className="text-brass" />
      <text x="340" y="222" textAnchor="middle" className="fill-ink-soft font-mono text-[11px]">
        {depth}
      </text>

      <text x="140" y="48" textAnchor="middle" className="fill-muted font-mono text-[10px] uppercase tracking-[0.2em]">
        Front
      </text>
      <text x="340" y="48" textAnchor="middle" className="fill-muted font-mono text-[10px] uppercase tracking-[0.2em]">
        Side
      </text>
    </svg>
  );
}
