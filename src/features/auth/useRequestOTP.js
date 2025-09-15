import { useMutation } from "@tanstack/react-query";

import { requestOTP } from "../../services/apiAuth.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useRequestOTP() {
  const {mutate: registerOTP, isPending: isLoadingRegister, error: registerError} = useMutation({
    mutationFn: (email) => requestOTP(email),
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    onError: (error, variables) => {
      sendFrontendLog(`useRequestOTP - ${variables.email} - ${error.message}`, "error");
      throw Error(error);
    }
  });

  return {registerOTP, isLoadingRegister, registerError};
}