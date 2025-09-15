import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import WpTextField from "../../ui/WpTextField.jsx";
import { getIsAuthenticated, setPassResetting, setRegistering } from "./authSlice.js";
import WpButton from "../../ui/WpButton.jsx";
import { useLogin } from "./useLogin.js";
import CircledCenterContents from "../../ui/CircledCenterContents.jsx";
import LoginRegisterLink from "./LoginRegisterLink.jsx";

function LoginForm() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") || "/";

  const dispatch = useDispatch();

  const {login, isLoading, error} = useLogin();
  const {register, handleSubmit} = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  function onLoginSubmit(data) {
    const username = data.username.trim().toLowerCase();
    const password = data.password;
    if (!data.username || !data.password) return null;
    login({username, password}, {
      onSuccess: () => navigate(next),
    });
  }

  const circleHeader = <Typography variant="h5" color="common.white">ورود</Typography>;
  const circleBottom = <LoginRegisterLink variant="login"/>;

  return (
    <CircledCenterContents circleHeader={circleHeader} circleBottom={circleBottom}>
      <Box component="form" display="flex" flexDirection="column" width="80%" rowGap={2}
           onSubmit={handleSubmit(onLoginSubmit)}>
        <WpTextField
          dir="ltr"
          id="username" autoComplete="email" required error={error !== null}
          size="small" label="" variant="outlined" fullWidth placeholder="نشانی ایمیل"
          disabled={isLoading}
          {...register("username")}/>

        <WpTextField
          dir="ltr"
          id="password"
          type={showPassword ? "text" : "password"} autoComplete="current-password"
          size="small" label="" variant="outlined" fullWidth placeholder="رمز عبور"
          required error={error !== null}
          disabled={isLoading}
          {...register("password")}
          slotProps={{
            input: {
              endAdornment: (<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffOutlinedIcon/> : <VisibilityOutlinedIcon/>}
                </IconButton>
              </InputAdornment>)
            }
          }}/>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="text" size="small" disableRipple sx={{color: "common.white", m: 0, p: 0, mr: 1}}
                  onClick={() => {
                    dispatch(setRegistering(false));
                    dispatch(setPassResetting(true));
                    navigate("/get-email");
                  }}>
            بازنشانی رمز عبور
          </Button>
        </Box>

        <WpButton variant="contained" size="small" fullWidth disableElevation type="submit" disabled={isLoading}>
          ورود
        </WpButton>
      </Box>
    </CircledCenterContents>
  );
}

export default LoginForm;