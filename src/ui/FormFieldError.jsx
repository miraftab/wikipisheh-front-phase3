import PropTypes from "prop-types";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

function FormFieldError({fieldErrors}) {
  if (!fieldErrors || fieldErrors.length === 0) {
    return null;
  }

  return (
    // sx={{ mt: -4, mb: 2 }}
    <List sx={{mt: -2}}>
      {fieldErrors.map((err, index) => (
        <ListItem key={index} sx={{mt: 0, mb: 0, p: 0}}>
          <ListItemIcon sx={{"&.MuiListItemIcon-root": {minWidth: 30}}}>
            <ErrorOutlineRoundedIcon color="error"/>
          </ListItemIcon>
          <ListItemText primary={
            <Typography variant="body2" color="common.white">
              {err}
            </Typography>}/>
        </ListItem>
      ))}
    </List>
  );
}

FormFieldError.propTypes = {
  fieldErrors: PropTypes.array,
};

export default FormFieldError;