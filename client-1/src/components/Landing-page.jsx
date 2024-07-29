import React, { useState } from "react";
import Navbar from "./navbar";
import PracticeCard from "./PracticeCard";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import Footer from "./Footer";
import SixthSection from "./SixthSection";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [Sidebar, setSidebar] = useState(false);
  return (
    <div>

      <Navbar setSidebar={setSidebar} Sidebar={Sidebar} />
      <div className={`w-[100vw]  flex-col h-[110vh] bg-white fixed ${Sidebar ? "flex" : "hidden"} z-20 font-bold`} >
        <div className="list ">
          <ul
            className=" flex flex-col items-center list-none gap-8 text-[16px] mt-24"
            onClick={() => setSidebar(!Sidebar)}
          >
            <li className="cursor-pointer hover:underline">Demos</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Services</li>
            <li className="cursor-pointer hover:underline">Attorney</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">All Pages</li>
          </ul>
        </div>
        <div className="btn flex mt-8 justify-center">
          <Link to="/form" className="py-[13px] px-[23px] bg-blue-100 text-blue-900 rounded-full hover:underline" >
            Let's Talk!
          </Link>
        </div>
      </div>

      <div className="md:max-w-[90vw] mx-auto my-20 ">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
      <Footer />

    </div>
  );
};

export default LandingPage;
