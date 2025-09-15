import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Colleagues() {
  return (
    <Box>
      <Typography align="justify" gutterBottom>
        ویکی‌پیشه گامی است نو در تهیه <em>فرهنگ پیشه‌ها</em>. از این پس، علاوه‌بر برنامه‌ پژوهش و ثبت هر دفتر پیشه‌ به‌
        روال گذشته، اطلاعاتی میان مدیریت ویکی‌پیشه و مخاطبان- مردم- مبادله خواهد شد تا به رشد و تصحیح ویکی‌پیشه و پایگاه
        دادهء آن، سادا، منجر شود.
      </Typography>
      <Typography variant="h5" color="primary.main" gutterBottom sx={{mt: 2}}>
        ساختار نهادی و نیروی انسانی ویکی‌پیشه
      </Typography>
      <List sx={{width: "100%", maxWidth: "20rem", bgcolor: "background.paper"}}>
        <ListItem alignItems="flex-start">
          {/*<ListItemAvatar>*/}
          {/*  <Avatar alt="Shahrdad Mirzaee" src="/static/images/avatar/1.jpg" />*/}
          {/*</ListItemAvatar>*/}
          <ListItemText
            primary="کارفرما"
            secondary={
              <Typography variant="body2" sx={{color: "text.primary", display: "inline"}}>
                شهرداد میرزایی
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li"/>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="نهاد بنیانگذار"
            secondary={
              <Typography variant="body2" sx={{color: "text.primary", display: "inline"}}>
                بنیاد کوچه، انتشارات دیبایه، انتشارات فرهنگان
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li"/>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="مدیر پروژه"
            secondary={
              <Typography variant="body2" sx={{color: "text.primary", display: "inline"}}>
                رضا منصوری
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li"/>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="پژوهشگر/ ویراستار"
            secondary={
              <Typography variant="body2" sx={{color: "text.primary", display: "inline"}}>
                شکوفه طالبی، فریبا شریفی
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li"/>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="مدیر فنی"
            secondary={
              <Typography variant="body2" sx={{color: "text.primary", display: "inline"}}>
                جواد میرآفتاب‌زاده
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li"/>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="شورای تخصصی ویکی‌پیشه"
            secondary={
              <Typography variant="body2" sx={{color: "text.primary", display: "inline"}}>
                اردوان امیری‌نژاد، مهنوش تهرانی، فرشاد سمایی
              </Typography>
            }
          />
        </ListItem>
        {/*<Divider component="li"/>*/}
        {/*<ListItem alignItems="flex-start">*/}
        {/*  <ListItemText*/}
        {/*    primary="مدیر داخلی"*/}
        {/*    secondary={*/}
        {/*      <Typography variant="body2" sx={{color: "text.primary", display: "inline"}}>*/}
        {/*        --*/}
        {/*      </Typography>*/}
        {/*    }*/}
        {/*  />*/}
        {/*</ListItem>*/}
      </List>
    </Box>
  );
}

export default Colleagues;