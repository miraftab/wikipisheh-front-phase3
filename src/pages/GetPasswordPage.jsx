import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import LoginHeader from "../features/auth/LoginHeader.jsx";
import MainFooter from "../ui/MainFooter.jsx";
import GetPasswordForm from "../features/auth/GetPasswordForm.jsx";

function GetPasswordPage() {
  const Offset = styled("div")(({theme}) => theme.mixins.toolbar);

  return (
    <Box width="100vw" height="100vh" overflow="hidden" display="flex" flexDirection="column"
         justifyContent="space-between"
         alignItems="space-between" position="relative">
      <WpPageMetaData title="بازنشانی رمز عبور" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها"
                      name="بازنشانی رمز عبور" canonicalUrl='get-password'/>

      <LoginHeader/>
      <Offset/>

      <GetPasswordForm/>

      <MainFooter/>
    </Box>
  );
}

export default GetPasswordPage;