import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import { tokenRefresh } from "../../services/apiAuth.js";
import { BASE_URL } from "../../utils/constants.js";
import { setLogin } from "./authSlice.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useRefreshToken() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: mutateRefreshToken, isPending: isLoading } = useMutation({
    mutationFn: (rToken) => tokenRefresh(rToken),
    onSuccess: (data) => {
      const userData = jwtDecode(data["access"]);
      const user = {
        userId: userData.user_id,
        fullName: userData.full_name,
        firstName: userData.first_name,
        lastName: userData.last_name,
        userName: userData.username,
        email: userData.email,
        group: userData.group,
        profileImage: `${BASE_URL}${userData.profile_img}`
      };
      queryClient.setQueryData(["user"], user);
      dispatch(setLogin({ access: data["access"], refresh: data["refresh"], user }));
    },
    onError: (error) => {
      sendFrontendLog(`useRefreshToken - ${error.message}`, 'warning');
      throw new Error(error);
    }
  });
  return { mutateRefreshToken, isLoading };
}