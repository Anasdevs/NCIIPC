import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  const targetPaths = [
    '/nciipc-internship',
    '/engage-with-nciipc',
    '/rvdp-nciipc',
    '/pentathon-2024',
    '/crowdsourcing',
    '/sih-2023',
  ];

  useEffect(() => {
    if (targetPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
};

export default useScrollToTop;