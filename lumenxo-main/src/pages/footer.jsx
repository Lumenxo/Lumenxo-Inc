import React from 'react';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
                  <img
                    src="https://bing.com/th/id/OIP.3pHyhWedLbR9iGYTQq76EgAAAA?o=7&cb=thvnextc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="LumenXo Logo"
                    className="relative h-12 w-12 object-cover rounded-full border-2 border-white/20 shadow-xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    LumenXo
                  </h2>
                  <p className="text-sm text-gray-400 font-medium">Software Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                We create modern digital solutions designed for growth and innovation—across web, mobile, and beyond.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-violet-400 transition-colors duration-300">
                  <FaEnvelope className="text-violet-400" />
                  <span className="text-sm">info.lumenxo@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-violet-400 transition-colors duration-300">
                  <FaPhone className="text-violet-400" />
                  <span className="text-sm">+91 7656918304</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-violet-400 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-violet-400" />
                  <span className="text-sm">Balasore, Odisha, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />
              </h3>
              <ul className="space-y-4">
                {['Home', 'Services', 'Portfolio', 'About Us', 'Contact', 'Blog'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 transition">
                      <span className="w-1 h-1 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />
              </h3>
              <ul className="space-y-4">
                {['Web Development', 'Mobile Apps', 'Digital Marketing', 'UI/UX Design', 'Cloud Solutions', 'Consulting'].map((service, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 transition">
                      <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-opacity"></span>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="LumenXo Office, Balasore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.339874607058!2d86.8928!3d21.55056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c860b7f9b67d%3A0x0!2zMjHCsDMzJzM4LjciTiA4NsKwNTMzJzQ4LjkiRQ!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%" height="100%" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-gray-700/50 pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: FaFacebookF,
                      url: "https://www.facebook.com/people/LumenXo-Inc/61573160147922/?rdid=Q108uaz8L7Wak14j&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19KfLtjtA2%2F"
                    },
                    {
                      icon: FaLinkedinIn,
                      url: "https://tr.ee/FsF_Mbaqy9"
                    },
                    {
                      icon: FaTwitter,
                      url: "https://x.com/Lumenxoinc"
                    },
                    {
                      icon: BsWhatsapp,
                      url: "https://www.whatsapp.com/channel/0029VaxwsYuJUM2jam4hDZ12"
                    }
                  ].map(({ icon: Icon, url }, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white transition hover:scale-110 hover:shadow-lg border border-white/20 hover:border-white/40 group relative"
                      aria-label={`Follow us on ${Icon.name}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <Icon className="relative z-10" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">Stay updated with our latest news and services.</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LumenXo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
