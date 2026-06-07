import { Link } from "react-router-dom";

function DashboardQuickActions({ actions }) {
  if (!actions?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 animate-fade-in-up">
      {actions.map((action) => (
        <Link
          key={action.path}
          to={action.path}
          className="quick-action-card group"
        >
          <action.icon className="w-5 h-5 text-primary-700 group-hover:text-white transition-colors" />
          <div>
            <p className="font-bold text-secondery-800 group-hover:text-white text-sm transition-colors">
              {action.label}
            </p>
            <p className="text-xs text-secondery-400 group-hover:text-white/80 transition-colors">
              {action.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DashboardQuickActions;
