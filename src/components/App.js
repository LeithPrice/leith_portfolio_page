import About from "./About";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Image from "../Images/cool-background.png";

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
    title: "Reviews",
    url: "reviews",
  },
  {
    title: "Education",
    url: "education",
  },
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact",
    url: "contact",
  },
];

function LoadingPage() {
  return (
    <Container>
      <header class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex flex-wrap justify-content-around border-bottom ">
          <div>
            <h1>Leith Price Portfolio Page</h1>
          </div>
          <div>
            <h1>Loading...</h1>
          </div>
        </section>
      </header>
    </Container>
  );
}

function MainPage() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: "url(" + Image + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <NavBar
            title="Leith Price Portfolio Page"
            sections={sections}
          ></NavBar>
        </Container>

        <Container>
          <section class="d-flex flex-wrap justify-content-around border-bottom ">
            <div
              class="text-center p-4 w-100"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="education" element={<Education />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </section>
        </Container>

        <Container>
          <Footer></Footer>
        </Container>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  });

  return isLoading ? <LoadingPage /> : <MainPage />;
}

export default App;
