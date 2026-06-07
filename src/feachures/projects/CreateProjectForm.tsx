import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategory";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";
import type { Project } from "../../types";

interface CreateProjectFormProps {
  onClose: () => void;
  projectToEdit?: Partial<Project>;
}

interface ProjectFormValues {
  title: string;
  description: string;
  budget: number;
  category: string;
}

function CreateProjectForm({
  onClose,
  projectToEdit = {},
}: CreateProjectFormProps) {
  const { _id: editId, title, description, budget, category, deadline, tags: prevTags } =
    projectToEdit;
  const isEditSession = Boolean(editId);

  const editValue: Partial<ProjectFormValues> = isEditSession
    ? {
        title,
        description,
        budget,
        category: category?._id,
      }
    : {};

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ProjectFormValues>({ defaultValues: editValue as ProjectFormValues });
  const [tags, setTags] = useState<string[]>(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data: ProjectFormValues) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession && editId) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form
        className="space-y-8 bg-secondery-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          className="textfield__input"
          label="عنوان"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "نوضیحات ضروری است",
            minLength: {
              value: 30,
              message: " عنوان باید حداقل ۳۰ کاراکتر باشد ",
            },
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="بودجه پروژه"
          name="budget"
          type="number"
          register={register}
          required
          validationSchema={{
            required: " بودجه ضروری است ",
          }}
          errors={errors}
        />
        <RHFSelect
          register={register}
          label="دسته بندی"
          name="category"
          required
          options={categories}
        />
        <div>
          <label className="mb-2 block text-secondery-700">تگ</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <DatePickerField date={date} setDate={setDate} label="ددلاین" />
        <div className="!mt-8">
          {isCreating || isEditing ? (
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

export default CreateProjectForm;
