import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { register as registerAPI } from "../../services/apiAuth.js";
import { useLogin } from "./useLogin.js";
import { sendFrontendLog } from "../../services/apiLog.js";

export function useRegister() {
  const {login} = useLogin();
  const navigate = useNavigate();

  const {mutate: registerUser, isPending: isLoading, error} = useMutation({
    mutationFn: (data) => registerAPI(data),
    onSuccess: (data, variables) => {
      toast.success("ثبت‌نام با موفقیت انجام شد.");
      const {email, password} = variables;
      login({username: email, password});
      navigate("/");
    },
    onError: (error, variables) => {
      sendFrontendLog(`useRegister - ${variables.email} - ${error.message}`, "error");
      throw Error(error);
    }
  });
  return {registerUser, isLoading, error};
}