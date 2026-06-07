import React, { useEffect, useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";
import useUser from "./useUser";
import { getErrorMessage } from "../../utils/getErrorMessage";

function CompleteProfileForm() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user && user.isActive) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const response = await mutateAsync(data);
      const { user, message } = response.data.data;
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است.", { icon: "👏" });
        return;
      }
      if (user.role == "OWNER") {
        return navigate("/");
      }
      if (user.role == "FREELANCER") {
        return navigate("/");
      }
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };
  return (
    <div className="flex min-h-screen justify-center items-center p-8">
      <div className="w-full sm:max-w-sm space-y-8">
        <h1 className="font-bold  text-4xl flex justify-center">
          تکمیل اطلاعات
        </h1>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="textfield__input"
            label="نام و نام خانوادگی :"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />
          <TextField
            className="textfield__input"
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            register={register}
            watch={watch}
            errors={errors}
            config={{
              name: "role",
              validationSchema: {
                required: "ایمیل ضروری است",
              },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                {
                  value: "FREELANCER",
                  label: "فریلنسر",
                },
              ],
            }}
          />
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
