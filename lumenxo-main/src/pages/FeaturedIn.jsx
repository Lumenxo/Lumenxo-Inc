import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Img1 from "../Assets/new1.jpg";
import Img3 from "../Assets/hacknovation/2.jpeg";
import Img4 from "../Assets/hacknovation/3.jpeg";
import Img5 from "../Assets/hacknovation/4.jpeg";
import Img6 from "../Assets/hacknovation/5.jpeg";
import Img7 from "../Assets/hacknovation/6.jpeg";

const FeaturedIn = () => {
  const newspapers = [
    { name: "Sambad", logo: Img1 },
    { name: "Sambad", logo: Img3 },
    { name: "Sambad", logo: Img4 },
    { name: "Sambad", logo: Img5 },
    { name: "Sambad", logo: Img6 },
    { name: "Sambad", logo: Img7 },
    // add more newspapers here
  ];

  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? newspapers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === newspapers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-12 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?semt=ais_hybrid&w=740&q=80')`,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8 font-poppins">
  Featured In
</h2>


        <div className="relative flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 text-white p-2 rounded-full hover:text-black hover:bg-gray-200"
          >
            <ChevronLeft />
          </button>

          <div className="flex justify-center items-center w-full">
            {newspapers[index].logo ? (
              <img
                src={newspapers[index].logo}
                alt={newspapers[index].name}
                className="h-52 w-auto mx-auto cursor-pointer"
                onClick={() => setZoomed(true)} 
              />
            ) : (
              <span className="text-xl font-semibold">
                {newspapers[index].name}
              </span>
            )}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 rounded-full text-white hover:text-black hover:bg-gray-200"
          >
            <ChevronRight />
          </button>
        </div>

       
        <div className="flex justify-center mt-6 space-x-2">
          {newspapers.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-md"
            onClick={() => setZoomed(false)}
          >
            <X size={24} />
          </button>
          <img
            src={newspapers[index].logo}
            alt={newspapers[index].name}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedIn;
