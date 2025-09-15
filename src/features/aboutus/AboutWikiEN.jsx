import { Link } from "react-router";
import { addCommas } from "@persian-tools/persian-tools";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(no, name, num) {
  const strNumber = addCommas(num);
  return {no, name, strNumber};
}

const rows1 = [
  createData(1, "Bakery", 1115),
  createData(2, "Butchery", 558),
  createData(3, "Carpentry", 1391),
  createData(4, "Confectionery", 845),
  createData(5, "Cooking", 2131),
  createData(6, "Glasswork", 1348),
  createData(7, "Goldsmithing", 2089),
  createData(8, "Sewing", 2136),
  createData(9, "Shoemaking", 1143),
  createData(10, "Tannery", 876),
];

const rows2 = [
  createData(11, "Automobile", 2811),
  createData(12, "Coppersmithing", 1340),
];

const rows3 = [
  createData(13, "Carpet Weaving", 9660),
  createData(14, "Color", 3850),
];

function AboutWikiEn() {

  return (
    <Box dir="ltr" width="100%" display="flex" flexDirection="column" rowGap={2} py={2}>
      <Box width="100%" display="flex" justifyContent="center">
        <Box component="img" src="/logo/web-logo.svg" alt="Wiki-pisheh logo"/>
      </Box>
      <Typography dir="ltr" variant="h4">
        Wiki-pisheh: Persian vocational terminology based on field investigation
      </Typography>
      <Box width="100%" p={3} display="flex" flexDirection="column" rowGap={2} bgcolor="grey.100" borderRadius={2}
           border="1px solid" borderColor="primary.main">
        <Typography dir="ltr"><span style={{fontWeight: "bold"}}>Language:</span> Persian</Typography>
        <Typography dir="ltr">
          <span style={{fontWeight: "bold"}}>Funded and maintained by</span> Shahrdad Mirzaii
        </Typography>
        <Typography dir="ltr">
          <span style={{fontWeight: "bold"}}>Owner:</span> Koucheh foundation, Tehran, Iran
        </Typography>
        <Typography dir="ltr"><span style={{fontWeight: "bold"}}>URL:</span>
          <MuiLink href="https://wiki-pisheh.ir/" target="_self"> wiki-pisheh.ir</MuiLink>
        </Typography>
        <Typography dir="ltr"><span style={{fontWeight: "bold"}}>Lunched:</span> January 2025/ Bahman 1403</Typography>
        <Typography dir="ltr">
          Aims to provide a comprehensive collection of Persian vocational terms and definitions
        </Typography>
        <Typography dir="ltr">
          No registration needed to use Registration needed to suggest any correction or addition
        </Typography>
      </Box>
      <Typography dir="ltr" align="justify" gutterBottom sx={{mt: 3}}>
        <span style={{fontWeight: "bold"}}>It started</span> some 30 years ago on the personal initiative of Shahrdad
        Mirzaei collecting terms used in different vocational occupations, mainly traditional Iranian ones, with the
        purpose of preserving language specific terms and phrases. The first results were published by Iran University
        Press in the late 1990&#39;s/1370&#39;s. This early initiative continued by engaging a couple of researchers
        supported by Dibaye Publishing founded by Mirzaei early 2000, and then including Fahangan Publishing House and
        Bookstores all over Iran in the decade 2010 up to almost a total stop during Covid-19 Pandemic.
      </Typography>
      <Typography dir="ltr" align="justify" gutterBottom>
        <span style={{fontWeight: "bold"}}>The phase two</span> for the activity started in 2003/1402 aiming at
        digitizing the data for a final presentation in a web based online medium with the hope of profiting from the
        potential interest of any Iranian and non-Iranian Persian speaking individuals or institutions to help
        correcting, improving, and widening the field work of our team to collect the Persian vocational terminology.
      </Typography>
      <Typography dir="ltr" align="justify" gutterBottom>
        <span style={{fontWeight: "bold"}}>Standardizing</span> a structured digitized data set collected so far was the
        next step. Creation of this structured data model, including definitions, pronunciations, synonyms, and some
        other useful textual and visual elements leads to a comprehensive guide directed the developer supervised by the
        editorial board.
      </Typography>
      <Typography dir="ltr" align="justify" gutterBottom>
        <span style={{fontWeight: "bold"}}>Having an action guide</span>, the database was implemented and underwent a
        period of testing and refinement. By early 2024/1402, it was matured enough to support a public-facing web
        platform: wiki-pisheh.ir. This platform offers an interactive interface for entering and editing according to
        the established editorial standards. All contributions are subject to editorial review before being put online
        with public access.
      </Typography>
      <Typography dir="ltr" align="justify" gutterBottom>
        <span style={{fontWeight: "bold"}}>Our database</span> includes now- July 2005- more than 10 vocational
        occupations containing around 32,000 entries, although just 20.000 has passed the final editing and is
        represented on our wiki-pisheh.ir platform, as described in the following table.
      </Typography>
      <Typography dir="ltr" align="justify">
        Wiki-pisheh welcomes any support whatsoever aiming at incorporating as much vocational terms as possible. Please
        contact us in case of any questions related to any term, any vocation, or any kind of support.
      </Typography>
      <Typography dir="ltr" sx={{mb: 2}}>
        <MuiLink component={Link} to="/contact-us">Contact us</MuiLink>
      </Typography>

      <Typography dir="ltr" align="justify" gutterBottom sx={{fontWeight: "bold"}}>
        List of vocations and its terminologies in Wiki-pisheh
      </Typography>

      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <TableContainer component={Paper} sx={{maxWidth: {xs: "100%", md: 500}}}>
          <Table sx={{maxWidth: {xs: "100%", md: 500}}} aria-label="customized table" size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={3}>
                  Terms collected, edited, published, and available online
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="right">No</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Number of terms</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right">{row.no}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.strNumber}</StyledTableCell>
                </StyledTableRow>
              ))}
              <StyledTableRow>
                <StyledTableCell align="center" colSpan={2}>Total</StyledTableCell>
                <StyledTableCell align="right">{addCommas(13632)}</StyledTableCell>
              </StyledTableRow>
            </TableBody>

            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={3}>
                  Terms collected, edited, and available online
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows2.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right">{row.no}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.strNumber}</StyledTableCell>
                </StyledTableRow>
              ))}
              <StyledTableRow>
                <StyledTableCell align="center" colSpan={2}>Total</StyledTableCell>
                <StyledTableCell align="right">{addCommas(4151)}</StyledTableCell>
              </StyledTableRow>
            </TableBody>

            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={3}>
                  Terms in the editing process
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows3.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right">{row.no}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.strNumber}</StyledTableCell>
                </StyledTableRow>
              ))}
              <StyledTableRow>
                <StyledTableCell align="center" colSpan={2}>Total</StyledTableCell>
                <StyledTableCell align="right">{addCommas(13510)}</StyledTableCell>
              </StyledTableRow>
            </TableBody>

            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={3}>
                  Terms in the collecting process
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="right">15</StyledTableCell>
                <StyledTableCell align="right">Bookbinding</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="right">16</StyledTableCell>
                <StyledTableCell align="right">Hairdressing & Stylist</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>

          <Table sx={{maxWidth: {xs: "100%", md: 500}}} aria-label="Total" size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  Total
                </StyledTableCell>
                <StyledTableCell align="center">
                  {addCommas(31293)}
                </StyledTableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

    </Box>
  );
}

export default AboutWikiEn;