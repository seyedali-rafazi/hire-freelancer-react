import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["proposals"] });
      queryClient.invalidateQueries({ queryKey: ["project"] });
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { isUpdating, changeProposalStatus };
}
