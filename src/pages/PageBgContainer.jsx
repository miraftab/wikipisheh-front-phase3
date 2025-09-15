import { useState } from "react";
import { Outlet } from "react-router";

import Box from '@mui/material/Box';

import useRandomBgImage from "../ui/useRandomBgImage.js";

function PageBgContainer() {
  const [fadeState, setFadeState] = useState(false);
  const bgImage = useRandomBgImage(setFadeState);

  return (
    <Box bgcolor="grey" width="100%">
      <Box position="fixed" width="100%" height="100%" top={0} right={0}
           sx={{
             backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",
             backgroundPosition: "center center", overflow: "hidden", transition: "opacity 0.3s ease-in-out", // Smooth fade animation
             opacity: fadeState ? 0 : 1, // Toggle fade-in and fade-out
             zIndex: 0,
           }}
      />
      <Outlet/>
    </Box>
  );
}

export default PageBgContainer;