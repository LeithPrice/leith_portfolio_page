import About from "./About";
import Portfolio from "./Portfolio";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";
import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Image3 from "../Images/cool-background.png";
import "./app.css";

import EmailSuccess from "./ContactSucess";

const sections = [
  {
    title: "About",
    url: "about",
  },
  {
    title: "Portfolio",
    url: "portfolio",
  },
  {
    title: "Education",
    url: "education",
  },
  {
    title: "Contact",
    url: "contact",
  },
];

function App() {
  return (
    <div
      style={{
        backgroundImage: "url(" + Image3 + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 40vh",
      }}
    >
      <Container>
        <NavBar title="Leith Price" sections={sections}></NavBar>
      </Container>

      <Container>
        <section className="d-flex flex-wrap justify-content-around border-bottom ">
          <div className="text-center w-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="portfolio" element={<Portfolio />} />

              <Route path="education" element={<Education />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/confirmation" element={<EmailSuccess />} />
            </Routes>
          </div>
        </section>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
