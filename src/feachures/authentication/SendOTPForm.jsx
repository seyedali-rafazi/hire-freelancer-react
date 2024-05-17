import React, { useState } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SendOTPForm() {
  const { isCreating, mutateAsync } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onCkickSubmit = async (data) => {
    try {
      const { user } = await mutateAsync(data);
      if (!user.isActive) return navigate("/complete-profile");
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/");
      if (user.role === "FREELANCER") return navigate("/");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen ">
      <h2 className="font-bold text-xl sm:text-3xl text-primary-900 text-center">
        ورود به تخصص سازان
      </h2>
      <form
        className="w-full max-w-96 flex justify-center items-center flex-col space-y-8"
        onSubmit={handleSubmit(onCkickSubmit)}
      >
        <TextField
          className="w-full min-h-12 p-2"
          placeholder="شماره تلفن:"
          errors={errors}
          name="phoneNumber"
          type="number"
          register={register}
          validationSchema={{
            required: "تلفن همراه ضروری است",
          }}
        />
        <TextField
          className="w-full min-h-12 p-2"
          placeholder=" رمز عبور:"
          errors={errors}
          name="password"
          type="فثطف"
          register={register}
          validationSchema={{
            required: "رمزعبور همراه ضروری است",
          }}
        />
        <div className="w-full">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary  w-full ">
              ثبت نام / ورود
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
