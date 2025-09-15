import { Link } from "react-router";

import MuiLink from "@mui/material/Link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "../../ui/headerSearchItems.js";

function LoginHeader() {
  return (
    <Box width="100%" bgcolor="primary.main">
      <AppBar position="static" sx={{boxShadow: "none", maxWidth: "xl", m: "0 auto"}}>
        <Toolbar sx={{py: 2, display: "flex", flexDirection: "column", rowGap: 2}}>
          <Box width="100%" display="flex" flexDirection={{xs: "column", md: "row"}} justifyContent="space-between"
               alignItems="center" rowGap={2} columnGap={2}>
            <MuiLink component={Link} to="/" sx={{lineHeight: 0}}>
              <Box component="img" src="/logo/logo-white.svg" alt="logo" maxHeight="4rem" width="auto" height="auto"/>
            </MuiLink>

            <Search>
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="جستجو …"
                inputProps={{"aria-label": "search"}}
              />
            </Search>
            <Box width={{xs: 0, md: "10rem"}}>
            </Box>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default LoginHeader;