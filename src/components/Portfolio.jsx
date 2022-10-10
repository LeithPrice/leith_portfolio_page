import React from "react";
import Image1 from "../Images/Original_portfolio_page.png";
import Image2 from "../Images/Terminal_app.png";
import Image3 from "../Images/Revonate_rails_app.png";
import Image4 from "../Images/React_portfolio_app.png";

const Portfolio = () => {
  return (
    <section class="d-flex flex-wrap justify-content-center text-center  mt-5">
      <div class="row">
        <div
          class="col-md-4 col-lg-3 col-xl-2 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            class="mt-3"
          >
            <h1>Project One</h1>
            <h3>HTML Portfolio Page</h3>
          </div>
          <div class="image">
            <img src={Image1} alt="one" class="img-fluid"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/Initial_Portfolio_Webpage"
            target="_blank"
            rel="noreferrer"
            class="me-4 text-reset"
          >
            <i class="fab fa-github"></i>
          </a>
          <p>
            This was an excellent opportunity to show what i had learned at
            Coder academy. Creating a Portfolio webpage that had responsive
            design allowed me to showcase my skills in HTML, CSS and SASS
          </p>
        </div>
        <div
          class="col-md-4 col-lg-3 col-xl-2 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            class="mt-3"
          >
            <h1>Project Two</h1>
            <h3>Workshop Software Terminal App</h3>
          </div>
          <div class="image">
            <img src={Image2} class="img-fluid" alt="one"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/Workshop_Terminal_App"
            target="_blank"
            rel="noreferrer"
            class="me-4 text-reset"
          >
            <i class="fab fa-github"></i>
          </a>
          <p>
            A terminal based workshop management software that allows users to
            input customer and vehicle details which are permanently saved in a
            .txt file for ongoing use and then print to screen sales invoices
            for work performed.
          </p>
        </div>
        <div
          class="col-md-4 col-lg-3 col-xl-2 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            class="mt-3"
          >
            <h1>Project Three</h1>
            <h3>A marketplace app written in Ruby on Rails</h3>
          </div>
          <div class="image">
            <img src={Image3} class="img-fluid" alt="one"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/Revonate_Rails_App "
            target="_blank"
            rel="noreferrer"
            class="me-4 text-reset"
          >
            <i class="fab fa-github"></i>
          </a>
          <p>
            A prototype two-sided marketplace in which users can buy and sell
            project cars that require repair. Features include account set up
            and authentication using Devise ruby gem, listing uploads including
            photos and buy / sell history. Authorisation protocols are also in
            place for restricted CRUD actions.
          </p>
        </div>
        <div
          class="col-md-4 col-lg-3 col-xl-2 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            class="mt-3"
          >
            <h1>Project Four</h1>
            <h3>An updated Portfolio page using Reactjs</h3>
          </div>
          <div class="image">
            <img src={Image4} class="img-fluid" alt="one"></img>
          </div>
          <a
            href="https://github.com/LeithPrice/leith_portfolio_page "
            target="_blank"
            rel="noreferrer"
            class="me-4 text-reset"
          >
            <i class="fab fa-github"></i>
          </a>
          <p>
            My current Portfolio page was an excellent opportunity to show my
            knowledge with Vanilla Javascript, React and Bootstrap. With my
            understanding of HTML and CSS, i am happy with the final product.
          </p>
        </div>
        <div
          class="col-md-4 col-lg-3 col-xl-2 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            class="mt-3"
          >
            <h1>Project Five</h1>
            <h3>Full Stack project</h3>
          </div>
          <div class="image">
            <img
              src="/images/ambulance2.jfif"
              class="img-fluid"
              alt="one"
            ></img>
          </div>
          <a
            href="https://www.github.com/LeithPrice "
            target="_blank"
            rel="noreferrer"
            class="me-4 text-reset"
          >
            <i class="fab fa-github"></i>
          </a>
          <p>To Be Completed, Will be updated November 28th 2022.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
