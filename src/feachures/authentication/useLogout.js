import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });
  return { isPending, logout };
}


