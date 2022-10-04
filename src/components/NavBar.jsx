import * as React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function NavBar(props) {
  const { title, sections } = props;
  return (
    <React.Fragment>
      <Navbar
        bg="dark"
        variant={"dark"}
        expand="lg"
        style={{ justifyContent: "space-between" }}
      >
        <Navbar.Brand href="/" style={{ padding: "10px" }}>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", justifyContent: "space-between" }}
            navbarScroll
          >
            {sections.map((section) => (
              <Nav.Link as={Link} to={section.url}>
                {section.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
