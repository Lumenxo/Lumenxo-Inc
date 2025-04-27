import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-900/30 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-900/30 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full bg-gray-900/30 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 h-32 resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="btn-glossy w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information and Map */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-gray-400">Balasore, Odisha, IN</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-400">info@lumenxo.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-400">+91-7XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="glass p-2 rounded-2xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51433.141150736345!2d86.91915934999999!3d21.4894075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c5f84f036e035%3A0x5cd332bf1c70157c!2sBalasore%2C%20Odisha!5e1!3m2!1sen!2sin!4v1745608087374!5m2!1sen!2sin"
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;