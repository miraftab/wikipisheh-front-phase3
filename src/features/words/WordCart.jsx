import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import { BASE_URL } from "../../utils/constants.js";
import { categoriesChip, SynonymsAntonyms } from "../../utils/wordUtils.js";
import { truncateText } from "../../utils/textUtils.js";

function WordCart({word}) {
  const navigate = useNavigate();

  return (
    <Card elevation={0} variant="outlined" sx={{borderRadius: "2rem", borderColor: "secondary.light", height: "100%"}}>
      <CardActionArea
        onClick={() => navigate(`/words/${word.word_slug}`)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          columnGap: 2,
          height: "100%",
          mr: 2
        }}>
        <CardContent sx={{display: "flex", flexDirection: "column", my: 1, "&.MuiCardContent-root": {py: 1}}}>
          <Typography variant="body2" color="secondary.main">{word.field_word.title}</Typography>
          <Typography variant="h6">{word.word}</Typography>
          <Typography variant="subtitle1" color="primary.main" align="right" dir="ltr">
            /{word.pronunciation}/
          </Typography>

          {(word.translation || word.root_word) &&
            <Box display="flex" flexDirection={{xs: "column", sm: "row"}} justifyContent="flext-start"
                 alignItems={{xs: "flex-start", sm: "center"}} gap={{xs: 1, sm: 2}}>
              {word.translation &&
                <Box display="flex" alignItems="center" columnGap={1}>
                  <Chip label="وام‌واژه" size="small" sx={{bgcolor: "secondary.dark", color: "common.white", px: 0.5}}/>
                  <Typography variant="body2">{word.translation}</Typography>
                </Box>}
              {word.root_word &&
                <Box display="flex" alignItems="center" columnGap={1}>
                  <Chip label="ریشهٔ واژه" size="small"
                        sx={{bgcolor: "secondary.dark", color: "common.white", px: 0.5}}/>
                  <Typography variant="body2">{word.root_word}</Typography>
                </Box>}
            </Box>}

          {word.category.length > 0 &&
            <Box mt={1}>
              <Chip label={categoriesChip(word.category)} size="small" sx={{px: 0.5}}/>
            </Box>
          }

          {(word.synonyms.length > 0 || word.antonyms.length > 0) &&
            <Box>
              {word.synonyms.length > 0 &&
                <Box display="flex" alignItems="center" columnGap={1} mt={1}>
                  <Chip label="مترادف" size="small" sx={{bgcolor: "primary.main", color: "common.white", px: 0.5}}/>
                  <Typography variant="body2">{SynonymsAntonyms(word.synonyms)}</Typography>
                </Box>}
              {word.antonyms.length > 0 &&
                <Box display="flex" alignItems="center" columnGap={1} mt={1}>
                  <Chip label="متضاد" size="small" sx={{bgcolor: "secondary.main", color: "common.white", px: 0.5}}/>
                  <Typography variant="body2">{SynonymsAntonyms(word.antonyms)}</Typography>
                </Box>}
            </Box>
          }

          <Typography sx={{mt: 1,}}>
            {word.definition &&
              <Chip component="span" label={categoriesChip(word.definition?.categories)} size="small" sx={{px: 0.5}}/>}
            {" "}
            {word.definition?.definition_text && word.definition?.definition_text !== "None" && truncateText(word.definition?.definition_text?.replaceAll("**", ""), 45)}
          </Typography>

        </CardContent>
        {word.img_1 &&
          <Box height="100%" display="flex" justifyContent="center" alignItems="center">
            <CardMedia component="img" image={`${BASE_URL}${word.img_1}`} alt={word.title}
                       sx={{maxHeight: "5rem", maxWidth: "5rem", width: "auto", height: "auto", mr: 2, my: 1}}/>
          </Box>
        }
      </CardActionArea>
    </Card>
  );
}

WordCart.propTypes = {
  word: PropTypes.object
};

export default WordCart;