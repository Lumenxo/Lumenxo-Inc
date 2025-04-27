import React, { useState, useEffect } from 'react';
import { Lightbulb, Target, Clock, Settings, Shield, Handshake, ChevronRight, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const [hoverCard, setHoverCard] = useState(null);
  
  // Features data
  const features = [
    {
      title: "Premium Features",
      description: "Experience our elite set of tools designed for the modern business. Our powerful solutions offer seamless integration, unmatched performance, and stunning visual appeal.",
      icon: <Shield size={32} />,
      delay: 0,
      colorFrom: "#4F46E5",
      colorTo: "#06B6D4",
      bgGlow: "#4F46E5"
    },
    {
      title: "Unlimited Customization",
      description: "Fully adaptable to your unique needs, our platform puts complete design control in your hands. Transform every element with our intuitive drag-and-drop interface.",
      icon: <Settings size={32} />,
      delay: 1,
      colorFrom: "#EC4899",
      colorTo: "#8B5CF6",
      bgGlow: "#8B5CF6"
    },
    {
      title: "24/7 Express Support",
      description: "Our expert team is always just a click away. Enjoy priority assistance with response times measured in minutes, not hours—keeping your business moving forward.",
      icon: <Clock size={32} />,
      delay: 2,
      colorFrom: "#F59E0B",
      colorTo: "#EF4444",
      bgGlow: "#EF4444"
    }
  ];

  // Approach items data
  const approachItems = [
    {
      title: "Revolutionary Vision",
      description: "Our forward-thinking approach breaks conventional boundaries, creating solutions that anticipate tomorrow's challenges while solving today's problems with elegant efficiency.",
      icon: <Lightbulb size={24} />,
      color: "#F59E0B"
    },
    {
      title: "Strategic Excellence",
      description: "Every project begins with clear objectives and ends with measurable results. Our data-driven methodology ensures we deliver maximum impact where it matters most to your business.",
      icon: <Target size={24} />,
      color: "#8B5CF6"
    },
    {
      title: "Dedicated Partnership",
      description: "We don't just work for you—we work with you. Our collaborative approach ensures your vision guides every step of our process, creating truly personalized solutions.",
      icon: <Handshake size={24} />,
      color: "#06B6D4"
    }
  ];

  // The key issue was the animation approach - using CSS keyframes but not applying them properly with useEffect
  useEffect(() => {
    // Elements are now visible once the component mounts
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white min-h-screen py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header Section - Fixed to ensure visibility */}
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl"></div>
          </div>
          
          <div className="text-sm font-medium text-yellow-400 mb-3 inline-block tracking-wider animate-fadeIn">
            
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold relative inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
              Why Choose Us
            </span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full animate-widthExpand"></div>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="w-32 h-full bg-white/80 blur-sm animate-shimmer"></div>
            </div>
          </h1>
          
          <p className="text-gray-300 mt-8 max-w-2xl mx-auto text-lg font-light animate-fadeIn">
            Discover our premium solutions that transform challenges into opportunities
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {features.map((card, i) => (
            <div
              key={i}
              className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 md:p-8 group transition-all duration-500 relative overflow-hidden hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${0.15 * i}s` }}
              onMouseEnter={() => setHoverCard(i)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {/* Card Background Effects */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                style={{ 
                  background: `radial-gradient(circle at 50% 50%, ${card.bgGlow}20 0%, transparent 70%)`
                }}
              ></div>
              
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -z-10 transition-all duration-800"
                style={{ 
                  background: card.colorFrom,
                  opacity: hoverCard === i ? 0.15 : 0,
                  transform: hoverCard === i ? "scale(1.2)" : "scale(1)"
                }}
              ></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 p-0.5">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div
                      className="absolute -inset-full opacity-50 animate-spin-slow"
                      style={{
                        background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${card.colorFrom} 60deg, ${card.colorTo} 120deg, transparent 180deg)`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Icon */}
              <div
                className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 overflow-hidden group-hover:-translate-y-1 transition-all duration-500"
                style={{ 
                  background: `linear-gradient(135deg, ${card.colorFrom}, ${card.colorTo})`,
                  boxShadow: `0 10px 30px -5px ${card.colorFrom}30`
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 animate-pulse"
                  style={{ 
                    background: `radial-gradient(circle at center, ${card.colorTo}, transparent)`
                  }}
                ></div>
                
                <div className="hover:scale-110 hover:rotate-3 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <div className="absolute -bottom-2 -right-2 text-yellow-300/80 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <Sparkles size={16} />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3 md:mb-4 transition-all duration-500"
                  style={{ 
                    color: hoverCard === i ? "transparent" : "white",
                    backgroundImage: hoverCard === i ? `linear-gradient(135deg, ${card.colorFrom}, ${card.colorTo})` : "none",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: hoverCard === i ? "transparent" : "initial"
                  }}
                >
                  {card.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{card.description}</p>
                
                <div 
                  className="h-0.5 w-12 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full mt-6 transition-all duration-700"
                  style={{ 
                    width: hoverCard === i ? "100%" : "3rem",
                    backgroundImage: hoverCard === i ? 
                      `linear-gradient(to right, transparent, ${card.colorFrom}80, transparent)` : 
                      "linear-gradient(to right, transparent, rgba(75, 85, 99, 0.5), transparent)"
                  }}
                ></div>
              </div>
              
              {/* Card action */}
              <div 
                className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0"
                style={{ color: card.colorFrom }}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Approach Section */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-24 relative z-10 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-br from-gray-900 to-black opacity-80 rounded-3xl blur-xl -z-10"></div>
          <div className="absolute inset-0 border border-gray-800/50 rounded-3xl p-1 -z-10">
            <div className="absolute inset-0 rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>
          </div>
          
          <div className="px-6 py-10 md:px-16 md:py-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
            
            {/* Glowing line */}
            <div className="absolute top-16 left-8 right-8 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
            
            <div className="relative">
              <div className="text-sm font-medium text-yellow-400 mb-2 inline-block tracking-wider animate-fadeIn" style={{ animationDelay: "1s" }}>
                
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-gray-300 animate-fadeIn" style={{ animationDelay: "1.1s" }}>
                  The LUMENXO Approach
                </span>
                <div className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-widthExpand" style={{ animationDelay: "1.2s" }}></div>
              </h2>
              
              <div className="space-y-8 md:space-y-12">
                {approachItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 group relative animate-fadeInUp"
                    style={{ animationDelay: `${1.2 + (index * 0.2)}s` }}
                  >
                    <div className="shrink-0 relative z-10 transition-all duration-300 hover:scale-110 hover:rotate-5">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${item.color}20, ${item.color}60)`,
                          boxShadow: `0 8px 20px -5px ${item.color}30`
                        }}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          style={{ 
                            background: `linear-gradient(135deg, ${item.color}30, ${item.color}80)` 
                          }}
                        ></div>
                        
                        <div className="text-white relative z-10 animate-iconWiggle">
                          {item.icon}
                        </div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-10">
                          <div className="absolute top-0 left-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 
                        className="text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300 animate-fadeIn"
                        style={{ 
                          color: "white",
                          backgroundImage: `linear-gradient(135deg, white, ${item.color})`,
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                      
                      <div 
                        className="h-px w-12 bg-gray-700/50 mt-4 transition-all duration-700 group-hover:w-full"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, transparent, ${item.color}50, transparent)` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 md:mt-16 flex justify-center animate-fadeInUp" style={{ animationDelay: "2s" }}>
                <button className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl text-gray-900 font-semibold flex items-center gap-3 overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-300">
                  <span className="relative z-10">Discover Our Services</span>
                  <div className="relative z-10 animate-wiggle">
                    <ChevronRight size={20} />
                  </div>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes widthExpand {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes shimmer {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(200%);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes iconWiggle {
          0%, 100% {
            transform: rotate(0) scale(1);
          }
          25% {
            transform: rotate(10deg) scale(1.1);
          }
          50% {
            transform: rotate(0) scale(1);
          }
          75% {
            transform: rotate(-10deg) scale(1.1);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        /* Apply animations as CSS classes */
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
        
        .animate-widthExpand {
          animation: widthExpand 0.8s forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite ease-in-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-iconWiggle {
          animation: iconWiggle 5s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;