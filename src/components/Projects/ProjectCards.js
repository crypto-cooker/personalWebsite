import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {
          props.title.includes("https://") && <a href={props.title} target="_blank" style={{color: "white"}}>{props.title}</a>
        }
        {
          !props.title.includes("https://") && <p style={{color: "white"}}>{props.title}</p>
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
