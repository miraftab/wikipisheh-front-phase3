import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordAPI } from "../../services/apiAuth.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useResetPassword() {
  const {mutate: resetPassword, isLoading, error} = useMutation({
    mutationFn: ({temp_token, new_password, confirm_password}) => resetPasswordAPI({
      temp_token,
      new_password,
      confirm_password
    }),
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    onError: (error, variables) => {
      sendFrontendLog(`useResetPassword - ${variables.temp_token} - ${error.message}`, "error");
      throw Error(error);
    }
  });
  return {resetPassword, isLoading, error};
}