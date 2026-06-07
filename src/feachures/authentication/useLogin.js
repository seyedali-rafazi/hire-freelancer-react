import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAsApi, signupApi } from "../../services/authService";
import toast from "react-hot-toast";

export default function useLogin() {
  const queryClient = useQueryClient();

  const { isPending: isLoggingIn, mutate: loginAs } = useMutation({
    mutationFn: loginAsApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
    onError: (err) => {
      toast.error(err?.message || "خطا در ورود");
    },
  });

  const { isPending: isSigningUp, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
    onError: (err) => {
      toast.error(err?.message || "خطا در ثبت‌نام");
    },
  });

  return { isLoggingIn, loginAs, isSigningUp, signup };
}
