"use client";
import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";

export default function useProposals() {
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.toString() : "";
  const queryObject = search ? queryString.parse(search) : {};

  const { data, isLoading } = useQuery({
    queryKey: ["proposals", queryObject],
    queryFn: () => getProposalsApi(search ? `?${search}` : ""),
    retry: false,
  });

  const { proposals = [] } = data || {};

  return { proposals, isLoading };
}
