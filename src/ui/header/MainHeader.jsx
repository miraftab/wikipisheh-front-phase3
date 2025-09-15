import { useState } from "react";
import { Link, useSearchParams } from "react-router";

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MuiLink from "@mui/material/Link";
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';

import LoginButton from "./LoginButton.jsx";
import AdvancedSearchIcon from "../icons/AdvancedSearchIcon.jsx";
import AdvancedSearchComponent from "./AdvancedSearchComponent.jsx";
import SimpleSearchForm from "./SimpleSearchForm.jsx";

function MainHeader() {
  const [searchParams] = useSearchParams();
  const searchedWord = searchParams.get("word") || "";
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [defaultSearchedWord, setDefaultSearchedWord] = useState(searchedWord);

  return (
    <Box width="100%" bgcolor="primary.main">
      <AppBar position="static" sx={{boxShadow: "none", maxWidth: "xl", m: "0 auto"}}>
        <Toolbar sx={{py: 2, display: "flex", flexDirection: "column", rowGap: 2}}>
          <Box width="100%" display="flex" flexDirection={{xs: "column", md: "row"}} justifyContent="space-between"
               alignItems="center" rowGap={2}>
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <MuiLink component={Link} to="/" sx={{lineHeight: 0}}>
                <Box component="img" src="/logo/logo-white.svg" alt="logo" maxHeight={{xs: "3rem", md: "4rem"}}
                     width="auto" height="auto"/>
              </MuiLink>

              <Fade in={!showAdvancedSearch}>
                <Box display={{xs: "none", md: "flex"}} justifyContent="center" alignItems="center"
                     key={showAdvancedSearch}>
                  <SimpleSearchForm defaultSearchedWord={defaultSearchedWord}
                                    setDefaultSearchedWord={setDefaultSearchedWord}/>
                  <IconButton onClick={() => setShowAdvancedSearch((prev) => !prev)}>
                    <AdvancedSearchIcon fontSize="large" sx={{color: "common.white"}}/>
                  </IconButton>
                </Box>
              </Fade>

              <Box>
                <LoginButton/>
              </Box>
            </Box>
            <Fade in={!showAdvancedSearch}>
              <Box width="100%" display={{xs: "flex", md: "none"}} justifyContent="space-between" alignItems="center"
                   key={showAdvancedSearch}>
                <SimpleSearchForm defaultSearchedWord={defaultSearchedWord}
                                  setDefaultSearchedWord={setDefaultSearchedWord}/>
                <IconButton onClick={() => setShowAdvancedSearch((prev) => !prev)}>
                  <AdvancedSearchIcon fontSize="large" sx={{color: "common.white"}}/>
                </IconButton>
              </Box>
            </Fade>
          </Box>
        </Toolbar>
        <Collapse in={showAdvancedSearch}>
          <Box width="100%" display="flex" justifyContent="center" alignItems="center" px={{xs: 2, md: 3}}
               key={showAdvancedSearch}>
            <AdvancedSearchComponent setShowAdvancedSearch={setShowAdvancedSearch}
                                     setDefaultSearchedWord={setDefaultSearchedWord}
                                     defaultSearchedWord={defaultSearchedWord}/>
          </Box>
        </Collapse>
      </AppBar>
    </Box>
  );
}

export default MainHeader;