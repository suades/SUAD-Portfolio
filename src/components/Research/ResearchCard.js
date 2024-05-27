import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "../Projects/ProjectCard.css"; // Ensure this path matches your project structure
import "../../style.css";

function ResearchCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body style={{ width:"100%"}}>
        <Card.Title>
          <span className="Title__wrapper">{props.title}</span>
        </Card.Title>
        <Card.Text style={{ }}>
          {props.description}
        </Card.Text>
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
        <div className="tags-container">
          {props.tags && props.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ResearchCard;
