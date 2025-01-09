import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ scrollToWindowTop = true }) => {
  const location = useLocation();

  useEffect(() => {
    if (scrollToWindowTop) {
      window.scrollTo(0, 0);
    } else {
      const pageContainer = document.querySelector('.page-container');
      if (pageContainer) {
        pageContainer.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, [location, scrollToWindowTop]);

  return null;
};

export default ScrollToTop;