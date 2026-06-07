import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAsApi, signupApi } from "../../services/authService";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function useLogin() {
  const queryClient = useQueryClient();

  const { isLoading: isLoggingIn, mutate: loginAs } = useMutation({
    mutationFn: loginAsApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err, "خطا در ورود"));
    },
  });

  const { isLoading: isSigningUp, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err, "خطا در ثبت‌نام"));
    },
  });

  return { isLoggingIn, loginAs, isSigningUp, signup };
}
