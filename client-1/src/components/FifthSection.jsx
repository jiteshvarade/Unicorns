import React from "react";

const FifthSection = () => {
  return (
    <div>
      <div className="FifthSection flex flex-col items-center font-Sora my-20">
        <h1 className="font-bold text-[40px] ">Our Attorneys</h1>
        <p className=" text-center">
          Our expert lawyers help to solve you case instantly{" "}
        </p>
        <div className="flex items-center flex-col md:flex-row md:mx-0 mx-4 gap-10 mt-6 font-Inter">
          <div >
            <img
              src="./images/Attorney1.png"
              className="rounded-full md:rounded-none w-[60vw] md:w-full md:border-none border-2 border-slate-400"
              alt=""
            />
            <p className="font-bold text-[24px] text-center">Swift Braze</p>
            <p className="font-semibold text-center ">Women’s lawyer</p>
          </div>
          <div>
            <img
              src="./images/Attorney2.png"
              className="rounded-full w-[60vw] md:w-full border-2  md:rounded-none md:border-none border-slate-400"
              alt=""
            />
            <p className="font-bold text-[24px]  text-center">Jenny jenifier</p>
            <p className="font-semibold  text-center">
              Criminal Defence Lawyer
            </p>
          </div>
          <div>
            <img
              src="./images/Attorney3.png"
              className="rounded-full w-[60vw] md:w-full border-2  md:rounded-none md:border-none border-slate-400"
              alt=""
            />
            <p className="font-bold text-[24px] text-center">Emily watson</p>
            <p className="font-semibold text-center ">Cooperate lawyer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
