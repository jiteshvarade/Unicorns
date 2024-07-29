import React from 'react'
import ThirdSection from './ThirdSection'
import FifthSection from './FifthSection'
import Footer from './Footer'
import { useState } from 'react'
import Navbar from './navbar'


const Form = () => {

    const [Sidebar, setSidebar] = useState(false);

    return (
        <>
        
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
          <button className="py-[13px] px-[23px] bg-blue-100 text-blue-900 rounded-full hover:underline">
            Let's Talk!
          </button>
        </div>
      </div>


        <div className='md:max-w-[90vw] mx-auto'>

            <ThirdSection />

            <div className='text-center mt-16 bg-[#FBF6EF] font-Inter py-10 flex flex-col'>

                <div className='bg-[#C9A977] w-[6vw] h-1 mx-auto rounded-full'></div>
                <div className='flex flex-col items-center gap-1'>
                    <div>
                        <h1 className="text-[48px] md:text-[76px] font-PlayFairDisplay text-center ">Get in touch</h1>
                    </div>
                    <div className='text-[17px] text-[#4C4B49] font-medium mb-9 w-[80%] md:w-[55vw] xl:w-[40vw]'>
                        Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nislet adipiscing semper leo lorem urna lectus nunc.
                    </div>
                </div>


                {/* Form */}
                <div className='text-center w-full bg-[#FBF6EF] flex justify-center items-center '>
                    <form className='py-4 w-[80vw] xl:w-1/2  flex flex-col items-center'>
                   


                        <div class='font-medium w-full text-gray-500 text-[17px]  flex flex-col md:flex-row justify-between my-3 text-left'>
                            <div className='border-b-2 flex flex-col w-full'>
                                <label for="name">FIRST NAME</label>
                                <input className=' bg-[#FBF6EF] h-9 w-full' type='text' id='name' />
                            </div>
                            <div className='md:border-s-2 border-b-2 mt-5 md:mt-0 md:flex md:flex-col w-full'>
                                <label for="last" className='md:pl-5'>LAST NAME</label>
                                <input className=' bg-[#FBF6EF] h-9 w-full' type='text' id='last' />
                            </div>
                        </div>
                        <div class='font-medium text-gray-500 text-[17px] flex flex-col md:flex-row md:my-10 w-full text-left'>
                            <div className='border-b-2 mt-5 w-full'>
                                <label for="phone" >PHONE NUMBER</label><br />
                                <input className=' bg-[#FBF6EF] h-9 w-full' type='phone' id='phone' />
                            </div>
                            <div className='md:border-s-2 border-b-2 mt-5 md:flex md:flex-col w-full'>
                                <label for="email"  className='md:pl-5'>EMAIL ADDRESS</label><br />
                                <input className='bg-[#FBF6EF] h-9 w-full' type='email' id='email' />
                            </div>
                        </div>
                        <div className='font-medium text-gray-500 text-[17px] text-left w-full mt-16 md:mt-16'>
                            <label className='text-left' for="message">ADD YOUR MESSAGE</label><br />
                            <input className='border-b-2 bg-[#FBF6EF] h-9 w-full' type='text' id='message' />
                        </div>



                        <div className='text-left self-start mt-10'>
                            <button className='border px-7 py-5 bg-[#C9A977] text-white font-bold'>SEND MESSAGE</button>
                        </div>


                    </form>


                </div>
                    <FifthSection />

            </div>


        </div>

        <Footer />
        </>
    )
}

export default Form