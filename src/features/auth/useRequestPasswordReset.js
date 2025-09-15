import { useMutation } from "@tanstack/react-query";

import { requestPasswordReset } from "../../services/apiAuth.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useRequestPasswordReset() {
  const {mutate: passResetOTP, isPending: isLoadingPassReset, error: passResetError} = useMutation({
    mutationFn: (email) => requestPasswordReset(email),
    // onSuccess: (data) => {
    //   console.log("useRequestPasswordReset");
    //   console.log(data);
    // },
    onError: (error, variables) => {
      sendFrontendLog(`useRequestPasswordReset - ${variables.email} - ${error.message}`, "error");
      throw Error(error);
    }
  });

  return {passResetOTP, isLoadingPassReset, passResetError};
}