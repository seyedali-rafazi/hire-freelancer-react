"use client";
import { useQuery } from "@tanstack/react-query";
import { getprojectApi } from "../../services/projectService";
import { useParams } from "next/navigation";

export default function useProject() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "";

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getprojectApi(id),
    retry: false,
    enabled: Boolean(id),
  });

  const { project, proposals = [] } = data || {};
  return { project, proposals, isLoading };
}
