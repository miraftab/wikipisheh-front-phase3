import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import LoginHeader from "../features/auth/LoginHeader.jsx";
import MainFooter from "../ui/MainFooter.jsx";
import GetNameForm from "../features/auth/GetNameForm.jsx";

function GetNamePage() {
  const Offset = styled("div")(({theme}) => theme.mixins.toolbar);

  return (
    <Box width="100vw" height="100vh" overflow="hidden" display="flex" flexDirection="column"
         justifyContent="space-between"
         alignItems="space-between" position="relative">
      <WpPageMetaData title="ثبت‌نام" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها" name="ثبت‌نام" canonicalUrl='get-name'/>

      <LoginHeader/>
      <Offset/>

      <GetNameForm/>

      <MainFooter/>
    </Box>
  );
}

export default GetNamePage;