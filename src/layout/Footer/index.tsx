import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <Container>
        <div className="footerWrapper--footer">
          <span className="footerWrapper--footer--logo">TripPlanner</span>
          <div className="footerWrapper--footer--socials">
            <div className="footerWrapper--footer--socials--social">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="footerWrapper--footer--socials--social">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
