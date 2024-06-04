import React from 'react';
// import Navbar from '../Navbar';
import Footer from '../Footer';

const Internship = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">NCIIPC SUMMER INTERNSHIP PROGRAM, 2023</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          National Critical Information Infrastructure Protection Centre (NCIIPC), a unit of National Technical Research Organisation (NTRO) is an organization designated as the national nodal agency for protection of Critical Information Infrastructure (CII). NCIIPC is mandated to undertake collaboration with Academic Institutions and encourage Research and Development.
        </p>
        <p className="mb-4">
          At NCIIPC, we recognize the immense talent and capability of student community to be able to contribute to securing our cyberspace. The NCIIPC Summer Internship Program 2023 is a major initiative in this direction.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Objective</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Provide opportunities to young, well-qualified students and pass outs to contribute in cutting-edge technological and interdisciplinary study, through hands-on projects on issues of CII Security.</li>
          <li>Creating an ecosystem of young cybersecurity professionals with exposure to realistic CII security challenges.</li>
          <li>Encouraging innovation and fresh perspectives into solving cybersecurity’s complex and pressing challenges.</li>
          <li>Leveraging the student community prototype development of solutions that can be converted into production usable solutions in the long term.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Duration</h2>
        <p className="mb-4">We are offering a 10-26 week long paid internship to students.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Vacancies</h2>
        <p className="mb-4">
          Internships will be granted based on a selection process and all information of results will be made available on our website (<a href="https://nciipc.gov.in/" className="text-blue-500">https://nciipc.gov.in/</a>).
        </p>
        <p className="mb-4">
          Session I- May 15th 2023 - Dec 31th 2023
          Application Cycle Open: May 03rd
          Application Cycle Closes: May 10th (Midnight IST)
        </p>
        <p className="mb-4">
          <strong>Note:</strong> The internship opportunity does not bestow any claim to continuation or any right to future employment of any kind whatsoever. NCIIPC also reserves the right to terminate the internship at any point without citing the reason. It also reserves the right to reclaim the stipend given to the intern. No extension will be granted beyond 26 weeks.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Internship;