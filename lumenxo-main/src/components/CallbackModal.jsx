import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const CallbackModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.5;
      if (scrollY > triggerHeight) {
        setShowModal(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    toast.success('Submitted successfully! We’ll call you back shortly.', {
      position: 'top-right',
      autoClose: 3000,
    });

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  if (!showModal) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white w-full max-w-lg rounded-xl p-6 relative shadow-lg border">
          <button
            className="absolute top-3 right-3 text-red-600 text-xl hover:scale-110 transition"
            onClick={() => setShowModal(false)}
          >
            <IoMdClose />
          </button>

          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Let Us <span className="text-blue-800">Call You Back</span>
          </h2>

          <form
            action="https://formsubmit.co/info.lumenxo@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you! We’ll reach out shortly."
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-900 transition"
            >
              Submit Now
            </button>

           
            <Link
              to="/ContactUs"
              className="block mt-3 text-center text-sm text-blue-700 underline hover:text-blue-900"
            >
              Prefer to reach us directly? Click here.
            </Link>

            <p className="text-center text-green-600 text-sm">
              Your Phone Number is kept confidential and not shared with others.
            </p>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default CallbackModal;
