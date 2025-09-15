import { useState, useEffect } from 'react';

const useAdjustedScreenWidth = () => {
  const [adjustedScreenWidth, setAdjustedScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      setAdjustedScreenWidth(screenWidth - scrollbarWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // call the function to calculate the initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return adjustedScreenWidth;
};

export default useAdjustedScreenWidth;