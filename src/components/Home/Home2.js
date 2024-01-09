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
              My name is Shlok Desai and I'm a Computer Science student at the University of Maryland - College Park. 
              I love to play basketball and soccer with my friends. I'm also into videogames (Minecraft, GTA, FIFA, and others).
              But at heart, I am a passionate and curious programmer. I began this journey when I was 11 and in the 5th grade. 
              I joined an after school coding club at Munich International School (MIS). 
              I learned how to code games on&nbsp;
              <a class = "textlink" target="_blank" rel="noreferrer" href="https://scratch.mit.edu/users/suadesai17gmailcom/">Scratch.com</a>
              &nbsp;with Javascript. Then I moved back to the Califorian city 
              I was born in. I began learning new things in Gale Ranch Middle School including basic web and app development. 
              Since then I have coded many projects including: apps, websites, 
              machine learning algorithms; for personal projects,&nbsp; 
              <a class = "textlink" target="_blank" rel="noreferrer" href="https://devpost.com/suadesai17?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">hackathons</a> 
              , internships, and more. You can see some of those projects/publications below and through my LinkedIn.
            </p>
          </Col>
          <Col md={4} style={{ paddingBottom: 20 }}>
            <Tilt>
              <div className="profile-card">
                <img src={"profilepic.jpg"} alt="Profile Pic" className="profile-img"/>
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
