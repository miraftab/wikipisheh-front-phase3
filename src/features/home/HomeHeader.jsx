import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import LoginButton from "../../ui/header/LoginButton.jsx";
import AboutUsEnBtn from "../aboutus/AboutUsENBtn.jsx";

function HomeHeader() {

  return (
    <Box width="100%" position="absolute" top="0" left="0" height="5rem" display="flex"
         justifyContent="center" alignItems="center">
      <Container maxWidth="xl" disableGutters fixed>
        <Box display="flex" justifyContent="space-between" alignItems="center" mx={2}>
          <AboutUsEnBtn/>
          <LoginButton/>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeHeader;