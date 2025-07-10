import React from 'react';

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team member cards will be added here */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600 mb-2">CEO & Founder</p>
            <p className="text-gray-500 text-sm">Leading our vision and strategy with over 15 years of industry experience.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-2">Creative Director</p>
            <p className="text-gray-500 text-sm">Bringing creative excellence and innovation to every project.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600 mb-2">Technical Lead</p>
            <p className="text-gray-500 text-sm">Driving technical excellence and innovation in our solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;