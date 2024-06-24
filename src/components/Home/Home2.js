import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT ME </span> 
            </h1>
            <p className="home-about-body">
              I'm Shlok Desai and I'm a Honors Computer Science student at the University of Maryland, College Park with a minor in Business Analytics. 
              I enjoy working on machine learning and cognitive science projects particularly as an undergraduate RA at &nbsp;
              <a class = "textlink" target="_blank" rel="noreferrer" href="https://www.icon-lab.org/people">ICON Lab</a>
              &nbsp; 
              I have also worked on other projects (including apps, programs, and websites), for fun, 
              &nbsp; 
              <a class = "textlink" target="_blank" rel="noreferrer" href="https://devpost.com/suadesai17?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">hackathons</a> 
              , or class. Outside of academics, I'm a member of Club Boxing 🥊 and love playing pickup basketball 🏀 at Eppley or football ⚽ at the engineering fields. I am also
              a passionate sports fan, of the Golden State Warriors, FC Barcelona, and 49ers. Feel free to explore my portfolio and let's connect and collaborate!
            </p>
          </Col>
          <Col md={4} style={{ paddingBottom: 20 }}>
            <Tilt>
              <div className="profile-card">
                <img src={"profilepic2.jpg"} alt="Profile Pic" className="profile-img"/>
              </div>
            </Tilt>
           </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/suades"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:shlokd@terpmail.umd.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shlokdesai/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shlok._.d/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
