import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import WordDetail from "../features/words/WordDetail.jsx";
import { useWord } from "../features/words/useWord.js";
import FullPageSpinner from "../ui/FullPageSpinner.jsx";
import WordPageTitle from "../features/words/WordPageTitle.jsx";
import Typography from "@mui/material/Typography";

function WordDetailPage() {
  const {isLoading, word, error} = useWord();

  if (isLoading) {
    return (
      <Backdrop open>
        <FullPageSpinner/>
      </Backdrop>);
  }

  if (error) {
    return (
      <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
        <Box p="4rem">
          <Typography align="center" variant="body1">
            مدخل یافت نشد.
          </Typography>
        </Box>
      </Box>
    );
  }

  const pageTitle = word.word;
  const pageDescription = `${word.field_word.title} - ${word.word} - ${word.pronunciation}`;

  return (
    <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
      <WpPageMetaData title={pageTitle} description={pageDescription} name={pageTitle}
                      canonicalUrl={`words/${word.word}`}/>

      <WordPageTitle wordField={word.field_word.title} wordTitle={pageTitle} wordPronunciation={word.pronunciation}/>
      <Box p="1rem 2rem 2rem">
        <WordDetail word={word}/>
      </Box>
    </Box>
  );
}

export default WordDetailPage;