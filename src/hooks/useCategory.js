import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/CategoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryApi,
  });

  // [...id , title , onTitle ,....]
  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
