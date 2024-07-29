import React, { useState } from 'react';
import './getTouch.css';
import SERVER_URL from '../../constants.mjs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const GetTouch = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ContactUs = async (e) => {
      e.preventDefault();

      const res = await fetch(`${SERVER_URL}/contactUs`,
      {
          method:"POST",
          body:JSON.stringify({
              firstName,
              lastName,
              email,
              phoneNo,
              message,
          }),
          headers: {"Content-type": "application/json; charset=UTF-8",},
      })
  
      if(res.ok) {    
          console.log("response true");
          toast.success("Message Sent");
      } else {
          console.log("response false");
          toast.error("Failed to send message!");
      } 
  }

  return (
    <div className="contact-form-container">

      <h1 className='get'>Get in touch</h1>
      <p className="description">
      "Reach out to us for legal assistance. Fill out the form below with your contact details and message, and our team will respond promptly."
      </p>
       <div className="form-container">
                  <form>
                      <div className="form-row">
                          <input type="text" placeholder="FIRST NAME" 
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                          />
                          <div className="vertical-line"></div>
                          <input type="text" placeholder="LAST NAME" 
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                          />
                      </div>
                      <div className="form-row">
                          <input type="text" placeholder="PHONE NUMBER" 
                            value={phoneNo}
                            onChange={(e) => {
                                setPhoneNo(e.target.value);
                            }}
                          />
                          <div className="vertical-line"></div>
                          <input type="email" placeholder="EMAIL ADDRESS" 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                          />
                      </div>
                      <div className="form-row">
                          <input type="text" placeholder="ADD YOUR MESSAGE" style={{ flex: 1 }} 
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                          />
                      </div>
                      <button type="submit" className="submit-button" onClick={ContactUs}>SEND MESSAGE</button>
                      <ToastContainer />
                  </form>
              </div>
    </div>
  );
};

export default GetTouch;
