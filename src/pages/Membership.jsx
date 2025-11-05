import React, { useState } from "react";

export default function Membership() {
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
    subscription: "",
    donation: "",
    signature: "",
    involvement: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Membership</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section>
          <div className="space-y-4 leading-relaxed">
            <p>
              Did you know that the Park's educational activities and general
              operations are 80% funded by user fees and fund-raising by the
              Friends? We NEED your help!
            </p>
            <p>
              Please, join the Friends. Complete the application form below or
              submit to{" "}
              <a
                href="mailto:info@friendsofcharlestonlakepark.ca?cc=foclptreasurer@1000island.net"
                className="content-link"
              >
                info@friendsofcharlestonlakepark.ca
              </a>
              .
            </p>
            <p>
              Your membership in the Friends would be highly valued. While we
              would welcome your getting involved in our various activities,
              membership can also just be supportive of our work for users of
              the Parks, be they campers, hikers or day visitors.
            </p>
            <p className="font-bold">
              Membership is very reasonable: $20 for an individual and $25 for a
              family annually. For businesses, the rate is $50 annually.
            </p>
          </div>

          <div className="mt-8 space-y-4 leading-relaxed">
            <h4 className="text-xl font-semibold underline">
              Donate to the Friends
            </h4>
            <p>
              The Friends is a registered charitable organization. Any donation
              you make over $10 will receive a tax receipt. Donations are
              welcome. They help us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Buy equipment for Park naturalist and educational programs to
                supplement public (and always scarce) funds
              </li>
              <li>Support even more our unique species research programs</li>
              <li>
                Be ready when the opportunity arises to contribute to land
                acquisition to expand the Park and conserve even more of this
                beautiful part of the world
              </li>
              <li>
                Support entertainment and cultural programming for the campers
                and the community
              </li>
            </ul>
            <p>
              If you are considering a donation and would like to discuss it,
              get in touch with us at{" "}
              <a
                href="mailto:info@friendsofcharlestonlakepark.ca?cc=foclptreasurer@1000island.net"
                className="content-link"
              >
                info@friendsofcharlestonlakepark.ca
              </a>
              . Large donations can be set aside at the direction of the donor
              for a specific project.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <h3 className="text-center mb-8">Become a Member</h3>

          <div className="max-w-3xl mx-auto">
            <form
              action="https://formsubmit.co/foclptreasurer@1000island.net"
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
                      className="w-full px-4 py-3"
                    />
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
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

              {/* Membership and Donation Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Membership <span className="text-red-600">*</span>
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="individual"
                        name="subscription"
                        value="Individual ($20)"
                        checked={formData.subscription === "Individual ($20)"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="individual" className="cursor-pointer">
                        Individual ($20)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="family"
                        name="subscription"
                        value="Family ($25)"
                        checked={formData.subscription === "Family ($25)"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="family" className="cursor-pointer">
                        Family ($25)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="corporate"
                        name="subscription"
                        value="Corporate ($50)"
                        checked={formData.subscription === "Corporate ($50)"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="corporate" className="cursor-pointer">
                        Corporate ($50)
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="donation"
                    className="block text-lg font-semibold mb-3"
                  >
                    I/We would also like to donate:
                  </label>
                  <input
                    type="text"
                    id="donation"
                    name="donation"
                    value={formData.donation}
                    onChange={handleChange}
                    placeholder="Donation ($)"
                    className="w-full px-4 py-3"
                  />
                </div>
              </div>

              {/* Confirmation Section */}
              <div>
                <label className="block text-lg font-semibold mb-3 text-center">
                  Confirmation <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  value={formData.signature}
                  onChange={handleChange}
                  placeholder="Signature"
                  required
                  className="w-full px-4 py-3 mb-4"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="involvement"
                    name="involvement"
                    checked={formData.involvement}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="involvement" className="cursor-pointer">
                    I would like to discuss my involvement. Please contact me.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button type="submit" className="green-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <p className="text-center mb-6">
            Cheques should be made payable to the{" "}
            <strong>"Friends of Charleston Lake Park"</strong> and sent to the
            Park address:
          </p>

          <div className="max-w-4xl mx-auto space-y-6 leading-relaxed">
            <div>
              <p className="font-semibold !mt-0 !mb-0">
                Friends of Charleston Lake Park
              </p>
              <p className="!mt-0 !mb-0">148 Woodvale Road</p>
              <p className="!mt-0 !mb-0">RR 4</p>
              <p className="!mt-0 !mb-0">Lansdowne ON, K0E 1L0</p>
            </div>

            <div>
              <p className="font-semibold !mt-0 !mb-0">
                e-Transfers should be sent to:
              </p>
              <p>
                <a
                  href="mailto:foclptreasurer@1000island.net"
                  className="content-link font-semibold !mt-0 !mb-0"
                >
                  foclptreasurer@1000island.net
                </a>
              </p>
              <p className="italic text-sm">
                No password required. For income tax receipts to be issued
                please provide your contact information.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
