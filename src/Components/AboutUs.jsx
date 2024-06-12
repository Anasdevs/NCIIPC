import React, { useState, useRef } from 'react';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('vision');
  const [showAllFunctions, setShowAllFunctions] = useState(false);
  const contentRef = useRef(null);

  const handleNavClick = (section, e) => {
    e.preventDefault();
    setActiveSection(section);
  };

  const toggleShowAllFunctions = () => {
    setShowAllFunctions(!showAllFunctions);
  };

  return (
    <div className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="lg:text-4xl text-2xl text-titleColor font-bold md:text-center text-left mt-4 lg:mx-auto">
          About Us
        </h2>
        <div className="lg:text-center md:text-left text-left">
          <p className="mt-4 text-xl leading-8 font-extrabold text-gray-900 lg:text-4xl">
            National Critical Information Infrastructure Protection Centre (NCIIPC)
          </p>
        </div>
        <p className="mt-4  text-lg md:text-xl text-gray-500 lg:mx-auto">
          National Critical Information Infrastructure Protection Centre (NCIIPC), a unit of NTRO, is an organisation of the Government of India created under Sec 70A of the Information Technology Act, 2000 (amended 2008), through a gazette notification on 16th Jan 2014 based in New Delhi, India. It is designated as the National Nodal Agency in respect of Critical Information Infrastructure Protection.
        </p>
      </div>
        <div className="mt-10 flex justify-center">
          <nav className="flex space-x-4">
            <a
              href="#vision"
              onClick={(e) => handleNavClick('vision', e)}
              className={`${activeSection === 'vision' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white'} px-3 py-2 max-h-[45px] rounded-md text-md lg:text-lg font-medium`}
              aria-label="Vision"
            >
              Vision
            </a>
            <a
              href="#mission"
              onClick={(e) => handleNavClick('mission', e)}
              className={`${activeSection === 'mission' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white'} px-3 py-2 max-h-[45px] rounded-md text-md lg:text-lg font-medium`}
              aria-label="Mission"
            >
              Mission
            </a>
            <a
              href="#functions"
              onClick={(e) => handleNavClick('functions', e)}
              className={`${activeSection === 'functions' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white'} px-3 py-2 max-h-[65px] rounded-md text-md lg:text-lg font-medium`}
              aria-label="Functions and Duties"
            >
              Functions & Duties
            </a>
          </nav>
        </div>

        <div ref={contentRef} className="mt-10">
          {activeSection === 'vision' && (
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900" id="vision">Our Vision</h2>
              <p className="mt-2 text-base text-gray-700">
                To facilitate safe, secure and resilient Information Infrastructure for Critical Sectors of the Nation.
              </p>
            </div>
          )}

          {activeSection === 'mission' && (
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900" id="mission">Our Mission</h2>
              <p className="mt-2 text-base text-gray-700">
                To take all necessary measures to facilitate protection of Critical Information Infrastructure, from unauthorized access, modification, use, disclosure, disruption, incapacitation or destruction through coherent coordination, synergy and raising information security awareness among all stakeholders.
              </p>
            </div>
          )}

          {activeSection === 'functions' && (
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900" id="functions">Functions and Duties</h2>
              <ul className="mt-2 text-base text-gray-700 list-disc pl-5">
                <li>National nodal agency for all measures to protect nation's critical information infrastructure.</li>
                <li>Protect and deliver advice that aims to reduce the vulnerabilities of critical information infrastructure, against cyber terrorism, cyber warfare and other threats.</li>
                <li>Identification of all critical information infrastructure elements for approval by the appropriate Government for notifying the same.</li>
                <li>Provide strategic leadership and coherence across Government to respond to cyber security threats against the identified critical information infrastructure.</li>
                <li>Coordinate, share, monitor, collect, analyze and forecast, national level threat to CII for policy guidance, expertise sharing and situational awareness for early warning or alerts. The basic responsibility for protecting CII system shall lie with the agency running that CII.</li>
                {showAllFunctions ? (
                  <>
                    <li>Assisting in the development of appropriate plans, adoption of standards, sharing of best practices and refinement of procurement processes in respect of protection of Critical Information Infrastructure.</li>
                    <li>Evolving protection strategies, policies, vulnerability assessment and auditing methodologies and plans for their dissemination and implementation for protection of Critical Information Infrastructure.</li>
                    <li>Undertaking research and development and allied activities, providing funding (including grants-in-aid) for creating, collaborating and development of innovative future technology for developing and enabling the growth of skills, working closely with wider public sector industries, academia et al and with international partners for protection of Critical Information Infrastructure.</li>
                    <li>Developing or organising training and awareness programs as also nurturing and development of audit and certification agencies for protection of Critical Information Infrastructure.</li>
                    <li>Developing and executing national and international cooperation strategies for protection of Critical Information Infrastructure.</li>
                    <li>Issuing guidelines, advisories and vulnerability or audit notes etc. relating to protection of critical information infrastructure and practices, procedures, prevention and response in consultation with the stake holders, in close coordination with Indian Computer Emergency Response Team and other organisations working in the field or related fields.</li>
                    <li>Exchanging cyber incidents and other information relating to attacks and vulnerabilities with Indian Computer Emergency Response Team and other concerned organisations in the field.</li>
                    <li>In the event of any threat to critical information infrastructure the National Critical Information Infrastructure Protection Centre may call for information and give directions to the critical sectors or persons serving or having a critical impact on Critical Information Infrastructure.</li>
              
                      <button
                        onClick={toggleShowAllFunctions}
                        className="text-blue-500 hover:underline focus:outline-none"
                      >
                        Read Less
                      </button>
                 
                  </>
                ) : (
                
                    <button
                      onClick={toggleShowAllFunctions}
                      className="text-blue-500 hover:underline focus:outline-none"
                    >
                      Read More
                    </button>
               
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;