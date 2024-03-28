import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProposals() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["proposals" , queryObject],
    queryFn: () => getProposalsApi(search),
    retry: false,
  });

  const { proposals } = data || {};

  return { proposals, isLoading };
}
