import React from "react";

export default function Pavilion() {
  const donationLevels = [
    { level: "Bronze", amount: "Up to $99" },
    { level: "Silver", amount: "$100 to $499" },
    { level: "Gold", amount: "$500 to $999" },
    { level: "Platinum", amount: "$1000+" },
    { level: "Corporate", amount: "$5000+" },
  ];

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Help Us Build a Pavilion at Charleston Lake Provincial Park!</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section>
          <img
            src="/assets/images/pavilion/learning_scructure.jpg"
            alt="Learning Centre structure at Frontenac Provincial Park. The same design will be used for the pavilion at Charleston Lake Provincial Park"
            className="w-full max-w-4xl mx-auto img-border rounded mb-8"
          />

          <div className="space-y-4 leading-relaxed">
            <h3 className="mb-4">
              Charleston Lake Park will soon be celebrating its 50th
              anniversary!
            </h3>

            <p>
              In conjunction with this, the park has recently announced an
              expansion of its area. More campsites will be strategically
              placed, and more land will be conserved for the enjoyment of our
              community and the protection of all species. Over the past 30
              years, the Friends of Charleston Lake Park (FCLP) has hosted many
              park events. We've talked about the need for a permanent covered
              structure of an adequate size. Extreme summer heat and heavy rains
              affect the success of the events we plan for the community and for
              the campers. For example, for seven years, the Friends have hosted
              a September Seniors Day for the community complete with lunch.
              Weather conditions have run the gamut from sunny and hot to
              soaked-to-the-skin downpours.
            </p>

            <p>
              The importance of a permanent pavilion at Charleston Lake Park is
              clear. We want to put the talk of a covered gathering space into
              action. For this we need your help.
            </p>

            <p>
              Our wheelchair accessible pavilion will be 26 x 42 feet
              (approximately 7 x 12 metres), with a concrete floor and one
              closed wall for video/computer presentations. It will be used for
              park and community gatherings with a focus on park-specific
              education, workshops and entertainment.
            </p>

            <p>
              The total project is estimated at $150,000 and will be refined
              once specs are finalized and quotes have been solicited. Funding
              will be a combination of donations, grants and services in-kind
              from park staff. The completion date is estimated as Fall/Winter
              2025-26. To be considered for a grant, FCLP must provide 25% of
              the total cost of the structure. We are a registered charitable
              organization with limited funds. This is beyond our means.
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-4">How You Can Help</h3>

          <div className="space-y-4 leading-relaxed">
            <p>
              We are asking for donations from community members, businesses,
              and park enthusiasts like you to help fund this important project.
              Your contribution—no matter the size—will make a significant
              difference in enhancing the experience for all who visit the park.
              Tax deductible donations to the Friends of Charleston lake Park
              can be made by clicking on the button below (donations managed
              through CanadaHelps).
            </p>

            <div className="my-6">
              <a
                className="green-btn"
                href="https://www.canadahelps.org/en/charities/the-friends-of-charleston-lake-parkles-amis-du-parc-charles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-6 leading-relaxed">
            With much appreciation, we ask that you consider one of the
            following donation categories:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-xl border-collapse">
              <tbody>
                {donationLevels.map((item) => (
                  <tr key={item.level}>
                    <td className="py-1 px-3 font-semibold text-left">
                      {item.level}
                    </td>
                    <td className="py-1 text-left">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 leading-relaxed">
            Donors, with their consent, will be recognized on the completed
            structure's "Wall of Appreciation".
          </p>
        </section>
      </div>
    </div>
  );
}
