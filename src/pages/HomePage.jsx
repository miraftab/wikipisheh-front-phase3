import Box from "@mui/material/Box";

import HomeCircleSearch from "../features/home/HomeCircleSearch.jsx";
import HomeHeader from "../features/home/HomeHeader.jsx";
import MainFooter from "../ui/MainFooter.jsx";
import WpPageMetaData from "../ui/WpPageMetaData.jsx";

function HomePage() {

  return (
    <Box width="100vw" height="100vh" overflow="hidden" display="flex" justifyContent="center" alignItems="center"
         position="relative">
      <WpPageMetaData title="صفحهٔ نخست" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها" name="صفحهٔ نخست"
                      canonicalUrl=""/>
      <HomeHeader/>
      {/* Transparent Box*/}
      <HomeCircleSearch/>
      <MainFooter fixed={true}/>
    </Box>
  );
}

export default HomePage;