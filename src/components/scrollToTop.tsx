'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type ScrollToTopProps = {
  scrollToWindowTop?: boolean;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollToWindowTop = true }) => {
  const router = useRouter();

  useEffect(() => {
    if (scrollToWindowTop) {
      window.scrollTo(0, 0);
    } else {
      const pageContainer = document.querySelector('.page-container');
      if (pageContainer) {
        pageContainer.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, [router, scrollToWindowTop]);

  return null;
};

export default ScrollToTop;
