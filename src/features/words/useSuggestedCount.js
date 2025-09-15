import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getSuggestedCount } from "../../services/apiWords.js";

export default function useSuggestedCount() {
  const [searchParams] = useSearchParams();
  const suggestedWord = searchParams.get("word");

  const {isLoading, data: {word_count, fields_count} = {}, error} = useQuery({
    queryFn: () => getSuggestedCount(searchParams),
    queryKey: ["suggestedCount", suggestedWord, searchParams],
  });

  return {isLoading, word_count, fields_count, error};
}