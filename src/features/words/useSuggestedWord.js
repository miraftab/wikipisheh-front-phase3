import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { postSuggestedWord as postSuggestedWordApi } from "../../services/apiWords.js";
import { sendFrontendLog } from "../../services/apiLog.js";
import { getAccessToken } from "../auth/authSlice.js";

export function useSuggestedWord() {
  const accessToken = useSelector(getAccessToken);
  const { mutate: postSuggestedWord, isPending: isLoading } = useMutation({
    mutationFn: (data) => postSuggestedWordApi(data, accessToken),
    onSuccess: () => toast.success("پیام شما با موفقیت ارسال شد."),
    onError: (error) => {
      toast.error("مشکلی در ارسال پیام پیش آمده است، لطفاً بعداً دوباره تلاش کنید.");
      sendFrontendLog(`Suggest word - ${error.message}`, "error");
    }
  });
  return { postSuggestedWord, isLoading };
}