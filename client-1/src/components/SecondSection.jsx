import React from "react";

const SecondSection = () => {
  return (
    <div className="SecondSection  font-Sora flex flex-col md:flex-row justify-center gap-2 md:gap-7 px-4 md:px-8 lg:px-16 my-20 md:my-40 relative">
      <div className=" mx-auto whitespace-nowrap md:mx-0 head font-semibold text-3xl md:text-4xl lg:text-5xl max-w-lg mt-5 text-center md:text-left relative z-10">
        Who Are We?
      </div>

      <div className="mx-auto md:mx-0 text-center md:text-start content max-w-lg md:max-w-2xl lg:max-w-3xl text-base md:text-lg lg:text-xl mt-5">
        <p>
          At our law firm, we are dedicated to providing top-notch legal
          services with integrity and professionalism. Our experienced attorneys
          specialize in personal injury, family law, corporate law, criminal
          defense, and real estate law. We prioritize our clients' needs,
          offering personalized and effective solutions for every legal{" "}
          <span className="bg-green-200 py-1 rounded-full">challenge.</span>
        </p>
        <p className="mt-4">
          Founded on trust and excellence, we strive to make the legal process
          straightforward and stress-free. We are proud to be your trusted legal
          advisors, committed to achieving the best possible outcomes for you
          and your family.
        </p>
        <p className="mt-4">
          Thank you for considering us. We look forward to serving you.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
