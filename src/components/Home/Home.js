import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import About from "../About/About.js";
import Type from "./Type";

// Function to handle mouse enter event


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <div style={{ fontSize:25, padding: 50, textAlign: "left" }}>
                  <Type />
              </div>

              <h2 className="heading-name">
                <strong id="main-name"> Welcome to my Portofolio</strong>
              </h2>    
            </Col>

            
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
