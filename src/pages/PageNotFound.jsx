import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import PageTitle from "../ui/PageTitle.jsx";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PageNotFound() {
  return (
    <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
      <WpPageMetaData title="صفحه یافت نشد!" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها"
                      name="صفحه یافت نشد!" canonicalUrl='notfound'/>

      <PageTitle pageTitle="صفحه یافت نشد!"/>
      <Box p={{xs: "1rem", md: "2rem"}}>
        <Typography variant="body1" align="center" gutterBottom>صفحهٔ مورد نظر شما را نیافتیم. 🙃</Typography>
        <br/>
        <Typography variant="body1" align="center" gutterBottom>
          برای ادامه یک واژه جدید را جستجو کنید یا با کلیک روی لوگوی ویکی‌پیشه به صفحهٔ اول بازگردید!
        </Typography>
      </Box>
    </Box>
  );
}

export default PageNotFound;