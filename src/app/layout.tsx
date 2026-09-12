import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "تخصص سازان | سامانه فریلنسری و برون‌سپاری پروژه",
    template: "%s | تخصص سازان",
  },
  description:
    "پلتفرم اتصال کارفرما و فریلنسر برای برون‌سپاری و انجام پروژه‌های تخصصی در حوزه‌های برنامه‌نویسی، طراحی، دیجیتال مارکتینگ و محتوا.",
  keywords: [
    "فریلنسر",
    "کارفرما",
    "برون سپاری پروژه",
    "استخدام فریلنسر",
    "تخصص سازان",
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
