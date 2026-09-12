import type { Metadata } from "next";
import Home from "@/pages/Home";

export const metadata: Metadata = {
  title: "تخصص سازان | پلتفرم اتصال کارفرما و فریلنسر",
  description: "بهترین فریلنسرها را برای پروژه‌تان پیدا کنید. پلتفرم فریلنسری تخصص سازان.",
};

export default function HomePage() {
  return <Home />;
}
