import PropTypes from "prop-types";

import Box from "@mui/material/Box";

function CircledCenterContents({circleHeader, circleBottom, children}) {
  return (
    <Box width={{xs: "30rem", md: "30"}} height={{xs: "30rem", md: "30"}} borderRadius="50%" top="50%" left="50%"
         bgcolor="rgba(0,111,118,0.8)" position="absolute" display="flex" flexDirection="column"
         justifyContent="space-between" alignItems="center" p="3rem .5rem" sx={{transform: "translate(-50%, -50%)"}}>
      {circleHeader}
      <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
        {children}
      </Box>
      {circleBottom}
    </Box>
  );
}

CircledCenterContents.propTypes = {
  circleHeader: PropTypes.node,
  circleBottom: PropTypes.node,
  children: PropTypes.node
};

export default CircledCenterContents;