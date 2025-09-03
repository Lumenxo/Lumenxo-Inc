import React from 'react';
import SocialMedia from '../components/social_media'; 
import Navbar from '../pages/Navbar';

export default function AboutUs() {
  return (
    <>
    <Navbar/>
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1677228571702-36ad21bb8180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/* Visual Image Card + Form */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Image card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1677228571702-36ad21bb8180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional workspace"
                className="w-full h-80 object-cover"
              />
              <div className="p-5 text-white">
                <h3 className="text-xl font-semibold text-indigo-400">Where Innovation Meets Execution</h3>
                <p className="text-sm mt-2">
                  LumenXo's foundation is built on quality, professionalism, and a vision for the digital future.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Your subject"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Your message"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <div>
              <span className="text-indigo-400 border-b-2 border-indigo-500 uppercase tracking-wide text-sm">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                Empowering Businesses with{' '}
                <span className="text-indigo-500">Innovative Software Solutions</span>
              </h2>
              <p className="text-lg leading-relaxed">
                <strong>LumenXo Software Pvt. Ltd.</strong> is a forward-thinking IT company delivering scalable digital solutions. Our passionate team specializes in web, mobile, and software applications that drive business success.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Seamless Business Operations:</strong> We simplify and automate core business tasks—boosting productivity and reducing complexity.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Effortless Integration:</strong> Our solutions fit seamlessly into your ecosystem, ensuring smooth performance without interruptions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Who We Are</h3>
              <p className="text-lg leading-relaxed">
                LumenXo was established on <strong>November 14, 2024 </strong> officially incorporated on <strong>April 16, 2025</strong>. We're specialists in full-stack development, automation, and digital strategy—delivering exceptional outcomes for ambitious clients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To deliver scalable, efficient software that drives transformation, while nurturing the next generation of talent through internships and real-world experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To become a global leader in digital innovation, empowering both enterprises and aspiring professionals through technology and mentorship.
              </p>
            </div>
{/* Certifications Section */}
<section className="bg-gradient-to-r from-gray-50 via-white to-blue-50 py-14 px-6 border-t border-gray-200">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-indigo-600 mb-4">
      Certified & Verified
    </h3>
    <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
      We are a <span className="font-semibold text-gray-900">trusted, certified, and verified organization</span>, recognized for our commitment to quality, operational excellence, and client satisfaction through industry-standard certifications.
    </p>

    <div className="flex flex-wrap justify-center items-center gap-10">
      <div className="flex flex-col items-center">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.lnIF4KuYa_adBsxW1FZ8UwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="ISO Certified"
          className="h-24 w-auto object-contain shadow-md rounded-md border border-gray-200 p-2 bg-white"
        />
        <p className="mt-2 text-sm text-gray-600">Verified Certification</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="https://lawinternships.in/wp-content/uploads/2023/04/Ministry_of_Corporate_Affairs_India.svg.png"
          alt="Quality Assurance"
          className="h-24 w-auto object-contain shadow-md rounded-md border border-gray-200 p-2 bg-white"
        />
        <p className="mt-2 text-sm text-gray-600">Quality Certified</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="https://www.cupolagroup.com/wp-content/uploads/2022/07/iso-18295-contact-center-certification-1024x771.jpg"
          alt="ISO 18295"
          className="h-24 w-auto object-contain shadow-md rounded-md border border-gray-200 p-2 bg-white"
        />
        <p className="mt-2 text-sm text-gray-600">ISO 18295</p>
      </div>
    </div>
  </div>
</section>

          
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}
