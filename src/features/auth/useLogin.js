import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";


import { login as loginApi } from "../../services/apiAuth.js";
import { BASE_URL } from "../../utils/constants.js";
import { setLogin } from "./authSlice.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useLogin() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: login, isPending: isLoading, error } = useMutation({
    mutationFn: ({ username, password }) => loginApi(username, password),
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
      dispatch(setLogin({ access: data['access'], refresh: data['refresh'], user }));
      toast.success("شما با موفقیت وارد شدید.");
    },
    onError: (error, variables) => {
      toast.error("نام کاربری یا رمز عبور اشتباه است!");
      sendFrontendLog(`useLogin - ${variables.userName} - ${error.message}`, 'error');
      throw Error(error);
    }
  });

  return { login, isLoading, error };
}