import useUser from "../feachures/authentication/useUser";

const ROLE_CONFIG = {
  OWNER: {
    title: "داشبورد کارفرما",
    subtitle: "پروژه‌ها و درخواست‌های دریافتی را مدیریت کنید",
    badge: "کارفرما",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  FREELANCER: {
    title: "داشبورد فریلنسر",
    subtitle: "درخواست‌ها و درآمد خود را پیگیری کنید",
    badge: "فریلنسر",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  ADMIN: {
    title: "داشبورد ادمین",
    subtitle: "مدیریت کاربران، پروژه‌ها و درخواست‌ها",
    badge: "ادمین",
    badgeClass: "bg-violet-100 text-violet-700",
  },
};

function DashboardHeader({ role }) {
  const { user } = useUser();
  const config = ROLE_CONFIG[role] || ROLE_CONFIG.OWNER;

  return (
    <div className="dashboard-header animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-black text-2xl md:text-3xl text-secondery-900">
              {config.title}
            </h1>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${config.badgeClass}`}
            >
              {config.badge}
            </span>
          </div>
          <p className="text-secondery-500">{config.subtitle}</p>
        </div>
        {user && (
          <div className="flex items-center gap-3 bg-secondery-0 border border-secondery-200 rounded-xl px-4 py-3">
            <img
              src="/user.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-secondery-800 text-sm">{user.name}</p>
              <p className="text-xs text-secondery-400">{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHeader;
