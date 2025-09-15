import { useMutation } from "@tanstack/react-query";

import { verifyPasswordReset as verifyPassResetAPI } from "../../services/apiAuth.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useVerifyPasswordReset() {
  const { mutate: verifyPassReset, isPending: isLoadingVerifyReset, error: verifyResetError } = useMutation({
    mutationFn: ({ email, otp_code }) => verifyPassResetAPI({ email, otp_code }),
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    onError: (error, variables) => {
      sendFrontendLog(`useVerifyPasswordReset - ${variables.email} - ${error.message}`, "error");
      throw Error(error);
    }
  });

  return { verifyPassReset, isLoadingVerifyReset, verifyResetError };
}