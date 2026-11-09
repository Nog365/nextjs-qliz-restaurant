
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Update the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  // Handle the contact form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo form only - no message is sent yet.
    setStatus(
      "Your form has been completed successfully. This is a demo, so your message has not been sent."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-amber-50">

      {/* Contact Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6">
          Contact QLiz
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We would love to hear from you!
          Contact us with questions, dining inquiries,
          or feedback.
        </p>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-emerald-950 text-center mb-12">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Location */}
            <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">📍</div>

              <h3 className="text-xl font-bold text-emerald-900 mb-3">
                Location
              </h3>

              <p className="text-gray-700">
                San Diego, California
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Sample location
              </p>
            </div>

            {/* Phone */}
            <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">📞</div>

              <h3 className="text-xl font-bold text-emerald-900 mb-3">
                Phone
              </h3>

              <p className="text-gray-700">
                (619) 555-0142
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Sample phone number
              </p>
            </div>

            {/* Email */}
            <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">✉️</div>

              <h3 className="text-xl font-bold text-emerald-900 mb-3">
                Email
              </h3>

              <p className="text-gray-700 break-words">
                hello@qliz.example
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Sample email address
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 text-center mb-4">
            Send Us a Message
          </h2>

          <p className="text-gray-600 text-center mb-10">
            Have a question or special request?
            Complete the form below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-emerald-950 font-semibold mb-2"
              >
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-emerald-950 font-semibold mb-2"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-emerald-950 font-semibold mb-2"
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter your subject"
                className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-emerald-950 font-semibold mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-900 text-white py-4 rounded-lg font-semibold hover:bg-emerald-800 transition cursor-pointer"
            >
              Send Message
            </button>

            {/* Form Status */}
            {status && (
              <p
                role="status"
                className="text-center text-emerald-900 font-medium"
              >
                {status}
              </p>
            )}

          </form>
        </div>
      </section>

      {/* Dining Inquiries */}
      <section className="bg-emerald-950 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dining Inquiries
          </h2>

          <p className="text-lg text-emerald-100">
            Planning a special dinner, family celebration,
            or private event? We look forward to helping
            you create a memorable dining experience.
          </p>

        </div>
      </section>

    </main>
  );
}
