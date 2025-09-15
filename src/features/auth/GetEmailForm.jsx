import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getIsPassResetting, getIsRegistering, setEmail, setVerifiedEmail } from "./authSlice.js";
import LoginRegisterLink from "./LoginRegisterLink.jsx";
import CircledCenterContents from "../../ui/CircledCenterContents.jsx";
import WpTextField from "../../ui/WpTextField.jsx";
import WpButton from "../../ui/WpButton.jsx";
import useRedirectAuthenticated from "./useRedirectAuthenticated.js";
import { useRequestOTP } from "./useRequestOTP.js";
import { useRequestPasswordReset } from "./useRequestPasswordReset.js";
import { createFormErrorMessages } from "../../utils/createFormErrorMessages.js";
import FormFieldError from "../../ui/FormFieldError.jsx";

function GetEmailForm() {
  useRedirectAuthenticated();

  const isRegistering = useSelector(getIsRegistering);
  const isPassResetting = useSelector(getIsPassResetting);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formTitle = isRegistering ? "ثبت‌نام" : "بازنشانی رمز عبور";
  const bottomBtn = isPassResetting ? "both" : "register";

  const circleHeader = <Typography variant="h5" color="common.white">{formTitle}</Typography>;
  const circleBottom = <LoginRegisterLink variant={bottomBtn}/>;

  const {registerOTP, isLoadingRegister, registerError} = useRequestOTP();
  const {passResetOTP, isLoadingPassReset, passResetError} = useRequestPasswordReset();
  const apiError = registerError || passResetError || null;

  const isLoading = isLoadingRegister || isLoadingPassReset;

  const {register, handleSubmit, reset, formState} = useForm();
  const {errors: formErrors} = formState;

  const fieldsError = createFormErrorMessages(apiError, formErrors, ["email"]);

  function onFormSubmit(data) {
    if (!data.email) return null;
    data.email = data.email.trim().toLowerCase();
    if (isRegistering) {
      registerOTP(data, {
        onSuccess: () => {
          reset();
          dispatch(setEmail(data.email));
          dispatch(setVerifiedEmail({verifiedEmail: false}));
          navigate("/verify-email");
        }
      });
    } else if (isPassResetting) {
      passResetOTP(data, {
        onSuccess: () => {
          reset();
          dispatch(setEmail(data.email));
          dispatch(setVerifiedEmail({verifiedEmail: false}));
          navigate("/verify-email");
        }
      });
    }
  }

  return (
    <CircledCenterContents circleHeader={circleHeader} circleBottom={circleBottom}>
      <Box component="form" display="flex" flexDirection="column" width="80%" rowGap={2}
           onSubmit={handleSubmit(onFormSubmit)}>
        <WpTextField
          dir="ltr"
          id="email" autoComplete="email" required
          error={fieldsError.email.length > 0}
          size="small" label="" variant="outlined" fullWidth placeholder="نشانی ایمیل"
          disabled={isLoading}
          {...register("email", {
            required: "ایمیل را وارد کنید.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "مقدار وارد شده قالب ایمیل را ندارد."
            }
          })}/>

        <FormFieldError fieldErrors={fieldsError?.email}/>
        <FormFieldError fieldErrors={fieldsError?.non_field_errors}/>

        <WpButton variant="contained" size="small" fullWidth disableElevation type="submit" disabled={isLoading}>
          ارسال
        </WpButton>
      </Box>
    </CircledCenterContents>
  );
}

export default GetEmailForm;