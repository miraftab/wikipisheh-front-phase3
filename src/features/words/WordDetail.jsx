import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import { affixChip, categoriesChip } from "../../utils/wordUtils.js";
import WordSynonymsAntonymsLink from "./WordSynonymsAntonymsLink.jsx";
import WordDefinition from "./WordDefinition.jsx";
import WordImage from "./WordImage.jsx";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const renderWordDefinition = (word, definition) => {
  const antonyms = word.antonyms;
  const definition_text = definition.definition_text;
  const synonyms = definition.synonyms;
  const category = definition.categories;
  const relatedWords = definition.related_inline_words;
  const number = definition.definition_number;

  let showNumber = true;
  if (number === 1 && word.definitions?.length < 2) showNumber = false;

  if (definition_text || synonyms.length > 0 || antonyms.length > 0) {
    return (
      <WordDefinition
        key={number}
        antonyms={antonyms}
        definition={definition_text}
        synonyms={synonyms}
        category={category}
        relatedWords={relatedWords}
        number={number}
        showNumber={showNumber}
      />
    );
  }

  return null;
};
const renderWordImg = (word, number) => {
  const imgUrl = word[`img_${number}`];
  const imgAlt = word.word;
  const imgDesc = word[`img_${number}_desc`];
  const imgRef = word[`img_${number}_ref`];

  if (imgUrl) {
    return (
      <WordImage imgAlt={imgAlt} imgDesc={imgDesc} imgRef={imgRef} imgUrl={imgUrl} key={number}/>
    );
  }
  return null;
};

function WordDetail({word}) {

  return (
    <Box display="flex" flexDirection="column" rowGap={2} ml="2rem">

      {/* root & translation */}
      {(word.translation || word.root_word) &&
        <Box display="flex" flexDirection="row" justifyContent="flext-start" alignItems="center" columnGap={2}>
          {word.translation &&
            <Box display="flex" alignItems="center" columnGap={1}>
              <Chip label="وام‌واژه" size="small" sx={{bgcolor: "secondary.dark", color: "common.white", px: 0.5}}/>
              <Typography variant="body2">{word.translation}</Typography>
            </Box>}
          {word.root_word &&
            <Box display="flex" alignItems="center" columnGap={1}>
              <Chip label="ریشهٔ واژه" size="small" sx={{bgcolor: "secondary.dark", color: "common.white", px: 0.5}}/>
              <Typography variant="body2">{word.root_word}</Typography>
            </Box>}
        </Box>
      }

      {/* word category */}
      {word.category.length > 0 &&
        <Box>
          <Chip label={categoriesChip(word.category)} size="small" sx={{px: 0.5}}/>
        </Box>
      }

      {/* synonyms & antonyms */}
      {(word.synonyms.length > 0 || word.antonyms.length > 0) &&
        <Box>
          {word.synonyms.length > 0 &&
            <Box display="flex" alignItems="flex-start" columnGap={1} mt={1} ml={{xs: 0, sm: "1rem"}}>
              {(word?.definitions.length > 0)
                ? <Chip label="مترادف" size="small" sx={{bgcolor: "primary.main", color: "common.white", px: 0.5}}/>
                : <KeyboardBackspaceOutlinedIcon fontSize="small"/>
              }
              <WordSynonymsAntonymsLink wordsArray={word.synonyms}/>
            </Box>}
          {word.antonyms.length > 0 &&
            <Box display="flex" alignItems="flex-start" columnGap={1} mt={1} ml={{xs: 0, sm: "1rem"}}>
              <Chip label="متضاد" size="small" sx={{bgcolor: "secondary.main", color: "common.white", px: 0.5}}/>
              <WordSynonymsAntonymsLink wordsArray={word.antonyms}/>
            </Box>}
        </Box>
      }
      {/* word definitions */}
      {word?.definitions?.map((definition) => renderWordDefinition(word, definition))}

      {/* prefix, infix & suffix  */}
      {(word.suffix.length > 0 || word.infix.length > 0 || word.prefix.length > 0) &&
        <Box display="flex" flexDirection={{xs: "column", sm: "row"}} gap={2} mt={2} ml={{xs: 0, sm: "1rem"}}>
          {word.prefix.length > 0 &&
            <Box display="flex" columnGap={1} alignItems="center">
              <Chip label="پیشوند" size="small" sx={{bgcolor: "#008080", color: "common.white"}}/>
              <Typography variant="body2">{affixChip(word.prefix)}</Typography>
            </Box>
          }
          {word.infix.length > 0 &&
            <Box display="flex" columnGap={1} alignItems="center">
              <Chip label="بیناوند" size="small" sx={{bgcolor: "#bf8040", color: "common.white"}}/>
              <Typography variant="body2">{affixChip(word.infix)}</Typography>
            </Box>
          }
          {word.suffix.length > 0 &&
            <Box display="flex" columnGap={1} alignItems="center">
              <Chip label="پسوند" size="small" sx={{bgcolor: "#009999", color: "common.white"}}/>
              <Typography variant="body2">{affixChip(word.suffix)}</Typography>
            </Box>
          }
        </Box>
      }

      {/* Images */}
      <Box display="flex" columnGap={3} justifyContent="center" alignContent="center">
        {[1, 2, 3].map((number) => renderWordImg(word, number))}
      </Box>

    </Box>
  )
    ;
}

WordDetail.propTypes = {
  word: PropTypes.object,
};

export default WordDetail;