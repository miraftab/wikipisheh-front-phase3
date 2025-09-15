import { useState } from "react";
import { Link } from "react-router";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import MuiLink from "@mui/material/Link";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PropTypes from "prop-types";

function MainFooter({fixed = false}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sxProps = fixed ? {position: "absolute", bottom: 0, left: 0, height: "5rem"} : {};

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        dir={theme.direction}
        PaperProps={{sx: {padding: ".7rem", borderRadius: 2, bgcolor: "grey.100"},}}
        sx={{
          "& .MuiDialog-paper": {
            position: "relative", // Ensure the pseudo-element positions correctly
            padding: "16px", // Create space inside the dialog for the border
            "&::before": {
              content: "\"\"",
              position: "absolute",
              top: ".7rem", // Space from the top edge of the dialog
              left: ".7rem", // Space from the left edge
              right: ".7rem", // Space from the right edge
              bottom: ".7rem", // Space from the bottom edge
              border: "1px solid", // Inner border style
              borderColor: "primary.main",
              borderRadius: "8px", // Optional: Rounded corners
              pointerEvents: "none", // Ensures the pseudo-element doesn’t interfere with interactions
            },
          },
        }}
      >
        <IconButton onClick={handleClose}
                    sx={{position: "absolute", top: "1rem", right: "1rem", color: "primary.main"}}>
          <CloseRoundedIcon fontSize="small"/>
        </IconButton>
        <DialogTitle id="cookie-dialog-title">حریم شخصی و دسترسی‌های وبگاه ویکی‌پیشه</DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText id="cookie-dialog-description">
            وبگاه ویکی‌پیشه اطلاعات شخصی شما را در مرورگر و روی کامپیوتر خودتان ذخیره می‌کند.
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Box width="100%" height="5rem" display="flex" justifyContent="center" alignItems="center" sx={sxProps}>
        <Box width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Box display="flex" justifyContent="center" alignItems="center" columnGap={{xs: 1, md: 2}}
               bgcolor="primary.main" p={1} width="100%">
            <Typography variant="body2" color="white">
              <MuiLink component={Link} to="/about-us" underline="hover" color="white">دربارهٔ ویکی‌پیشه</MuiLink>
            </Typography>
            <Divider orientation="vertical" flexItem sx={{borderColor: "secondary.main"}}/>
            <Typography variant="body2" color="white">
              <MuiLink component={Link} to="/supporters" underline="hover" color="white">حامیان</MuiLink>
            </Typography>
            <Divider orientation="vertical" flexItem sx={{borderColor: "secondary.main"}}/>
            <Typography variant="body2" color="white">
              <MuiLink component="button" onClick={handleClickOpen} underline="hover" color="white">حریم شخصی</MuiLink>
            </Typography>
            <Divider orientation="vertical" flexItem sx={{borderColor: "secondary.main"}}/>
            <Typography variant="body2" color="white">
              <MuiLink component={Link} to="/contact-us" underline="hover" color="white">تماس با ما</MuiLink>
            </Typography>
          </Box>
          <Typography variant="body2" color="white" align="center" mt={2} sx={{color: "grey.300"}}>
            ۱۴۰۳ &#169; تمام حقوق وبگاه ویکی‌پیشه متعلق به موسسهٔ فرهنگان است.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

MainFooter.propTypes = {
  fixed: PropTypes.bool,
};

export default MainFooter;
