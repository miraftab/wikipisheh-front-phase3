import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { getIsAuthenticated } from "./authSlice.js";

function UseRedirectAuthenticated() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      toast.error("شما قبلاً وارد سامانه شده‌اید!");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
}

export default UseRedirectAuthenticated;