import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Navbar from "../pages/Navbar";
import Booknow from "../Assets/booknow.png";
import { Link } from "react-router-dom";


const ContactLumenXo = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen px-6 sm:px-12 lg:px-20 py-10">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="flex justify-center">
            <img
              src={Booknow}
              alt="Contact Illustration"
              className="max-w-full h-auto"
            />
          </div>

         
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-300 mb-6">
              Thanks for your interest in LumenXo. Choose from the options
              below and we’ll connect you with the right person.
            </p>

           <Link 
  to="https://alvo.chat/6hdS" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-3 rounded-md transition"
>
  Send a message
</Link>

          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-2">Contact us</h3>
          <p className="text-gray-300 mb-6">
            Please provide the following information and we’ll put you in touch
            with the right person.
          </p>

       
          <div className="flex flex-wrap gap-4 mb-8">
          
            <a
              href="https://alvo.chat/6hdD"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-green-600 hover:bg-green-700 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://alvo.chat/6hdS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-green-600 hover:bg-green-700 transition"
            >
              <FaWhatsapp size={20} />
            </a>

           
            <a
              href="tel:+917656918304"
              className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            >
              <FaPhoneAlt size={20} />
            </a>
            <a
              href="tel:+918260569773"
              className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            >
              <FaPhoneAlt size={20} />
            </a>

           
            <a
              href="mailto:info.lumenxo@gmail.com"
              className="p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="mailto:inc.lumenxo@gmail.com"
              className="p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default ContactLumenXo;
