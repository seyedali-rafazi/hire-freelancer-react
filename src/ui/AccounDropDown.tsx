import { HiOutlinePencil } from "react-icons/hi";
import Logout from "../feachures/authentication/Logout";
import useOutsideClick from "../hooks/useOutsideClick";
import { TbPaperclip, TbHome, TbReportSearch, TbLayoutDashboard } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const ROLE_LABELS = {
  USER: "کاربر",
  ADMIN: "ادمین",
  FREELANCER: "فریلنسر",
  OWNER: "کارفرما",
};

const MENU_BY_ROLE = {
  FREELANCER: [
    { path: "/freelancer/dashboard", icon: TbLayoutDashboard, text: "داشبورد فریلنسر" },
    { path: "/sended-proposals", icon: TbReportSearch, text: "درخواست‌های ارسالی" },
    { path: "/recomended-projects", icon: TbPaperclip, text: "پروژه‌های موجود" },
    { path: "/favourit-projects", icon: TbHome, text: "علاقه‌مندی‌ها" },
  ],
  OWNER: [
    { path: "/owner/dashboard", icon: TbLayoutDashboard, text: "داشبورد کارفرما" },
    { path: "/owner/projects", icon: TbReportSearch, text: "پروژه‌های من" },
    { path: "/order-project", icon: TbPaperclip, text: "ثبت پروژه جدید" },
  ],
  ADMIN: [
    { path: "/admin/dashboard", icon: TbLayoutDashboard, text: "پنل ادمین" },
    { path: "/admin/users", icon: TbReportSearch, text: "مدیریت کاربران" },
    { path: "/admin/projects", icon: TbPaperclip, text: "همه پروژه‌ها" },
  ],
  USER: [
    { path: "/recomended-projects", icon: TbPaperclip, text: "پروژه‌های موجود" },
    { path: "/favourit-projects", icon: TbHome, text: "علاقه‌مندی‌ها" },
  ],
};

function AccounDropDown({ open, onClose, user }) {
  const modalRef = useOutsideClick<HTMLUListElement>(onClose);
  const navigate = useNavigate();

  const menuItems = MENU_BY_ROLE[user.role] || MENU_BY_ROLE.USER;

  const handleNavigate = (path) => {
    onClose();
    navigate(path);
  };

  const handleEditProfile = () => {
    onClose();
    navigate("/edit-profile");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <ul
        ref={modalRef}
        className="account-dropdown left-4 top-16 py-2 px-2 fixed flex flex-col gap-1 w-64"
      >
        <li className="flex px-4 gap-3 items-center py-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/user.jpg"
            alt="عکس کاربر"
          />
          <div>
            <p className="font-bold text-secondery-900">{user.name}</p>
            <div className="flex items-center gap-1">
              <span className="text-sm text-secondery-500">
                {ROLE_LABELS[user.role] || "کاربر"}
              </span>
              <button onClick={handleEditProfile} aria-label="ویرایش پروفایل">
                <HiOutlinePencil className="w-4 h-4 text-secondery-500 hover:text-primary-700" />
              </button>
            </div>
          </div>
        </li>

        <li className="mx-2 border-t border-secondery-200" />

        {menuItems.map((item) => (
          <li key={item.path}>
            <button
              onClick={() => handleNavigate(item.path)}
              className="account-dropdown-btn"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.text}</span>
            </button>
          </li>
        ))}

        <li className="mx-2 border-t border-secondery-200 mt-1" />
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default AccounDropDown;
