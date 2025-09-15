import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useRedirectAuthenticated from "./useRedirectAuthenticated.js";
import LoginRegisterLink from "./LoginRegisterLink.jsx";
import WpTextField from "../../ui/WpTextField.jsx";
import FormFieldError from "../../ui/FormFieldError.jsx";
import WpButton from "../../ui/WpButton.jsx";
import CircledCenterContents from "../../ui/CircledCenterContents.jsx";
import { createFormErrorMessages } from "../../utils/createFormErrorMessages.js";
import { setFirstName, setLastName } from "./authSlice.js";

function GetNameForm() {
  useRedirectAuthenticated();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {register, handleSubmit, formState} = useForm();
  const {errors: formErrors} = formState;

  const fieldsError = createFormErrorMessages(null, formErrors, ["first_name", "last_name"]);

  const circleHeader = <Typography variant="h5" color="common.white">ثبت‌نام</Typography>;
  const circleBottom = <LoginRegisterLink variant="both"/>;

  function onFormSubmit(data) {
    dispatch(setFirstName(data.first_name))
    dispatch(setLastName(data.last_name))
    navigate('/get-password')
  }

  return (
    <CircledCenterContents circleHeader={circleHeader} circleBottom={circleBottom}>
      <Box component="form" display="flex" flexDirection="column" width="80%" rowGap={2}
           onSubmit={handleSubmit(onFormSubmit)}>
        <Typography variant="body1" color="common.white" align="center">
          نام و نام خانوادگی خود را وارد کنید.
        </Typography>

        <WpTextField
          dir="rtl"
          id="first_name" autoComplete="first-name" required
          size="small" label="" variant="outlined" fullWidth placeholder="نام"
          // disabled={isLoading}
          {...register("first_name", {
            required: "نام خود را وارد کنید.",
            minLength: {
              value: 3,
              message: "نام حداقل باید سه نویسه باشد."
            }
          })}/>
        <FormFieldError fieldErrors={fieldsError?.first_name}/>

        <WpTextField
          dir="rtl"
          id="last_name" autoComplete="last-name" required
          size="small" label="" variant="outlined" fullWidth placeholder="نام خانوادگی"
          // disabled={isLoading}
          {...register("last_name", {
            required: "نام خانوادگی خود را وارد کنید.",
            minLength: {
              value: 3,
              message: "نام خانوادگی حداقل باید سه نویسه باشد."
            }
          })}/>
        <FormFieldError fieldErrors={fieldsError?.last_name}/>
        <FormFieldError fieldErrors={fieldsError?.non_field_errors}/>

        <WpButton variant="contained" size="small" fullWidth disableElevation type="submit">
          ارسال
        </WpButton>
      </Box>
    </CircledCenterContents>
  );
}

export default GetNameForm;