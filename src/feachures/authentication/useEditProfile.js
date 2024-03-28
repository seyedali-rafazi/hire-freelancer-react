import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfileApi } from "../../services/authService";
import toast from "react-hot-toast";

export default function useEditProfile() {
  const queryClient = useQueryClient();

  const { isPending, mutate: editProfile } = useMutation({
    mutationFn: editProfileApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isPending, editProfile };
}
