import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';

const ContactLumenXo = () => {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover  bg-center flex items-center justify-center px-6 py-10"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/steps-in-project-management-53nbt13azfh1rtzw.jpg')",
        }}
      >
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 z-0"></div>

        {/* Content Box */}
        <div className="relative bg-white bg-opacity-90 shadow-md rounded-xl max-w-3xl w-full p-8 border border-indigo-200 z-10">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-3">
            Contact LumenXo Software Pvt. Ltd.
          </h1>
          <p className="text-center text-indigo-600 text-base mb-6 font-medium tracking-wide">
            Book our experts now
          </p>
          <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed text-sm">
            Need our help or services? Reach out through any option below. We're here for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://alvo.chat/6hdD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-lg bg-green-600 hover:bg-green-700 transition-shadow shadow-sm"
            >
              <FaWhatsapp size={20} className="text-white" />
              <span className="text-white font-medium text-sm">+91 76569 18304 (WhatsApp)</span>
            </a>

            <a
              href="https://alvo.chat/6hdS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-lg bg-green-600 hover:bg-green-700 transition-shadow shadow-sm"
            >
              <FaWhatsapp size={20} className="text-white" />
              <span className="text-white font-medium text-sm">+91 82605 69773 (WhatsApp)</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917656918304"
              className="flex items-center space-x-3 p-4 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition-shadow shadow-sm"
            >
              <FaPhoneAlt size={20} className="text-white" />
              <span className="text-white font-medium text-sm">+91 76569 18304 (Call)</span>
            </a>

            <a
              href="tel:+918260569773"
              className="flex items-center space-x-3 p-4 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition-shadow shadow-sm"
            >
              <FaPhoneAlt size={20} className="text-white" />
              <span className="text-white font-medium text-sm">+91 82605 69773 (Call)</span>
            </a>

            {/* Emails */}
            <a
              href="mailto:info.lumenxo@gmail.com"
              className="flex items-center space-x-3 p-4 rounded-lg bg-purple-700 hover:bg-purple-800 transition-shadow shadow-sm"
            >
              <FaEnvelope size={20} className="text-white" />
              <span className="text-white font-medium text-sm">info.lumenxo@gmail.com</span>
            </a>

            <a
              href="mailto:inc.lumenxo@gmail.com"
              className="flex items-center space-x-3 p-4 rounded-lg bg-purple-700 hover:bg-purple-800 transition-shadow shadow-sm"
            >
              <FaEnvelope size={20} className="text-white" />
              <span className="text-white font-medium text-sm">inc.lumenxo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLumenXo;
