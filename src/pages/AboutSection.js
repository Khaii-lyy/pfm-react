import React from 'react';
import '../styles/AboutSection.css';

const courses = [
  {
    title: "Digital Development",
    description:
      "The common core in Digital Development is an important step to acquire the necessary foundations for studying, designing, building, developing, and fine-tuning applications.",
    level: "Specialized Technician",
    type: "Day Classes",
    diploma: "Diploma",
  },
  {
    title: "Digital Development - Web Full Stack",
    description:
      "A specialized technician in Digital Development - Full Stack can perform tasks at any technical level of the stack, covering different layers.",
    level: "Specialized Technician",
    type: "Day Classes",
    diploma: "Diploma",
  },
  {
    title: "Digital Infrastructure",
    description:
      "The common core in Digital Infrastructure equips trainees to design, administer, optimize, and secure IT architectures and infrastructures over a year of training.",
    level: "Specialized Technician",
    type: "Day Classes",
    diploma: "Diploma",
  },
  {
    title: "Administrative Assistant - Accounting",
    description:
      "The Administrative Assistant specialized in Accounting is skilled in managing accounts, invoicing, payroll, and other administrative tasks.",
    level: "Technician",
    type: "Day Classes",
    diploma: "Diploma",
  },
  {
    title: "Business Management - HR",
    description:
      "A Specialized Technician in Business Management with a focus on HR contributes to the implementation of HR policies and handles employee-related data.",
    level: "Specialized Technician",
    type: "Day Classes",
    diploma: "Diploma",
  },
  {
    title: "Python Application Development",
    description:
      "A Python application developer is a specialist in the Python programming language, mastering its rapid evolution and growth over recent years.",
    level: "Specialized Technician",
    type: "Day Classes",
    diploma: "Certification",
  },
];

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2>About Our Programs</h2>
      <p>
        At ISTA Lazaret, we offer a variety of training programs designed to prepare our students for the challenges of tomorrow. Explore our diverse fields of study and find the one that suits your aspirations.
      </p>
      <div className="about-cards">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="card-info">
              <span>{course.level}</span>
              <span>{course.type}</span>
              <span>{course.diploma}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
