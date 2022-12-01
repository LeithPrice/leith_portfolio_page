import React from "react";
import Image1 from "../Images/Family_photo.jpg";

const Education = () => {
  return (
    <section className="d-flex flex-wrap justify-content-center text-center  mt-5">
      <div className="row">
        <div
          className="col-md-12 col-lg-12 col-xl-12 mx-auto mb-4 border"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "10px",
            }}
            className="mt-3"
          >
            <p>
              After spending my entire adult life in Transport and Heavy
              Industry, i have a collection of appropriate qualifications.
            </p>
            <p>
              Since making the decision to change industries I have obtained my
              highest qualification yet in Web Development.
            </p>
            <p>
              I am considering continuing on to complete the Bachelor of IT if
              my workload allows it.
            </p>
          </div>
          <div className="image">
            <img src={Image1} alt="one" className="img-fluid"></img>
          </div>

          <p> Certificate 3 in Heavy Vehicle Mechanical Technology</p>
          <p> Certificate 3 in Auto Electrical Technology</p>
          <p> Certificate 2 in Automotive Aircon Technology</p>
          <p> Diploma in IT - Web Development</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
