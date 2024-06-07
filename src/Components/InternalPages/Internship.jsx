import React from 'react';
import internshipImg from '../Images/internshipImg.jpg'

const Internship = () => {
  return (
    <div>
      <style>{`
        .sticky-nav {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          background: #eef0f1f6;
          padding: 1rem 0;
          z-index: 10;
        }

        .section:before {
          content: "";
          display: block;
          height: 4rem; 
          margin-top: -4rem;
          visibility: hidden;
        }
        @media (max-width: 768px) {
          .sticky-nav {
            padding: 2rem 0;
          }

          .section:before {
            height: 7rem; 
            margin-top: -7rem;
          }
        }
      
      `}</style>

<div className="container mx-auto px-8 py-12">
  <img src={internshipImg} className='h-[200px] w-full lg:h-[400px] lg:w-full' alt="" srcset="" />
  <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:mt-8 mt-4">NCIIPC SUMMER INTERNSHIP PROGRAM, 2023</h1>
  
  <div className="mb-4 text-center sticky top-0 py-4 bg-[#eef0f1f6] h-25 md:h-16 z-10">
    <a href="#introduction" className="inline-block mr-4 text-blue-500">Introduction</a>
    <a href="#vacancies" className="inline-block mr-4 text-blue-500">Vacancies</a>
    <a href="#locations" className="inline-block mr-4 text-blue-500">Locations</a>
    <a href="#stipend" className="inline-block mr-4 text-blue-500">Stipend</a>
    <a href="#requirements" className="inline-block mr-4 text-blue-500">Requirements</a>
    <a href="#selection-criteria" className="inline-block mr-4 text-blue-500">Selection Criteria</a>
  </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 section" id='introduction'>Introduction</h2>
        <p className="mb-4">
          National Critical Information Infrastructure Protection Centre (NCIIPC), a unit of National Technical Research Organisation (NTRO) is an organization designated as the national nodal agency for protection of Critical Information Infrastructure (CII). NCIIPC is mandated to undertake collaboration with Academic Institutions and encourage Research and Development.
        </p>
        <p className="mb-4">
          At NCIIPC, we recognize the immense talent and capability of student community to be able to contribute to securing our cyberspace. The NCIIPC Summer Internship Program 2023 is a major initiative in this direction.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4" id='objective'>Objective</h2>
        <ul className="list-disc list-outside mb-4 ml-4">
          <li>Provide opportunities to young, well-qualified students and pass outs to contribute in cutting-edge technological and interdisciplinary study, through hands-on projects on issues of CII Security.</li>
          <li>Creating an ecosystem of young cybersecurity professionals with exposure to realistic CII security challenges.</li>
          <li>Encouraging innovation and fresh perspectives into solving cybersecurity’s complex and pressing challenges.</li>
          <li>Leveraging the student community prototype development of solutions that can be converted into production usable solutions in the long term.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4" id='duration'>Duration</h2>
        <p className="mb-4">We are offering a 10-26 week long paid internship to students.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 section" id='vacancies'>Vacancies</h2>
        <p className="mb-4">
          Internships will be granted based on a selection process and all information of results will be made available on our website (<a href="https://nciipc.gov.in/" className="text-blue-500">https://nciipc.gov.in/</a>).
        </p>
        <p className="mb-4">
         There's no current internship openings at NCIIPC, please keep visiting this section for updates regarding internship.
        </p>
        <p className="mb-4">
          <strong>Note:</strong> The internship opportunity does not bestow any claim to continuation or any right to future employment of any kind whatsoever. NCIIPC also reserves the right to terminate the internship at any point without citing the reason. It also reserves the right to reclaim the stipend given to the intern. No extension will be granted beyond 26 weeks.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4" id='eligibility'>Eligibility:</h2>
        <p className="mb-4">Indian citizen and currently enrolled/ graduated from Undergraduate/ Post Graduate programs in the following disciplines.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4" id='discipline'>Discipline:</h2>
        <ul className=" list-decimal list-outside mb-4 ml-8">
          <li>Computer Science & Application</li>
          <li>Information Technology</li>
          <li>Data Science & AI/ML</li>
          <li>Engineering</li>
          <li>Mathematics and Statistics</li>
          <li>Law, Policy and Security Studies</li>
          <li>Management</li>
          <li>Related disciplines with similar coverage of scope</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4" id='working-hours'>Working hours:</h2>
        <p className="mb-4">Full time and in person. In exceptional cases- based on potential value add of the applicant or special extenuating circumstances, remote internships will be permitted.</p>
      </div>

      <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 section" id='locations'>Locations:</h2>
          <p className="mb-4">NCIIPC designated centers at Delhi- HQRS, and zonal offices at Mumbai, Bengaluru and Kolkata. It is noteworthy that some projects will only be available at the Delhi- HQRS.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 section" id='stipend'>Stipend (Program Enrolled or Completed):</h2>
          <ul className="list-disc list-outside mb-4 ml-4">
            <li>Undergraduate: Rs. 30,000/month</li>
            <li>Graduate: Rs. 40,000/month</li>
          </ul>
          <p className="mb-4">Note: The NCIIPC internship cannot be coterminous with any other employment/internships/fellowships etc.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Certificate:</h2>
          <p className="mb-4">On successful completion of internship/project a certificate of completion will be issued by the competent authority.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Non–Disclosure:</h2>
          <p className="mb-4">Interns shall be required to sign a non- disclosure agreement before the start of the internship. Interns will also strictly follow NCIIPC’s Information Security Policy (ISP) during the course of the internship.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 section" id='requirements'>Requirements (To be emailed):</h2>
          <ul className="list-disc list-outside mb-4 ml-4">
            <li>Copy of Govt issued ID card</li>
            <li>NoC from College/ Institution (To be submitted on selection, prior to joining) (Click here for NOC Format)</li>
            <li>02-page CV</li>
            <li>10th, 12th, Graduation, PG, - Degree and Transcripts (Self Certified)</li>
            <li>02 References: Referee Name, Designation, Organisation, Email Contact. (We will contact them when required, no letter required along with application)</li>
            <li>01-page Synopsis of Problem Statement student wants to work on (Click here for Indicative List)</li>
            <li>What is the proposed duration of the internship?</li>
            <li>Which domain/discipline would you like to intern in?</li>
            <li>What is the problem statement?</li>
            <li>How will you approach it?</li>
            <li>Do you have the required skillsets to work through the problem?</li>
            <li>What are the deliverables?</li>
            <li>How will the deliverables be sustained beyond your internship?</li>
            <li>01-page SOP- Why do you want to intern with NCIIPC? Why should NCIIPC select you?</li>
            <li>Any relevant prototype documentation/publication/writing sample/project brief/prototype documentation.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Email address:</h2>
          <p><a href="mailto:helpdesk2@nciipc.gov.in" className='text-indigo-700'>helpdesk2@nciipc.gov.in</a> (With Email Subject line: NCIIPC Summer Internship Application: &lt; Name &gt; - &lt; Discipline &gt; - &lt; Proposed Start - End Date &gt;)</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 section" id='selection-criteria'>Selection Criteria and Process:</h2>
          <p className="mb-4">Internship Screening Committee will screen candidates based on his/her Domain knowledge, Qualification/Scores in Exams, Synopsis, Resume, Certifications, Technical Achievements, Publications and Communication skills.</p>
          <ol className="list-decimal list-outside mb-4 ml-4">
            <li>2 stage assessment process.</li>
            <li>First, a shortlisting based on criteria specified above.</li>
            <li>An Interview list will be published on the website. (Date and Time will be intimated)</li>
            <li>Second, a video interview of shortlisted candidates.</li>
            <li>A Final list of selected candidates will be published on the website.</li>
          </ol>
        </div>


        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Deliverables:</h2>
          <ul className="list-disc list-outside mb-4 ml-4">
            <li>Cyber security related Software Prototype/App/Database/Model developed during internship period with detailed documentation</li>
            <li>Field Visits/Ground findings based impact research with high quality original report</li>
            <li>Analysis Brief/Research Paper</li>
            <li>Projects (Click here for Indicative List)</li>
            <li>Detailed Report of Internship *</li>
            <li>Slide Deck and Presentation on the subject/ activities undertaken by the interns *</li>
          </ul>
          <p>*- Mandatory;</p>
        </div>


        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Final Deliverable Acceptance:</h2>
          <p className="mb-4">Certification of Completion will be subject to a final deliverable acceptance which will be done by an acceptance panel which will evaluate whether the performance and outcome from the internship meets the minimum acceptance standards set by the organization. In cases where the contribution is seen to be exceptional, a Certificate of Excellence will be issued on the recommendation of the panel to not more than 10% of the interns in one cycle.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Intellectual Property:</h2>
          <p>Intellectual property for all work done during the internship will rest with NCIIPC and the intern may not publish, reproduce or convey the final product in any form or fashion. Exceptions may be made on a case-by-case basis after due approval from competent authority.</p>
        </div>
        
    </div>
    </div>
  );
};

export default Internship;