import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";

const WpTextField = styled(TextField)(({theme}) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "2rem", // Rounded corners
    backgroundColor: theme.palette.common.white, // White background
    transition: "border-color 0.3s ease", // Smooth hover transition
    "& fieldset": {
      borderColor: theme.palette.secondary.light, // Default border color
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main, // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main, // Focused border color
    },
  },
}));

export default WpTextField;