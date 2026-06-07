import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../../services/proposalService";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["proposals"] });
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
  return { isCreating, createProposal };
}
