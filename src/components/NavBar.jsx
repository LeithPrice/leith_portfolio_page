import * as React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";


function NavBar(props) {
  const { title, sections } = props;
  return (
    <React.Fragment>
        
       <Navbar bg="dark" variant={"dark"} expand="lg" style={{justifyContent: 'space-between'}} >
            <Navbar.Brand href="/home" style={{ padding: '10px'}}>{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px', "justifyContent": "space-between" }}
                    navbarScroll
                     >
                    {sections.map((section) => (
                 
                      <Nav.Link as={Link} to={section.url}>{section.title}</Nav.Link>

                    // </Link>
                    ))}
                </Nav>
             </Navbar.Collapse>
        </Navbar>
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