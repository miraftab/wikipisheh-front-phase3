import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { digitsFaToEn } from "@persian-tools/persian-tools";

import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

import useRedirectAuthenticated from "./useRedirectAuthenticated.js";
import {
  getIsPassResetting,
  getIsRegistering,
  getUserEmail,
  setEmail,
  setTempToken,
  setVerifiedEmail
} from "./authSlice.js";
import LoginRegisterLink from "./LoginRegisterLink.jsx";
import WpTextField from "../../ui/WpTextField.jsx";
import WpButton from "../../ui/WpButton.jsx";
import CircledCenterContents from "../../ui/CircledCenterContents.jsx";
import { useRequestOTP } from "./useRequestOTP.js";
import { useVerifyOtp } from "./useVerifyOTP.js";
import { useVerifyPasswordReset } from "./useVerifyPasswordReset.js";
import { createFormErrorMessages } from "../../utils/createFormErrorMessages.js";
import FormFieldError from "../../ui/FormFieldError.jsx";
import CountdownTimer from "../../ui/CountdownTimer.jsx";

function VerifyEmailForm() {
  useRedirectAuthenticated();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes

  const [isRunning, setIsRunning] = useState(true);

  const isRegistering = useSelector(getIsRegistering);
  const isPassResetting = useSelector(getIsPassResetting);
  const userEmail = useSelector(getUserEmail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {verifyOtp, isLoadingVerifyOTP, verifyOTPError} = useVerifyOtp();
  const {verifyPassReset, isLoadingVerifyReset, verifyResetError} = useVerifyPasswordReset();
  const {registerOTP: otp, isLoadingRegister, registerError} = useRequestOTP();

  const apiError = verifyOTPError || verifyResetError || registerError || null;
  const isLoading = isLoadingVerifyOTP || isLoadingVerifyReset || isLoadingRegister;

  const redirectUrl = isRegistering ? "/get-name" : isPassResetting ? "/get-password" : "/";

  const {register, handleSubmit, reset, formState} = useForm();
  const {errors: formErrors} = formState;

  const fieldsError = createFormErrorMessages(apiError, formErrors, ["otp_code"]);

  const [timerKey, setTimerKey] = useState(0);

  const formTitle = isRegistering ? "ثبت‌نام" : "بازنشانی رمز عبور";
  const bottomBtn = isPassResetting ? "both" : "register";

  const circleHeader = <Typography variant="h5" color="common.white">{formTitle}</Typography>;
  const circleBottom = <LoginRegisterLink variant={bottomBtn}/>;


  function onFormSubmit(data) {
    const otp_code = digitsFaToEn(data.otp_code);
    if (isRegistering) {
      verifyOtp({email: userEmail, otp_code}, {
        onSuccess: () => {
          reset();
          dispatch(setVerifiedEmail({verifiedEmail: true}));
          navigate(redirectUrl);
        },
        onError: () => {
          dispatch(setVerifiedEmail({verifiedEmail: false}));
        }
      });
    } else if (isPassResetting) {
      verifyPassReset({email: userEmail, otp_code}, {
        onSuccess: (data) => {
          reset();
          dispatch(setVerifiedEmail({verifiedEmail: true}));
          dispatch(setTempToken(data));
          navigate(redirectUrl);
        },
        onError: () => {
          dispatch(setVerifiedEmail({verifiedEmail: false}));
        }
      });
    }
  }

  function onRequestOtp() {
    const data = {email: userEmail};
    otp(data, {
      onSuccess: () => {
        reset();
        dispatch(setEmail({email: userEmail}));
        dispatch(setVerifiedEmail({verifiedEmail: false}));
        setTimerKey((value) => value + 1);
      }
    });
  }

  return (
    <CircledCenterContents circleHeader={circleHeader} circleBottom={circleBottom}>
      <Box component="form" display="flex" flexDirection="column" width="80%" rowGap={2}
           onSubmit={handleSubmit(onFormSubmit)}>
        <Typography variant="body1" color="common.white" align="center">
          کد ارسال‌شده به نشانی ایمیل {userEmail} را وارد کنید.
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mb={1}>
          <ArrowRightAltRoundedIcon fontSize="small" sx={{color: "secondary.main"}}/>
          <Typography variant="body2" color="secondary.main">
            <MuiLink component={Link} to="/get-email" underline="hover" sx={{color: "secondary.main"}}>
              تغییر نشانی ایمیل
            </MuiLink>
          </Typography>
        </Box>

        <WpTextField
          dir="ltr"
          id="otp_code" required
          error={fieldsError.otp_code.length > 0}
          size="small" label="" variant="outlined" fullWidth placeholder="کد شش رقمی فعال‌سازی"
          disabled={isLoading}
          {...register("otp_code", {
            required: "کد فعال‌سازی را وارد کنید.",
            pattern: {
              value: /^[0-9۰-۹]*$/,
              message: "کد فقط شامل عدد است."
            },
            validate: (value) => value.length === 6 || "کد فعال‌سازی شش رقم دارد."
          })}/>

        <FormFieldError fieldErrors={fieldsError?.otp_code}/>
        <FormFieldError fieldErrors={fieldsError?.non_field_errors}/>

        <Box display="flex" flexDirection="row" justifyContent="space-betwen" alignItems="center" columnGap={1}>
          <WpButton variant="contained" size="small" fullWidth disableElevation onClick={onRequestOtp}
                    disabled={isRunning}>
            {isRunning
              ? <CountdownTimer expiryTimestamp={time} onTimerStatusChange={setIsRunning} key={timerKey}/>
              : "درخواست مجدد کد"}
          </WpButton>
          <WpButton variant="contained" size="small" fullWidth disableElevation type="submit" disabled={isLoading}>
            بررسی کد
          </WpButton>
        </Box>
      </Box>
    </CircledCenterContents>
  );
}

export default VerifyEmailForm;