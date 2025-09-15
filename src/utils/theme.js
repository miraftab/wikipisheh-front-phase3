import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { faIR } from "@mui/material/locale";
import Vazirmatn from "/fonts/Vazirmatn[wght].woff2";

let theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#006f76",
    },
    secondary: {
      main: "#c7af7e",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Vazirmatn", "sans-serif",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Vazirmatn';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('AriaWeb'), local('AriaWeb-Regular'), url(${Vazirmatn}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
}, faIR);

theme = responsiveFontSizes(theme);

export default theme;