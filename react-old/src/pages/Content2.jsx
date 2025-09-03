import React, { useState } from 'react';
import {
  FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt,
  FaNodeJs, FaJava, FaPython, FaPhp, FaDocker, FaDatabase,
  FaAws, FaMicrosoft, FaGoogle, FaLaravel, FaGitAlt,
  FaRobot, FaBrain, FaChartLine, FaFireAlt, FaCloud, FaCubes,
} from 'react-icons/fa';

const techData = {
  Frontend: [
    { name: 'React', icon: <FaReact className="text-blue-500 text-3xl" /> },
    { name: 'Next.js', icon: <FaReact className="text-blue-400 text-3xl" /> }, // placeholder
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
    { name: 'Tailwind', icon: <FaCss3Alt className="text-teal-400 text-3xl" /> }, // placeholder
    { name: 'Vue.js', icon: <FaVuejs className="text-green-500 text-3xl" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500 text-3xl" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    { name: 'Java', icon: <FaJava className="text-red-600 text-3xl" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500 text-3xl" /> },
    { name: 'Django', icon: <FaPython className="text-green-700 text-3xl" /> }, // placeholder
    { name: 'Express.js', icon: <FaNodeJs className="text-gray-700 text-3xl" /> }, // placeholder
    { name: 'PHP', icon: <FaPhp className="text-indigo-600 text-3xl" /> },
    { name: 'Laravel', icon: <FaLaravel className="text-red-600 text-3xl" /> },
    { name: 'Ruby on Rails', icon: <FaGitAlt className="text-pink-600 text-3xl" /> }, // placeholder
    { name: 'Flask', icon: <FaPython className="text-gray-700 text-3xl" /> }, // placeholder
  ],
  Cloud: [
    { name: 'AWS', icon: <FaAws className="text-yellow-600 text-3xl" /> },
    { name: 'Azure', icon: <FaMicrosoft className="text-blue-600 text-3xl" /> },
    { name: 'Google Cloud', icon: <FaGoogle className="text-red-500 text-3xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400 text-3xl" /> },
    { name: 'Kubernetes', icon: <FaCubes className="text-blue-500 text-3xl" /> }, // placeholder
    { name: 'SQL', icon: <FaDatabase className="text-indigo-600 text-3xl" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-600 text-3xl" /> },
    { name: 'Firebase', icon: <FaFireAlt className="text-orange-500 text-3xl" /> },
  ],
  'AI & Data': [
    { name: 'Machine Learning', icon: <FaBrain className="text-purple-500 text-3xl" /> },
    { name: 'Data Analytics', icon: <FaChartLine className="text-indigo-500 text-3xl" /> },
    { name: 'Gen AI', icon: <FaRobot className="text-teal-500 text-3xl" /> },
  ],
};

const categories = Object.keys(techData);

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Technologies & Platforms We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-gray-300">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-base font-medium pb-2 transition-all ${
                activeCategory === cat
                  ? 'border-b-4 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {techData[activeCategory].map((tech) => (
            <div
              key={tech.name}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center hover:shadow-md transition"
            >
              <div className="mb-3">{tech.icon}</div>
              <p className="text-sm font-semibold text-gray-800">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
