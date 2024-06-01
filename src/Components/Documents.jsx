import React, { useState } from 'react';
import cveImg from './Images/cve.jpg'
import guidelinesImg from './Images/guidelines.png'
import trendingImg from './Images/trending.png'
import newslettersImg from './Images/newsletters.png'

const Documents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const documents = [
    {
      id: 'A',
      title: 'CVE Reports',
      imageUrl: cveImg,
      pdfs: [
        { name: '01-15 May 2024', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 2', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
      ],
    },
    {
      id: 'B',
      title: 'Newsletters',
      imageUrl: newslettersImg,
      pdfs: [
        { name: 'PDF 3', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 4', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
      ],
    },
    {
      id: 'C',
      title: 'Guidelines',
      imageUrl: guidelinesImg,
      pdfs: [
        { name: 'PDF 5', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 6', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 7', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 5', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 6', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 7', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 5', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 6', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 7', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 5', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 6', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 7', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
      ],
    },
    {
      id: 'D',
      title: 'Trending',
      imageUrl: trendingImg,
      pdfs: [
        { name: 'PDF 7', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
        { name: 'PDF 8', url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
      ],
    },
  ];

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleViewAllClick = (cardId) => {
    setShowModal(cardId);
  };

  const handleModalClose = () => {
    setShowModal(null);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-indigo-600 font-semibold tracking-wide uppercase text-center my-6">Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="relative"
              onMouseEnter={() => handleCardHover(doc.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoveredCard === doc.id ? 'transform rotate-y-180' : ''}`}>
                <img src={doc.imageUrl} alt={doc.title} className="w-full h-80 object-contain" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
                </div>
              </div>
              {hoveredCard === doc.id && (
                <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center">
                  <h4 className="text-lg font-semibold mb-2">{doc.title}</h4>
                  <ul className="max-h-48 overflow-y-auto">
                    {doc.pdfs.slice(0, 6).map((pdf, index) => (
                      <li key={index} className="mb-1">
                        <a
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                          >
                            {pdf.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {doc.pdfs.length > 6 && (
                      <button
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={() => handleViewAllClick(doc.id)}
                      >
                        View All
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-h-screen">
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">
                  Available PDFs for {documents.find((doc) => doc.id === showModal)?.title}
                </h4>
                <ul className="max-h-96 overflow-y-auto">
                  {documents
                    .find((doc) => doc.id === showModal)
                    ?.pdfs.map((pdf, index) => (
                      <li key={index} className="mb-1">
                        <a
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          {pdf.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-4 text-right">
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Documents;
  
