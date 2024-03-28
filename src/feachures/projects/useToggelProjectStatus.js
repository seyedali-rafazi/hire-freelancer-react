import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggelProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggelProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggelProjectStatus } = useMutation({
    mutationFn: toggelProjectStatusApi,
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
  return { isUpdating, toggelProjectStatus };
}
