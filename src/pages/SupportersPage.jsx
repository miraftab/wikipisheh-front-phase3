import Box from '@mui/material/Box';

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import Supporters from "../features/supporters/Supporters.jsx";
import PageTitle from "../ui/PageTitle.jsx";

function SupportersPage() {
  return (
    <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
      <WpPageMetaData title="حامیان ویکی‌پیشه" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها"
                      name="حامیان ویکی‌پیشه" canonicalUrl='supporters'/>

      <PageTitle pageTitle="حامیان ویکی‌پیشه"/>
      <Box p={{xs: "1rem", md: "2rem"}}>
        <Supporters/>
      </Box>
    </Box>
  );
}

export default SupportersPage;