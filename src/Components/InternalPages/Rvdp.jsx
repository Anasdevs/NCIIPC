import React from 'react';
import rvdpImg from '../Images/rvdpImg.webp'

const Rvdp = () => {
  return (
    <div>
    <div className="container mx-auto px-8 py-12">
  <img src={rvdpImg} className='h-[200px] w-full lg:h-[400px] lg:w-full' alt="" srcset="" />

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:mt-8 mt-1">NCIIPC Responsible Vulnerability Disclosure Program (RVDP)</h2>
      <p className="text-gray-700 mb-4">
        NCIIPC runs the <span className='font-bold'> Responsible Vulnerability Disclosure Program (RVDP) </span> for reporting any Vulnerability in Critical Information Infrastructures that may cause unauthorized access, modification, use, disclosure, disruption, incapacitation or distraction of the same.
      </p>
      <h3 className="text-xl font-bold mb-2">Who can report to RVDP?</h3>
      <p className="text-gray-700 mb-4">
        Interested Developers, Researchers, Security Professionals and Others can report vulnerability in Indian Critical Information Infrastructure.
      </p>
      <h3 className="text-xl font-bold mb-2">How to Report:</h3>
      <p className="text-gray-700 mb-4">
        NCIIPC hosts Vulnerability Disclosure Form at its website <a href="https://nciipc.gov.in" className='text-indigo-700'> nciipc.gov.in. </a> You may fill up the required fields in the Form and submit the same to <a href="mailto:helpdesk2@nciipc.gov.in" className='text-indigo-700'>rvdp[at]nciipc[dot]gov[dot]in</a>  along with relevant documents, screenshots, urls etc.
      </p>
      <h3 className="text-xl font-bold mb-2">Acknowledgment:</h3>
      <p className="text-gray-700 mb-4">
        By reporting a vulnerability in Critical Sector, you become a part of NCIIPC extended family. NCIIPC will duly acknowledge your contribution appropriately. However, in case you wish to remain anonymous we would respect your privacy.
      </p>
      <div className="text-center mt-4">
        <p className="text-gray-700 mb-2">Join us through our RVDP and let us work together to make India cyber safe.</p>
        <p className="text-orange-500 font-bold mt-4 text-xl">United we stand to make India Cyber Safe</p>
      </div>
    </div>
    </div>
  );
};

export default Rvdp;