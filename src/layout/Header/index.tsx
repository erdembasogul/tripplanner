import React from "react";
import { Container, Dropdown, FormSelect } from "react-bootstrap";
import "./style.scss";

const Header = () => {
  return (
    <div className="headerWrapper">
      <Container>
        <div className="headerWrapper--header">
          <span className="headerWrapper--header--logo">TripPlanner</span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
