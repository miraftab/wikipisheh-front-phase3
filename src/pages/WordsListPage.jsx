import { useEffect } from "react";
import { useNavigate } from "react-router";

import Box from "@mui/material/Box";

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import WordsSearchList from "../features/words/WordsSearchList.jsx";
import { createSearchPageTitle } from "../utils/textUtils.js";

function WordsListPage() {
  const searchPageTitle = createSearchPageTitle();
  const pageTitle = `نتایج جستجو برای ${searchPageTitle}`;
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchPageTitle) {
      navigate("/");
    }
  }, [navigate, searchPageTitle]);

  return (
    <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
      <WpPageMetaData title={pageTitle} description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها" name={pageTitle} canonicalUrl='words'/>

      <PageTitle pageTitle={pageTitle}/>
      <Box p={{xs: "1rem", md: "2rem"}}>
        <WordsSearchList/>
      </Box>
    </Box>
  );
}

export default WordsListPage;