import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";

import WikiPishehIntro from "./WikiPishehIntro.jsx";
import Colleagues from "./Colleagues.jsx";
import Methodology from "./Methodology.jsx";
import WikiPishehIcon from "../../ui/icons/WikiPishehIcon.jsx";
import AboutWikiEn from "./AboutWikiEN.jsx";

function CustomTabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function AboutUs({enAbout = false}) {
  const [value, setValue] = useState(enAbout ? 3 : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{
        width: "100%",
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "center",
        maxWidth: {xs: 320, sm: 480, md: "100%"},
      }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons
              allowScrollButtonsMobile>
          <Tab disableRipple icon={<InfoRoundedIcon/>} iconPosition="start" label="درآمد" {...a11yProps(0)}  />
          <Tab disableRipple icon={<RuleRoundedIcon/>} iconPosition="start" label="شیوه‌نامه" {...a11yProps(1)} />
          <Tab disableRipple icon={<PersonRoundedIcon/>} iconPosition="start" label="همکاران" {...a11yProps(2)} />
          <Tab disableRipple icon={<WikiPishehIcon/>} iconPosition="start" label="Wiki-pisheh" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h5" color="primary.main" gutterBottom>درآمدی بر ویکی‌پیشه</Typography>
        <WikiPishehIntro/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Methodology/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/*<Typography variant="h6" color="primary.main" gutterBottom>ساختار نیروی انسانی و نهادی</Typography>*/}
        <Colleagues/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AboutWikiEn enAbout={enAbout}/>
      </CustomTabPanel>
    </Box>
  );
}

AboutUs.propTypes = {
  enAbout: PropTypes.bool,
};

export default AboutUs;