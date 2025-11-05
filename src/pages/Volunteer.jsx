import React, { useState } from "react";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    type: "",
    interests: "",
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
        <h1>Volunteer</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section className="mx-auto">
          <div className="space-y-4 leading-relaxed">
            <p className="mb-12">
              The Friends are a small group of dedicated volunteers. We like to
              be out in the Park doing things such as monitoring and cleaning
              trails, operating our various programs for Park users, supporting
              the efforts of Park staff to improve trails and sharing the Park
              experience. We need folks to help out with these activities as
              well as the work of running the Friends, not a big job, but a
              valuable contribution nonetheless. Our Board meets several times a
              year to plan our activities and hear from Park staff on priorities
              and needs that we can help with. We benefit from a variety of
              views and do our best not to have meetings for their own sake. We
              tend to be practical and focused on our mission. That means few
              words and many deeds. We would welcome your interest in
              volunteering. If you submit this form, we will get in touch.
            </p>
            <p className="text-lg font-semibold mt-12 text-center">
              Yes, I would be interested in volunteering with the Friends.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <form
            action="https://formsubmit.co/info@friendsofcharlestonlakepark.ca"
            method="POST"
            className="space-y-6"
          >
            {/* Volunteer Type Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-3">
                  What would you like to do?{" "}
                  <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="trail_monitor"
                      name="type"
                      value="Trail Monitor"
                      checked={formData.type === "Trail Monitor"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="trail_monitor" className="cursor-pointer">
                      Trail Monitor
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="on_board"
                      name="type"
                      value="Be on the Board"
                      checked={formData.type === "Be on the Board"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="on_board" className="cursor-pointer">
                      Be on the Board
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="fund_raising"
                      name="type"
                      value="Fund Raising"
                      checked={formData.type === "Fund Raising"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="fund_raising" className="cursor-pointer">
                      Fund Raising
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="community_liaison"
                      name="type"
                      value="Community Liaison"
                      checked={formData.type === "Community Liaison"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="community_liaison"
                      className="cursor-pointer"
                    >
                      Community Liaison
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="interests"
                  className="block text-lg font-semibold mb-3"
                >
                  Other Interests <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder=""
                  required
                  className="w-full px-4 py-3"
                />
              </div>
            </div>

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
