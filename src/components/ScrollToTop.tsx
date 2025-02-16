import { useEffect, PropsWithChildren} from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }: PropsWithChildren) => {
    const { pathname } = useLocation();
    
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, [pathname]);
    
    return <>{children}</>;
  };

export default ScrollToTop;