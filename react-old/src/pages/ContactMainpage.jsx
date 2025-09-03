import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Send,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  CheckCircle,
  MapPin,
  Clock,
} from 'lucide-react';
import Navbar from '../pages/Navbar';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzzgnzez");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans">
        {/* Header */}
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1684120269169-0ab71068e058?q=80&w=764&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-xs">
                Contact Us
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              Let's Build Something{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Amazing Together
              </span>
            </h1>
            <p className="text-md md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you achieve your digital goals.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Get In Touch</h2>

          {state.succeeded && (
            <div className="mb-6 flex items-center gap-2 text-green-600 bg-green-100 p-4 rounded">
              <CheckCircle className="w-6 h-6" />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {!state.succeeded && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-500" />
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-gray-500" />
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-gray-500" />
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <Building className="w-5 h-5 text-gray-500" />
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-gray-500" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
              >
                <Send className="w-5 h-5" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </section>

        {/* Contact Info */}
        <section className="bg-white py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p>Balasore, Odisha, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p>+91 7656918304</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Hours</h3>
                <p>24×7</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto rounded overflow-hidden shadow-lg">
            <iframe
              title="LumenXo Location"
              src="https://www.google.com/maps?q=Balasore,+Odisha,+India&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-600 py-6 text-center text-sm">
          &copy; {new Date().getFullYear()} LumenXo. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default ContactForm;
