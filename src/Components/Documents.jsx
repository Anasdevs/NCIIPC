import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faFileDownload, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import guidelinesImg from './Images/guidelines.png';

const Documents = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState({
    guidelines: false,
    incidentReporting: false,
    vulnerabilityDisclosure: false,
    malwareReporting: false,
  });

  const [selectedPdf, setSelectedPdf] = useState(null);

  const documents = [
    {
      id: 'A',
      title: 'Guidelines',
      imageUrl: guidelinesImg,
      pdfs: [
        { name: 'Cyber Security Audit : Baseline Requirements', url: 'https://nciipc.gov.in/documents/CyberSecurityAuditbaseline.pdf' },
        { name: 'NCIIPC COVID-19 Guidelines', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'SOP : Public-Private-Partnership', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'Guidelines for Identification of CII', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'Rules for the Information Security Practices and Procedures for Protected System', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'National Cyber Security Policy, 2013', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'Roles and Responsibilities of CISOs', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'Guidelines for Protection of CII', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'Evaluating Cyber Security in CII', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'SOP : Incident Response', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'SOP : Audit of CII/Protected Systems', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
      ],
    },
    {
      id: 'B',
      title: 'Incident Reporting Form',
      imageUrl: guidelinesImg,
      pdfs: [
        { name: 'Incident Reporting Form 1', url: 'https://nciipc.vercel.app/pdfs/incidenceReportingForm.pdf'},
      ],
    },
    {
      id: 'C',
      title: 'Vulnerability Disclosure Form',
      imageUrl: guidelinesImg,
      pdfs: [
        { name: 'Vulnerability Disclosure Form', url: 'https://nciipc.vercel.app/pdfs/vulnDisclosureForm.pdf' },
      ],
    },
    {
      id: 'D',
      title: 'Malware Reporting Form',
      imageUrl: guidelinesImg,
      pdfs: [
        { name: 'Malware Reporting Form', url: 'https://nciipc.vercel.app/pdfs/malwareReport.pdf' },
      ],
    },
  ];

  const toggleAccordion = (id) => {
    setIsAccordionOpen(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  const handlePdfClick = (event, pdf) => {
    event.preventDefault();
    setSelectedPdf(pdf);
  };

  const handleModalClose = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-indigo-600 font-semibold tracking-wide uppercase text-center my-6">Documents</h2>
        {documents.map((document) => (
          <div key={document.id} className="w-full bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div
              className="flex items-center p-2 md:p-6 bg-[#3F72AF] text-white cursor-pointer"
              onClick={() => toggleAccordion(document.id)}
            >
              <img src={document.imageUrl} alt={document.title} className="h-16 w-16 object-contain mr-4" />
              <h3 className="md:text-lg sm:text-md font-semibold flex-grow">{document.title}</h3>
              <FontAwesomeIcon className='mr-4' icon={isAccordionOpen[document.id] ? faChevronUp : faChevronDown} />
            </div>
            {isAccordionOpen[document.id] && (
              <div className="p-6 bg-gray-50">
                <ul className="max-h-96 overflow-y-auto">
                  {document.pdfs.map((pdf, index) => (
                    <li key={index} className="mb-2 flex justify-between items-center">
                      <a
                        href="#"
                        onClick={(event) => handlePdfClick(event, pdf)}
                        className="text-blue-500 md:text-md text-sm hover:text-blue-700"
                      >
                        {pdf.name}
                      </a>
                      <div className="flex space-x-2">
                        <button
                          onClick={(event) => handlePdfClick(event, pdf)}
                          className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <a
                          href={pdf.url}
                          download
                          className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <FontAwesomeIcon icon={faFileDownload} />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        {selectedPdf && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-h-screen w-11/12 md:w-2/3 lg:w-1/2">
              <div className="p-4 flex justify-between items-center">
                <h4 className="text-lg font-semibold">{selectedPdf.name}</h4>
                <div className="flex space-x-4">
                  <a
                    href={selectedPdf.url}
                    download
                    className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <FontAwesomeIcon icon={faFileDownload} />
                  </a>
                  <button
                    onClick={handleModalClose}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <iframe src={selectedPdf.url} title={selectedPdf.name} className="w-full h-96"></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;
