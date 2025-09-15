import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


import useRedirectAuthenticated from "./useRedirectAuthenticated.js";
import {
  getIsPassResetting,
  getIsRegistering,
  getTempToken,
  getUserEmail, getUserFirstName, getUserLastName,
  getVerifiedUserEmail,
  setPassResetting,
  setRegistering
} from "./authSlice.js";
import { useResetPassword } from "./useResetPassword.js";
import { createFormErrorMessages } from "../../utils/createFormErrorMessages.js";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import LoginRegisterLink from "./LoginRegisterLink.jsx";
import Box from "@mui/material/Box";
import WpTextField from "../../ui/WpTextField.jsx";
import FormFieldError from "../../ui/FormFieldError.jsx";
import WpButton from "../../ui/WpButton.jsx";
import CircledCenterContents from "../../ui/CircledCenterContents.jsx";
import { useRegister } from "./useRegister.js";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function GetPasswordForm() {
  useRedirectAuthenticated();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isRegistering = useSelector(getIsRegistering);
  const isPassResetting = useSelector(getIsPassResetting);
  const userEmail = useSelector(getUserEmail);
  const userFirstName = useSelector(getUserFirstName);
  const userLastName = useSelector(getUserLastName);
  const verifiedUserEmail = useSelector(getVerifiedUserEmail);
  const token = useSelector(getTempToken);


  useEffect(() => {
    if (!userEmail && !verifiedUserEmail) {
      toast.error("لطفاً ابتدا ایمیل خودتان را وارد کنید.");
      dispatch(setRegistering(false));
      dispatch(setPassResetting(true));
      navigate("/get-email");
    }
  }, [dispatch, navigate, userEmail, verifiedUserEmail]);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const {resetPassword, isLoading: isLoadingReset, error: resetPassError} = useResetPassword();
  const {registerUser, isLoading: isLoadingRegister, error: registerError} = useRegister();

  const apiError = resetPassError || registerError || null;
  const isLoading = isLoadingReset || isLoadingRegister;

  const redirectUrl = isPassResetting ? "/login" : "/";

  const {register, handleSubmit, reset, getValues, formState} = useForm();
  const {errors: formErrors} = formState;

  const fieldsError = createFormErrorMessages(apiError, formErrors, ["password", "password2"]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const formTitle = isRegistering ? "ثبت‌نام" : "بازنشانی رمز عبور";
  const bottomBtn = isPassResetting ? "both" : "register";

  const circleHeader = <Typography variant="h5" color="common.white">{formTitle}</Typography>;
  const circleBottom = <LoginRegisterLink variant={bottomBtn}/>;

  function onFormSubmit(data) {
    if (isPassResetting) {
      resetPassword({temp_token: token, new_password: data.password, confirm_password: data.password2}, {
        onSuccess: () => {
          reset();
          toast.success("رمز عبور با موفقیت بازنشانی شد.");
          navigate(redirectUrl);
        },
        onError: () => {
          toast.error("تغییر رمز عبور انجام نشد!");
        }
      });
    } else if (isRegistering) {
      data = {...data, email: userEmail, first_name: userFirstName, last_name: userLastName}
      registerUser(data, {
        onSuccess: () => {
          reset();
        }
      });
    }
  }

  return (
    <CircledCenterContents circleHeader={circleHeader} circleBottom={circleBottom}>
      <Box component="form" display="flex" flexDirection="column" width="80%" rowGap={2}
           onSubmit={handleSubmit(onFormSubmit)}>
        <Typography variant="body1" color="common.white" align="center">
          رمز عبور خود را انتخاب کنید.
        </Typography>

        <WpTextField
          dir="ltr"
          id="password"
          error={fieldsError.password.length > 0}
          size="small" label="" variant="outlined" fullWidth required placeholder="رمز عبور"
          disabled={isLoading}
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          {...register("password", {
            required: "وارد کردن رمز عبور ضروری است.",
            minLength: {
              value: 8,
              message: "رمز عبور حداقل باید هشت کاراکتر باشد."
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "رمز عبور باید شامل حداقل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک کاراکتر خاص باشد."
            }
          })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <FormFieldError fieldErrors={fieldsError?.password}/>

        <WpTextField
          dir="ltr"
          id="password2"
          error={fieldsError.password2.length > 0}
          size="small" label="" variant="outlined" fullWidth required placeholder="تکرار رمز عبور"
          disabled={isLoading}
          type={showPassword2 ? "text" : "password"}
          autoComplete="new-password"
          {...register("password2", {
            required: "وارد کردن تکرار رمز عبور ضروری است.",
            validate: (value) => getValues().password === value || "رمز عبور مطابقت ندارد."
          })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword2 ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <FormFieldError fieldErrors={fieldsError?.password2}/>
        <FormFieldError fieldErrors={fieldsError?.non_field_errors}/>

        <WpButton variant="contained" size="small" fullWidth disableElevation type="submit" disabled={isLoading}>
          ارسال
        </WpButton>
      </Box>
    </CircledCenterContents>
  );
}

export default GetPasswordForm;