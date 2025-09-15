import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

import { useContactUs } from "./useContactUs.js";
import { getIsAuthenticated } from "../auth/authSlice.js";
import WpTextField from "../../ui/WpTextField.jsx";
import WpButton from "../../ui/WpButton.jsx";

function ContactUsForm() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  const {contactus, isLoading} = useContactUs();
  const {register, handleSubmit, reset} = useForm();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography align="center" gutterBottom>برای ارسال پیام، لطفاً ابتدا وارد وبگاه شوید.</Typography>
        <MuiLink component={Link} to="/login?next=/contact-us" underline="hover">ورود</MuiLink>
      </Box>
    );
  }

  function onFormSubmit(data) {
    contactus(data, {
      onSuccess: () => reset()
    });
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" my={2}>
      <Box component="form" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2}
           width="90%" maxWidth="600px" onSubmit={handleSubmit(onFormSubmit)}>
        <WpTextField
          id="title" required size="small" label="" variant="outlined" fullWidth placeholder="عنوان پیام"
          disabled={isLoading}
          {...register("title", {
            required: "درج عنوان پیام ضروری است.",
          })}/>

        <WpTextField
          id="subject" size="small" label="" variant="outlined" fullWidth placeholder="موضوع"
          disabled={isLoading}
          {...register("subject")}/>

        <WpTextField
          id="text" required multiline rows={8} size="small" label="" variant="outlined" fullWidth
          placeholder="متن پیام" disabled={isLoading}
          {...register("text", {
            required: "درج متن پیام ضروری است.",
          })}/>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center" columnGap={2}>
          <WpButton variant="contained" size="small" fullWidth disableElevation color="secondary"
                    onClick={() => navigate(-1)} disabled={isLoading}>
            بازگشت
          </WpButton>
          <WpButton variant="contained" size="small" fullWidth disableElevation type="submit" disabled={isLoading}>
            ارسال
          </WpButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUsForm;