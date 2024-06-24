import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiJavascript1,
  DiJava,
  DiCss3,
  DiReact,
  DiNodejs,
  DiMysql,
  DiAndroid,
  DiAws,
} from "react-icons/di";
import {
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si"
import './Stack.css'; // Import the CSS file

function Techstack() {
  return (
    <Row style={{justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tech="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="MATLAB">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" ><path fill="currentColor" d="M495.855 367.604c-28.98-73.177-53.037-148.231-80.725-221.893c-12.23-31.362-24.198-62.986-40.868-92.33c-6.62-10.535-12.956-22.119-23.814-28.86c-2.739-1.74-5.828-2.479-8.88-2.42c-5.084.096-10.14 2.37-14.025 5.65c-14.571 11.543-23.209 28.334-32.896 43.793c-17.114 28.698-35.156 58.748-63.773 77.396c-13.44 9.485-31.039 10.514-43.995 20.686c-17.72 13.36-29.767 32.31-44.298 48.737c-3.31 3.956-8.436 5.53-12.916 7.67C86.315 243.71 42.945 261.35 0 279.916c36.367 28.132 75.115 53.157 112.208 80.321c10.172-2.018 20.383-6.196 30.877-4.339c16.63 5.207 26.377 21.15 34.006 35.721c15.5 31.765 26.7 65.307 39.253 98.283c20.988-1.493 39.878-12.31 56.104-25.025c31.24-25.307 55.034-58.001 81.23-88.192c12.552-13.199 25.347-28.92 44.197-32.593c19.05-4.601 39.454 2.22 53.581 15.338c19.818 17.719 37.376 38.203 60.544 51.765c-3.108-15.338-10.575-29.101-16.145-43.592M171.844 316.04c-18.284 10.817-37.699 19.717-56.71 29.162c-29.828-19.98-58.889-41.15-88.192-61.856c39.515-17.315 79.635-33.4 119.675-49.545c18.97 14.813 38.547 28.88 57.517 43.693c-8.92 14.248-19.657 27.487-32.29 38.546m40.665-49.646c-18.85-14.167-37.94-27.951-56.508-42.482c11.907-16.226 24.945-31.906 40.565-44.701c10.333-6.62 22.966-8.456 33.703-14.43c25.469-12.714 42.845-36.044 59.434-58.324c-21.271 55.216-43.975 110.654-77.194 159.937"></path></svg>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Tensorflow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="scikit-learn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Android">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="AWS">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="MySQL">
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
