import React, { useState } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

function SendOTPForm() {
  const { createUser, isCreating } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onCkickSubmit = (data) => {
    createUser(data, {
      onSuccess: () => {
        reset();
        if (user) {
          if (user.role == "USER") {
            navigate("/complete-profile");
          }
        }
        navigate("/");
      },
    });
  };
  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen ">
      <h2 className="font-bold text-3xl text-primary-900">
        ورود به تخصص سازان
      </h2>
      <form
        className="w-96 flex justify-center items-center flex-col space-y-8"
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
