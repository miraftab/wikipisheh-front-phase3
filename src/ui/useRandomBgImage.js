import { useEffect, useState } from "react";

import { bgImages } from "../utils/constants.js";

function useRandomBgImage(setFadeState) {
  const [bgImage, setBgImage] = useState(bgImages[Math.floor(Math.random() * bgImages.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(true); // Trigger fade-out
      setTimeout(() => {
        // Change the image after fade-out
        setBgImage((prev) => bgImages[(bgImages.indexOf(prev) + 1) % bgImages.length]);
        setFadeState(false); // Trigger fade-in
      }, 300); // Match the CSS transition duration
    }, 10000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [bgImage, setFadeState]);

  return bgImage;
}

export default useRandomBgImage;