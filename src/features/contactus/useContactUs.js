import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { postContactUs } from "../../services/apiWords.js";
import { sendFrontendLog } from "../../services/apiLog.js";
import { getAccessToken, getUserEmail } from "../auth/authSlice.js";

export function useContactUs() {
  const accessToken = useSelector(getAccessToken);
  const userEmail = useSelector(getUserEmail);
  const {mutate: contactus, isPending: isLoading, error} = useMutation({
    mutationFn: (data) => postContactUs(data, accessToken),
    onSuccess: () => toast.success("پیام شما با موفقیت ارسال شد."),
    onError: (error) => {
      toast.error("مشکلی در ارسال پیام پیش آمده است، لطفاً بعداً دوباره تلاش کنید.");
      sendFrontendLog(`useContactUs - ${userEmail} - ${error.message}`, "error");
    }
  });
  return {contactus, isLoading, error};
}