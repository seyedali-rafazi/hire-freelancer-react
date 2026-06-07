import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useOwnerProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects", queryObject],
    queryFn: () => getOwnerProjectsApi(search),
  });

  const { projects = [] } = data ?? {}; // Use nullish coalescing operator
  return { projects, isLoading };
}
