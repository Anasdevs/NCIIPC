import React from 'react';
import pentathonImg from '../Images/pentathonImg.jpg'

const Pentathon = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">NCIIPC AICTE PENTATHON 2024</h1>
      <img src={pentathonImg} className='w-full h-[60vh] mb-8' alt="" />
      <p className="mb-4">
        Envisioning the mainstreaming and democratizing of Vulnerability Assessment and Penetration Testing (VAPT) space in India, to realize the dream of the <span className="text-blue-600 font-semibold">Atmanirbhar Bharat</span> of the Hon'ble Prime Minister and bring in young talent on an annual basis- the <span className="text-blue-600 font-semibold">National Critical Information Infrastructure Centre (NCIIPC)</span> partnered with <span className="text-blue-600 font-semibold">All India Council of Technical Education (AICTE)</span> to conceptualize the <span className="text-blue-600 font-semibold">NCIIPC AICTE PENTATHON 2024 - India's first national level VAPT challenge for students</span>.
      </p>

      <p className="mb-4">
        The objective of this challenge was to create a talented pool of <span className="text-blue-600 font-semibold">ethical hackers'/Pentesters</span> for finding vulnerabilities in the systems of critical information infrastructure. These ethical hackers would need to have the technical skills, be willing to learn the global best practices, undertake deep research and last of all be innovative with new ideas - it is with such a diverse and talented pool that such a program would succeed. Once vetted for credibility and skill, in coordination with CII management these ethical hackers would be given the opportunity to conduct VAPT exercises at CII entities.
      </p>

      <p className="mb-4">
        <span className="text-blue-600 font-semibold">Pentathon 2024</span> opened up the opportunity for all technical colleges and universities in India to participate in a challenge specially designed to resemble and mimic VAPT at real world Critical Information Infrastructure (CII) entities.
      </p>

      <p className="mb-4">
        Students undertaking this challenge had to solve challenging tasks that the real VAPT professionals were likely to encounter on site at CII entities. While 3 top teams and 3 individuals were awarded with prize money, exceptional top teams and individuals have been shortlisted for the pool of ethical hackers who will undertake VAPT at CII entities under NCIIPC's crowdsourcing for ethical hackers program.
      </p>

      <p className="mb-4">
        Engagement intensified in the lead up to the competition as day long Ethical Hacking and Cybersecurity Workshops which were conducted by NCIIPC experts in 6 cities of Ahmedabad, Pune, Chennai, Mysore, Hyderabad and Kolkata led to considerable interest and participation.
      </p>

      <h2 className="text-2xl font-bold mb-4">Background</h2>
      <p className="mb-4">
        <span className="text-blue-600 font-semibold">Vulnerability Assessment and Penetration Testing (VAPT)</span> allows the tester to probe within the systems to understand the gaps that attackers could potentially exploit to breach the cybersecurity defence perimeter. Once found, solutions or patches can be developed to plug these vulnerabilities. VAPT is a highly sought after skill in the cybersecurity space, because it requires a combination of technical understanding, creativity and determination to persist.
      </p>

      <p className="mb-4">
        CIIs need high quality and skilled VAPT exercise. This is because the nation's CII is always under the threat of cyber-attack by adversaries. So it is important for their defenses to be appropriately calibrated to the latest threats. It is therefore crucially important for them to undertake regular and effective VAPT exercises to be able to proactively discover weaknesses/vulnerabilities and undertake timely remediation. Given the vast expanse of Critical Information Infrastructure it is important to have a wide, talented and credible pool of ethical hackers with the right attitude and intent to be available for this challenging role of VAPT of CII entities.
      </p>

      <h2 className="text-2xl font-bold mb-4">Crowdsourcing of Ethical Hackers</h2>
      <p className="mb-4">
        With the above challenge in mind, NCIIPC decided to undertake a program for the crowdsourcing of ethical hackers from around the country. Once vetted for credibility and skill, in coordination with CII management these ethical hackers would be given the opportunity to conduct VAPT exercises at CII entities, and stand to win attractive cash prizes and recognition in the event of them discovering high grade vulnerabilities. This pool of ethical hackers needs to be democratically sourced and periodically renewed.
      </p>

      <h2 className="text-2xl font-bold mb-4">Competition</h2>
      <p className="mb-4">
        Students undertook a gamified version of the VAPT challenges. Students were tested on a broad range of challenges of varying levels of design and difficulty. This allowed students of all range of abilities and experiences to participate and engage.
      </p>

      <p className="mb-4">
        During the course of the competition, the participants had an opportunity not only to challenge and test themselves but continually learn. Through on portal training resources and specially designed mentorships programs, all students gained no matter which level they started out at. Personal engagement with students was undertaken by NCIIPC officials who were camping at the venue which allowed them to get to know the students and understand new trends and perspectives.
      </p>

      <p className="mb-4">
        Effective and continuous vulnerability assessment and penetration testing is a key intervention to ensure baseline cybersecurity especially in CII entities. Through the design of the Pentathon program we will now be able to democratically crowdsource VAPT talent from among the young students in the country. We are integrating this talent pipeline with our crowdsourcing of ethical-hackers scheme where we have already contacted CII entities willing to undertake VAPT on their systems. By allowing hands-on opportunity for the students to undertake actual VAPT, we are also preparing an Indian cyber-workforce for the future.
      </p>
    </div>
  );
};

export default Pentathon;