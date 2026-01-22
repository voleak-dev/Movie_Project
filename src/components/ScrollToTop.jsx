import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // រមៀលទៅលើបង្អស់រាល់ពេលប្តូរ Page
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
};

export default ScrollToTop;