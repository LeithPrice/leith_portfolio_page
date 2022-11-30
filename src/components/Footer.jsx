import React from "react";

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
    <div>
      <footer className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with me on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/leith.price.5"
              target="_blank"
              rel="noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.github.com/LeithPrice "
              target="_blank"
              rel="noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/leithprice"
              target="_blank"
              rel="noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Leith Price Portfolio
                </h6>
                <p>
                  Thank you for visiting my webpage, Please feel free to look
                  through my other socials or send me an email.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Languages</h6>
                <p>
                  <a
                    href="https://en.wikipedia.org/wiki/Ruby_(programming_language)"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    Ruby
                  </a>
                </p>
                <p>
                  <a
                    href="https://en.wikipedia.org/wiki/HTML"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    HTML5
                  </a>
                </p>
                <p>
                  <a
                    href="https://en.wikipedia.org/wiki/CSS"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    CSS(SASS)
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset">
                    Javascript
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Frameworks and Libraries
                </h6>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Ruby_on_Rails"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset">
                    Ruby on Rails
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset">
                    React.js
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset">
                    Bootstrap 5
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Node.js"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset">
                    Node.js
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Brisbane, QLD 4503
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  <a href="mailto:leith.price@gmail.com" className="text-reset">leith.price@gmail.com</a>
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 
                  <a href="tel:0421547423" className="text-reset">+61 421 547 423</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          <Copyright />
          <a className="text-reset fw-bold" href="https://leithprice.netlify.app/">
            Leithprice.netlify.app
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
