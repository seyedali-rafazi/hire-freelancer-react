import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import useEditProfile from "./useEditProfile";
import TextField from "../../ui/TextField";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../ui/HomeHeader";
import { HiOutlinePencil, HiPhone, HiMail, HiUser } from "react-icons/hi";

const ROLE_LABELS = {
  OWNER: { label: "کارفرما", class: "bg-blue-100 text-blue-700" },
  FREELANCER: { label: "فریلنسر", class: "bg-emerald-100 text-emerald-700" },
  ADMIN: { label: "ادمین", class: "bg-violet-100 text-violet-700" },
  USER: { label: "کاربر", class: "bg-secondery-100 text-secondery-600" },
};

const STATUS_LABELS = {
  0: { label: "رد شده", class: "text-red-600" },
  1: { label: "در انتظار تایید", class: "text-amber-600" },
  2: { label: "تایید شده", class: "text-emerald-600" },
};

function EditProfile() {
  const { isPending, editProfile } = useEditProfile();
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({ name: user.name, email: user.email });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    editProfile(data, { onSuccess: () => navigate("/") });
  };

  if (isLoading) return <Loading />;

  const roleInfo = ROLE_LABELS[user?.role] || ROLE_LABELS.USER;
  const statusInfo = STATUS_LABELS[user?.status] || STATUS_LABELS[2];

  return (
    <div className="min-h-screen bg-secondery-0">
      <HomeHeader />
      <div className="container max-w-2xl mx-auto px-4 py-10 animate-fade-in-up">
        <div className="profile-card mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <img
                src="/user.jpg"
                alt=""
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-primary-100"
              />
              <div className="absolute -bottom-2 -left-2 bg-primary-800 text-white p-1.5 rounded-lg">
                <HiOutlinePencil className="w-4 h-4" />
              </div>
            </div>
            <div className="text-center sm:text-right flex-1">
              <h1 className="text-2xl font-black text-secondery-900 mb-2">
                {user?.name}
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${roleInfo.class}`}
                >
                  {roleInfo.label}
                </span>
                <span className={`text-xs font-bold ${statusInfo.class}`}>
                  {statusInfo.label}
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm text-secondery-500">
                <span className="flex items-center justify-center sm:justify-start gap-2">
                  <HiMail className="w-4 h-4" />
                  {user?.email}
                </span>
                <span className="flex items-center justify-center sm:justify-start gap-2">
                  <HiPhone className="w-4 h-4" />
                  {user?.phoneNumber}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h2 className="font-bold text-lg text-secondery-800 mb-6 flex items-center gap-2">
            <HiUser className="w-5 h-5 text-primary-700" />
            ویرایش اطلاعات
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full !py-3.5">
                ذخیره تغییرات
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
