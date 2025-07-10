import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from 'lucide-react';
import { useGlobalContext } from '../context/GlobalContext';

const Footer: React.FC = () => {
  const { setCursorVariant } = useGlobalContext();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://i.imgur.com/b7gZHxX.png" 
                alt="LumenXo Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 tracking-tight">
                LumenXo
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Transforming ideas into digital reality through innovative software solutions 
              that drive business growth and success.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, href: '#' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Instagram size={18} />, href: '#' },
                { icon: <Github size={18} />, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setCursorVariant('hidden')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-yellow-400"></span>
            </h4>
            
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    onMouseEnter={() => setCursorVariant('hidden')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <span className="mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-yellow-400"></span>
            </h4>
            
            <ul className="space-y-3">
              {[
                'Custom Software Development',
                'Mobile App Development',
                'Web Development',
                'Cloud Solutions',
                'AI & Machine Learning',
                'Cybersecurity Services'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    onMouseEnter={() => setCursorVariant('hidden')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <span className="mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-yellow-400"></span>
            </h4>
            
            <ul className="space-y-4">
              {[
                { 
                  icon: <MapPin size={20} />, 
                  content: (
                    <>
                      <span className="font-medium block text-white">Headquarters</span>
                      Balasore, Odisha, IN
                    </>
                  )
                },
                { 
                  icon: <Mail size={20} />, 
                  content: 'info@lumenxo.com'
                },
                { 
                  icon: <Phone size={20} />, 
                  content: '+91-7XXXX-XXXX'
                }
              ].map((item, index) => (
                <li key={index} className="flex">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-yellow-400 shrink-0 mr-4">
                    {item.icon}
                  </div>
                  <div className="text-gray-400">
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} LumenXo. All Rights Reserved. | Designed with ♥ by LumenXo Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;