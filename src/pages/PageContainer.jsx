import { Outlet } from "react-router";

import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

import MainFooter from "../ui/MainFooter.jsx";
import MainHeader from "../ui/header/MainHeader.jsx";

function PageContainer() {

  const Offset = styled("div")(({theme}) => theme.mixins.toolbar);

  return (
    <Container maxWidth={false} disableGutters
               sx={{
                 position: "relative",
                 // borderLeft: "1px solid #eee", borderRight: "1px solid #eee",
                 // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)"
               }}>
      <Grid container direction="column" justifyContent="space-between" minHeight="100vh">
        <Grid container>
          <MainHeader/>
          <Offset/>
        </Grid>

        <Grid container flexGrow={1} size="auto" pb="1rem">
          <Container maxWidth="xl">
            <Outlet/>
          </Container>
        </Grid>

        <Grid container>
          <MainFooter/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default PageContainer;
