import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import logoImg from './Images/logoSm.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const closeSubmenu = (e) => {
    if (submenuRef.current && !submenuRef.current.contains(e.target)) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 840);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    document.addEventListener('click', closeSubmenu);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      document.removeEventListener('click', closeSubmenu);
    };
  }, []);

  return (
    <nav className="bg-[#3F72AF] text-white pb-4 relative">
      {isLargeScreen ? (
        <div className="flex justify-between items-center mb-4 bg-[#112D4E] p-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logoImg}
                alt="Nciipc Logo"
                className="lg:h-[100px] lg:w-[100px] sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] ml-4 cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex-grow text-center">
            <h1 className="text-2xl font-bold">
              National Critical Information Infrastructure Protection Centre
            </h1>
            <h2 className="text-lg font-bold">
              A unit of National Technical Research Organization
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center p-2 bg-[#112D4E] relative">
          <Link to="/">
            <img src={logoImg} alt="Nciipc Logo" className="h-[60px] w-[100px] sm:h-[70px] sm:w-[70px] cursor-pointer" />
          </Link>
          <div className="flex-grow text-center mr-4">
            <h1 className="text-[14px] text-center font-bold">
              National Critical Information Infrastructure Protection Centre
            </h1>
            <h2 className="text-center text-[15px]">A unit of NTRO</h2>
          </div>
          <div className="w-8 flex justify-end">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <FontAwesomeIcon icon={faBars} className="text-2xl mr-3" />
            </button>
          </div>
        </div>
      )}

      {isLargeScreen ? (
        <div className="sm:flex justify-center items-center bg-gray-900 sm:bg-transparent sm:space-x-6 relative">
          <Link to="/" className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer">
            HOME
          </Link>
          <div className="relative" ref={submenuRef}>
            <button
              onClick={toggleSubmenu}
              className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer flex items-center"
            >
              ABOUT US <FontAwesomeIcon icon={faChevronDown} className="ml-2 mb-1 h-[15px]" />
            </button>
            {isSubmenuOpen && (
              <div className="absolute left-0 mt-4 w-48 bg-[#ffffff] text-[#3F72AF] border z-50 ">
                <Link smooth to="/#about-us" className="block py-2 px-4 text-md cursor-pointer hover:bg-[#3F72AF] hover:text-[#ffffff] ">
                  ABOUT US
                </Link>
                <Link to="/nciipc-offices" className="block py-2 px-4 text-md cursor-pointer hover:bg-[#3F72AF] hover:text-[#ffffff]">
                  OUR OFFICES
                </Link>
              </div>
            )}
          </div>
          <Link smooth to="/#updates" className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer">
            UPDATES
          </Link>
          <Link smooth to="/#trending" className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer">
            WHAT'S NEW
          </Link>
          <Link smooth to="/engage-with-nciipc" className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer">
            ENGAGE WITH NCIIPC
          </Link>
          <Link smooth to="/#documents" className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer">
            DOCUMENTS
          </Link>
          <Link smooth to="/#links" className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer">
            LINKS
          </Link>
          <Link smooth to="/#events" className="py-2 sm:py-0 sm:mx-2 text-md cursor-pointer">
            EVENTS
          </Link>
        </div>
      ) : (
        <div
          className={`fixed top-0 left-0 w-2/3 h-full z-999 bg-gray-900 text-[#DBE2EF] z-20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleMenu} aria-label="Close Menu" className="p-4">
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
          <div className="flex flex-col items-start mt-8 space-y-2 ml-5">
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
            <Link smooth to="/" className="text-md cursor-pointer" onClick={toggleMenu}>
              HOME
            </Link>
            <hr className="w-full h-[2px] bg-gray-200" />
            <div className="relative w-full" ref={submenuRef}>
              <button onClick={toggleSubmenu} className="text-md cursor-pointer w-full text-left py-1 flex items-center">
                ABOUT US <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              {isSubmenuOpen && (
                <div className="pl-4 mt-1">
                  <Link smooth to="/#about-us" className="block py-1 text-md cursor-pointer" onClick={toggleMenu}>
                    ABOUT US
                  </Link>
            <hr className="w-full h-[1px] bg-gray-200 border-0" />
                  <Link to="/nciipc-offices" className="block py-1 text-md cursor-pointer" onClick={toggleMenu}>
                    OUR OFFICES
                  </Link>
                </div>
              )}
            </div>
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
            <Link smooth to="/#updates" className="text-md cursor-pointer" onClick={toggleMenu}>
              UPDATES
            </Link>
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
            <Link smooth to="/#trending" className="text-md cursor-pointer" onClick={toggleMenu}>
              WHAT'S NEW
            </Link>
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
            <Link smooth to="/engage-with-nciipc" className="text-md cursor-pointer" onClick={toggleMenu}>
              ENGAGE WITH NCIIPC
            </Link>
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
            <Link smooth to="/#documents" className="text-md cursor-pointer" onClick={toggleMenu}>
              DOCUMENTS
            </Link>
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
            <Link smooth to="/#links" className="text-md cursor-pointer" onClick={toggleMenu}>
              LINKS
            </Link>
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
            <Link smooth to="/#events" className="text-md cursor-pointer" onClick={toggleMenu}>
              EVENTS
            </Link>
            <hr className="w-full h-[2px] bg-gray-200 border-0" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
