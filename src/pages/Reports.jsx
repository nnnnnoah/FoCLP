import React from "react";
import agm2023 from "@/assets/docs/2023 AGM Minutes.pdf";
import agm2022 from "@/assets/docs/2022 AGM Minutes.pdf";
import agm2021 from "@/assets/docs/2021 AGM Minutes.pdf";
import agm2020 from "@/assets/docs/2020 AGM Minutes.pdf";
import agm2019 from "@/assets/docs/2019 AGM Minutes.pdf";
import financialReport2024 from "@/assets/docs/2024 FoCLP Financial Report.pdf";

export default function Reports() {
  const boardMembers = [
    { name: "Steve Page", position: "Chair", location: "Kingston, ON" },
    { name: "Cliff Redman", position: "Vice Chair", location: "Lansdowne, ON" },
    { name: "Janice Hallam", position: "Secretary", location: "Lansdowne, ON" },
    {
      name: "Yolande LaPointe",
      position: "Director",
      location: "Lansdowne, ON",
    },
    { name: "Jim Wallbridge", position: "Director", location: "Lansdowne, ON" },
    {
      name: "Claudette Weststrate",
      position: "Director, Publicity",
      location: "Lansdowne, ON",
    },
    {
      name: "Wayne Ashford",
      position: "Director",
      location: "Stittsville, ON",
    },
    { name: "Doug Bickerton", position: "Director", location: "Gananoque, ON" },
    { name: "Peter Kaiser", position: "Treasurer", location: "Gananoque, ON" },
    { name: "Vicki Kohse", position: "Director", location: "Gananoque, ON" },
    {
      name: "Noah Miller",
      position: "Web Developer",
      location: "Kingston, ON",
    },
  ];

  const agmYears = [
    { year: "2024", file: "" },
    { year: "2023", file: agm2023 },
    { year: "2022", file: agm2022 },
    { year: "2021", file: agm2021 },
    { year: "2020", file: agm2020 },
    { year: "2019", file: agm2019 },
    { year: "2017", file: "" },
    { year: "2016", file: "" },
    { year: "2015", file: "" },
    { year: "2014", file: "" },
    { year: "2013", file: "" },
    { year: "2012", file: "" },
  ];

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Board of Directors</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section className="text-center">
          <div className="space-y-4">
            {boardMembers.map((member) => (
              <p key={member.name}>
                <strong>
                  {member.name} - {member.position}
                </strong>
                <br />
                {member.location}
              </p>
            ))}
          </div>

          <p className="mt-12">Homepage photos by Marc LaPointe</p>
        </section>

        <hr className="my-8" />

        <section className="text-center">
          <h3 className="mb-6">Notice of Annual General Meeting</h3>

          <div className="space-y-4 leading-relaxed max-w-3xl mx-auto">
            <p>
              The Friends AGM will be held on Saturday, April 26, at 10 a.m. at
              the Park's Main Office.
            </p>

            <p className="mt-8 font-semibold">Agenda:</p>

            <ol className="text-left space-y-3 max-w-2xl mx-auto list-decimal list-inside">
              <li>Receipt of the Agenda</li>
              <li>Receipt of the Minutes of the 2023 AGM</li>
              <li>
                Approval of the 2024 Financial Report (followed by a resolution
                "to waive an independent audit or financial review" [This is a
                requirement of the Ontario Non-Profit Corporations Act])
              </li>
              <li>
                Proposed amendment of the Friends' by-laws ("that Article VIII.2
                "Committees shall be chaired by Directors-at-large" be amended
                to read "Committees shall be chaired by Directors.")
              </li>
              <li>Report on the Pavilion Project</li>
              <li>Park Report</li>
              <li>Election of Directors</li>
              <li>Adjournment</li>
            </ol>

            <div className="mt-8">
              <h4 className="text-lg">
                <a
                  href={financialReport2024}
                  className="content-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2024 Financial Report
                </a>
              </h4>
            </div>
          </div>
        </section>

        <hr className="my-8" />

        <section className="text-center">
          <h2 className="mb-8">Board Reports & Info</h2>

          <h3 className="mb-6">Annual General Meetings:</h3>

          <div className="flex flex-wrap justify-center gap-2 text-lg">
            {agmYears.map((item, index) => (
              <React.Fragment key={item.year}>
                {item.file ? (
                  <a
                    href={item.file}
                    className="content-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.year}
                  </a>
                ) : (
                  <span className="text-gray-400">{item.year}</span>
                )}
                {index < agmYears.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
