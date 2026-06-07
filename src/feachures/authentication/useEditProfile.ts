import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfileApi } from "../../services/authService";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function useEditProfile() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: editProfile } = useMutation({
    mutationFn: editProfileApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { isLoading, editProfile };
}
