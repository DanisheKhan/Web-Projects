import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";


function Hero() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-semibold text-center">CONTACT US</h1>

      <p className="font-semibold text-center mt-4 mb-8">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <div className='flex gap-4 text-center'>
              <div className="bg-black text-white rounded flex flex-1  flex-row gap-2 items-center justify-center h-10">
                  <CiCreditCard1 className='text-2xl' />
                <p> VIA SUPPORT CHAT</p>
              </div> 
              <div className="bg-black text-white rounded flex flex-1  flex-row gap-2 items-center justify-center">
                  <IoIosCall />
                <p>VIA CALL</p>
              </div>  
            </div>
            <div className="border-2 rounded px-4 py-2 border-black text-center">
              <p>VIA EMAIL FORM</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <input className="border-2 rounded px-4 py-2 border-black" type="text" placeholder="Your Name" />
            <input className="border-2 rounded px-4 py-2 border-black" type="email" placeholder="Your Email" />
            <input className="border-2 rounded px-4 py-2 border-black" type="tel" placeholder="Your Phone" />
            <textarea className="border-2 rounded px-4 py-2 border-black" placeholder="Your Message" rows="4"></textarea>
            <button className="bg-black text-white rounded px-4 py-2 mt-4">SEND MESSAGE</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="/images/service.svg" alt="Service" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero
