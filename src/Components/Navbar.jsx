import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logoImg from './Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <nav className="bg-[#3F72AF] text-white pb-4 relative">
      {/* Heading and logo for large screens */}
      {isLargeScreen && (
        <div className="flex justify-between items-center mb-4 bg-[#112D4E] p-4">
          <div className="flex items-center">
            {<img
              src={logoImg}
              alt="Logo"
              className="lg:h-[100px] lg:w-[100px] sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] -mr4 ml-4"
            /> }
            

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
      )}

      {/* Logo, short heading, and hamburger menu for small screens */}
      {!isLargeScreen && (
        <div className="flex justify-between items-center p-2 bg-[#112D4E]">
  <img src={logoImg} alt="Logo" className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]" />
  <div className="flex-grow text-center">
    <h1 className="text-xl text-center font-bold">NCIIPC</h1>
    <h2 className='text-center'>A unit of NTRO</h2>
  </div>
  <button onClick={toggleMenu} aria-label="Toggle Menu">
    {isOpen ? (
      <FontAwesomeIcon icon={faTimes} className="text-2xl" />
    ) : (
      <FontAwesomeIcon icon={faBars} className="text-2xl" />
    )}
  </button>
</div>
      )}

      {/* Navbar links for large screens */}
      {isLargeScreen && (
        <div className="sm:flex justify-center items-center bg-gray-900 sm:bg-transparent transition-all duration-300 ease-in-out z-10 sm:space-x-6">
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            HOME
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            ABOUT US
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            DOCUMENTS
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            UPDATES
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            FORMS
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            LINKS
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            EVENTS
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            CONTACT
          </a>
          <a href="#" className="py-2 sm:py-0 sm:mx-2 text-md">
            ENGAGE WITH NCIIPC
          </a>
        </div>
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-gray-900 text-[#DBE2EF] z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleMenu} aria-label="Close Menu" className="p-4">
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <div className="flex flex-col items-start mt-8 space-y-2 ml-5">
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            HOME
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>
          <a href="#" className="text-md" onClick={toggleMenu}>
            ABOUT US
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            DOCUMENTS
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            UPDATES
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            FORMS
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            LINKS
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            EVENTS
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            CONTACT
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

          <a href="#" className="text-md" onClick={toggleMenu}>
            ENGAGE WITH NCIIPC
          </a>
          <hr class="w-full h-[2px] bg-gray-200 border-0"/>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;