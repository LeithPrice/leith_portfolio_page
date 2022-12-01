import React from "react";
import Resume1 from "../Images/Leith_Price_Resume.pdf";
import Image1 from "../Images/About_Page.jpeg";


const About = () => {
  return (
    <section className="d-flex flex-wrap justify-content-center text-center  mt-5">
      <div className="row">
        <div
          className="col-md-12 col-lg-12 col-xl-12 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "10px" }}
            className="mt-3"
          >
            <p>
            I have spent the majority of my working career self employed both in
            Freight Transport services and Transport repairs and maintenance. I
            have managed teams of staff and been responsible for both business
            development and managing ongoing customer relationships. 
            </p>
            <p>I have
            taken this year to expand my qualifications and experience into a
            new direction of software development. I have undergone extensive
            training to achieve my Diploma in IT with the intention to put the
            new skills to use in a full-stack developer career. 
          </p>
          </div>
          <div className="image">
            <img src={Image1} alt="one" className="img-fluid"></img>
          </div>
          <a
            href={Resume1}
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <i className="fa fa-file"> Click here for my resume</i>
          </a>
          
          <p> I am eager to
            discuss any and all opportunities for internships, work placement or
            junior roles. 
            </p>
            <p>I have had technical training in the following
            languages and frameworks : HTML5, CSS, SASS, JS, React.JS, RUBY,
            RoR, Node.js and PostgreSQL. 
            </p>
            <p>I have experience with professional
            skills and systems such as : Wireframing, GitHUB, Agile. 
            </p><p>I am
            currently increasing my knowledge on : MongoDB, Express.JS and AWS</p>
        
        </div>
      </div>
    </section>
  );
};

export default About;
