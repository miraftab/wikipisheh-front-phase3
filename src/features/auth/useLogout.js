import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { setLogout } from "./authSlice.js";

export function useLogout(message = "شما از سامانه خارج شدید!") {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  return useCallback(() => {
    // Remove all queries from react-query
    queryClient.removeQueries();

    // Dispatch the logout action to update the Redux state
    dispatch(setLogout());

    // Navigate to the login page
    // navigate("/login");

    // Show success toast notification
    toast.success(message, {
      style: {
        border: "1px solid #006f76",
        padding: "16px",
        color: "#006f76",
      },
      iconTheme: {
        primary: "#0288d1",
        secondary: "#ffffff",
      },
    });
  }, [queryClient, dispatch, message]);
}