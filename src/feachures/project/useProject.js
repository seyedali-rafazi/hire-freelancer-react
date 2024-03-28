import { useQuery } from "@tanstack/react-query";
import { getprojectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

export default function useProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id ],
    queryFn: () => getprojectApi(id),
    retry: false,
  });
  const { project } = data || {};
  return { project, isLoading };
}
