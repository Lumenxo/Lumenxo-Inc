import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../pages/Navbar";

const ContactUs11 = () => {
  const [state, handleSubmit] = useForm("mldlbald");

  return (
    <>
    <Navbar/>
    <section
      className="relative min-h-screen py-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/001/310/861/original/abstract-digital-science-background-free-vector.jpg)",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-white">
         
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 text-lg">
              LumenXo is a forward-thinking software company delivering powerful
              digital solutions to help businesses thrive in the modern world.
              From websites to full-scale enterprise tools, we build it all.
            </p>

           
            <div className="flex gap-4 text-white text-xl mb-8">
              <a href="#" className="hover:text-blue-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Github />
              </a>
            </div>

          
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <span>contact@lumenxo.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <span>+91 7656918304</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <span>Balasore, Odisha, India</span>
              </div>
            </div>
          </div>

      
          <div className="bg-white text-black rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">
            {state.succeeded ? (
              <p className="text-green-600 font-semibold text-center">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs11;
