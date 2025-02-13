/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Calendly from "../components/Calendly";
import card from "../assets/GradientFill.svg";

const Careers = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen mt-20 no-scrollbar">
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
  );
};

export default Careers;
