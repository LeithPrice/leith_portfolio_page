import React from "react";
import Image from "../Images/LeithPriceimage.jpg";

const Home = () => {
  return (
    <section class="d-flex flex-wrap justify-content-center text-center  mt-1">
      <div class="row">
        <div class="col-md-12 col-lg-6 col-xl-6 mx-auto mb-4">
          <div class="mt-3">
            <div class="image">
              <img
                src={Image}
                alt="one"
                class="img-fluid"
                width={400}
                height={400}
              ></img>
            </div>
          </div>
        </div>

        <div class="col align-self-end">
          <div class=" col-md-12 col-lg-12 col-xl-12 mx-auto mb-4">
            <div class="mt-3">
              <h1>
                I'm Leith Price a Junior Web Developer from Brisbane, Australia
              </h1>
            </div>
          </div>
          <div class="col-md-12 col-lg-12 col-xl-12 mx-auto mb-4">
            <div class="mt-3">
              <h1>Welcome to my webpage</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
