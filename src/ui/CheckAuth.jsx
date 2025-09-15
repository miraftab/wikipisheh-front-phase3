import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

import { getAccessToken, getRefreshToken } from "../features/auth/authSlice.js";
import { useRefreshToken } from "../features/auth/useRefreshToken.js";
import { useLogout } from "../features/auth/useLogout.js";

function CheckAuth({children}) {
  const accessToken = useSelector(getAccessToken);
  const refreshToken = useSelector(getRefreshToken);
  const {mutateRefreshToken} = useRefreshToken();
  const logout = useLogout("توکن امنیتی شما منقضی شده و از سامانه خارج شدید.");
  const currentTime = Math.floor(Date.now() / 1000);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && refreshToken) {
      const accessData = jwtDecode(accessToken);
      const refreshData = jwtDecode(refreshToken);

      if (refreshData["exp"] < currentTime) {
        logout();
      }

      if (accessData.exp < currentTime) {
        mutateRefreshToken(refreshToken, {
          onError: (error) => {
            logout();
            console.log("error:", error);
          }
        });
      }

    }
  }, [accessToken, currentTime, logout, mutateRefreshToken, navigate, refreshToken]);

  return children;
}

export default CheckAuth;