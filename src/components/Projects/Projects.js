import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>Here are my projects:</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Venting Diary"
              description="A mental health app with thousands of downloads I created for privately venting your emotions, journaling, and recording your moods. It has many features like daily notifications, password and biometric lock, audio and text diary entries, mood tracker, and more. It has also won in 2 seperate hackathons"
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.suad.venttome"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SQRT"
              description="A full-stack website created using HTML, CSS, and JS, as an educational math learning resource for all ages. It has calculators, math websites, and more."
              ghLink=""
              demoLink="http://mysqrt.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="VolunteerPedia"
              description="A full-stack website built with HTML, CSS, JS, and Python Flask as a way to gamify the volunteering experience, and connect volunteers with organizations that need volunteers. Won an award at a Hackathon."
              ghLink=""
              demoLink="https://volunteerpedia.herokuapp.com/signin"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MDD Diagnosis Research"
              description="A novel machine learning algorithm to detect MDD based on an individual's activity data i.e. movement combined with light data. The dataset from Kaggle.com included activity data for fifty-five participants in 2021. Our algorithm determined that disturbances in activity is a symptom that can be used to predict Major Depressive Disorder. This insight has the potential to accurately detect and diagnose a person with MDD. "
              ghLink=""
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Student Attendance Management System"
              description="Using C++ and database management this system allows the admin to create and monitor the attendance of students. Each student has their own unique username and password which is stored in a database."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
