import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";
import Loading from "../../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const { createProposal, isCreating } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const newProposal = { ...data, projectId };
    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
        reset;
      },
    });
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          name="price"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full ">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
