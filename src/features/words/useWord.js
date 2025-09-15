import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getWord } from "../../services/apiWords.js";

export function useWord() {
  const wordSlug = useParams();

  const {isLoading, data: word, error} = useQuery({
    queryFn: () => getWord(wordSlug),
    queryKey: ["word", wordSlug.wordSlug, wordSlug],
    retry: false
  });
  return {isLoading, word, error};
}