import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: removePproject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { removePproject, isDeleting };
}
