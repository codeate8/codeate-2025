import React from "react";
import Calendly from "../components/Calendly";
import card from "../assets/GradientFill.svg";

const Careers = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      Careers
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
