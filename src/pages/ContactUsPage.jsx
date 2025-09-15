import Box from "@mui/material/Box";

import WpPageMetaData from "../ui/WpPageMetaData.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import ContactUsForm from "../features/contactus/ContactUsForm.jsx";

function ContactUsPage() {
  return (
    <Box bgcolor="common.white" borderRadius="0 0 2rem 2rem" pt="2rem">
      <WpPageMetaData title="تماس با ما" description="ویکی‌پیشه، فرهنگ واژگان پیشه‌ها" name="تماس با ما"
                      canonicalUrl="contact-us"/>

      <PageTitle pageTitle="تماس با ما"/>
      <Box p={{xs: "1rem", md: "2rem"}}>
        <ContactUsForm/>
      </Box>
    </Box>
  );
}

export default ContactUsPage;