import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggelProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function useToggelProjectStatus() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: toggelProjectStatus } = useMutation({
    mutationFn: toggelProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { isUpdating, toggelProjectStatus };
}
