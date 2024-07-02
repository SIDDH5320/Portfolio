import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Amazon Clone"
              description="An Amazon clone built using React would typically mimic the user interface and functionality of the original Amazon website:"
              ghLink="https://github.com/SIDDH5320/Amazon_Clone"
              demoLink="https://challenge-beee1.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movie-watchlist"
              description="The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies."
              ghLink="https://github.com/SIDDH5320/Movie-Watchlist"
              demoLink="https://siddh5320.github.io/Movie-Watchlist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Car Rental by Sid"
              description="Car rental site made by using Core Php and Mysql. Having Customer login, admin login and car agency login"
              ghLink="https://github.com/SIDDH5320/Car-Rental-by-Siddh"
              demoLink="http://carrentalbysid.000.pe/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Habit Tracker"
              description="This is a habit tracker project of Coding Ninjas made using Reactjs, Redux toolkit, React-router-dom. User can add multiple habits to their list, and can check their weekly status of habit (done, not done, pending)."
              ghLink="https://github.com/SIDDH5320/HabitTracker"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Polling-System-API"
              description="API for Polling Questions. We can Add questions, add options , view, delete options made using NodeJs , MongoDb and for API used Postman"
              ghLink="https://github.com/SIDDH5320/Polling-System-API"
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Alarm Clock"
              description="This is the Alarm clock made by using the vanilla Js. Shows realtime date and time and the sounds work when alarm is set ."
              ghLink="https://github.com/SIDDH5320/alarm_clock.io"
               demoLink="https://siddh5320.github.io/alarm_clock.io/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
