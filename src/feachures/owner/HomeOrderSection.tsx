import { useNavigate } from "react-router-dom";
import { HiPlusCircle, HiClipboardDocumentList } from "react-icons/hi2";

function HomeOrderSection() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10">
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-secondery-800 leading-relaxed">
            پروژه‌های خود را به{" "}
            <span className="text-gradient">تخصص سازان</span> بسپارید!
          </h2>
          <p className="text-secondery-500 leading-relaxed">
            پروژه ثبت کنید، پیشنهادهای فریلنسرها را بررسی کنید و بهترین
            گزینه را انتخاب کنید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/order-project")}
              className="flex items-center justify-center gap-2 btn btn--primary !px-6 !py-3.5 hover:scale-105 transition-transform"
            >
              <HiPlusCircle className="w-5 h-5" />
              <span>ثبت پروژه جدید</span>
            </button>
            <button
              onClick={() => navigate("/owner/projects")}
              className="flex items-center justify-center gap-2 border-2 border-primary-300 text-primary-700 font-bold py-3.5 px-6 rounded-xl hover:bg-primary-50 transition-all"
            >
              <HiClipboardDocumentList className="w-5 h-5" />
              <span>پروژه‌های من</span>
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary-200/30 rounded-full blur-3xl" />
            <img
              src="/Ecommerce campaign-bro.svg"
              alt="ثبت پروژه"
              className="relative w-full max-w-sm drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeOrderSection;
