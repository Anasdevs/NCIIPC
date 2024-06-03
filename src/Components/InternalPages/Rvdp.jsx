import React from 'react';

const Rvdp = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">NCIIPC Responsible Vulnerability Disclosure Program (RVDP)</h2>
      <p className="text-gray-700 mb-4">
        NCIIPC runs the Responsible Vulnerability Disclosure Program (RVDP) for reporting any Vulnerability in Critical Information Infrastructures that may cause unauthorized access, modification, use, disclosure, disruption, incapacitation or distraction of the same.
      </p>
      <h3 className="text-xl font-bold mb-2">Who can report to RVDP?</h3>
      <p className="text-gray-700 mb-4">
        Interested Developers, Researchers, Security Professionals and Others can report vulnerability in Indian Critical Information Infrastructure.
      </p>
      <h3 className="text-xl font-bold mb-2">How to Report:</h3>
      <p className="text-gray-700 mb-4">
        NCIIPC hosts Vulnerability Disclosure Form at its website nciipc.gov.in. You may fill up the required fields in the Form and submit the same to: rvdp@nciipc.gov.in along with relevant documents, screenshots, urls etc.
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
  );
};

export default Rvdp;