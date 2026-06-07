import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  HiShieldCheck,
  HiBriefcase,
  HiUserGroup,
  HiArrowLeft,
} from "react-icons/hi2";
import useLogin from "./useLogin";
import useUser from "./useUser";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

const ROLE_BUTTONS = [
  {
    role: "ADMIN",
    label: "ورود به عنوان ادمین",
    desc: "مدیریت کاربران، پروژه‌ها و درخواست‌ها",
    icon: HiShieldCheck,
    gradient: "from-violet-600 to-purple-700",
    shadow: "shadow-violet-300",
    path: "/admin",
  },
  {
    role: "OWNER",
    label: "ورود به عنوان کارفرما",
    desc: "ثبت پروژه و مدیریت درخواست‌های فریلنسرها",
    icon: HiBriefcase,
    gradient: "from-blue-600 to-primary-800",
    shadow: "shadow-primary-300",
    path: "/",
  },
  {
    role: "FREELANCER",
    label: "ورود به عنوان فریلنسر",
    desc: "مشاهده پروژه‌ها و ارسال پیشنهاد",
    icon: HiUserGroup,
    gradient: "from-emerald-600 to-teal-700",
    shadow: "shadow-emerald-300",
    path: "/",
  },
];

function AuthContainer() {
  const [view, setView] = useState("login");
  const [signupRole, setSignupRole] = useState("OWNER");
  const { loginAs, isLoggingIn, signup, isSigningUp } = useLogin();
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (user) {
    const path =
      user.role === "ADMIN"
        ? "/admin"
        : user.role === "OWNER"
          ? "/"
          : "/";
    navigate(path);
    return null;
  }

  const handleLogin = (role, path) => {
    loginAs(role, {
      onSuccess: () => navigate(path),
    });
  };

  const onSignup = (data) => {
    signup(
      { ...data, role: signupRole },
      {
        onSuccess: () => {
          reset();
          navigate("/");
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 auth-page-bg">
      <div className="w-full max-w-5xl animate-fade-in-up">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-secondery-900 mb-3">
            <span className="text-gradient">تخصص سازان</span>
          </h1>
          <p className="text-secondery-500 text-lg">
            پلتفرم اتصال کارفرما و فریلنسر — نسخه دمو
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 md:p-10">
          {view === "login" ? (
            <LoginView
              onLogin={handleLogin}
              isLoading={isLoggingIn}
              onSwitchSignup={() => setView("signup")}
            />
          ) : (
            <SignupView
              signupRole={signupRole}
              setSignupRole={setSignupRole}
              register={register}
              errors={errors}
              onSubmit={handleSubmit(onSignup)}
              isLoading={isSigningUp}
              onSwitchLogin={() => setView("login")}
            />
          )}
        </div>

        <p className="text-center text-secondery-400 text-sm mt-6 animate-fade-in">
          این یک پروژه آزمایشی است — بدون نیاز به بک‌اند، با یک کلیک وارد شوید
        </p>
      </div>
    </div>
  );
}

function LoginView({ onLogin, isLoading, onSwitchSignup }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-secondery-800 mb-2">
          انتخاب نقش برای ورود
        </h2>
        <p className="text-secondery-500">
          برای مشاهده قابلیت‌های هر بخش، یکی از نقش‌های زیر را انتخاب کنید
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ROLE_BUTTONS.map((btn, i) => (
          <button
            key={btn.role}
            disabled={isLoading}
            onClick={() => onLogin(btn.role, btn.path)}
            className={`role-btn group animate-fade-in-up stagger-${i + 1} bg-gradient-to-br ${btn.gradient} ${btn.shadow}`}
          >
            <btn.icon className="w-10 h-10 text-white/90 mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold text-white text-lg">{btn.label}</span>
            <span className="text-white/70 text-sm mt-2 leading-relaxed">
              {btn.desc}
            </span>
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}

      <div className="border-t border-secondery-200 pt-6 text-center">
        <p className="text-secondery-600 mb-3">حساب جدید می‌خواهید؟</p>
        <button onClick={onSwitchSignup} className="btn-signup">
          ثبت‌نام کارفرما / فریلنسر
        </button>
      </div>
    </div>
  );
}

function SignupView({
  signupRole,
  setSignupRole,
  register,
  errors,
  onSubmit,
  isLoading,
  onSwitchLogin,
}) {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <button
        onClick={onSwitchLogin}
        className="flex items-center gap-2 text-secondery-500 hover:text-primary-700 transition-colors"
      >
        <HiArrowLeft className="w-5 h-5" />
        <span>بازگشت به ورود</span>
      </button>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-secondery-800 mb-2">ثبت‌نام</h2>
        <p className="text-secondery-500">حساب کاربری جدید بسازید</p>
      </div>

      <div className="flex rounded-xl bg-secondery-100 p-1">
        <button
          type="button"
          onClick={() => setSignupRole("OWNER")}
          className={`flex-1 py-2.5 rounded-lg font-bold transition-all duration-300 ${
            signupRole === "OWNER"
              ? "bg-white text-primary-800 shadow-md"
              : "text-secondery-500"
          }`}
        >
          کارفرما
        </button>
        <button
          type="button"
          onClick={() => setSignupRole("FREELANCER")}
          className={`flex-1 py-2.5 rounded-lg font-bold transition-all duration-300 ${
            signupRole === "FREELANCER"
              ? "bg-white text-emerald-700 shadow-md"
              : "text-secondery-500"
          }`}
        >
          فریلنسر
        </button>
      </div>

      <form className="space-y-5" onSubmit={onSubmit}>
        <TextField
          className="textfield__input"
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          required
          validationSchema={{
            required: "نام الزامی است",
            minLength: { value: 3, message: "حداقل ۳ کاراکتر" },
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="ایمیل"
          name="email"
          register={register}
          required
          validationSchema={{
            required: "ایمیل الزامی است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
          required
          validationSchema={{
            required: "شماره موبایل الزامی است",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره موبایل نامعتبر است",
            },
          }}
          errors={errors}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full !py-3.5">
            ثبت‌نام به عنوان{" "}
            {signupRole === "OWNER" ? "کارفرما" : "فریلنسر"}
          </button>
        )}
      </form>
    </div>
  );
}

export default AuthContainer;
