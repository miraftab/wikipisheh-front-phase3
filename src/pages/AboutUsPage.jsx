import { useLocation } from "react-router";

import Box from "@mui/material/Box";

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import AboutUs from "../features/aboutus/AboutUs.jsx";

function AboutUsPage() {
  const location = useLocation();
  const {enAbout} = location.state || {enAbout: false};

  return (
    <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
      <WpPageMetaData title="دربارهٔ ویکی‌پیشه" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها"
                      name="دربارهٔ ویکی‌پیشه" canonicalUrl="about-us"/>

      <PageTitle pageTitle="دربارهٔ ویکی‌پیشه"/>
      <Box p={{xs: "1rem", md: "2rem"}}>
        <AboutUs enAbout={enAbout}/>
      </Box>
    </Box>
  );
}

export default AboutUsPage;