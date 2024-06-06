import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleModal = (content) => {
    setModalContent(content);
    setShowModal(!showModal);
  };

  return (
    <footer className="bg-[#0f2033] text-white py-8 px-4 mt-8">
      <div className="container mx-auto">
        {/* First row */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-1 lg:mb-4 text-sm md:text-lg text-[#8db6e9]">
          <a href="https://ntro.gov.in/ntroWeb/loadTendersHome.do" target='_blank' className="hover:text-white lg:my-2 my-1 sm:mr-4 ">Tenders</a>
          <a href="https://ntro.gov.in/ntroWeb/loadRecruitmentsHome.do" target='_blank' className="hover:text-white lg:my-2 my-1 sm:mr-4 ">Recruitments</a>
        </div>
        {/* Second row */}
        <div className="flex flex-wrap justify-center items-center text-sm md:text-lg mb-4 text-[#8db6e9]">
          <button onClick={() => toggleModal('Copyright Policy')} className="hover:text-white mx-2 my-1">
            Copyright Policy
          </button>
          <button onClick={() => toggleModal('Hyperlinking Policy')} className="hover:text-white mx-2 my-1">
            Hyperlinking Policy
          </button>
          <button onClick={() => toggleModal('Privacy Policy')} className="hover:text-white mx-2 my-1">
            Privacy Policy
          </button>
          <button onClick={() => toggleModal('Terms & Conditions')} className="hover:text-white mx-2 my-1">
           Terms & Conditions
          </button>
          <button onClick={() => toggleModal('Web Information Manager')} className="hover:text-white mx-2 my-1">
           Web Information Manager
          </button>
          <button onClick={() => toggleModal('Contact')} className="hover:text-white mx-2 my-1">
            Contact
          </button>
          <button onClick={() => toggleModal('Feedback')} className="hover:text-white mx-2 my-1">
            Feedback
          </button>
        </div>
        {/* Third row */}
        <div className="flex justify-center mb-4">
          <p className="text-gray-200 text-sm md:text-lg text-center">Last updated on: 4 June 2024</p>
        </div>
        {/* Fourth row */}
        <div className="flex justify-center mb-4">
          <p className="text-gray-100 text-sm md:text-lg text-center">This Website is Designed, Developed and Maintained by NCIIPC (A unit of NTRO), Government of India</p>
        </div>
        {/* fifth row */}
        <div className="flex justify-center mb-4">
          <div className="text-center space-y-2 md:space-y-0 md:flex md:justify-center md:items-center md:space-x-4">
  <p className="text-gray-100 text-sm md:text-lg">
    Email: <a href="mailto:helpdesk1@nciipc.gov.in" className="text-blue-300">helpdesk1@nciipc.gov.in</a>
  </p>
  <p className="text-gray-100 text-sm md:text-lg">
    Toll Free: <a href="tel:1800-11-4430" className="text-blue-300">1800-11-4430</a>
  </p>
</div>

        </div>
        {/* sixth row */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-100 text-sm md:text-lgtext-center">Copyright ©{new Date().getFullYear()} - NCIIPC | All Rights Reserved</p>
          <div className="flex space-x-4 mt-6">
            <a href="https://twitter.com/NCIIPC" target='_blank' className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a href="https://www.youtube.com/channel/UCQjCevn5Nyx63MPajgZyd0A" target='_blank' className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="https://www.linkedin.com/company/nciipc-india" target='_blank' className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
      {/* Modal for policies */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center overflow-hidden">
          <div className="bg-white p-8 rounded shadow-lg relative max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] max-h-[90vh] overflow-y-auto">
            <button onClick={() => toggleModal('')} className="absolute top-3 right-5 text-gray-600 hover:text-black">
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            <h2 className="text-gray-800 text-lg font-semibold mb-4 text-center">
              {modalContent}
              <hr />
            </h2>
            <div className="text-gray-600">
              {modalContent === 'Copyright Policy' && (
                <div>
                  <p>Material featured on this website is subject to copyright protection unless otherwise indicated. The material may be downloaded without requiring specific prior permission. Any other proposed use of the material is subject to the approval of NCIIPC. Application for obtaining permission should be made to Web Information Manager.</p>
                </div>
              )}
              {modalContent === 'Hyperlinking Policy' && (
                <div>
                  <h3 className="text-md mb-2 font-bold">Links to external websites/portals</h3>
                  <p>At many places in this website, you shall find links to other websites/portals. These links have been placed for your convenience. NCIIPC is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website should not be assumed as endorsement of any kind. NCIIPC can neither guarantee that these links will work all the time nor it has any control over availability of linked pages.</p>
                  <h3 className="text-md mb-2 mt-4 font-bold">Links to NCIIPC website by other websites</h3>
                  <p>NCIIPC does not object to linking directly to the information that is hosted on this website and no prior permission is required for the same. However, we would like you to inform us about any links provided to this website so that you can be informed of any changes or updates therein. Also, we do not permit our pages to be loaded into frames on your site. The pages belonging to this Portal must load into a newly opened browser tab/window of the User.
</p>
                </div>
              )}
             {modalContent === 'Privacy Policy' && (
                <div>
                  <p>Thanks for visiting website of NCIIPC, and reviewing our privacy policy. We collect no personal information, like names or addresses, when you visit our website. If you choose to provide that information to us, it is only used to fulfil your request for information. We do collect some technical information when you visit to make your visit seamless. The section below explains how we handle and collect technical information when you visit our website.</p>
                  <p className='mt-4 mb-4'>Information collected and stored automatically: When you browse, read pages, or download information on this website, we automatically gather and store certain technical information about your visit. This information never identifies who you are. The information we collect and store about your visit is listed below-</p>
                  <div>
                    <ul className="list-disc pl-6 mb-4 text-md">
                      <li>The Internet domain of your service provider and IP address (an IP address is a number that is automatically assigned to your computer whenever you are surfing the web) from which you access our website.</li>
                      <li>The type of browser (such as Firefox, Netscape, or Internet Explorer) and operating system (Windows, Linux) used to access our site.</li>
                      <li>The date and time you access/accessed our site.</li>
                      <li>The pages/URLs you have visited.</li>
                      <li>If you reached this website from another website, the address of that referring website.</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      This information is only used to help us make the site more useful for you. With this data, we learn about the number of visitors to our site and the types of technology our visitors use. We never track or record information about individuals and their visits.
                    </p>
                    <p className='mt-4'>
                      <span className="font-bold">Cookies:</span> We only use non-persistent cookies or “per-session cookies”. Per-session cookies serve technical purposes, like providing seamless navigation through this website. These cookies do not collect personal information on users and they are deleted as soon as you leave our website. The cookies do not permanently record data and they are not stored on your computer’s hard drive. The cookies are stored in memory and are only available during an active browser session. Again, once you close your browser, the cookie disappears.
                    </p>
                    <p className='mt-4'>
                      If you send us personal information:    If you send us personal information: We do not collect personal information for any purpose other than to respond to you. If you choose to provide us with personal information, like filling out a form, with an e-mail address or postal address, we use that information to respond to your message, and to help you get the information you have requested. We only share the information you give us with another Government agency if your question relates to that agency, or as otherwise required by law. Our website never collects information or creates individual profiles for commercial marketing. While you must provide an email address for a localised response to any incoming questions or comments to us, we recommend that you do NOT include any other personal information.
                    </p>
                    <h3 className='font-bold mt-4'>Site Security:</h3>
                    <ul className="list-disc pl-6 mb-4 text-md">
                      <li>For site security purposes and to ensure that this service remains available to all users, this Government computer system employs commercial software programs to monitor network traffic to identify unauthorised attempts to upload or change information, or otherwise cause damage.</li>
                      <li>Except for authorised law enforcement investigations, no other attempts are made to identify individual users or their usage habits. Raw data logs are used for no other purposes and are scheduled for regular deletion.</li>
                      <li>Unauthorised attempts to upload information or change information on this service are strictly prohibited and may be punishable under the Indian IT Act (2000).</li>
                    </ul>
                  </div>
                </div>
              )}
              {modalContent === 'Terms & Conditions' && (
                <div>
                  <p>This website is designed, developed and maintained by NCIIPC (A unit of NTRO), Government of India.</p>
                  <p className='mt-4'>Though all efforts have been made to ensure the accuracy of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department to obtain appropriate professional advice.</p>
                  <p className='mt-4'>Under no circumstances will this Department be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website. These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.</p>
                  <p className='mt-4'>
                    The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government/private organisations. NCIIPC is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the NCIIPC website and are subject to the privacy and security policies of the owners of the outside website. NCIIPC does not guarantee the availability of such linked pages at all times. NCIIPC cannot authorise the use of copyrighted materials contained in linked websites. Users are advised to request such authorisation from the owner of the linked website. NCIIPC does not guarantee that linked websites comply with Indian Government Web Guidelines.
                  </p>
                </div>
              )}
              {modalContent === 'Web Information Manager' && (
                <div className='text-center'>
                  <h3 className="text-md mb-2">Director A&A</h3>
                  <h3 className="text-md mb-2">Block III, Old JNU Campus</h3>
                  <h3 className="text-md mb-2">New Delhi - 110 067</h3>
                  <h3 className="text-md mb-2">Email: web.admin@gov.in</h3>
                  <h3 className="text-md mb-2">Toll Free: 1800-11-4430</h3>
                </div>
              )}
             {modalContent === 'Contact' && (
  <div className="text-center">
    <h3 className="text-md md:text:lg font-semibold mb-2">National Critical Information Infrastructure Protection Centre</h3>
    <h3 className="text-sm md:text-md font-semibold mb-2">A unit of National Technical Research Organisation</h3>
    <h3 className="text-sm md:text-md mb-4 text-gray-700 font-bold">Block III, Old JNU Campus New Delhi - 110 067</h3>
    <h3 className="text-lg font-semibold mb-4">Toll Free: 1800-11-4430</h3>

    <div className="flex justify-between mb-4 mt-4">
      <div className="text-left">
        <h4 className="text-md font-bold text-gray-800 mb-2">General Help:</h4>
      </div>
      <div className="text-right">
        <p className="text-sm mb-2">
          <a href="mailto:helpdesk1@nciipc.gov.in" className="text-blue-500 hover:text-blue-700">
            helpdesk1@nciipc.gov.in
          </a>
        </p>
        <p className="text-sm">
          <a href="mailto:helpdesk2@nciipc.gov.in" className="text-blue-500 hover:text-blue-700">
            helpdesk2@nciipc.gov.in
          </a>
        </p>
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="text-left">
        <h4 className="text-md font-bold text-gray-800 mb-2">Site Administrator:</h4>
      </div>
      <div className="text-right">
        <p className="text-sm">
          <a href="mailto:web.admin@gov.in" className="text-blue-500 hover:text-blue-700">
            web.admin@gov.in
          </a>
        </p>
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="text-left">
        <h4 className="text-md font-bold text-gray-800 mb-2">Incident Reporting:</h4>
      </div>
      <div className="text-right">
        <p className="text-sm">
          <a href="mailto:ir@nciipc.gov.in" className="text-blue-500 hover:text-blue-700">
            ir@nciipc.gov.in
          </a>
        </p>
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="text-left">
        <h4 className="text-md font-bold text-gray-800 mb-2">Vulnerability Disclosure:</h4>
      </div>
      <div className="text-right">
        <p className="text-sm">
          <a href="mailto:rvdp@nciipc.gov.in" className="text-blue-500 hover:text-blue-700">
            rvdp@nciipc.gov.in
          </a>
        </p>
      </div>
    </div>

    <div className="flex justify-between">
      <div className="text-left">
        <h4 className="text-md font-bold text-gray-800 mb-2">Malware Report:</h4>
      </div>
      <div className="text-right">
        <p className="text-sm">
          <a href="mailto:mal.repository@nciipc.gov.in" className="text-blue-500 hover:text-blue-700">
            mal.repository@nciipc.gov.in
          </a>
        </p>
      </div>
    </div>
  </div>
)}
              {modalContent === 'Feedback' && (
                <div>
                  <h3 className="text-md mb-2">Any feedback related to content, design, service or technological issues w.r.t NCIIPC website maybe sent to:</h3>
                  <div className='text-center mt-4'>
                    <h3 className="text-md mb-2">Director A&A</h3>
                    <h3 className="text-md mb-2">Block III, Old JNU Campus</h3>
                    <h3 className="text-md mb-2">New Delhi - 110 067</h3>
                    <h3 className="text-md mb-2">Email: web.admin@gov.in</h3>
                    <h3 className="text-md mb-2">Toll Free: 1800-11-4430</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;