/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Calendly from "../components/Calendly";
import card from "../assets/GradientFill.svg";
import Banner from "../components/Banner";

const Careers = () => {
  return (
    <>
      <div>
        <Banner linkName={"Jobs"} message={"Explore Your Career With Us"}/>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-y-3 px-2 py-4">
          <h2 className="text-gray-900 font-bold text-2xl">
            Land Your Dream Job
          </h2>
          <p className="text-center">
          With our tech enabled hiring solution we make it easy to find and land your dream Job
          </p>
        </div>
      <div className="w-full flex flex-col justify-center items-center min-h-screen no-scrollbar">
        <section className="w-full py-6 px-4">
          <iframe src="https://optimhire.com/d/Search-job-iframe?ref_code=codeate-codeate&skill=&positions=&dark_color=3f73ee&light_color=3b74e8" width="100%" height="800" className="shadow-md"></iframe>
        </section>
        <section className="w-full">
          <Calendly
            cardImage={card}
            calendlyLink="https://calendly.com/contact-codeate/30min"
          />
        </section>
      </div>
    </>
  );
};

export default Careers;
