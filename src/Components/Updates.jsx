import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import cveImg from './Images/cve.webp';
import newslettersImg from './Images/newsletters.webp';

const Updates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [showAllCategory, setShowAllCategory] = useState(null);
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortByDate, setSortByDate] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const currentDate = new Date();
  const daysOld = (date) => {
    const diffTime = Math.abs(currentDate - new Date(date));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const categories = [
    {
      id: 'A',
      title: 'CVE Reports',
      imageUrl: cveImg,
      pdfs: [
        { name: '01-15 May 2024', url: 'https://nciipc.vercel.app/pdfs/01_15_May24_CVE.pdf', date: '2024-05-15' },
        { name: '16-30 April 2024', url: 'https://nciipc.vercel.app/pdfs/16_30_Apr24_CVE.pdf', date: '2024-04-30' },
        { name: '01-15 April 2024', url: 'https://nciipc.vercel.app/pdfs/01_15_Apr24_CVE.pdf', date: '2024-04-15' },
        { name: '16-31 March 2024', url: 'https://nciipc.vercel.app/pdfs/16_31_Mar24_CVE.pdf', date: '2024-03-31' },
        { name: '01-15 March 2024', url: 'https://nciipc.vercel.app/pdfs/01_15_Mar24_CVE.pdf', date: '2024-03-15' },
        { name: '16-29 Feb 2024', url: 'https://nciipc.vercel.app/pdfs/16_29_Feb24_CVE.pdf', date: '2024-02-29' },
        { name: '01-15 Feb 2024', url: 'https://nciipc.vercel.app/pdfs/01_15_Feb24_CVE.pdf', date: '2024-02-15' },
      ],
    },
    {
      id: 'B',
      title: 'Newsletters',
      imageUrl: newslettersImg,
      pdfs: [
        { name: 'April 2024', url: 'https://nciipc.vercel.app/pdfs/NCIIPC_Newsletter_Apr24.pdf', date: '2024-04-30' },
        { name: 'January 2024', url: 'https://nciipc.vercel.app/pdfs/NCIIPC_Newsletter_Jan24.pdf', date: '2024-01-31' },
        { name: 'October 2023', url: 'https://nciipc.vercel.app/pdfs/NCIIPC_Newsletter_Oct23.pdf', date: '2023-10-31' },
        { name: 'July 2023', url: 'https://nciipc.vercel.app/pdfs/NCIIPC_Newsletter_Jul23.pdf', date: '2023-07-31' },
        { name: 'April 2023', url: 'https://nciipc.vercel.app/pdfs/NCIIPC_Newsletter_Apr23.pdf', date: '2023-04-30' },
        { name: 'January 2023', url: 'https://nciipc.vercel.app/pdfs/NCIIPC_Newsletter_Jan23.pdf', date: '2023-01-31' },
      ],
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    pdfs: category.pdfs.filter(pdf => pdf.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }));

  const handleSearchChange = (event) => {
    // Sanitize input by removing any HTML tags
    const sanitizedInput = event.target.value.replace(/<\/?[^>]+(>|$)/g, '');
    setSearchTerm(sanitizedInput);
  };

  const handlePdfClick = (event, pdf) => {
    event.preventDefault();
    if (isMobile) {
      window.open(pdf.url, '_blank');
    } else {
      setSelectedPdf(pdf);
      setShowAllCategory(null);
    }
  };

  const handleViewAllClick = (categoryId) => {
    setShowAllCategory(categoryId);
    setCategorySearchTerm('');
  };

  const handleModalClose = () => {
    setSelectedPdf(null);
    setShowAllCategory(null);
  };

  const handleCategorySearchChange = (event) => {
    setCategorySearchTerm(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSortByDateChange = (event) => {
    setSortByDate(event.target.value);
  };

  const getVisiblePdfs = (pdfs) => {
    return pdfs.filter(pdf => {
      const matchesSearch = pdf.name.toLowerCase().includes(categorySearchTerm.toLowerCase());
      const matchesDate = (!startDate || new Date(pdf.date) >= new Date(startDate)) &&
        (!endDate || new Date(pdf.date) <= new Date(endDate));
      return matchesSearch && matchesDate;
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const sortedPdfs = (pdfs) => {
    switch (sortByDate) {
      case 'latest':
        return pdfs.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return pdfs.sort((a, b) => new Date(a.date) - new Date(b.date));
      default:
        return pdfs;
    }
  };

  const visiblePdfs = sortedPdfs(getVisiblePdfs(categories.find(category => category.id === showAllCategory)?.pdfs || []));

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = visiblePdfs.slice(indexOfFirstItem, indexOfLastItem);

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

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

        <h2 className="lg:text-3xl text-2xl text-titleColor font-bold text-center tracking-wide lg:mt-8 mt-4 mb-2">Updates</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center mb-6">
          <div className="mb-2 lg:mb-0">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {filteredCategories.map(category => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-4">
                <img src={category.imageUrl} alt={category.title} className="h-14 w-14 object-contain mr-4" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.pdfs.slice(0, 4).map((pdf, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => handlePdfClick(event, pdf)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        {pdf.name}
                      </a>
                      {daysOld(pdf.date) <= 30 && (
                        <span className="ml-2 px-2 py-1 bg-[#ff0000] text-white text-xs rounded">New</span>
                      )}
                    </div>
                    <button
                      onClick={(event) => handlePdfClick(event, pdf)}
                      className="px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-label="Preview PDF"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </li>
                ))}
              </ul>
              {category.pdfs.length > 4 && (
                <button
                  className="mt-4 px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => handleViewAllClick(category.id)}
                >
                  View All
                </button>
              )}
            </div>
          ))}
        </div>
        {selectedPdf && !isMobile && (
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
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    src={selectedPdf.url}
                    title={selectedPdf.name}
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAllCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-md overflow-y-auto max-h-screen w-11/12 md:w-2/3 lg:w-1/2">
              <div className="p-4 flex justify-between items-center">
                <h4 className="text-lg font-semibold">
                  {categories.find(category => category.id === showAllCategory).title}
                </h4>
                <button
                  onClick={handleModalClose}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                </button>
              </div>
              <div className="p-4 flex flex-col ">
                <div className="mb-2 lg:flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={categorySearchTerm}
                    onChange={handleCategorySearchChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2 lg:mb-0 lg:w-auto"
                  />
                  <div className="flex items-center">
                    <label htmlFor="startDate" className="sm:mx-2 text-sm">Start date</label>
                    <input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={handleStartDateChange}
                      className="px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:mr-0 mr-4"
                    />
                    <label htmlFor="endDate" className="sm:mx-2 text-sm">End date</label>
                    <input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={handleEndDateChange}
                      className="px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={sortByDate}
                    onChange={handleSortByDateChange}
                    className="px-4 w-full py-2 mb-8 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Sort By Date</option>
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
                <ul className="space-y-2">
                  {currentItems.map((pdf, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <div>
                        <a
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => handlePdfClick(event, pdf)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          {pdf.name}
                        </a>
                        {daysOld(pdf.date) <= 30 && (
                          <span className="ml-2 px-2 py-1 bg-[#ff0000] text-white text-xs rounded">New</span>
                        )}
                      </div>
                      <button
                        onClick={(event) => handlePdfClick(event, pdf)}
                        className="px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Preview PDF"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className={`px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className={`px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentItems.length < ITEMS_PER_PAGE ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentItems.length < ITEMS_PER_PAGE}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Updates;