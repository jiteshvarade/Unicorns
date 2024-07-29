import React from 'react'
import { Link } from 'react-router-dom';


const FirstSection = () => {
    return (
      <div className="FirstSection p-4 md:p-8 lg:p-16">
        <div className="collaborate flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center">
          <div className="content text-center md:text-left">
            <h1 className='font-Roboto font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-start md:max-w-lg'>
              Clients Success is Our Focus
            </h1>
            <p className='font-Roboto text-base md:text-lg lg:text-xl md:max-w-xl my-5'>
              Committed to your success, our consulting firm delivers tailored strategies and expert guidance, ensuring business excellence through precise solutions and strategic expertise for sustainable growth.
            </p>
            <Link to="/form" className='py-3 px-5 bg-orange-600 text-white font-Roboto rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300'>
              Collaborate With Us
            </Link>
          </div>
          <div className="img hidden md:flex">
            <img src="./images/Discussing.png" alt="Discussing" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
          </div>
        </div>
  
        <div className="flex flex-wrap gap-5 mt-10 justify-center items-center relative overflow-hidden">

          <img src="./images/image15.png" alt="Image 15" className="w-24 md:w-32 lg:w-40" />
          <img src="./images/image19.png" alt="Image 19" className="w-24 md:w-32 lg:w-40" />
          <img src="./images/image20.png" alt="Image 20" className="w-24 md:w-32 lg:w-40" />
          <img src="./images/image21.png" alt="Image 21" className="w-24 md:w-32 lg:w-40" />
          <img src="./images/image23.png" alt="Image 23" className="w-24 md:w-32 lg:w-40" />
        </div>
      </div>
    )
  }
  
  export default FirstSection;
  