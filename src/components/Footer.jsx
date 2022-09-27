import React from "react";
import { Container } from "react-bootstrap";

function Copyright() {
  return (
    <h3 variant="body2" color={"purple"} align="center">
      {"Copyright © Leith Price "}
      {new Date().getFullYear()}
    </h3>
  );
}

const Footer = (props) => {
  return (
    <Container>
      <div class="card" bgcolor="blanchedalmond">
        <h3 variant="h6" align="center" gutterBottom>
          {props.title}
        </h3>

        <h3 variant="subtitle1" align="center" color={"skyblue"}>
          {props.description}
        </h3>
        <Copyright />
      </div>
    </Container>
  );
};

export default Footer;
