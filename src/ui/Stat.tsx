import { toPersianNumbers } from "../utils/formatNumber";

const colorMap = {
  primary: {
    bg: "bg-primary-100",
    text: "text-primary-700",
    ring: "ring-primary-200",
    gradient: "from-primary-600 to-primary-800",
  },
  green: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    ring: "ring-emerald-200",
    gradient: "from-emerald-500 to-teal-600",
  },
  yellow: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    ring: "ring-amber-200",
    gradient: "from-amber-500 to-orange-500",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-700",
    ring: "ring-violet-200",
    gradient: "from-violet-500 to-purple-600",
  },
};

function Stat({ icon, value, title, subtitle, color = "primary" }) {
  const c = colorMap[color] || colorMap.primary;

  return (
    <div className="stat-card group">
      <div
        className={`stat-card-icon bg-gradient-to-br ${c.gradient} text-white shadow-lg`}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <h5 className="font-bold text-secondery-500 text-sm">{title}</h5>
        <p className="text-2xl md:text-3xl font-black text-secondery-900 truncate">
          {typeof value === "number" ? toPersianNumbers(value) : value}
        </p>
        {subtitle && (
          <p className="text-xs text-secondery-400 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default Stat;
