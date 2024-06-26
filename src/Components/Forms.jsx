import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faExternalLinkAlt, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import incidentReportingImg from './Images/incidentReporting.webp';
import vulnDisclosureImg from './Images/vulnDisclosure.webp';
import malwareReporting from './Images/malwareReporting.webp';

// import aboutBg from './Images/aboutBg.svg'


const forms = [
  {
    title: 'Incident Reporting Form',
    imageUrl: incidentReportingImg,
    pdf: { name: 'Incident Reporting Form', url: 'https://nciipc.vercel.app/pdfs/incidenceReportingForm.pdf' },
  },
  {
    title: 'Vulnerability Disclosure Form',
    imageUrl: vulnDisclosureImg,
    pdf: { name: 'Vulnerability Disclosure Form', url: 'https://nciipc.vercel.app/pdfs/vulnDisclosureForm.pdf' },
  },
  {
    title: 'Malware Reporting Form',
    imageUrl: malwareReporting,
    pdf: { name: 'Malware Reporting Form', url: 'https://nciipc.vercel.app/pdfs/malwareReport.pdf' },
  },
];

const Forms = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePdfClick = (event, form) => {
    event.preventDefault();
    if (isMobile) {
      window.open(form.pdf.url, '_blank');
    } else {
      setSelectedForm(form);
    }
  };

  const handleModalClose = () => {
    setSelectedForm(null);
  };
  

  return (
    <div>
    <div className="py-4 relative" style={{ backgroundImage: `url(/aboutBg.svg)` }}>
      <div className="relative max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 p-4 mx-4 rounded-md">
        <h2 className="lg:text-xl text-titleColor font-bold text-left tracking-wide lg:mb-4">Engage with NCIIPC</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gradient-to-b from-gray-200 to-transparent h-full w-full absolute top-0 left-0 z-0"></div>
              <img src={form.imageUrl} alt={form.title} draggable="false" className="h-24 w-full object-contain p-2 relative z-10 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10" loading="lazy" />
              <div className="p-4 relative z-10">
                <h3 className="text-lg font-semibold mb-2">{form.title}</h3>
                <div className="flex justify-center items-center space-x-2">
                  <button
                    onClick={(event) => handlePdfClick(event, form)}
                    className="px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base transition-colors"
                    aria-label="Preview PDF"
                    >
                    <FontAwesomeIcon icon={faEye} className="mr-2" /> View
                  </button>
                  {!isMobile && (
                    <a
                    href={form.pdf.url}
                    download
                    className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base transition-colors"
                    >
                      <FontAwesomeIcon icon={faFileDownload} className="mr-2" /> Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-h-screen w-11/12 md:w-2/3 lg:w-1/2">
              <div className="p-4 flex justify-between items-center">
                <h4 className="text-lg font-semibold">{selectedForm.pdf.name}</h4>
                <div className="flex space-x-4">
                  <a
                    href={selectedForm.pdf.url}
                    download
                    className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base transition-colors"
                    >
                    <FontAwesomeIcon icon={faFileDownload} />
                  </a>
                  <button
                    onClick={handleModalClose}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base transition-colors"
                    >
                    <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    src={selectedForm.pdf.url}
                    title={selectedForm.pdf.name}
                    className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <Link to="/engage-with-nciipc" className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center transition-colors">
            Engage with NCIIPC <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Forms;
