import { useState } from "react";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { BASE_URL } from "../../utils/constants.js";
import PropTypes from "prop-types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function WordImage({imgUrl, imgAlt, imgDesc, imgRef}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" mt={2}>
      <Box component="img" src={`${BASE_URL}/${imgUrl}`} alt={imgAlt} mb={1} borderRadius={1}
           maxHeight={{xs: "5rem", sm: "7rem", lg: "10rem"}} maxWidth={{xs: "5rem", sm: "7rem", lg: "10rem"}}
           width="auto" height="auto" onClick={handleClickOpen()} sx={{cursor: "pointer"}}/>
      {imgDesc && <Typography variant="caption" align="center">{imgDesc}</Typography>}
      {imgRef && <Typography variant="caption" align="center">منبع: {imgRef}</Typography>}

      <Dialog
        open={open}
        onClose={handleClose}
        dir={theme.direction}
        slotProps={{paper: {sx: {padding: ".7rem", borderRadius: 2}}}}
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
        {imgDesc ?
          <>
            <DialogTitle id="image-description">{imgDesc}</DialogTitle>
            <Divider/>
          </>
          :
          <Box height="1rem"/>
        }
        <DialogContent>
          <DialogContentText
            component="div"
            id="source-image"
            tabIndex={-1}
          >
            <Box component="img" src={`${BASE_URL}/${imgUrl}`} alt={imgAlt} maxWidth="100%" maxHeight="100%"
                 width="auto" height="auto"/>
          </DialogContentText>
        </DialogContent>
        {imgRef &&
          <Box width="100%">
            <Divider/>
            <Typography component="p" variant="caption" align="center" sx={{mt: 1}}>منبع: {imgRef}</Typography>
          </Box>
        }
      </Dialog>
    </Box>
  );
}

WordImage.propTypes = {
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  imgDesc: PropTypes.string,
  imgRef: PropTypes.string
};

export default WordImage;