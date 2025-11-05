import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    line1: "",
    line2: "",
    city: "",
    stateProvince: "",
    zipPostal: "",
    country: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Contact Us</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section className="text-center mx-auto">
          <div className="space-y-4 leading-relaxed">
            <p>
              You cannot make campsite reservations through this site. For the
              Ontario Parks Reservation system, click{" "}
              <a
                href="https://www.ontarioparks.com/en"
                target="_blank"
                className="content-link"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              If you want to discuss volunteering, or make a general enquiry,
              please connect with us at{" "}
              <a
                href="mailto:info@friendsofcharlestonlakepark.ca"
                className="content-link"
              >
                info@friendsofcharlestonlakepark.ca
              </a>
            </p>
            <p className="text-lg font-semibold mt-8">
              To get in touch about the Park, about contributing or
              volunteering, just use this form:
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <form
            action="https://formsubmit.co/noahmiller@hotmail.ca"
            method="POST"
            className="space-y-6"
          >
            {/* Name Section */}
            <div>
              <label className="block text-lg font-semibold mb-3">
                Name <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first"
                  value={formData.first}
                  onChange={handleChange}
                  placeholder="First"
                  required
                  className="w-full px-4 py-3"
                />
                <input
                  type="text"
                  name="last"
                  value={formData.last}
                  onChange={handleChange}
                  placeholder="Last"
                  required
                  className="w-full px-4 py-3"
                />
              </div>
            </div>

            {/* Address Section */}
            <div>
              <label className="block text-lg font-semibold mb-3">
                Address <span className="text-red-600">*</span>
              </label>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="line1"
                    value={formData.line1}
                    onChange={handleChange}
                    placeholder="Line 1"
                    required
                    className="w-full px-4 py-3"
                  />
                  <input
                    type="text"
                    name="line2"
                    value={formData.line2}
                    onChange={handleChange}
                    placeholder="Line 2 (optional)"
                    className="w-full px-4 py-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full px-4 py-3"
                  />
                  <input
                    type="text"
                    name="stateProvince"
                    value={formData.stateProvince}
                    onChange={handleChange}
                    placeholder="State / Province"
                    required
                    className="w-full px-4 py-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="zipPostal"
                    value={formData.zipPostal}
                    onChange={handleChange}
                    placeholder="ZIP / Postal Code"
                    required
                    className="w-full px-4 py-3"
                  />
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                    className="w-full px-4 py-3"
                  />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <label className="block text-lg font-semibold mb-3">
                Contact <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button type="submit" className="green-btn">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
