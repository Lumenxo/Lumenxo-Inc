import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaAward,
  FaBolt,
  FaHeart,
  FaMugHot,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";

const jobListings = [
  {
    title: "Full Stack Developer Intern",
    category: "Engineering",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Join our engineering team as a Full Stack Developer Intern to gain hands-on experience building scalable web applications using modern technologies. Work alongside experienced developers and contribute to real-world projects over a 60-day internship program.",
    categoryColor: "bg-blue-500",
  },
  {
    title: "UI/UX Designer Intern",
    category: "Design",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Learn UI/UX design fundamentals while working on real projects during our 60-day internship program. Gain hands-on experience in user research, wireframing, and interface design under mentorship of senior designers.",
    categoryColor: "bg-purple-500",
  },
  {
    title: "Graphics Designer Intern",
    category: "Marketing",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Develop graphic design skills while creating visual content for marketing campaigns during our 60-day internship program. Learn brand guidelines and design best practices in a professional environment.",
    categoryColor: "bg-orange-500",
  },
  {
    title: "Video Editor Intern",
    category: "Content",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Learn video editing and post-production techniques while working on content projects during our 60-day internship program. Gain experience with professional editing software and video production workflows.",
    categoryColor: "bg-indigo-500",
  },
];

const CareersSection = () => {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="text-indigo-400">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-16">
            Be part of a passionate team that's building the future of software in India. We're looking for talented individuals who share our vision of innovation and excellence.
          </p>

          <div className="grid gap-10 md:grid-cols-3 mb-24">
            <div className="flex flex-col items-center">
              <FaUsers className="text-5xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">15+ Team Members</h3>
              <p className="text-gray-400 text-center">Diverse, talented professionals from across India</p>
            </div>
            <div className="flex flex-col items-center">
              <FaAward className="text-5xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
              <p className="text-gray-400 text-center">Recognized as a great place to work and grow</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBolt className="text-5xl text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast-Growing</h3>
              <p className="text-gray-400 text-center">Expanding rapidly with exciting opportunities</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Work <span className="text-indigo-400">With Us?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
            We offer competitive benefits and a supportive environment where you can do your best work.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24">
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition">
              <FaHeart className="text-4xl text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Health & Wellness</h3>
              <p className="text-gray-400 text-sm">Comprehensive health insurance, mental health support, and wellness programs.</p>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition">
              <FaBolt className="text-4xl text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Flexible Work</h3>
              <p className="text-gray-400 text-sm">Remote-first culture with flexible hours and work-life balance.</p>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition">
              <LuBadgeCheck className="text-4xl text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Growth & Learning</h3>
              <p className="text-gray-400 text-sm">Professional development budget, conferences, and skill enhancement programs.</p>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition">
              <FaMugHot className="text-4xl text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Great Goodies</h3>
              <p className="text-gray-400 text-sm">Free Goodies, team outings, latest tech equipment, and fun office environment.</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open <span className="text-indigo-400">Positions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Find your next opportunity and join our mission to build amazing software.
          </p>

          <div className="space-y-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 text-left relative"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <span className={`text-sm text-white px-2 py-1 rounded ${job.categoryColor}`}>
                        {job.category}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-400 mt-2 flex-wrap">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMoneyBillWave /> {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <button className="text-sm text-blue-400 hover:underline flex items-center gap-1">
                      Details <IoChevronDown />
                    </button>
                    <Link
                      to="https://forms.gle/S6QdoTnerxf9wiSG9"
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full font-semibold text-sm hover:scale-105 transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                <p className="text-gray-300 mt-3 text-sm">{job.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See a Perfect <span className="text-indigo-400">Match?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://forms.gle/SBdjJmp2Zn5KCxwv9"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                <FaArrowRight className="text-sm" />
                Send Your Resume
              </Link>
              <Link
                to="/AboutUs"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareersSection;
