import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";

const WpButton = styled(Button)(({theme}) => ({
  border: "1px solid #c7af7e",
  borderRadius: "2rem",
  padding: theme.spacing(1, 4),
}));

export default WpButton;