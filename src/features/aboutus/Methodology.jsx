import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

function Methodology() {
  return (
    <Box>
      <Typography variant="h4" color="primary.main" gutterBottom>فرهنگ پیشه‌ها</Typography>
      <Typography variant="h5" color="primary.main" gutterBottom sx={{mb: 2}}>
        شیوه‌نامهء پژوهش و نگارش
      </Typography>
      <Typography variant="h6" color="primary.main">۱. درامد</Typography>
      <Typography gutterBottom align="justify">
        برای ثبت داده‌های فرهنگی پیشه‌ها لازم است شیوه‌ای استاندارد شود که هم پژوهشگر بداند چه کار کند، هم ویراستار
        بداند چگونه اطلاعات را برای ذخیره و ارائهء برخط بیاراید، هم محقق زبان‌شناس بتواند مبتنی بر نیاز از آن به‌درستی
        استفاده کند. پس شیوه‌نامه‌ای تهیه و متن کامل ویراست دوم آن (بهمن ۱۴۰۳) در همین بخش بارگذاری شده است.
      </Typography>
      <Typography variant="h6" color="primary.main">۲. مفهوم‌های مرتبط</Typography>
      <Typography gutterBottom align="justify">
        برای استانداردسازی مفهوم‌های مرتبط با شناسه‌های ویکی‌پیشه (فیلدها در سامانهء ثبت دادهء‌ پیشه‌ها) مفاهیم
        زبان‌شناختی مرتبط با ثبت داده و محتوا تعریف شده که بعضی برای کاربر ویکی‌پیشه مشاهده‌پذیر است بعضی هم نه.
      </Typography>
      <Typography variant="h6" color="primary.main">۳. مقوله‌های مرتبط با فرهنگ پیشه‌ها</Typography>
      <Typography gutterBottom align="justify">
        مقوله‌هایی برای تقریب ‌به ‌ذهن پژوهشگر و ویراستار در تفکیک حداکثری زمینه‌های کاری در هر پیشه. این مفهوم‌ها نقش
        چندانی برای نیاز کاربر ندارد و از چشم او مخفی است.
      </Typography>
      <Typography variant="h6" color="primary.main">۴. مقوله‌های متمایز در ثبت داده‌ها</Typography>
      <Typography gutterBottom align="justify">
        پژوهشگر به مقوله‌هایی که در بخش قبلی آمده توجه می‌کند. اما، در ثبت داده‌ها، پژوهشگر و ویراستار تنها مقوله‌های
        زیر را تفکیک، مشخص، و متمایز می‌کنند و کاربر هم مشاهده می‌کند.
      </Typography>
      <List>
        <ListItemText primary="ملزومات"
                      secondary="ابزار کار، اجزای پیشه، دستگاه و ماشین‌ها، شیوه‌های کار، مراحل مختلف کار، مقیاس‌های اندازه‌گیری، مواد اولیه، یراق"/>
        <ListItemText primary="خطا" secondary="اشکالات کار، تعمیر، دغل‌کاری"/>
        <ListItemText primary="محیط" secondary="فرهنگ پیشه، شاغلان، قرارداد، محیط کار"/>
        <ListItemText primary="محصول" secondary="بازار و مشتری، بخش‌های محصول، تولید، مدل‌ها"/>
        <ListItemText primary="عام" secondary="هر اصطلاح مرتبط با پیشه‌ که در مقوله‌های بالا نگنجد"/>
      </List>
      <Typography variant="h6" color="primary.main">۵. شیوهء پژوهش</Typography>
      <Typography gutterBottom align="justify">
        تجربه نشان داده بهترین شیوهء شناسايی، انتخاب واژه‌ها، و یافتن تعریف برای هر واژه به دو پژوهش اَسنادی و پژوهش
        ميدانی نیاز دارد. پس، در بررسی فرهنگ هر پیشه بر این دو نوع پژوهش تأکید داشته‌ایم.
      </Typography>
      <Typography gutterBottom align="justify">
        <strong>
          از کاربران علاقه‌مند به فرهنگ پیشه‌ها که مایل‌اند اصطلاحی را به ویکی‌پیشه اضافه کنند تقاضا می‌شود نظر خودشان
          را در باب مقوله‌های بخش ۴ و نیز نوع میدانی یا اَسنادی بودن آن اعلام کنند.
        </strong>
      </Typography>

      <Box display="flex" justifyContent="center" mt={5}>
        <Typography sx={{mr: 1}}>برای دریافت متن کامل شیوه‌نامه </Typography>
        <MuiLink href="docs/methodology.pdf" target="_blank" underline="hover" sx={{mr: .5}}>این فایل</MuiLink>
        <PictureAsPdfRoundedIcon sx={{color: "primary.main", mr: 1}}/>
        <Typography>را ببینید.</Typography>
      </Box>
    </Box>
  );
}

export default Methodology;