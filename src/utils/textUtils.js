import UseSetWordFromParams from "./useSetWordFromParams.js";

export const truncateText = (text, maxChars) => {
  if (!text) return "";
  return text.length > maxChars ? text.slice(0, maxChars) + " …" : text;
};

export const joinWithCommaAndVa = (strings) => {
  // Filter out empty strings
  const filteredStrings = strings.filter(str => str.trim() !== "");

  // If there are less than 2 strings, just join them
  if (filteredStrings.length <= 1) {
    return filteredStrings.join("");
  }

  // Separate all but the last string and join them with commas
  const allButLast = filteredStrings.slice(0, -1).join("، ");

  // Add the last string with "و"
  return `${allButLast} و ${filteredStrings[filteredStrings.length - 1]}`;
};

export const createSearchPageTitle = () => {
  const {
          searchedWord,
          searchedAlphabet,
          searchedDefinition,
          searchedField,
          searchedCategory,
          searchedPrefix,
          searchedInfix,
          searchedSuffix
        } = UseSetWordFromParams();
  const word = searchedWord ? `«${searchedWord}»` : "";
  const definition = searchedDefinition ? `«${searchedDefinition}»` : "";
  const alphabet = searchedAlphabet !== "all" ? `«${searchedAlphabet}»` : "";
  const field = searchedField !== "all" ? `«${searchedField}»` : "";
  const category = searchedCategory !== "all" ? `«${searchedCategory}»` : "";
  const prefix = searchedPrefix ? `پیشوند «${searchedPrefix}»` : "";
  const infix = searchedInfix ? `پیشوند «${searchedInfix}»` : "";
  const suffix = searchedSuffix ? `پیشوند «${searchedSuffix}»` : "";
  let res = joinWithCommaAndVa([word, definition, prefix, infix, suffix])
  if (alphabet) res = res + ` با حرف آغازین ${alphabet}`;
  if (field) res = res + ` در پیشهٔ ${field}`;
  if (category) res = res + ` با مقولهٔ ${category}`;

  return  res;
};