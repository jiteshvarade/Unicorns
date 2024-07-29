import React from 'react';
const FourthSection = () => {
  return (
    <div className="FourthSection flex flex-col items-center font-Sora px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 my-20">

      <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl text-center mb-4 md:mb-6'>
        Some Count That Matters
      </h1>
 
      <p className='text-base md:text-lg lg:text-xl text-center mb-6 md:mb-8'>
        Our achievement in the journey of assisting you and fighting for your rights
      </p>
  
      <div className='flex flex-col sm:flex-row gap-8 md:gap-16 lg:gap-28 my-7'>
    
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>
            25
          </h1>
          <p className='text-base md:text-lg lg:text-xl'>Clients</p>
        </div>
       
        <div className='relative flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>
              150+
            </h1>
            <p className='text-base md:text-lg lg:text-xl'>Business Legalities</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>
            1
          </h1>
          <p className='text-base md:text-lg lg:text-xl'>Year Of Journey</p>
        </div>
      </div>
    </div>
  );
}
export default FourthSection;
