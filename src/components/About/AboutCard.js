import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Configs from '../../Assets/Strings';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="themeColor">{Configs.USER_NAME} </span>
            from <span className="themeColor"> Patna, India.</span>
            <br />Graduated in <span className="themeColor"> Computer Science and Engineering </span>from <span className="themeColor">Indian Institute of Technology Patna (IIT-P)</span> .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Think differently and built things to make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">{Configs.USER_NAME.split(' ')[0]}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
