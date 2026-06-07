import useUser from "../feachures/authentication/useUser";
import HomeHeader from "../ui/HomeHeader";
import FreelancerHomeSection from "../feachures/freelancer/FreelancerHomeSection";
import OwnerHomerSection from "../feachures/owner/OwnerHomerSection";
import { HiSparkles } from "react-icons/hi2";

function Home() {
  const { user } = useUser();
  const isOwner = user?.role === "OWNER";
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="bg-secondery-0 min-h-screen">
      <HomeHeader />

      {!user && (
        <section className="hero-section animate-fade-in">
          <div className="container sm:max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
              <HiSparkles className="w-4 h-4" />
              <span>پلتفرم دمو — بدون نیاز به ثبت‌نام واقعی</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-secondery-900 mb-4 leading-tight">
              بهترین <span className="text-gradient">فریلنسرها</span> را
              <br />
              برای پروژه‌تان پیدا کنید
            </h1>
            <p className="text-secondery-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              تخصص سازان پلتفرمی برای اتصال کارفرما و فریلنسر است. برای تست،
              با یک کلیک وارد شوید.
            </p>
            <a
              href="/auth"
              className="inline-block btn btn--primary !px-8 !py-4 text-lg hover:scale-105 transition-transform"
            >
              شروع کنید — ورود دمو
            </a>
          </div>
        </section>
      )}

      {isAdmin && (
        <section className="container sm:max-w-6xl mx-auto px-4 py-8 animate-fade-in">
          <div className="glass-card rounded-2xl p-6 text-center">
            <p className="text-secondery-600">
              شما به عنوان <strong>ادمین</strong> وارد شده‌اید. از منوی
              حساب کاربری به پنل مدیریت بروید.
            </p>
            <a
              href="/admin"
              className="inline-block mt-4 btn btn--primary !px-6"
            >
              رفتن به پنل ادمین
            </a>
          </div>
        </section>
      )}

      <div className="container sm:max-w-6xl mx-auto px-4 pb-16">
        {isOwner ? <OwnerHomerSection /> : <FreelancerHomeSection user={user} />}
      </div>
    </div>
  );
}

export default Home;
