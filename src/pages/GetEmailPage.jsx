import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { getIsRegistering } from "../features/auth/authSlice.js";
import LoginHeader from "../features/auth/LoginHeader.jsx";
import GetEmailForm from "../features/auth/GetEmailForm.jsx";
import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import MainFooter from "../ui/MainFooter.jsx";

function GetEmailPage() {
  const isRegistering = useSelector(getIsRegistering);

  const pageTitle = isRegistering ? "ثبت‌نام - دریافت ایمیل" : "بازنشانی رمز عبور - دریافت ایمیل";

  const Offset = styled("div")(({theme}) => theme.mixins.toolbar);

  return (
    <Box width="100vw" height="100vh" overflow="hidden" display="flex" flexDirection="column"
         justifyContent="space-between"
         alignItems="space-between" position="relative">
      <WpPageMetaData title={pageTitle} description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها" name={pageTitle}
                      canonicalUrl="get-email"/>

      <LoginHeader/>
      <Offset/>

      <GetEmailForm/>

      <MainFooter/>
    </Box>
  );
}

export default GetEmailPage;