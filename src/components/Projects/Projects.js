import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import walletwise from "../../Assets/Projects/walletwise.png";
import volunteer from "../../Assets/Projects/volunteer.jpg";
import venting from "../../Assets/Projects/venting.jpg";
import studentattendance from "../../Assets/Projects/studentattendance.jpg";
import sqrt from "../../Assets/Projects/sqrt.jpg";
import portfolio from "../../Assets/logo.png"

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ zIndex: "2" }}>
          <strong className="purple"> PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>Here are my projects:</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={venting}
              isBlog={false}
              title="Venting Diary"
              description="A mental health app with thousands of downloads I created for privately venting your emotions, journaling, and recording your moods. It has many features like daily notifications, password and biometric lock, audio and text diary entries, mood tracker, and more. It has also won in 2 seperate hackathons"
              ghLink="https://github.com/suades/Venting-Diary"
              demoLink="https://play.google.com/store/apps/details?id=com.suad.venttome"
              tags={["Java", "Kotlin", "Android Studio"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={walletwise}
              isBlog={false}
              title="Wallet Wise Realty"
              description="Wallet Wise takes advantage of available data in the housing market and a consumer's spending and income data to compute which properties they should look into purchasing by curating an Affordability and Preference Score. We incorporate data points such as the the square footage per dollar, the number of rooms, etc. We are able to display this information neatly and accurately to the user."
              ghLink="https://github.com/Joshua152/Bitcamp2024"
              demoLink="https://bitcamp-login.firebaseapp.com/"
              tags={["React", "Firebase", "FastAPI", "HTML/CSS"]} 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="The website you are currently on is my portfolio for all the works I have done and will do. I used React, Bootstrap, Node.js, and HTML/CSS to make this website from scratch. It has a lot of cool animations and information about me. Have a look around! :) "
              ghLink="https://github.com/suades/SUAD-Portfolio"
              demoLink="https://snazzy-gnome-f7832a.netlify.app/"
              tags={["React", "Node.js", "EmailJS", "Bootstrap"]} 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentattendance}
              isBlog={false}
              title="Student Attendance Management System"
              description="Using C++ and database management this system allows the admin to create and monitor the attendance of students. Each student has their own unique username, ID number, and password which is stored in a database. This database is only accessible by the admin user and only the admin can view the attendance of all students."
              ghLink="https://github.com/suades/Student-Attendance-Management-System"
              tags={["C++"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sqrt}
              isBlog={false}
              title="SQRT"
              description="A full-stack website created using HTML, CSS, and JS, as an educational math learning resource for all ages. It has calculators, math websites, and more. It also has an EasyOCR functionality that can read math equations. Winner of Best Educational Hack"
              ghLink="https://github.com/Tabadia/sqrt"
              demoLink="http://mysqrt.xyz/"
              tags={["HTML/CSS", "JavaScript", "EasyOCR"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volunteer}
              isBlog={false}
              title="VolunteerPedia"
              description="A full-stack website built with HTML, CSS, JS, and Python Flask as a way to gamify the volunteering experience, and connect volunteers with organizations that need volunteers. Won an award at a Hackathon."
              ghLink="https://github.com/jianmin-chen/volunteerpedia"
              demoLink="https://volunteerpedia.herokuapp.com/signin"
              tags={["Python Flask", "HTML/CSS"]}              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
