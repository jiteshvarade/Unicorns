import React from "react";
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import men4 from '../assets/men4.jpg'
import japanese from '../assets/japanese.svg'
import nigga from '../assets/nigga.svg'
import white from '../assets/white.svg'
import lefthalf from '../assets/lefthalf.jpg'
import righthalf from '../assets/righthalf.svg'
import arrow4 from '../assets/Arrow 4.svg'
import inverted2 from '../assets/inverted2.png'
import invertedcomma from '../assets/invertedcomma.png'

function Attorneys() {

  return (
    <>
      <div className="flex flex-col w-full overflow-x-hidden">
        <p className="text-5xl text-black font-bold text-center mt-4">Our Attorneys</p>
        <p className="text-center mt-3 text-2xl">Our expert lawyers help to solve your case instantly</p>
        <div className="flex justify-evenly items-center flex-wrap">
          <div className="text-center">
            <img src={image1} className="h-[400px] w-[340px] mt-10 rounded-full hover:-translate-y-3 transition-all duration-300" />
            <p className="xl:text-2xl font-bold mt-4 sm:text-3xl">Swift Braze</p>
            <p className=" xl:text-xl sm:text-2xl">Women's lawyer</p>
          </div>
          <div className="text-center">
            <img src={image2} className="h-[400px] w-[340px] mt-10 rounded-full hover:-translate-y-3 transition-all duration-300 " />
            <p className="xl:text-2xl font-bold mt-3 sm:text-3xl">Jenny Jennifer</p>
            <p className="xl:text-xl sm:text-2xl"> Criminal Defence lawyer</p>
          </div>
          <div className="text-center">
            <img src={image3} className="h-[400px] w-[340px] mt-10 rounded-full hover:-translate-y-3 transition-all duration-300" />
            <p className="xl:text-2xl font-bold mt-3 sm:text-3xl">Emily Watson</p>
            <p className="xl:text-xl sm:text-2xl">Corporate lawyer</p>
          </div>
        </div>

        <div className="mt-32 overflow-hidden relative">
          <h1 className="text-5xl text-center mt-20 font-semibold z-[2] sm:text-3xl">
            <span className="bg-green-200 pl-[30rem] py-2 rounded-full sm:pl-[4rem]">What</span> our customer
          </h1>
          <h1 className="text-5xl text-center font-semibold sm:text-3xl">
            says <span>About Us</span>
            <span>
              <img className="xl:w-[200px] translate-x-[48vw] -translate-y-2 sm:w-32 " src="./assets/vector5.svg"/>
            </span>
          </h1>

          <p className="text-gray-700 xl:text-4xl italic text-center mx-auto w-[60%]">
            <span className="text-9xl text-gray-400 flex justify-center -translate-x-[50%] sm:text-3xl">
              <img src={invertedcomma} alt="" className="sm:w-6 sm:h-8" />
              <img src={invertedcomma} alt="" className="sm:w-6 sm:h-8"/>
            </span>
            Working with Wix Freaks Law Firm was a game-changer for me. Their team handled my wrongful termination case.
            I highly recommend their services to anyone in need of exceptional legal representation.
          </p>
          <img src={righthalf} className="xl:w-[40px] absolute xl:translate-x-[96.5vw] xl:z-[2] xl:translate-y-[-60vh] sm:w-[30px] sm:translate-x-[94vw] sm:translate-y-[-30vh]" />
          <span className="text-9xl text-gray-400 flex justify-center mt-4 translate-x-[20%]">
            <img src={inverted2} alt="" className="sm:w-6 sm:h-8"/>
            <img src={inverted2} alt="" className="sm:w-6 sm:h-8" />
          </span>
          <img src={arrow4} alt="arrow" className="xl:text-3xl xl:translate-x-[50vw] sm:text-sm sm:translate-x-[40vw]"/>

          <img src={lefthalf} className="xl:w-[50px] -translate-y-[65vh] sm:w-[30px] sm:translate-y-[-58vh]" />
          <img src={white} className="xl:w-60 xl:h-60 absolute mt-[-22%] xl:translate-x-[-2vw] xl:translate-y-[4vh] sm:translate-y-[-10vh] sm:translate-x-[-8vw]  sm:w-36 sm:h-36" />

          <img src={nigga} className="xl:w-[100px] xl:absolute xl:mt-[-38%] xl:right-20 rounded-full xl:translate-x-2 xl:translate-y-[2vh] sm:translate-x-[-90vw]" />
          <img src={japanese} className="xl:w-[150px] absolute xl:translate-x-[1vw] xl:translate-y-[-63vh] xl:right-32 rounded-full md:translate-x-[85vw] md:translate-y-[-70vh] sm:translate-x-[82vw] sm:translate-y-[-40vh] sm:w-[80px]" />
          <img src={men4} className="xl:w-[250px] absolute mt-[-19%] xl:translate-x-[83vw] xl:translate-y-[-2vh] md:w-[200px] md:translate-y-[-22vh] sm:w-[120px] sm:translate-x-[71vw] sm:translate-y-[-10vh]" />
        </div>
      </div>
    </>
  );
}

export default Attorneys;
