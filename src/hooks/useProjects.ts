"use client";
import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";

export default function useProjects() {
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.toString() : "";
  const queryObject = search ? queryString.parse(search) : {};

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(search ? `?${search}` : ""),
  });
  const { projects = [] } = data || {};
  return { projects, isLoading };
}
