import React from "react";
import Image1 from "../Images/Original_portfolio_page.png";
import Image2 from "../Images/Terminal_app.png";
import Image3 from "../Images/Revonate_rails_app.png";
import Image4 from "../Images/React_portfolio_app.png";
import Image5 from "../Images/Image5.png";

const Portfolio = () => {
  return (
    <section className="d-flex flex-wrap justify-content-center text-center  mt-5">
      <div className="row">
        <div
          className="col-md-4 col-lg-4 col-xl-6 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            className="mt-3"
          >
            <h1>Project One</h1>
            <h3>HTML Portfolio Page</h3>
          </div>
          <div className="image">
            <img src={Image1} alt="one" className="img-fluid"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/Initial_Portfolio_Webpage"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-github"> Github Repository</i>
          </a>
          <p>
            This was an excellent opportunity to show what i had initially learned at
            Coder Academy. Creating a Portfolio webpage that had responsive
            design allowed me to showcase my new skills in HTML, CSS and SASS
          </p>
          <a
            href="https://leithprice.netlify.app
          "
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i> Deployed site</i>
            </a>
        </div>
        <div
          className="col-md-4 col-lg-4 col-xl-6 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            className="mt-3"
          >
            <h1>Project Two</h1>
            <h3>Workshop Software Terminal App</h3>
          </div>
          <div className="image">
            <img src={Image2} className="img-fluid" alt="one"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/Workshop_Terminal_App"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-github"> Github Repository</i>
          </a>
          <p>
            A terminal based workshop management software that allows users to
            input customer and vehicle details which are permanently saved in a
            .txt file for ongoing use and then print to screen sales invoices
            for work performed.
          </p>
        </div>
        <div
          className="col-md-4 col-lg-4 col-xl-6 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            className="mt-3"
          >
            <h1>Project Three</h1>
            <h3>A marketplace app written in Ruby on Rails</h3>
          </div>
          <div className="image">
            <img src={Image3} className="img-fluid" alt="one"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/Revonate_Rails_App "
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-github"> Github Repository</i>
          </a>
          <p>
            A prototype two-sided marketplace in which users can buy and sell
            project cars that require repair. Features include account set up
            and authentication using Devise ruby gem, listing uploads including
            photos and buy / sell history. Authorisation protocols are also in
            place for restricted CRUD actions.
          </p>
          <a
            href="https://revonate.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i> Deployed site</i>
            </a>
        </div>
        <div
          className="col-md-4 col-lg-4 col-xl-6 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            className="mt-3"
          >
            <h1>Project Four</h1>
            <h3>An updated Portfolio page using Reactjs</h3>
          </div>
          <div className="image">
            <img src={Image4} className="img-fluid" alt="one"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/leith_portfolio_page "
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-github"> Github Repository</i>
          </a>
          <p>
            My current Portfolio page was an excellent opportunity to show my
            knowledge with Vanilla Javascript, React and Bootstrap. With my
            understanding of HTML and CSS, i am happy with the final product.
          </p>
          <a
            href="https://leithpriceV2.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i> Deployed site</i>
            </a>
        </div>
        <div
          className="col-md-4 col-lg-4 col-xl-6 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            className="mt-3"
          >
            <h1>Project Five</h1>
            <h3>Online Booking System</h3>
          </div>
          <div className="image">
            <img
              src={Image5}
              className="img-fluid"
              alt="one"
            ></img>
          </div>
          <a
            href="https://github.com/LeithPrice/pink-sunrise-dentistry-api"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-github"> Github Repository for Back-end</i>
          </a>
          <a
            href="https://github.com/HardeepSinghAu/pink-sunrise-dentistry"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-github"> Github Repository for Front-end</i>
          </a>
          
          <p>This website advertises a fictional dentistry and has features such as user login and registration as well as automated emails sent from contact form and booking confirmation. The primary feature is the automated online appointment booking system that allows users to see available times to book for specific doctors and dates. Once the appointment is booked, a confirmation email is set to the user, the time is removed from availability  and is added to the users appointment history tab.</p>
          <a
            href="https://pink-sunrise-dentistry.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i> Deployed site</i>
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
