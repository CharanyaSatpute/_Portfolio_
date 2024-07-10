import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dice from "../../Assets/Projects/dice.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import ttos from "../../Assets/Projects/ttos.png";
import site from "../../Assets/Projects/site.webp";
import alexa from "../../Assets/Projects/alexa.avif";
import mouse from "../../Assets/Projects/mouse.jpg";
import ar from "../../Assets/Projects/ar.png";
import Experience from "./Experience";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Experience />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site}
              isBlog={false}
              title="E-Commerce Site"
              description="Shopper is your ultimate destination for effortless online shopping. Powered by React technology, our platform offers a seamless browsing experience and ensures swift navigation through our diverse collection of [Product Category]. Whether you're searching for everyday essentials or special gifts, [Your E-commerce Site Name] provides a user-friendly interface designed to enhance your shopping journey. Explore our curated selection, enjoy exclusive deals, and discover a new standard of convenience with every click."
              ghLink="https://github.com/CharanyaSatpute/EcommerceSite"
              demoLink="https://ecommercesite-dh4k.onrender.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttos}
              isBlog={false}
              title="Text-To-Speech"
              description="This project is a Text to Speech Converter with a user-friendly web interface. It allows users to convert text into speech and provides additional features such as real-time listening and the option to download the generated audio file. The project is built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/CharanyaSatpute/Text_to_Speech"
              demoLink="https://charanyasatpute.github.io/Text_to_Speech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="Dice Game"
              description="Welcome to the Two Dice Game! This is a simple command-line game where two dice are rolled, and the winner is determined based on the values rolled. Play against another player and see who wins!"
              ghLink="https://github.com/CharanyaSatpute/Dice-Game"
              demoLink="https://charanyasatpute.github.io/Dice-Game/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ar}
              isBlog={false}
              title="ARDjango"
              description="The ARDjango project is a web-based game that combines augmented reality technology with a word jumble game. It allows users to play a word jumble game in an augmented reality environment. The game presents jumbled letters on the screen, and the user needs to pick the correct letters and place them in the correct order to form a word. The game utilizes the MindAR image processing library and three.js library for the augmented reality and 3D rendering functionality."
              ghLink="https://github.com/CharanyaSatpute/ARDjango"
              
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alexa}
              isBlog={false}
              title="My Alexa"
              description="Welcome to my Personal Voice Assistant project! This Python-based assistant responds to voice commands and performs various tasks. It's a fun and interactive way to interact with your computer."
              ghLink="https://github.com/CharanyaSatpute/My_Alexa"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mouse}
              isBlog={false}
              title="Virtual Mouse"
              description="This project is a Virtual Mouse system created using computer vision techniques. It allows users to control the mouse cursor on their computer screen by moving their hand in front of a webcam. The project utilizes Python, OpenCV, Mediapipe, and PyAutoGUI to achieve this functionality."
              ghLink="https://github.com/CharanyaSatpute/Virtual_Mouse"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
   
  );
}

export default Projects;
