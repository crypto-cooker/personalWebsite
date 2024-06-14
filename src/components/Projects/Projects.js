import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/1.png";
import pic2 from "../../Assets/Projects/2.png";
import pic3 from "../../Assets/Projects/3.png";
import pic4 from "../../Assets/Projects/4.png";
import pic5 from "../../Assets/Projects/5.png";
import pic6 from "../../Assets/Projects/6.png";
import pic7 from "../../Assets/Projects/7.png";
import pic8 from "../../Assets/Projects/8.png";
import pic9 from "../../Assets/Projects/9.png";
import pic10 from "../../Assets/Projects/10.png";
import pic11 from "../../Assets/Projects/11.png";
import pic12 from "../../Assets/Projects/12.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="https://www.flashliquidity.finance/"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic2}
              title="https://pioneerlegends.com/"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic3}
              title="https://swellnetwork.io/"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic4}
              title="https://www.pooperscooper.app/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic5}
              title="https://chain-swap.org/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic6}
              title="https://www.brohalla.gg/lootboxes"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic7}
              title="https://binky.doodlebunnyflr.live/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic8}
              title="https://cryptolegions.app"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic9}
              title="Telegram Group Help Bot"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic10}
              title="Crypto Payment Bot"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic11}
              title="Super Advertisement Discord Bot"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={pic12}
              title="SCOT Token Airdrop Bot"
            />
          </Col>
        </Row>
    </Container>
  );
}

export default Projects;
