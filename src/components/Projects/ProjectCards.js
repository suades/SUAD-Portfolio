import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCard.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-card-img" />
      <Card.Body className="card-body">
        <div>
          <Card.Title>
            <span className="Title__wrapper">{props.title}</span>
          </Card.Title>
          <Card.Text className="card-text">
            {props.description}
          </Card.Text>
        </div>
        <div>
          <div className="buttons-container">
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
          <div className="tags-container">
            {props.tags && props.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
