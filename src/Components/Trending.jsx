import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

const Trending = () => {
  const trendingLinks = [
    { id: 1, title: 'NCIIPC Internship', link: '/nciipc-internship' },
    { id: 2, title: 'MERIDIAN CONFERENCE 2024', link: 'https://meridian2024.gov.in/' },
    { id: 3, title: 'NCIIPC RVDP', link: '/rvdp' },
    { id: 4, title: 'NCIIPC-AICTE PENTATHON 2024', link: '/pentathon-2024'},
    { id: 5, title: 'Crowdsourcing Of Ethical Hackers/ Pentesters', link: '/crowdsourcing'},
    { id: 6, title: 'Smart India Hackathon', link: '/sih'}

  ];

  return (
    <div className="max-w-7xl md:mx-auto md-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-6 m-6 mt-[70px] relative">
      <h3 className="text-2xl font-bold text-white mb-4">New Initiatives</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingLinks.map((link) => (
          <div
            key={link.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-gray-800 font-semibold items-start max-w-[150px] min-w-[100px] lg:max-w-[200px] lg:min-w-[100px] text-[12px] md:text-[15px]">{link.title}</span>
            </div>
            <Link
              to={link.link}
              className="px-[10px] py-[5px] text-sm bg-[#112D4E] text-white rounded-md hover:bg-[#2b4a6e] transition-colors duration-300 min-w-[110px] text-center"
            >
              Know More <span><FontAwesomeIcon icon={faUpRightFromSquare} /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;