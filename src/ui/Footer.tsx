import { Link } from "react-router-dom";
import {
  HiBriefcase,
  HiHeart,
  HiPaperAirplane,
  HiSparkles,
} from "react-icons/hi2";
import { HiMail } from "react-icons/hi";

const quickLinks = [
  { to: "/", label: "صفحه اصلی" },
  { to: "/recomended-projects", label: "تمام پروژه‌ها" },
  { to: "/order-project", label: "ثبت پروژه" },
  { to: "/auth", label: "ورود / ثبت‌نام" },
];

const freelancerLinks = [
  { to: "/sended-proposals", label: "درخواست‌های ارسال شده" },
  { to: "/favourit-projects", label: "پروژه‌های مورد علاقه" },
  { to: "/edit-profile", label: "ویرایش پروفایل" },
];

function Footer() {
  return (
    <footer className="mt-auto border-t border-secondery-200 bg-secondery-100/50">
      <div className="container xl:max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block group">
              <h2 className="text-xl font-extrabold text-primary-700 group-hover:text-primary-900 transition-colors">
                تخصص سازان
              </h2>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-secondery-500">
              پلتفرم اتصال کارفرما و فریلنسر برای یافتن بهترین متخصصان و
              پروژه‌های مناسب.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1.5 text-xs font-bold text-primary-800">
              <HiSparkles className="h-3.5 w-3.5" />
              <span>نسخه دمو</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-secondery-800">دسترسی سریع</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-secondery-500 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-secondery-800">فریلنسرها</h3>
            <ul className="space-y-2.5">
              {freelancerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-secondery-500 transition-colors hover:text-primary-700"
                  >
                    {link.to === "/favourit-projects" && (
                      <HiHeart className="h-4 w-4 shrink-0" />
                    )}
                    {link.to === "/sended-proposals" && (
                      <HiPaperAirplane className="h-4 w-4 shrink-0" />
                    )}
                    {link.to === "/edit-profile" && (
                      <HiBriefcase className="h-4 w-4 shrink-0" />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-secondery-800">تماس با ما</h3>
            <ul className="space-y-3 text-sm text-secondery-500">
              <li className="flex items-center gap-2">
                <HiMail className="h-4 w-4 shrink-0 text-primary-600" />
                <span>info@takhasosazan.ir</span>
              </li>
              <li>
                <p className="leading-relaxed">
                  برای پشتیبانی و همکاری با ما در تماس باشید.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-secondery-200 pt-6 text-center text-sm text-secondery-500 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} تخصص سازان. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
