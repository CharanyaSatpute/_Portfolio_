import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css'
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import AchievementCard from './AchievementCard';

function Achievements() {
  const certifications = [
    {
      name: "Coursera C for Everyone",
      description: "Introduction to the basics of programming in C, covering topics such as data structures and algorithms.",
      certificateImage: "coursera-certificate.jpg"  // Example image name
    },
    {
      name: "Ranksheet Level 1 C Programming",
      description: "Basic certification in C programming, covering fundamental concepts and syntax along with advanced topics.",
      certificateImage: "ranksheet-certificate.jpg"  // Example image name
    },
    {
      name: "Coursera AI For Everyone",
      description: "Overview of AI concepts and its applications across various industries, suitable for beginners.",
      certificateImage: "ai-certificate.jpg"  // Example image name
    },
    {
      name: "Oxford Achievers Merit Certificate",
      description: "Recognition for outstanding academic performance and achievements from Oxford Achievers.",
      certificateImage: "oxford-certificate.jpg"  // Example image name
    },
    {
      name: "Adobe UX Foundation Learning Journey Certificate",
      description: "Foundation course covering user experience design principles and methodologies, emphasizing Adobe tools and practices.",
      certificateImage: "adobe-certificate.jpg"  // Example image name
    },
    {
      name: "Introduction to Python Coding Ninjas Certificate",
      description: "Foundation course covering Python programming fundamentals, including syntax, data structures, and algorithms.",
      certificateImage: "codingninjas-certificate.jpg"  // Example image name
    },
    {
      name: "AI for India Event Participation Certificate",
      description: "Building a Face Recognition application using Python, gaining practical experience in machine learning and computer vision.",
      certificateImage: "GuviCertificate.png"  // Example image name
    },
    {
      name: "Data Hack Hours Partipation Certificate",
      description: "A National Level Hackathon conducted by Computer Society of India(CSI) - Hyderabad Chapter",
      certificateImage: "codingninjas-certificate.jpg"  // Example image name
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <Container fluid className="achievements-section">
      <Particle />
      <Container>
        <h1 className="achievements-heading mt-4 mb-5 text-center">My <strong className="purple">Achievements</strong></h1>
        <Row className="justify-content-center">
          {certifications.map((certificate, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <AchievementCard
                name={certificate.name}
                description={certificate.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
