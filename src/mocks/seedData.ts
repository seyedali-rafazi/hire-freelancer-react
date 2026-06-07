const now = new Date();
const daysAgo = (n) => new Date(now.getTime() - n * 86400000).toISOString();
const daysAhead = (n) => new Date(now.getTime() + n * 86400000).toISOString();

export const DEMO_ADMIN = {
  _id: "user-admin-1",
  name: "مدیر سیستم",
  email: "admin@takhasossazan.ir",
  phoneNumber: "09120000001",
  role: "ADMIN",
  status: 2,
  isActive: true,
};

export const DEMO_OWNER = {
  _id: "user-owner-1",
  name: "علی کارفرما",
  email: "owner@takhasossazan.ir",
  phoneNumber: "09234949876",
  role: "OWNER",
  status: 2,
  isActive: true,
};

export const DEMO_FREELANCER = {
  _id: "user-freelancer-1",
  name: "سارا فریلنسر",
  email: "freelancer@takhasossazan.ir",
  phoneNumber: "09352587903",
  role: "FREELANCER",
  status: 2,
  isActive: true,
};

export const SEED_CATEGORIES = [
  { _id: "cat-1", title: "طراحی وب", englishTitle: "web-design" },
  { _id: "cat-2", title: "برنامه‌نویسی", englishTitle: "programming" },
  { _id: "cat-3", title: "گرافیک", englishTitle: "graphic" },
  { _id: "cat-4", title: "سئو و مارکتینگ", englishTitle: "seo-marketing" },
  { _id: "cat-5", title: "موبایل", englishTitle: "mobile" },
];

export const SEED_USERS = [
  DEMO_ADMIN,
  DEMO_OWNER,
  DEMO_FREELANCER,
  {
    _id: "user-owner-2",
    name: "رضا محمدی",
    email: "reza@example.com",
    phoneNumber: "09121234567",
    role: "OWNER",
    status: 1,
    isActive: true,
  },
  {
    _id: "user-freelancer-2",
    name: "مینا احمدی",
    email: "mina@example.com",
    phoneNumber: "09359876543",
    role: "FREELANCER",
    status: 1,
    isActive: true,
  },
];

export const SEED_PROJECTS = [
  {
    _id: "proj-1",
    title: "طراحی وبسایت فروشگاهی مدرن",
    description:
      "نیاز به طراحی و پیاده‌سازی یک وبسایت فروشگاهی با رابط کاربری مدرن، سبد خرید، درگاه پرداخت و پنل مدیریت داریم. تجربه کار با React الزامی است.",
    budget: 25000000,
    category: SEED_CATEGORIES[0],
    deadline: daysAhead(30),
    tags: ["React", "Tailwind", "فروشگاه"],
    status: "OPEN",
    createdAt: daysAgo(2),
    owner: { _id: DEMO_OWNER._id, name: DEMO_OWNER.name },
    freelancer: null,
  },
  {
    _id: "proj-2",
    title: "توسعه اپلیکیشن موبایل اندروید",
    description:
      "ساخت اپلیکیشن اندروید برای مدیریت وظایف تیمی با قابلیت نوتیفیکیشن، چت داخلی و گزارش‌گیری. Kotlin یا Flutter ترجیح داده می‌شود.",
    budget: 45000000,
    category: SEED_CATEGORIES[4],
    deadline: daysAhead(45),
    tags: ["Android", "Kotlin", "Flutter"],
    status: "OPEN",
    createdAt: daysAgo(5),
    owner: { _id: DEMO_OWNER._id, name: DEMO_OWNER.name },
    freelancer: null,
  },
  {
    _id: "proj-3",
    title: "طراحی لوگو و هویت بصری برند",
    description:
      "برای استارتاپ فناوری نیاز به طراحی لوگو، پالت رنگ، تایپوگرافی و راهنمای برند داریم. سبک مینیمال و مدرن مدنظر است.",
    budget: 8000000,
    category: SEED_CATEGORIES[2],
    deadline: daysAhead(14),
    tags: ["لوگو", "برندینگ", "گرافیک"],
    status: "OPEN",
    createdAt: daysAgo(1),
    owner: { _id: DEMO_OWNER._id, name: DEMO_OWNER.name },
    freelancer: null,
  },
  {
    _id: "proj-4",
    title: "بهینه‌سازی سئو سایت شرکتی",
    description:
      "بهینه‌سازی کامل سئو برای سایت شرکتی شامل تحقیق کلمات کلیدی، بهینه‌سازی on-page، لینک‌سازی و گزارش ماهانه.",
    budget: 12000000,
    category: SEED_CATEGORIES[3],
    deadline: daysAhead(60),
    tags: ["SEO", "گوگل", "مارکتینگ"],
    status: "CLOSED",
    createdAt: daysAgo(10),
    owner: { _id: DEMO_OWNER._id, name: DEMO_OWNER.name },
    freelancer: { name: DEMO_FREELANCER.name },
  },
  {
    _id: "proj-5",
    title: "ساخت داشبورد مدیریتی React",
    description:
      "پیاده‌سازی داشبورد مدیریتی با نمودارها، جداول داده و فیلترهای پیشرفته. استفاده از Chart.js و React Query.",
    budget: 35000000,
    category: SEED_CATEGORIES[1],
    deadline: daysAhead(25),
    tags: ["React", "Dashboard", "Chart.js"],
    status: "OPEN",
    createdAt: daysAgo(3),
    owner: { _id: DEMO_OWNER._id, name: DEMO_OWNER.name },
    freelancer: null,
  },
];

export const SEED_PROPOSALS = [
  {
    _id: "prop-1",
    description:
      "با ۵ سال تجربه در طراحی وب، پروژه شما را با React و Tailwind در ۲۰ روز تحویل می‌دهم.",
    duration: 20,
    price: 22000000,
    status: 1,
    projectId: "proj-1",
    user: { _id: DEMO_FREELANCER._id, name: DEMO_FREELANCER.name },
    createdAt: daysAgo(1),
  },
  {
    _id: "prop-2",
    description:
      "توسعه اپلیکیشن اندروید با Flutter، شامل تست و انتشار در کافه‌بازار.",
    duration: 35,
    price: 40000000,
    status: 2,
    projectId: "proj-4",
    user: { _id: DEMO_FREELANCER._id, name: DEMO_FREELANCER.name },
    createdAt: daysAgo(8),
  },
  {
    _id: "prop-3",
    description:
      "طراحی هویت بصری کامل با ۳ پیشنهاد لوگو و فایل‌های قابل ویرایش.",
    duration: 10,
    price: 7500000,
    status: 0,
    projectId: "proj-3",
    user: { _id: DEMO_FREELANCER._id, name: DEMO_FREELANCER.name },
    createdAt: daysAgo(0),
  },
];
