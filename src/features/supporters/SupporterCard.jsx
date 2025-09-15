import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiLink from "@mui/material/Link";
import Typography from '@mui/material/Typography';
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import { BASE_URL } from "../../utils/constants.js";

function SupporterCard({supporter}) {
  return (
    <Box display="flex" flexDirection={{xs: "column", md: "row"}} justifyContent="center"
         alignItems={{xs: "center", md: "flex-start"}} gap={2}>
      <Box component="img" src={`${BASE_URL}${supporter.img}`} alt={supporter.title} width="10rem" height="auto"/>
      <Box display="flex" flexDirection="column" rowGap={1}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typography variant="h6" color="primary.main">{supporter.title}</Typography>
          {supporter.main_supporter &&
            <StarRateRoundedIcon fontSize="small" sx={{color: "secondary.main", mb: 1, pb: 1}}/>}
        </Box>
        <Typography align="justify">{supporter.body}</Typography>
        {supporter.website &&
          <Box display="flex" justifyContent="flex-start" alignItems="center" columnGap={1}>
            <Typography variant="body2">وبگاه: </Typography>
            <MuiLink href={supporter.website} target="_blank" underline="hover">
              <Typography variant="body2">
                {supporter.website}
              </Typography>
            </MuiLink>
          </Box>
        }
      </Box>
      <Divider flexItem/>
    </Box>
  );
}

SupporterCard.propTypes = {
  supporter: PropTypes.any,
};
export default SupporterCard;