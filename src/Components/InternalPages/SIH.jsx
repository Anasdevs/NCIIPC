import React from 'react';
import sihImg from '../Images/sihImg.webp';
import { Helmet } from 'react-helmet';


const SIH = () => {
  const handleLinkClick = (e) => {
    if (!window.confirm("You are now leaving an official website of the National Critical Information Infrastructure Protection Centre (NCIIPC). Links to non-NCIIPC sites are provided for the visitor's convenience and do not represent an endorsement by NCIIPC of any commercial or private issues, products, or services.")) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Helmet>
      <title>Smart India Hackathon | NCIIPC</title>
    </Helmet>
      <div className="container mx-auto px-8 py-12">
        <img src={sihImg} className='h-[200px] w-full lg:h-[400px] lg:w-full' alt="SIH" />

        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:mt-8 mt-1">Smart India Hackathon</h1>
        <p className="mb-4">
          The <a href='https://mic.gov.in/' target='_blank' className="text-blue-600 font-semibold" onClick={handleLinkClick}>Ministry of Education's Innovation Cell</a> conducts the annual Smart India Hackathon where it crowdsources the problems/challenges from different organisations and ministries in the form of hackathon challenges and opens it up for all the colleges and universities in the country.
        </p>

        <p className="mb-4">
          In 2023, <a href='https://ntro.gov.in/' target='_blank' className="text-blue-600 font-semibold" onClick={handleLinkClick}>NTRO</a> decided to participate in this hackathon and multiple centres took an initiative to come up with unique problem statements for the challenge.
        </p>

        <p className="mb-4">
          12 Problem statements were announced in the Smart India Hackathon 2023 which attracted 1207 entries in the first stage. After evaluation and average of 5 shortlisted teams were shortlisted for an in-person grand finale. Teams from around the country converged at three different venues for the final.
        </p>

        <p className="mb-4">
          NTRO was privileged by the Hon'ble Prime Minister interacting with one of our finalist teams through video conferencing.
        </p>

        <p className="mb-4">
          The event witnessed a major participation from NTRO. Nominated personnel participated in the mentorship and evaluation exercises which allowed an intensive engagement with over 300 shortlisted young and innovative minds- guiding the team thinking and solution to align with the real world requirements.
        </p>

        <p className="mb-4">
          Given the range and depth of talent spotted and the opportunity cost of our personnel having interacted with them over two days, it was decided to use this forum as an opportunity to announce a special internship drive. Interns are undertaking internships primarily focused on developing further some of the solutions they had developed for the SIH finals. During the internship they will also be offered additional work in line with their skillsets.
        </p>

        <p className="mb-4">
          NTRO's unique problem statements, mentorship and internship opportunity has caught the attention and interest of many young students around the country promising to improve response to collaborate in future endeavors.
        </p>
      </div>
    </div>
  );
};

export default SIH;
