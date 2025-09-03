import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, readMoreLink, isHighlighted, onReadMore }) => {
  const cardClasses = `p-8 border border-gray-200 rounded-md transition-all duration-300 ease-in-out ${
    isHighlighted ? 'bg-gray-700 text-white shadow-xl' : 'bg-white text-gray-800 hover:shadow-lg'
  }`;

  const titleClasses = `font-semibold text-xl mb-2 ${isHighlighted ? 'text-white' : 'text-gray-900'}`;
  const descriptionClasses = `text-sm mb-4 ${isHighlighted ? 'text-gray-300' : 'text-gray-600'}`;
  const readMoreClasses = `text-sm font-medium cursor-pointer ${isHighlighted ? 'text-white hover:text-gray-200' : 'text-blue-500 hover:underline'}`;

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    onReadMore(readMoreLink);
  };

  return (
    <div className={cardClasses}>
      <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-gray-100">
        {icon}
      </div>
      <h3 className={titleClasses}>{title}</h3>
      <p className={descriptionClasses}>{description}</p>
      <span onClick={handleReadMoreClick} className={readMoreClasses}>
        Read More
      </span>
    </div>
  );
};

const ServicesPage = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m0 0h-5m-5 0h-2m-2 0H5m5-16h4m-4 0h4m-4 0v4m0 0v16m4 0v-4" />
        </svg>
      ),
      title: 'Administration',
      description: 'We strategically integrate corporate responsibility into our core operations, ensuring our expertise supports sustainable and efficient business practices.',
      readMoreLink: '/Services',
      isHighlighted: true,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L12 21m0 0l2.25-4m-4.5 0l4.5 0M9 9h6m-3-3v8" />
        </svg>
      ),
      title: 'Application Development',
      description: 'Our skilled developers craft robust, scalable, and intuitive applications across platforms using modern technologies and standards.',
      readMoreLink: '/Services',
      isHighlighted: false,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l3-5m0 0l3 5m-3-5v12M15 10l3-5m0 0l3 5m-3-5v12M12 15l-3 3m0 0l3 3m0-3h6m-6 0h6m0 0v-6m-6 0v6" />
        </svg>
      ),
      title: 'Web Design',
      description: 'We build modern, responsive, and user-centric websites with seamless navigation and brand-aligned interfaces.',
      readMoreLink: '/Services',
      isHighlighted: false,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8m-2-12l-6 6M7 7l-4 4" />
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Boost your brand online with SEO, social media, content marketing, paid ads, email outreach, and analytics.',
      readMoreLink: '/Services',
      isHighlighted: false,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'WordPress Development',
      description: 'We deliver SEO-friendly, custom WordPress websites — from themes to plugins, aligned with your business goals.',
      readMoreLink: '/Services',
      isHighlighted: false,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Backend Development',
      description: 'Ensure performance with secure APIs, optimized databases, smooth integrations, and scalable backend logic.',
      readMoreLink: '/Services',
      isHighlighted: false,
    },
  ];

  const handleReadMore = (link) => {
    navigate(link);
  };

  const handleExploreNow = () => {
    navigate('/Services');
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Services We Offer</h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are determined to help you reach your business goals. LumenXo is a creative digital agency, focused on linking your potential customers with your products/services through innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} onReadMore={handleReadMore} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleExploreNow}
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;