import React from 'react';

const PortfolioPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item}
            className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300"
          >
            <div className="aspect-video bg-gray-800"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project {item}</h3>
              <p className="text-gray-400 mb-4">
                A brief description of this amazing project and its key features.
              </p>
              <button className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;