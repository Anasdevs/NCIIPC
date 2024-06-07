import React from 'react';
import crowdsourcingImg from '../Images/crowdsourcingImg.png'

const Crowdsourcing = () => {
  return (
    <div>
    <div className="container mx-auto px-8 py-12">
  <img src={crowdsourcingImg} className='h-[200px] w-full lg:h-[400px] lg:w-full' alt="" srcset="" />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:mt-8 mt-1">Crowdsourcing of Ethical Hackers</h1>
      <p className="mb-4">
        <a href='https://nciipc.gov.in' className="text-blue-600 font-semibold">NCIIPC</a> has conceived a unique initiative to enrol the best talent of the country in <span className=" font-semibold">vulnerability Assessment and Penetration Testing (VAPT)</span> to secure the CIIs of the country. The scheme envisages enrolling all talented VAPT professionals/Ethical Hackers/Pentesters who are willing to devote time for finding vulnerabilities in CIIs and earn rewards which they are asked during the course of enrolment.
      </p>

      <p className="mb-4">
        In parallel, NCIIPC approaches the CII entities who are willing to get their IT infrastructure security tested and the time when they would like to do the same.
      </p>

      <p className="mb-4">
        NCIIPC after proper vetting of the enrolled personnel is getting controlled Pentesting of CII entities done where the participants finding high & critical level vulnerabilities are suitably rewarded. NCIIPC works with the CII entities to get these vulnerabilities patched so that it is not exploited by threat actors. This innovative scheme, apart from finding vulnerabilities in CIIs also helps create a pool of cyber security researchers who can be deployed by NCIIPC for special assignments.
      </p>

      <p className="mb-4">
        This scheme was launched in Dec 2023 and after enrolment, in a first of its kind exercise in India, NCIIPC conducted a Controlled Pen Testing Exercise from in March 2024, in which security vetted talented ethical hackers/security researchers/VAPT professionals participated to find out the security loopholes in a controlled environment managed by NCIIPC. Reports on the Vulnerabilities discovered during the exercise are sent to the CISO as and when discovered to undertake immediate measures to address the same.
      </p>
    </div>
    </div>
  );
};

export default Crowdsourcing;