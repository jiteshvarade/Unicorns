import React from "react";
import PracticeCard from "./PracticeCard";

const ThirdSection = () => {
  return (
    <div className="ThirdSection font-Inter flex flex-col items-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 ">
      <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center mb-4 md:mb-6">
        Our Practice Areas
      </h1>

      <p className="max-w-lg md:max-w-xl lg:max-w-2xl text-gray-400 text-center mb-6 md:mb-8 lg:mb-10">
        Comprehensive legal expertise in personal injury, family law, corporate
        law, criminal defense, and real estate.
      </p>

      <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 justify-center">
        <PracticeCard
          no="01"
          head="Unlawful Termination"
          content="Advocating for your rights and seeking justice in wrongful termination cases."
        />
        <PracticeCard
          no="02"
          head="Sexual Harassment"
          content="Standing up for victims and fighting against sexual harassment in the workplace."
        />
        <PracticeCard
          no="03"
          head="Unpaid Wages"
          content="Ensuring you receive the compensation you rightfully deserve for unpaid wages."
        />
        <PracticeCard
          no="04"
          head="Race Discrimination"
          content="Championing equality and justice in cases of race discrimination."
        />
        <PracticeCard
          no="05"
          head="Sex Discrimination"
          content="Fighting for fairness and equality in cases of sex discrimination."
        />
        <PracticeCard
          no="06"
          head="Workplace Disputes"
          content="Resolving conflicts and protecting your rights in workplace disputes with expertise and commitment."
        />
      </div>
    </div>
  );
};

export default ThirdSection;
