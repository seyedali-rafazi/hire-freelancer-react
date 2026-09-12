"use client";
import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";

export default function useOwnerProjects() {
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.toString() : "";
  const queryObject = search ? queryString.parse(search) : {};

  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects", queryObject],
    queryFn: () => getOwnerProjectsApi(search ? `?${search}` : ""),
  });

  const { projects = [] } = data ?? {};
  return { projects, isLoading };
}
