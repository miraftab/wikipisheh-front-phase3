import { useMutation } from "@tanstack/react-query";

import { verifyOTP as verifyOTPAPI } from "../../services/apiAuth.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useVerifyOtp() {
  const { mutate: verifyOtp, isPending: isLoadingVerifyOTP, error: verifyOTPError } = useMutation({
    mutationFn: ({ email, otp_code }) => verifyOTPAPI({ email, otp_code }),
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    onError: (error, variables) => {
      sendFrontendLog(`useVerifyOtp - ${variables.email} - ${error.message}`, "error");
      throw Error(error);
    }
  });

  return { verifyOtp, isLoadingVerifyOTP, verifyOTPError };
}