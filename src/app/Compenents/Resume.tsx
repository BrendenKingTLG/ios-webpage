import React from "react";

const Resume = () => {
  return (
    <div className="bg-white px-4 py-8">
      <header>
        <h1>Brenden King</h1>
        <p>Email: brendenking17@outlook.com | Phone: 405-493-3629</p>
        <p>Veteran | Active TS-SCI Clearance</p>
      </header>
      <div className="overflow-scroll">
        <section>
          <h2>Areas of Expertise</h2>
          <p>Software Engineering, Cloud Engineering, DevOps</p>
        </section>
        <section>
          <h2>Skills</h2>
          <p>Languages: Java, Python, JavaScript/TypeScript, Ruby</p>
          <p>
            Frameworks: React.js, Node, Express, Mongoose, MongoDB, Flask,
            Spring
          </p>
          <p>Systems: Linux, Docker, AWS</p>
        </section>
        <section>
          <h2>Education</h2>
          <div>
            <h3>Virginia Tech</h3>
            <p>
              Master’s in Computer Science – Secure Software, Full-Stack Web
              Development, OOP/OOD, Est. Grad. May 2025, GPA: 4.0
            </p>
          </div>
          <div>
            <h3>Western Governors University</h3>
            <p>
              Bachelor of Information Technology – Cloud Computing, Database
              Management, Network Analysis, July 2022, GPA: 3.89
            </p>
          </div>
          <div>
            <h3>Community College of the Air Force</h3>
            <p>Associate of Space Operations, May 2021, GPA: 4.0</p>
          </div>
        </section>
        <section>
          <h2>Professional Experience</h2>
          <div>
            <h3>AWS Software Development Engineer, Amazon</h3>
            <p>July 2022 - Present</p>
            <ul>
              <li>
                Devised and executed an innovative solution to resolve a
                persistent job-sticking issue, resulting in annual savings of
                over $5,400.
              </li>
              <li>
                Led CI/CD automation for three enterprise-level services,
                reduced new domain build workload by 73%.
              </li>
            </ul>
          </div>
          <div>
            <h3>AWS Solutions Architect Intern, Apex Systems</h3>
            <p>January 2022 – April 2022</p>
            <ul>
              <li>
                Developed a custom AWS Lambda function automating a critical
                business process.
              </li>
              <li>
                Constructed a user-friendly web application utilizing various
                AWS services.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>IT Courses and Certifications</h2>
          <p>CompTIA Network+, Security+, CYSA+, Project+</p>
          <p>
            ITIL v4 Foundations, LPI Linux Essentials, AWS Certified Solutions
            Architect – Associate
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
