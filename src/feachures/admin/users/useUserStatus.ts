import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/projectService";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export default function useUserStatus() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { isUpdating, changeUserStatus };
}
