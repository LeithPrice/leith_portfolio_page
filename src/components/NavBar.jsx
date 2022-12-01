import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { title, sections } = props;
  return (
    <React.Fragment>
      
      <Navbar
        variant={"light"}
        expand="lg"
        style={{ justifyContent: "space-between", backgroundColor: "#fe4a49", padding: "10px"}}
      >
        <Navbar.Brand href="/" style={{ padding: "10px", color: "Black", fontSize: "40px" }}>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ paddingLeft:"10px"}}>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "200px", justifyContent: "space-between", paddingLeft:"20px" }}
            navbarScroll
          >
            {sections.map((section, index) => (
              <div className="row" key={"section_" + index}>
              <Nav.Link as={Link} to={section.url} style={{  justifyContent: "space-between", paddingLeft:"50px" }}>
                {section.title}
              </Nav.Link>
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </React.Fragment>
  );
}

export default NavBar;
