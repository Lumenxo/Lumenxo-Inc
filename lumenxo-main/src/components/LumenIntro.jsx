import React from 'react';
import { Link } from 'react-router-dom';

const LumenIntro = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://techtss.com/img/back5.png')",
      }}
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome To <span className="text-indigo-700">LumenXo.</span>
        </h1>
        <p className="text-xl text-violet-600 font-medium">
          We provide business consulting and tech solutions.
        </p>
        <p className="text-gray-600 leading-relaxed">
          LumenXo delivers modern IT consulting, software, AI/ML, and Web3 solutions. We translate client ideas into scalable digital products with exceptional user experience and trust.
        </p>
        <Link
          to="/AboutUs"
          className="inline-block mt-4 bg-purple-700 text-white py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
        >
          DISCOVER MORE
        </Link>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://techtss.com/img/wel1_techtss.jpg"
            alt="LumenXo Services"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LumenIntro;
