import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faExternalLinkAlt, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimationControls } from 'framer-motion';
import incidentReportingImg from './Images/incidentReporting.webp';
import vulnDisclosureImg from './Images/vulnDisclosure.webp';
import malwareReporting from './Images/malwareReporting.webp';

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
  const controls = useAnimationControls();
  const [ref, inView] = useInView({ triggerOnce: true });

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

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 p-4 mx-4 rounded-md">
        <motion.h2
          className="lg:text-2xl text-xl text-titleColor font-bold text-left tracking-wide lg:mt-2 mb-4"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 }, 
            hidden: { opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 0.2, ease: 'circOut' }}
        >
          Engage with NCIIPC
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 }, 
                hidden: { opacity: 0, scale: 0.8 },
              }}
              transition={{ duration: 0.4, ease: 'circOut' }} 
            >
              <img 
                src={form.imageUrl} 
                alt={form.title} 
                className="h-24 w-full object-contain p-2" 
                loading="lazy" // Lazy load images
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{form.title}</h3>
                <div className="flex justify-center items-center space-x-2">
                  <button
                    onClick={(event) => handlePdfClick
                      (event, form)}
                      className="px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                      aria-label="Preview PDF"
                    >
                      <FontAwesomeIcon icon={faEye} className="mr-2" /> View
                    </button>
                    {!isMobile && (
                      <button
                        href={form.pdf.url}
                        download
                        className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                      >
                        <FontAwesomeIcon icon={faFileDownload} className="mr-2" /> Download
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {selectedForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-h-screen w-11/12 md:w-2/3 lg:w-1/2">
                <div className="p-4 flex justify-between items-center">
                  <h4 className="text-lg font-semibold">{selectedForm.pdf.name}</h4>
                  <div className="flex space-x-4">
                    <button
                      href={selectedForm.pdf.url}
                      download
                      className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                    >
                      <FontAwesomeIcon icon={faFileDownload} />
                    </button>
                    <button
                      onClick={handleModalClose}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
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
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 }, 
                hidden: { opacity: 0, scale: 0.8 },
              }}
              transition={{ duration: 0.3, ease: 'circOut' }} 
            >
              <Link
                to="/engage-with-nciipc"
                className="px-4 py-2 text-indigo-800 rounded-md shadow-md flex items-center"
              >
                Engage with nciipc <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Forms;
  