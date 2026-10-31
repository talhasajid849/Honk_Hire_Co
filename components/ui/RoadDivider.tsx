// A short road where a car, a ute and a scooter drive past, before the footer. Decorative only.
const COLORS = { car: "#f1eee7", ute: "#2b4bff", scooter: "#a3b2ff" };

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g className="rd-wheel">
      <circle cx={cx} cy={cy} r={r} fill="#10142e" />
      <circle cx={cx} cy={cy} r={r / 2} fill="#9fb0bf" />
      <path d={`M${cx} ${cy - r / 2}v${r}M${cx - r / 2} ${cy}h${r}`} stroke="#10142e" strokeWidth="2" />
    </g>
  );
}

export default function RoadDivider() {
  return (
    <div aria-hidden className="relative h-40 overflow-hidden bg-[var(--ink)]">
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[#1b2150]" />
      <div className="rd-dash absolute inset-x-0 bottom-9 h-1.5" />

      <svg className="rd-drive absolute bottom-10 w-[240px]" style={{ animationDuration: "11s" }} viewBox="0 0 260 100">
        <path d="M10 70 L22 52 Q28 44 40 42 L78 40 L100 18 Q106 12 116 12 L168 12 Q178 12 186 20 L204 42 L238 48 Q252 52 252 64 L252 74 L10 74 Z" fill={COLORS.car} />
        <path d="M92 40 L108 22 L128 22 L128 40 Z M136 40 L136 22 L168 22 L184 40 Z" fill="#cfe9f5" />
        <Wheel cx={64} cy={76} r={17} />
        <Wheel cx={202} cy={76} r={17} />
      </svg>
      <svg className="rd-drive absolute bottom-16 w-[260px]" style={{ animationDuration: "16s", animationDelay: "-7s" }} viewBox="0 0 300 104">
        <path d="M8 76 L8 54 Q8 48 16 48 L40 46 L62 22 Q68 16 78 16 L150 16 Q158 16 162 24 L176 46 L292 46 L292 76 Z" fill={COLORS.ute} />
        <path d="M70 44 L84 24 L108 24 L108 44 Z M116 44 L116 24 L148 24 L162 44 Z" fill="#cfe9f5" />
        <Wheel cx={62} cy={78} r={19} />
        <Wheel cx={236} cy={78} r={19} />
      </svg>
      <svg className="rd-drive absolute bottom-3 w-[170px]" style={{ animationDuration: "8s", animationDelay: "-3s" }} viewBox="0 0 200 110">
        <path d="M44 60 Q60 40 96 44 L132 46 Q148 30 150 12 L162 12 Q160 40 146 56 L150 78 L56 78 Z" fill={COLORS.scooter} />
        <rect x="62" y="38" width="62" height="10" rx="5" fill="#10142e" />
        <path d="M148 14 L170 10" stroke="#10142e" strokeWidth="5" strokeLinecap="round" />
        <Wheel cx={48} cy={84} r={17} />
        <Wheel cx={156} cy={84} r={17} />
      </svg>
    </div>
  );
}
