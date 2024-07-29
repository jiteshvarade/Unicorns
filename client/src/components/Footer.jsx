import {React, useState} from 'react';
import SERVER_URL from '../../constants.mjs';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        if(!email || !name || !password) {
            toast.error("Please fill the required credentials");
            return
        }
        const res = await fetch(`${SERVER_URL}/auth/signUp`,
        {
            method:"POST",
            body:JSON.stringify({
                name,
                email,
                password,
            }),
            headers: {"Content-type": "application/json; charset=UTF-8",},
        })

        const data = await res.json();
    
        if(res.status == 200) {    
            console.log("response true");
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            toast.success("SignUp successfull!");
            navigate('/dashboard');

        } else if(res.status == 400) {
            toast.error("Account already exists");
        } else {
            console.log("response false");
            toast.error("Failed to SignUp");
        } 
    }

    return (
        <footer className="SeventhSection text-white font-Sora bg-black py-10">
            <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row lg:justify-between md:items-center gap-10">


                <div className="flex flex-col gap-4 lg:w-[31%]">
                    <div className="mb-4">
                        <img src="./images/LogoW.png" alt="Wix Freaks Law Firm Logo"  />
                    </div>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-[36px] max-w-xs lg:max-w-md'>
                        Wix Freaks Law Firm
                    </h1>
                    <p className='font-light text-gray-400 text-sm md:text-base lg:text-[16px]'>
                        We are dedicated to providing exceptional legal services with integrity and professionalism. Our experienced attorneys are here to assist with personal injury, family law, corporate law, criminal defense, and real estate matters. Contact us for a consultation and let us help you navigate your legal challenges.
                    </p>
                    <div className="logos flex flex-wrap gap-4 mt-4">
                        {['Youtube', 'Facebook', 'Twitter', 'Insta', 'Linkdn'].map((platform) => (
                            <div key={platform} className='cursor-pointer'>
                                <img src={`./images/${platform}.png`} alt={platform} className="w-6 md:w-8 lg:w-10" />
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-4 md:gap-8 font-semibold text-sm md:text-base lg:text-[16px] mt-4'>
                        <div>About</div>
                        <div>Contact</div>
                        <div>+91-98384-49503</div>
                    </div>
                </div>


                <div className='flex flex-row gap-10 lg:gap-28 lg:w-[60%] justify-start lg:justify-center'>

                    <div className='flex flex-col gap-4 w-[10-vw]'>
                        <h1 className='font-bold text-lg md:text-xl lg:text-[18px]'>COMPANY</h1>
                        <ul className='list-none font-Sora font-light text-gray-400 text-sm md:text-base lg:text-[16px] flex flex-col gap-2'>
                           
                            <li>About Us</li>
                            <li>Testimonials</li>
                            <li>Career</li>
                            <li>Partner With Us</li>
                            <li>Provide Assistance</li>
                            <li>Book Us For Talk</li>
                            <li>Request A Call</li>
                        </ul>
                    </div>


                    <div className='flex flex-col gap-4 w-[10-vw]'>
                        <h1 className='font-bold text-lg md:text-xl lg:text-[18px]'>SERVICES</h1>
                        <ul className='list-none font-Sora font-light text-gray-400 text-sm md:text-base lg:text-[16px] flex flex-col gap-2'>
                            
                            <li>All Services</li>
                            <li>Family Law</li>
                            <li>Corporate Law</li>
                            <li>Criminal Defense</li>
                            <li>Ancestry Plan</li>
                            <li>Wrongful Termination</li>
                            <li>Unpaid Wages</li>
                        </ul>
                    </div>
                </div>


                <div className='flex flex-col gap-4 lg:w-[30%]'>
                    <h1 className='font-bold text-lg md:text-xl lg:text-[18px] text-center'>Join Our Newsletter</h1>
                    <input 
                        placeholder='Name' 
                        className='text-black px-3 py-2 font-semibold text-sm md:text-base placeholder:text-gray-700 rounded'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        placeholder='Email'
                        className='text-black px-3 py-2 font-semibold text-sm md:text-base placeholder:text-gray-700 rounded'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        placeholder='Password'
                        className='text-black px-3 py-2 font-semibold text-sm md:text-base placeholder:text-gray-700 rounded'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button 
                        className='px-4 py-2 bg-green-900 text-white text-sm md:text-base font-bold rounded' 
                        onClick={signUp} 
                    > 
                        SIGN ME UP 
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
