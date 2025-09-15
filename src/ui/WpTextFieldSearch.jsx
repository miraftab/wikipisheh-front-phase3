import { styled, alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const WpTextFieldSearch = styled(TextField)(({theme}) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "2rem", // Rounded corners
    backgroundColor: alpha(theme.palette.common.white, 0.15), // White background
    border: "none",
    color: theme.palette.common.white,
    transition: "background-color 0.3s ease", // Smooth hover transition
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
      backgroundColor: alpha(theme.palette.common.white, 0.25), // White background
    },
  },
  "&.Mui-focused fieldset": {
    border: "1px solid red",
    backgroundColor: alpha(theme.palette.common.white, 0.25), // White background
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.common.white, // White label text
  },
  // Customizations for the Select dropdown menu
  "& .MuiSvgIcon-root": {
    color: theme.palette.common.white, // Dropdown icon color
    right: "0.5rem", // Adjust icon position
  },

}));

export default WpTextFieldSearch;