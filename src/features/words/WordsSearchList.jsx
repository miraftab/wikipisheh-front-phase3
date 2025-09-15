import { useSearchParams } from "react-router";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";

import useWordsList from "./useWordsList.js";
import FullPageSpinner from "../../ui/FullPageSpinner.jsx";
import WordCart from "./WordCart.jsx";
import WpPagination from "../../ui/WpPagination.jsx";
import LetterCard from "./LetterCard.jsx";

function WordsSearchList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const theme = useTheme();
  const paginationSize = useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium";

  const {isLoading, words, count, fields_count, pages} = useWordsList();

  if (isLoading) {
    return <FullPageSpinner/>;
  }


  if (count === 0) {
    return (
      <Typography variant="body1" align="center" gutterBottom>واژه‌ای یافت نشد.</Typography>
    );
  }
  let first_letter = "";
  const cards = [];

  for (let i = 0; i < words.length; i++) {
    if (first_letter !== words[i].first_letter) {
      first_letter = words[i].first_letter;
      cards.push(
        <Grid size={12} key={first_letter}>
          <LetterCard letter={first_letter}/>
        </Grid>
      );
    }
    cards.push(
      <Grid size={{xs: 12, md: 6, lg: 4}} key={words[i].id}>
        <WordCart word={words[i]}/>
      </Grid>
    );
  }

  return (
    <Box>
      {pages > 1
        ? <Typography>
          {digitsEnToFa(addCommas(count))} واژه در {digitsEnToFa(fields_count)} پیشه
          (صفحهٔ {digitsEnToFa(page)} از {digitsEnToFa(pages)})
        </Typography>
        : <Typography>
          {digitsEnToFa(addCommas(count))} واژه در {digitsEnToFa(fields_count)} پیشه
        </Typography>
      }
      <Grid container spacing={2}>
        {cards.map((card) => card)}
      </Grid>

      {(pages > 1) &&
        <Box display="flex" justifyContent="center" alignItems="center" sx={{mt: 5, mb: 2, width: "100%"}}>
          <WpPagination page={page} showFirstButton showLastButton size={paginationSize} color="primary" count={pages}
                        onChange={(e, newPage) => {
                          searchParams.set("page", String(newPage));
                          setSearchParams(searchParams);
                        }}
          />
        </Box>
      }
    </Box>
  );
}

export default WordsSearchList;