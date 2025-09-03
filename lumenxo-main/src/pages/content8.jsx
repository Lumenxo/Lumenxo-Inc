import React from "react";
import Slider from "react-slick";
import photo1 from "../Assets/photo1.jpg";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";
import photo4 from "../Assets/pp.png";

const partners = [
  { name: "AIRGON", logo: photo1 },
  { name: "Tech Mentees", logo: photo2 },
  { name: "Kaffeinn", logo: photo3 },
  { name: "Grow Gyan", logo: photo4 },
];

export default function ClientsSlider() {
  const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/03/89/38/85/360_F_389388528_2R2mdMuEu0M8u0UoZGWA9DzNXRad6Hqz.jpg')`,
      }}
    >
      <div className=" max-w-7xl mx-auto rounded-xl px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold">We're working with</h2>
          <p className="text-sm text-gray-600 mt-2">
            Building valuable collaborations with forward-thinking companies.
          </p>
        </div>

        <div className="overflow-hidden">
          <Slider {...settings}>
            {partners.map((partner, idx) => (
              <div key={idx} className="px-3">
                <div className="  rounded-xl p-4 flex items-center justify-center h-40">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
