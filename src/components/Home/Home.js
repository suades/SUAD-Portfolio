import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
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
      <Home2 />
    </section>
  );
}

export default Home;
