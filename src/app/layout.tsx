import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "کاریار | سامانه کاریابی و ثبت آگهی‌های شغلی",
    template: "%s | کاریار",
  },
  description:
    "پلتفرم هوشمند کاریابی و استخدام متخصصان در سراسر ایران. جستجوی موقعیت‌های شغلی روی نقشه، استخدام نیروی متخصص و ثبت رایگان آگهی شغلی.",
  keywords: [
    "کاریابی",
    "استخدام",
    "آگهی شغلی",
    "فرصت‌های شغلی",
    "کارجو",
    "کاریار",
    "استخدام برنامه‌نویس",
  ],
  icons: {
    icon: "/default-project-photo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
