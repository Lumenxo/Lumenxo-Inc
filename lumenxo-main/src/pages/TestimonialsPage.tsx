import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const testimonials = [
    {
      id: 1,
      quote: "What stood out was LUMENXO's attention to detail and commitment to quality. They treated our project like their own, and it shows in the results.",
      name: "Bikash Pradhan",
      position: "Founder & CEO, Winning Wavez",
      avatarBg: "bg-purple-600"
    },
    {
      id: 2,
      quote: "From the first meeting to final delivery, LUMENXO exceeded our expectations. Their custom software streamlined our workflow and boosted productivity across departments.",
      name: "Dr. Narayan Mohanty",
      position: "Founder, AYURSUCCESS",
      avatarBg: "bg-blue-600"
    },
    {
      id: 3,
      quote: "LUMENXO transformed our vision into a sleek, high-performing digital platform. Their team is fast, communicative, and incredibly skilled. We've seen noticeable growth since launch.",
      name: "Smruti Suman Badjena",
      position: "Team Lead, CyberSecurity Club, GIETU",
      avatarBg: "bg-green-600"
    },
    {
      id: 4,
      quote: "LUMENXO's support team is incredibly responsive. Whenever we've had questions or issues, they've been there within minutes—true partners in every sense.",
      name: "Jai Bharat Verma",
      position: "Managing Director, PrepPright Ed-Tech Pvt. Ltd",
      avatarBg: "bg-yellow-600"
    },
    {
      id: 5,
      quote: "Working with LUMENXO has been transformative for our business. Their innovative solutions helped us scale quickly while maintaining quality.",
      name: "Sample Client",
      position: "CTO, Tech Innovations",
      avatarBg: "bg-red-600"
    },
    {
      id: 6,
      quote: "LUMENXO delivered beyond our expectations. The attention to user experience and technical excellence makes them stand out in the industry.",
      name: "Sample Client",
      position: "Director of Operations, Digital Solutions",
      avatarBg: "bg-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-16 text-center relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-20 text-8xl font-bold text-yellow-500">"</div>
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Client Testimonials
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear what our clients have to say about working with LUMENXO
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden group"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 h-full transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/20 hover:border-yellow-500/50 relative z-10 flex flex-col justify-between">
                <div>
                  <div className="absolute top-6 right-6 text-yellow-500 opacity-30">
                    <Quote size={30} className="transform rotate-180" />
                  </div>
                  
                  <div className="flex text-yellow-400 mb-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill="currentColor" 
                        className={`transform transition-all duration-300 ${hoveredCard === item.id ? 'scale-110' : ''}`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 font-light italic mb-8 relative">
                    "{item.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${item.avatarBg} rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg uppercase shadow-lg`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-yellow-400">{item.position}</p>
                  </div>
                </div>
              </div>
              
              {/* Animated gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-2xl -z-10 animate-pulse"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full font-medium hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1">
            Get Your Success Story Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;