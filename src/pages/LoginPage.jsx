import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import LoginForm from "../features/auth/LoginForm.jsx";
import MainFooter from "../ui/MainFooter.jsx";
import LoginHeader from "../features/auth/LoginHeader.jsx";

function LoginPage() {
  const Offset = styled("div")(({theme}) => theme.mixins.toolbar);

  return (
    <Box width="100vw" height="100vh" overflow="hidden" display="flex" flexDirection="column"
         justifyContent="space-between"
         alignItems="space-between" position="relative">
      <WpPageMetaData title="ورود" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها" name="ورود" canonicalUrl='login'/>

      <LoginHeader/>
      <Offset/>

      <LoginForm/>

      <MainFooter/>
    </Box>
  );
}

export default LoginPage;