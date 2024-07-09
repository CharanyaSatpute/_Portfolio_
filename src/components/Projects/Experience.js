import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExpCard from './ExpCard';
import Particle from '../Particle';
import "./Experience.css"

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company: "Brillio",
      description: "Developed a customer support dashboard using React, Spring Boot, and microservices architecture. Implemented user experience enhancements and performance optimizations.",
      image: 'fullstack.png',
      date: "March 2024 - Present"
    },
    {
      title: "RPA Developer & React Development Intern",
      company: "TMI",
      description: "Specialized in web development using React.js and creating automation bots with Microsoft Power Automate. This dual expertise allows me to proficiently build websites and automate tasks, leveraging technology for efficient and effective solutions.",
      image: 'React.png',
      date: "September 2023 - March 2024"
    },
    {
      title: "Web AR Development Intern",
      company: "TMI",
      description: "Led the development of an Augmented Reality Learning Application focused on providing a user interface for correcting jumbled words using Django. Covered database design, front-end and back-end creation, and userflow diagram outlining.",
      image: 'ar.png',
      date: "November 2022 - January 2023"
    },
    {
      title: "Web Development Intern",
      company: "NIRD & PR",
      description: "Spearheaded the development of the RSETI ERP using Django. Oversaw database design, server-side functionality, front-end integration, source code maintenance, and user manual creation for modules.",
      image: 'django.png',
      date: "July 2022 - December 2022"
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading mt-4 mb-5 text-center">My <strong className="purple">Work Experience</strong></h1>
        <Row className="justify-content-center">
          {experiences.map((experience, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <ExpCard
                title={experience.title}
                company={experience.company}
                description={experience.description}
                imgPath={experience.image}
                date={experience.date}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
