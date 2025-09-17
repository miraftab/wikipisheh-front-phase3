import { useEffect, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";

function VersionCheck() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch("/version.json", {cache: "no-store"});
        const data = await res.json();
        const latestVersion = data.version;

        // Get version from localStorage
        let currentVersion = localStorage.getItem("appVersion");
        // If no version exists, set it to a very old date
        if (!currentVersion) {
          currentVersion = "1970-01-01T00:00:00Z"; // default old time
          localStorage.setItem("appVersion", currentVersion);
        }

        if (currentVersion !== latestVersion) {
          setOpen(true); // show Snackbar
        }
        localStorage.setItem("appVersion", latestVersion);
      } catch (err) {
        console.error("Failed to check version:", err);
      }
    };

    checkVersion().then((err) => {
      if (err) console.error("Failed to check version:", err);
    });

    const interval = setInterval(checkVersion, 10 * 60 * 1000); // check every 10 minute
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{vertical: "top", horizontal: "center"}}
      onClose={handleRefresh}
      message='نسخهٔ جدیدی از وبگاه در دسترس است.'
      action={
        <Button color="inherit" size="small" onClick={handleRefresh}>
         به‌روزرسانی
        </Button>
      }/>
  );
}

export default VersionCheck;