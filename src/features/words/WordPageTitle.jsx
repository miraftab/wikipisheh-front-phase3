import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";

function WordPageTitle({wordField, wordTitle, wordPronunciation}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const fieldVariant = matches ? "body2" : "subtitle1";
  const wordVariant = matches ? "body2" : "h6";
  const pronunciationVariant = matches ? "body2" : "subtitle2";

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <Box bgcolor="secondary.main" color="common.white" height={{xs: "2rem", sm: "3rem"}} display="flex"
           alignItems="center" py={1} pr={1} pl={{xs: ".5rem", md: "4rem"}}>
        <Typography variant={fieldVariant} color="common.white">
          {wordField}
        </Typography>
      </Box>

      <Box bgcolor="primary.main" color="common.white" height={{xs: "2rem", sm: "3rem"}} display="flex"
           alignItems="center" borderRadius={{xs: "0 1rem 1rem 0", sm:"0 2rem 2rem 0"}} px={{xs: ".5rem", sm: "1rem"}} columnGap={1}>
        <Typography variant={wordVariant} color="common.white">
          {wordTitle}
        </Typography>
        <Typography variant={pronunciationVariant} color="common.white" dir="ltr">
          /{wordPronunciation}/
        </Typography>
      </Box>
    </Box>
  );
}

WordPageTitle.propTypes = {
  wordField: PropTypes.string,
  wordTitle: PropTypes.string,
  wordPronunciation: PropTypes.string,
};

export default WordPageTitle;