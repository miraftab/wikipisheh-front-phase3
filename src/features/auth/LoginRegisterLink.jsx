import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { setPassResetting, setRegistering } from "./authSlice.js";

function LoginRegisterLink({variant = ""}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (variant === "login") {
    return (
      <Box display="flex" justifyContent="center">
        <Button variant="text" size="large" disableRipple sx={{color: "common.white", m: 0, p: 0}}
                onClick={() => {
                  dispatch(setRegistering(true));
                  dispatch(setPassResetting(false));
                  navigate("/get-email");
                }}>
          ثبت‌نام
        </Button>
      </Box>
    );
  } else if (variant === "register") {
    return (
      <Box display="flex" justifyContent="center">
        <Button variant="text" size="large" disableRipple sx={{color: "common.white", m: 0, p: 0}}
                onClick={() => {
                  dispatch(setRegistering(false));
                  dispatch(setPassResetting(false));
                  navigate("/login");
                }}>
          ورود
        </Button>
      </Box>
    );
  } else {
    return (
      <Box display="flex" justifyContent="center">
        <Button variant="text" size="large" disableRipple sx={{color: "common.white", m: 0, p: 0}}
                onClick={() => {
                  dispatch(setRegistering(false));
                  dispatch(setPassResetting(false));
                  navigate("/login");
                }}>
          ورود
        </Button>
        <Divider orientation="vertical" flexItem sx={{borderColor: "common.white", mr: 1}}/>
        <Button variant="text" size="large" disableRipple sx={{color: "common.white", m: 0, p: 0}}
                onClick={() => {
                  dispatch(setRegistering(true));
                  dispatch(setPassResetting(false));
                  navigate("/get-email");
                }}>
          ثبت‌نام
        </Button>
      </Box>
    );
  }
}

LoginRegisterLink.propTypes = {
  variant: PropTypes.string,
};

export default LoginRegisterLink;