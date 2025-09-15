import PropTypes from "prop-types";
import { Link } from "react-router";

import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";

function RenderRelatedWordDefinition({definition, relatedWords}) {
  if (!definition) return null;
  if (!definition.includes("**")) return definition;

  // Split the text by identifying words between double stars
  const parts = definition.split(/(\*\*.*?\*\*)/);

  // Process each part
  const processedParts = parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      // Remove the double stars
      const word = part.slice(2, -2);

      // Check if the word is in the relatedWordList
      const relatedWord = relatedWords.find(
        (related) => related.word === word
      );

      if (relatedWord) {
        // If the word is in the related list, return it as a link
        return (
          <MuiLink
            component={Link}
            key={index}
            to={`/words/${relatedWord.word_slug}`}
            // underline="always"
          >
            {word}
          </MuiLink>
        );
      }
    }

    // Return the part as plain text if not a match
    return <span key={index}>{part.replaceAll("**", "")}</span>;
  });

  return (
    <span>{processedParts}</span>
  );
}

RenderRelatedWordDefinition.propTypes = {
  definition: PropTypes.string,
  relatedWords: PropTypes.array,
};

export default RenderRelatedWordDefinition;