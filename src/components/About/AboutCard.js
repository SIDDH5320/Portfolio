import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhikumar Shah </span>
            from <span className="purple"> Ahmedabad, Gujarat.</span>
            <br />
            I am currently a Fresher.
            <br />
            I have completed B.E Computer Engineering at Ahmedabad Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Military Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Diary Writing 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live, Life is short"{" "}
          </p>
          <footer className="blockquote-footer">Siddh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
