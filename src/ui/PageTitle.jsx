import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useWidth from "../utils/useWidth.js";

function PageTitle({pageTitle}) {
  const screenSize = useWidth();
  let headerVariant, rightPadding;
  switch (screenSize) {
    case "xs":
      headerVariant = "body1";
      rightPadding = "2rem";
      break;
    case "sm":
      headerVariant = "h6";
      rightPadding = "3rem";
      break;
    case "md":
      headerVariant = "h6";
      rightPadding = "5rem";
      break;
    case "lg":
      headerVariant = "h5";
      rightPadding = "6rem";
      break;
    case "xl":
      headerVariant = "h5";
      rightPadding = "6rem";
      break;
    default:
      headerVariant = "h5";
      rightPadding = "6rem";
  }

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <Typography variant={headerVariant} color="common.white"
                  sx={{
                    bgcolor: "primary.main",
                    borderRadius: "0 2rem 2rem 0",
                    pl: rightPadding,
                    pr: "2rem",
                    py: 1,
                    maxWidth: '95%'
                  }}>
        {pageTitle}
      </Typography>
    </Box>
  );
}

PageTitle.propTypes = {
  pageTitle: PropTypes.string
};

export default PageTitle;