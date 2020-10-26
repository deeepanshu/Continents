import { useState, useEffect } from 'react';

/**
 * 
 * useWindowSize
 * returns - new window size whenever window size is changed and a boolean which determines if app is opened in mobile.
 * 
 */

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [isMobile, setIsMobile] = useState({})

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(_isMobile => window.innerWidth < 600)
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  
  return {...windowSize, isMobile};
}