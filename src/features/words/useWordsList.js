import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getWords } from "../../services/apiWords.js";
import useSetWordFromParams from "./useSetWordFromParams.js";

export default function useWordsList() {

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageNum = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
          searchedWord: word,
          searchedAlphabet: alphabet,
          searchedDefinition: definition,
          searchedField: field,
          searchedCategory: category,
          searchedPrefix: prefix,
          searchedInfix: infix,
          searchedSuffix: suffix
        } = useSetWordFromParams();

  const {isLoading, data: {words, count, fields_count, page, pages, page_size} = {}, error} = useQuery({
    queryFn: () => getWords(searchParams),
    queryKey: ["words", pageNum, searchParams, word, alphabet, definition, field, category, prefix, infix, suffix],
  });

  if (page < pages) {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set("page", pageNum + 1);
    queryClient.prefetchQuery({
        queryFn: () => getWords(nextSearchParams),
        queryKey: ["words", pageNum + 1, nextSearchParams, word, alphabet, definition, field, category, prefix, infix, suffix],
      },
    );
  }

  if (page > 1) {
    const prevSearchParams = new URLSearchParams(searchParams);
    prevSearchParams.set("page", pageNum - 1);
    queryClient.prefetchQuery({
        queryFn: () => getWords(prevSearchParams, page_size),
        queryKey: ["words", pageNum - 1, prevSearchParams, word, alphabet, definition, field, category, prefix, infix, suffix],
      },
    );
  }

  return {isLoading, words, count, fields_count, page, pages, page_size, error};
}