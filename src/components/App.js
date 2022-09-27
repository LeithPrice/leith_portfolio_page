import About from "./About";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";
import { React, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";



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
  return <h1>Loading... </h1>;
}

function MainPage() {
 return (
    <div className="App">
  
      <Container>
        <NavBar
          title="Leith Price Portfolio page"
          sections={sections}
        ></NavBar>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer
        title={"Thank you for visiting my website."}
        description={
          "Feel free to reach out"
        }
      ></Footer>
      </Container>
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
