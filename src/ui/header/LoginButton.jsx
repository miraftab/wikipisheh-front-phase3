import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from "@mui/material/Tooltip";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';

import WpButton from "../WpButton.jsx";
import { getIsAuthenticated, getUser, getUserFullName } from "../../features/auth/authSlice.js";
import { useLogout } from "../../features/auth/useLogout.js";

function LoginButton() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const user = useSelector(getUser);
  const fullName = useSelector(getUserFullName)

  const logout = useLogout();

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    logout();
    setAnchorEl(null);
  }

  return (
    <Box>
      {isAuthenticated
        ? <>
          <Tooltip title="پنل کاربری">
            <IconButton
              id="user-avater"
              onClick={handleMenuOpen}
              size="small"
              // sx={{border: "1px solid #009788"}}
              aria-controls={openMenu ? "user-avatar" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar src={user.profileImage} alt={user.fullName}
                      sx={{width: "2.2rem", height: "2.2rem", border: "1px solid", borderColor: "primary.main"}}/>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="user-menu"
            open={openMenu}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            slotProps={{
              paper: {
                elevation: 0, sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32, height: 32, ml: -0.5, mr: 1,
                  },
                  "&::before": {
                    content: "\"\"",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }
            }}
            transformOrigin={{horizontal: "left", vertical: "top"}}
            anchorOrigin={{horizontal: "left", vertical: "bottom"}}
          >
            <MenuItem onClick={handleMenuClose} disabled>
              <ListItemIcon>
                <PersonRoundedIcon/>
              </ListItemIcon>
              {fullName}
            </MenuItem>
            <MenuItem onClick={handleMenuClose} disabled>
              <ListItemIcon>
                <SpaceDashboardRoundedIcon fontSize="small"/>
              </ListItemIcon>
              میزکار
            </MenuItem>
            <MenuItem onClick={handleMenuClose} disabled>
              <ListItemIcon>
                <MessageRoundedIcon fontSize="small"/>
              </ListItemIcon>
              پیام‌ها
            </MenuItem>
            <Divider/>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutRoundedIcon fontSize="small"/>
              </ListItemIcon>
              خروج
            </MenuItem>
          </Menu>
        </>
        :
        <WpButton variant="contained" size="small" disableElevation onClick={() => navigate("/login")}>
          ورود | ثبت‌نام
        </WpButton>
      }
    </Box>
  );
}

export default LoginButton;