import React, { useState } from "react";
import Navbar from "./Navbar";

export default function JobApplication() {
  const [formData, setFormData] = useState({
    full_name: "",
    qualification: "",
    location: "",
    email: "",
    mobile: "",
    experience: "",
    resume: null,
  });

  const [uploadResult, setUploadResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append("role", "Frontend Developers");

    try {
      const res = await fetch("http://localhost:5000/api/job-application", {
        method: "POST",
        body: data,
      });

      const contentType = res.headers.get("content-type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        result = await res.json();
      } else {
        throw new Error("Server did not return JSON.");
      }

      if (res.ok) {
        setUploadResult(result);
      } else {
        alert(result.error || "Error submitting application.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
        >
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Job Application
          </h2>

          <label className="block font-medium mt-4">Applying for</label>
          <input
            type="text"
            value="Frontend Developers"
            readOnly
            className="w-full p-2 mt-1 border border-gray-300 rounded-md text-gray-600 bg-gray-100"
          />

          <label className="block font-medium mt-4">Full Name</label>
          <input
            type="text"
            name="full_name"
            placeholder="Enter your full name"
            required
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />

          <label className="block font-medium mt-4">Highest Qualification</label>
          <input
            type="text"
            name="qualification"
            placeholder="e.g. Bachelor's in Computer Science"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />

          <label className="block font-medium mt-4">Current Location</label>
          <input
            type="text"
            name="location"
            placeholder="e.g. San Francisco, CA"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />

          <div className="flex gap-3 mt-4">
            <div className="flex-1">
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                placeholder="10-digit mobile number"
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <label className="block font-medium mt-4">Experience</label>
          <select
            name="experience"
            required
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          >
            <option value="">Select your experience level</option>
            <option>Fresher</option>
            <option>1-2 Years</option>
            <option>3-5 Years</option>
            <option>5+ Years</option>
          </select>

          <label className="block font-medium mt-4">Resume/CV</label>
          <input
            type="file"
            name="resume"
            required
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 rounded-md text-lg font-medium disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      {uploadResult && (
        <div className="text-center p-4 bg-green-100 mt-4">
          <h3 className="font-bold text-green-700">Application Submitted!</h3>
          {uploadResult.url && (
            <p>
              Resume Link:{" "}
              <a
                href={uploadResult.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Resume
              </a>
            </p>
          )}
        </div>
      )}
    </>
  );
}
