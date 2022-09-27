import * as React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

function NavBar(props) {
  const { title, sections } = props;
  return (
    <React.Fragment>
        
       <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {sections.map((section) => (
                    <NavLink key={section.title} to={section.url}>
                  {section.title}     
                </NavLink>
              ))}
                </Nav>
             </Navbar.Collapse>
        </Navbar>


      
        {/* <Navbar  bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar> 
        <Navbar  bg="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
              {sections.map((section) => (
                <NavLink key={section.title} to={section.url}>
                  {section.title}     
                </NavLink>
              ))}
            </Nav>
          </Container>
        </Navbar> */}
    </React.Fragment>
  );
}

export default NavBar;

// // import React, { Component } from 'react'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// import Home from './Home';
// import Contact from './Contact';
// import About from './About';

// export default class NavbarComp extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>

//                     <Navbar bg="dark" variant={"dark"} expand="lg">
//                         <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand>
//                         <Navbar.Toggle aria-controls="navbarScroll" />
//                         <Navbar.Collapse id="navbarScroll">
//                             <Nav
//                                 className="mr-auto my-2 my-lg-0"
//                                 style={{ maxHeight: '100px' }}
//                                 navbarScroll
//                             >
//                                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                                 <Nav.Link as={Link} to="/about">About</Nav.Link>
//                                 <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

//                             </Nav>

//                         </Navbar.Collapse>
//                     </Navbar>
//                 </div>
//                 <div>
//                     <Switch>
//                         <Route path="/about">
//                             <About />
//                         </Route>
//                         <Route path="/contact">
//                             <Contact />
//                         </Route>
//                         <Route path="/">
//                             <Home />
//                         </Route>
//                     </Switch>
//                 </div>
//             </Router>
//         )
//     }
// }