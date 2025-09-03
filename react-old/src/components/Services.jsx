import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Navbar from '../pages/Navbar'; 

const Card = ({ number, title, desc, onNavigate }) => (
  <div className="relative w-64 bg-white shadow-lg p-6 pt-14 rounded-xl space-y-4 overflow-hidden">
    <button
      onClick={onNavigate}
      className="absolute top-3 right-3 bg-violet-600 text-white p-2 rounded-full hover:bg-violet-700 transition"
    >
      <Plus />
    </button>

    <div className="w-20 h-20 bg-violet-500 rounded-full absolute -right-5 -top-7 flex items-center justify-center">
      <p className="text-white text-2xl">{number}</p>
    </div>

    <h1 className="text-xl font-bold">{title}</h1>
    <p className="text-sm text-zinc-600 leading-6 whitespace-pre-line">{desc}</p>

    <button
      onClick={onNavigate}
      className="w-full bg-violet-600 text-white py-3 px-4 rounded-lg hover:bg-violet-700 transition-colors font-semibold text-sm"
    >
      Book Now
    </button>
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: '🏢 Administration',
      desc: `We strategically integrate corporate responsibility into our core operations, ensuring our expertise supports sustainable and efficient business practices.`,
    },
    {
      title: '💻 Application Development',
      desc: `Our skilled developers craft robust, scalable, and intuitive applications across platforms. From ideation to deployment, we bring your app vision to life using modern technologies and coding standards.`,
    },
    {
      title: '🌐 Web Design',
      desc: `We design and build modern, responsive, and user-centric websites. Our creative team focuses on seamless navigation, visual aesthetics, and brand-aligned interfaces to elevate your digital presence.`,
    },
    {
      title: '📈 Digital Marketing',
      desc: `Amplify your brand online with our end-to-end digital marketing solutions — SEO, social media strategy, content marketing, paid campaigns, email outreach, and performance analytics.`,
    },
    {
      title: '🧩 WordPress Development',
      desc: `We create dynamic, SEO-friendly, and fully customized WordPress websites. From themes and plugins to responsive designs — we tailor each element to meet your specific business goals.`,
    },
    {
      title: '⚙ Backend Development',
      desc: `Our backend engineers ensure your applications run smoothly with secure APIs, optimized databases, seamless integration, and scalable server-side logic.`,
    },
  ];

  const goToBookNow = () => {
    navigate('/BookNow');
  };

  return (
    <>
    <Navbar/>
    <div
      className="min-h-screen p-10 flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1749738441128-7e11b73d6429?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-white text-blue-500 drop-shadow-md">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {services.map((s, i) => (
          <Card
            key={i}
            number={`0${i + 1}`}
            title={s.title}
            desc={s.desc}
            onNavigate={goToBookNow}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
