import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

import WpTextField from "../../ui/WpTextField.jsx";
import WpButton from "../../ui/WpButton.jsx";
import { useSuggestedWord } from "./useSuggestedWord.js";
import useSuggestedCount from "./useSuggestedCount.js";
import FullPageSpinner from "../../ui/FullPageSpinner.jsx";
import { getIsAuthenticated } from "../auth/authSlice.js";

function SuggestedWordForm() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const suggestedWord = searchParams.get("word");
  const {register, handleSubmit, reset} = useForm();

  useEffect(() => {
    if (!suggestedWord) navigate("/");
  }, [navigate, suggestedWord]);

  const {word_count, fields_count, isLoading: isLoadingCount} = useSuggestedCount();
  const {postSuggestedWord, isLoading: isLoadingPost} = useSuggestedWord();
  const isLoading = isLoadingCount || isLoadingPost;

  if (isLoadingCount) {
    return <FullPageSpinner/>;
  }

  const wordCountDetail = (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="90%"
         maxWidth="700px" mb={5}>
      <Typography align="center" gutterBottom>
        {digitsEnToFa(word_count)} واژه در {digitsEnToFa(fields_count)} پیشه مرتبط با «{suggestedWord}» در بانک
        اطلاعاتی ویکی‌پیشه موجود است.
      </Typography>
      <Typography align="center" gutterBottom>
        لطفاً پیش از ثبت پیشنهاد آنها را بررسی کنید.
      </Typography>
      <Typography align="center" gutterBottom>
        برای ثبت پیشنهاد واژه «فرم پیشنهاد واژه» را پر کنید.
      </Typography>
    </Box>
  );

  if (!isAuthenticated) {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        {word_count > 0 && wordCountDetail}
        <Typography align="center" gutterBottom>برای پیشنهاد واژه، لطفاً ابتدا وارد وبگاه شوید.</Typography>
        <MuiLink component={Link} to={`/login?next=/words/suggestedword?word=${suggestedWord}`} underline="hover">
          ورود
        </MuiLink>
      </Box>
    );
  }

  function onFormSubmit(data) {
    postSuggestedWord(data, {
      onSuccess: () => reset()
    });
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" my={2}>
      {word_count > 0 && wordCountDetail}
      <Box component="form" display="flex" flexDirection="column" justifyContent="center" alignItems="center"
           width="90%" maxWidth="700px" onSubmit={handleSubmit(onFormSubmit)}>
        <Grid container size={12} spacing={2}>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>
                پیشه <sup style={{color: "red"}}>*</sup>
              </Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="word_field" required size="small" label="" variant="outlined" fullWidth
                placeholder="پیشه‌های مرتبط با واژه"
                disabled={isLoading}
                {...register("word_field", {
                  required: "درج پیشه برای واژه ضروری است.",
                })}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>
                واژه <sup style={{color: "red"}}>*</sup>
              </Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="word" required size="small" label="" variant="outlined" fullWidth placeholder="املای واژه"
                defaultValue={suggestedWord}
                disabled={isLoading}
                {...register("word", {
                  required: "درج واژه ضروری است.",
                })}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>واج‌نگاری</Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="pronunciation" size="small" label="" variant="outlined" fullWidth placeholder="تلفظ"
                disabled={isLoading}
                {...register("pronunciation")}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>ریشهٔ واژه</Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="root_word" size="small" label="" variant="outlined" fullWidth
                placeholder="واژه ریشهٔ فارسی دارد یا از زبان دیگری آمده است؟"
                disabled={isLoading}
                {...register("root_word")}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>وام‌واژه</Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="translation" size="small" label="" variant="outlined" fullWidth
                placeholder="برابر واژه در زبان‌های دیگر"
                disabled={isLoading}
                {...register("translation")}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>
                شرح تعریف <sup style={{color: "red"}}>*</sup>
              </Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="definition" required size="small" label="" variant="outlined" fullWidth
                placeholder="شرح و تعریف واژه"
                multiline rows={8}
                disabled={isLoading}
                {...register("definition", {
                  required: "درج شرح تعریف ضروری است.",
                })}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>مترادف</Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="synonyms" size="small" label="" variant="outlined" fullWidth placeholder="مترادف‌های واژه"
                disabled={isLoading}
                {...register("synonyms")}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>متضاد</Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="antonyms" size="small" label="" variant="outlined" fullWidth placeholder="متضادهای واژه"
                disabled={isLoading}
                {...register("antonyms")}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>منطقه</Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="location" size="small" label="" variant="outlined" fullWidth
                placeholder="مناطقی که این واژه در آنجا رایج است"
                disabled={isLoading}
                {...register("location")}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}>
              <Typography variant="body2" align="left" sx={{mt: 1.2, color: "text.secondary"}}>
                داده‌های تکمیلی
              </Typography>
            </Grid>
            <Grid size={10}>
              <WpTextField
                id="description" size="small" label="" variant="outlined" fullWidth
                placeholder="هر نوع اطلاعات دیگری که در بقیه بخش‌ها نمی‌گنجد."
                multiline rows={8}
                disabled={isLoading}
                {...register("description")}/>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={2}></Grid>
            <Grid size={10}>
              <Box width="100%" display="flex" justifyContent="space-between" alignItems="center" columnGap={2}>
                <WpButton variant="contained" size="small" fullWidth disableElevation color="secondary"
                          onClick={() => navigate(-1)} disabled={isLoading}>
                  بازگشت
                </WpButton>
                <WpButton variant="contained" size="small" fullWidth disableElevation type="submit"
                          disabled={isLoading}>
                  ارسال
                </WpButton>
              </Box>
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}

export default SuggestedWordForm;