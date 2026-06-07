import { useQuery } from "@tanstack/react-query";
import { getAllProjectsApi } from "../services/projectService";

export default function useAllProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjectsApi,
  });
  const { projects = [] } = data || {};
  return { projects, isLoading };
}
