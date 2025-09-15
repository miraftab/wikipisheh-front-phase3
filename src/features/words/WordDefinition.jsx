import PropTypes from "prop-types";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

import { categoriesChip } from "../../utils/wordUtils.js";
import WordSynonymsAntonymsLink from "./WordSynonymsAntonymsLink.jsx";
import RenderRelatedWordDefinition from "./RenderRelatedWordDefinition.jsx";

function WordDefinition({category, definition, synonyms, antonyms, relatedWords, number, showNumber = true}) {

  return (
    <Box display="flex" flexDirection="column" rowGap={1} mt={2} width='100%'>
      {(definition || synonyms.length > 0 || antonyms.length > 0) &&
        <Box display="flex" columnGap={1} width='100%'>
          {showNumber &&
            <Typography variant="body" align="justify" sx={{whiteSpace: "pre-line"}}>
              {digitsEnToFa(number)}.
            </Typography>}
          <Typography variant="body" align="justify" sx={{whiteSpace: "pre-line",width: '100%'}}>
            {category.length > 0 && <Chip label={categoriesChip(category)} size="small" sx={{px: 0.5}}/>}
            {" "}
            {definition && definition !== "None" &&
              <RenderRelatedWordDefinition definition={definition} relatedWords={relatedWords}/>
            }
          </Typography>
        </Box>
      }

      {(synonyms.length > 0 || antonyms.length > 0) &&
        <Box>
          {synonyms.length > 0 &&
            <Box display="flex" alignItems="flex-start" columnGap={1} mt={1} ml={{xs: 0, sm: "1rem"}}>
              {(definition && definition !== "None")
                ? <Chip label="مترادف" size="small" sx={{bgcolor: "primary.main", color: "common.white", px: 0.5}}/>
                : <KeyboardBackspaceOutlinedIcon fontSize="small"/>
              }
              <WordSynonymsAntonymsLink wordsArray={synonyms}/>
            </Box>
          }
          {antonyms.length > 0 &&
            <Box display="flex" alignItems="flex-start" columnGap={1} mt={1} ml={{xs: 0, sm: "1rem"}}>
              <Chip label="متضاد" size="small" sx={{bgcolor: "secondary.main", color: "common.white", px: 0.5}}/>
              <WordSynonymsAntonymsLink wordsArray={antonyms}/>
            </Box>
          }
        </Box>
      }

    </Box>
  );
}

WordDefinition.propTypes = {
  category: PropTypes.array,
  definition: PropTypes.string,
  relatedWords: PropTypes.array,
  synonyms: PropTypes.array,
  antonyms: PropTypes.array,
  number: PropTypes.number,
  showNumber: PropTypes.bool,
};

export default WordDefinition;