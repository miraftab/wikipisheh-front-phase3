import Box from "@mui/material/Box";

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import SuggestedWordForm from "../features/words/SuggestedWordForm.jsx";

function SuggestedWordFormPage() {
  return (
    <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
      <WpPageMetaData title="پیشنهاد واژه" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها"
                      name="پیشنهاد واژه" canonicalUrl='suggestedword'/>

      <PageTitle pageTitle="فرم پیشنهاد واژه"/>
      <Box p={{xs: "1rem", md: "2rem"}}>
        <SuggestedWordForm/>
      </Box>
    </Box>
  );
}

export default SuggestedWordFormPage;