import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: removePproject, isLoading: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { removePproject, isDeleting };
}
