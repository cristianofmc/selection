import { useEffect, useState } from 'react';

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return isMobile;
};

export default useBreakpoint;
