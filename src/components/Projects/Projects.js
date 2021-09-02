import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import QariOTalib from "../../Assets/Projects/Qari.PNG";
import emotion from "../../Assets/Projects/emotion.jpeg";
import micr from "../../Assets/Projects/micr.png";
import leaf from "../../Assets/Projects/leaf.png";
import robo from "../../Assets/Projects/robo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={QariOTalib}
              isBlog={false}
              title="Qari O Talib"
              description="Qari O Talib Application developed with react.js and for web react native for mobile platform backend engineering is done with node.js and mongodb for database system. I have worked as lead mobile application and backend developer."
              link="https://qariotalib.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/baqarali7/Plant-Disease-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={micr}
              isBlog={false}
              title="MICR Number Detection"
              description="This project was made on python open-cv to detect cheque MICR number and the apis was built with flask you can also conribute to the project just by git cloning it and pushing it to main branch.  You can see the code preview! "
              link="https://github.com/baqarali7/MICR-Number-Dectector-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robo}
              isBlog={false}
              title="Robo Friends"
              description="This project was made for the vital understanding of React Framework and understanding of how rest apis and life cycle of react js works you vcan git clone the project and contribute that all for floks. You can see the code and preview!"
              link="https://github.com/baqarali7/RobofriendsApp.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/baqarali7/FacerecognitionReactApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
