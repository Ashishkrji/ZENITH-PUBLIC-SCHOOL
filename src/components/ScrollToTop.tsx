import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, let the browser handle it (with our new scroll-smooth CSS)
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Otherwise, jump to top on path change
    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior, // Jump instantly for page changes to avoid weird sliding
    });
  }, [pathname, hash]);

  return null;
}
