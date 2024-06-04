import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  const targetPaths = [
    '/nciipc-internship',
    '/engage',
    '/rvdp',
    '/pentathon-2024',
    '/crowdsourcing',
    '/sih',
  ];

  useEffect(() => {
    if (targetPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
};

export default useScrollToTop;