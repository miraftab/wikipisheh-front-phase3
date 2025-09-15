import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { getIsRegistering } from "../features/auth/authSlice.js";
import LoginHeader from "../features/auth/LoginHeader.jsx";
import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import MainFooter from "../ui/MainFooter.jsx";
import VerifyEmailForm from "../features/auth/VerifyEmailForm.jsx";

function VerifyEmailPage() {
  const isRegistering = useSelector(getIsRegistering);

  const pageTitle = isRegistering ? "ثبت‌نام - تایید ایمیل" : "بازنشانی رمز عبور - تایید ایمیل";

  const Offset = styled("div")(({theme}) => theme.mixins.toolbar);

  return (
    <Box width="100vw" height="100vh" overflow="hidden" display="flex" flexDirection="column"
         justifyContent="space-between"
         alignItems="space-between" position="relative">
      <WpPageMetaData title={pageTitle} description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها" name={pageTitle}
                      canonicalUrl="verify-email"/>

      <LoginHeader/>
      <Offset/>

      <VerifyEmailForm/>

      <MainFooter/>
    </Box>
  );
}

export default VerifyEmailPage;