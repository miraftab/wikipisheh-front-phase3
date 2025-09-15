import { useEffect } from "react";

import App from "./App.jsx";

function DomainRedirect() {
  useEffect(() => {
    const currentDomain = window.location.hostname;
    const desiredDomain = "wiki-pisheh.ir";

    if (currentDomain !== desiredDomain && currentDomain !== "localhost") {
      window.location.href = `https://${desiredDomain}${window.location.pathname}`;
    }
  }, []);

  return <App/>;
}

export default DomainRedirect;