import React from "react";
import Image from "../Images/LeithPriceimage.jpg";

const Home = () => {
  return (
    <section className="d-flex flex-wrap justify-content-center text-center  mt-1">
      <div className="row">
        <div className="col-md-12 col-lg-6 col-xl-6 mx-auto mb-4">
          <div className="mt-3">
            <div className="image">
              <img
                src={Image}
                alt="one"
                className="img-fluid"
                width={400}
                height={400}
              ></img>
            </div>
          </div>
        </div>

        <div className="col align-self-end">
          <div className=" col-md-12 col-lg-12 col-xl-12 mx-auto mb-4">
            <div className="mt-3">
              <h1>
                I'm Leith Price a Junior Web Developer from Brisbane, Australia
              </h1>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-12 mx-auto mb-4">
            <div className="mt-3">
              <h1>Welcome to my Webpage</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
