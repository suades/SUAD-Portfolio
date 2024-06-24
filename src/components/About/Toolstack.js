import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiArduino,
  SiAndroidstudio,
  SiEclipseide,
  SiGit,
  SiJupyter,
  SiFirebase

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tech="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="VSCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Arduino">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Slack">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Android Studio">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Eclipse IDE">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Jupyter Notebook">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Firebase">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Toolstack;
