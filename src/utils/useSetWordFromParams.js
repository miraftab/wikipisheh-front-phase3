import { useSearchParams } from "react-router";

function UseSetWordFromParams() {
  const [searchParams] = useSearchParams();
  const searchedWord = searchParams.get("word") || "";
  const searchedAlphabet = searchParams.get("alphabet") || "all";
  const searchedDefinition = searchParams.get("definition") || "";
  const searchedField = searchParams.get("field") || "all";
  const searchedCategory = searchParams.get("category") || "all";
  const searchedPrefix = searchParams.get("prefix") || "";
  const searchedInfix = searchParams.get("infix") || "";
  const searchedSuffix = searchParams.get("suffix") || "";

  return {
    searchedWord,
    searchedAlphabet,
    searchedDefinition,
    searchedField,
    searchedCategory,
    searchedPrefix,
    searchedInfix,
    searchedSuffix
  };
}

export default UseSetWordFromParams;