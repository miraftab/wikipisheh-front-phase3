import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ReactGA from "react-ga4";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { default as rtlPlugin }  from "@mui/stylis-plugin-rtl";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import store, { persistor } from "./store.js";
import theme from "./utils/theme.js";
import FullPageSpinner from "./ui/FullPageSpinner.jsx";
import "./fonts.css";
import "./main.css";
import DomainRedirect from "./DomainRedirect.jsx";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

ReactGA.initialize("G-P3M8FFX55L");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme/>
          <PersistGate loading={<FullPageSpinner/>} persistor={persistor}>
            <DomainRedirect/>
          </PersistGate>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  </React.StrictMode>,
);