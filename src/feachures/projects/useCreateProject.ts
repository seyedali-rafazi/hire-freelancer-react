import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { isCreating, createProject };
}
