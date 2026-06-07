import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function useAuth() {
  const queryClient = useQueryClient();

  const {
    isLoading: isCreating,
    mutate: createUser,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { isCreating, createUser, mutateAsync };
}
