import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Baqar-Rizvi.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Intern ML ENGINEER [Teknoloje Solutions]"
              date="March 2020 - June 2020"
              content={[
                "Detection MICR number on bank cheques and verification of cheques. The ML model was trained with Tensor Flow and we intergared with flask and deployed on aws.",
                " Utilized the data to find the issues using Topic Modelling and Building models using ANN, CNN to predict the validity of cheque.",
              ]}
            />

            <Resumecontent
              title="Software ENGINEER [Tedamatic Pvt Ltd]"
              date="November 2020 - Current"
              content={[
                "Joined as a mobile application developer worked on e-eductional platform qari o talib as mobile app developer lead deployed application on app store and play store.",
                "Worked on mobile and back end server developement of Revenulator (Doctors managment platform) worked as a lead software engineer for development and architecture. ",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Hash Buckets - 2020]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Indus University-2019 Technical Fest]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Indus University Of Science and Technology [ BS (Computer Science) ] "
              date="2016 - 2021"
              content={[``]}
            />
            <Resumecontent
              title="12TH BOARD [ Karachi, Govt. Degree Boys College Gulzar-e-Hijri ]"
              date="2013 - 2015"
              content={[""]}
            />
            <Resumecontent
              title="10TH BOARD [St Laurence's School, Karachi] "
              date="2013"
              content={[""]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
