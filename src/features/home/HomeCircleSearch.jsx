import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import WpTextField from "../../ui/WpTextField.jsx";
import WpButton from "../../ui/WpButton.jsx";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WikiPishehIntro from "../aboutus/WikiPishehIntro.jsx";
import CircledCenterContents from "../../ui/CircledCenterContents.jsx";

function HomeCircleSearch() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {register, handleSubmit} = useForm();
  const {register: registerSuggest, handleSubmit: handleSubmitSuggest} = useForm();

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onSearchSubmit(data) {
    searchParams.set("word", data.basicSearch);
    searchParams.set("alphabet", "all");
    searchParams.set("definition", "");
    searchParams.set("field", "all");
    searchParams.set("category", "all");
    searchParams.set("prefix", "");
    searchParams.set("infix", "");
    searchParams.set("suffix", "");
    searchParams.set('page', '1')
    navigate(`/words?${searchParams.toString()}`);
  }

  function onSuggestSubmit(data) {
    searchParams.set("word", data.suggestWord);
    navigate(`/words/suggestedword?${searchParams.toString()}`);
  }

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  {/*/!*Logo*!/*/
  }
  const circleHeader = (
    <Box component="img" src="/logo/logo-white.svg" alt="logo" maxHeight={{xs: "5rem", md: "6rem"}}
         width="auto" height="auto" mb={2}/>);

  {/* Text */
  }
  const circleBottom = (
    <Box width="90%" display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Typography variant="subtitle2" color="secondary.main" textAlign="center">
        فرهنگ پیشه‌ها با مشارکت شما کامل می‌شود.
      </Typography>
      <Typography variant="subtitle2" color="secondary.main" textAlign="center">
        جستجو کنید یا پیشنهاد دهید.
      </Typography>
      <Tooltip title="درآمدی بر ویکی‌پیشه" arrow>
        <IconButton onClick={handleClickOpen()} sx={{mt: ".5rem"}}>
          <InfoOutlinedIcon sx={{color: "secondary.main"}}/>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        dir={theme.direction}
        slotProps={{paper: {sx: {padding: ".7rem", borderRadius: 2, bgcolor: "grey.100"}}}}
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
        <DialogTitle id="scroll-dialog-title">درآمدی بر ویکی‌پیشه</DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText
            component="div"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <WikiPishehIntro/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );

  return (
    <CircledCenterContents circleHeader={circleHeader} circleBottom={circleBottom}>
      {/* Search and Suggest */}
      <Box display="flex" flexDirection={{xs: "column", md: "row"}} width={{sx: "100%", md: "75vw"}} rowGap={4}
           columnGap={1} justifyContent={{xs: "center", md: "space-between"}}
           alignItems="center">

        <Box flexGrow={1} component="form" onSubmit={handleSubmit(onSearchSubmit)}>
          <Grid container width="100%" spacing={1}>
            <Grid size={{xs: 12, md: 9}}>
              <WpTextField id="basicSearch" size="small" label="" variant="outlined" fullWidth required
                           placeholder="جستجوی واژه"
                           slotProps={{
                             input: {
                               startAdornment: (<InputAdornment position="start"> <SearchIcon/> </InputAdornment>)
                             }
                           }}
                           {...register("basicSearch", {
                             required: "برای جستجوی واژه‌ای را وارد کنید."
                           })}/>
            </Grid>
            <Grid size={{xs: 12, md: 3}}>
              <WpButton variant="contained" size="small" fullWidth disableElevation type="submit">
                جستجو
              </WpButton>
            </Grid>
          </Grid>
        </Box>

        <Divider orientation="vertical" flexItem
                 sx={{borderRight: "2px solid #c7af7e", display: {xs: "none", md: "block"}}}></Divider>

        <Box flexGrow={1} component="form" onSubmit={handleSubmitSuggest(onSuggestSubmit)}>
          <Grid container width="100%" spacing={1}>
            <Grid size={{xs: 12, md: 9}}>
              <WpTextField id="suggestWord" size="small" label="" variant="outlined" fullWidth required
                           placeholder="پیشنهاد واژه"
                           slotProps={{
                             input: {
                               startAdornment: (<InputAdornment position="start"><AddIcon/></InputAdornment>)
                             }
                           }}
                           {...registerSuggest("suggestWord", {
                             required: "برای پیشنهاد واژه‌ای را وارد کنید."
                           })}
              />
            </Grid>
            <Grid size={{xs: 12, md: 3}}>
              <WpButton variant="contained" size="small" fullWidth disableElevation type="submit">پیشنهاد</WpButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CircledCenterContents>
  );
}

export default HomeCircleSearch;