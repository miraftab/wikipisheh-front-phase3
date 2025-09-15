import { BeatLoader } from "react-spinners";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";

function FullPageSpinner() {
  return (
    <Backdrop open sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Box bgcolor="rgba(0,111,118,0.8)" borderRadius="50%" display="flex" flexDirection="column" p="2rem" rowGap={2.5}
           justifyContent="center" alignItems="center" width="9rem" height="9rem" border="2px solid"
           borderColor="secondary.main">
        <Box component="img" src="/logo/logo-small-white.svg" alt="logo" maxHeight="4rem" width="auto"
             height="auto"/>
        <BeatLoader color="#fff" size={8} speedMultiplier={0.5}/>
      </Box>
    </Backdrop>
  );
}

export default FullPageSpinner;