import React from "react";

export default function Resources() {
  const links = [
    {
      title: "Charleston Lake Association",
      url: "https://www.charlestonlakeassociation.ca/",
    },
    {
      title: "Ontario Parks Reservations",
      url: "https://www.ontarioparks.com/en",
    },
    {
      title: "Frontenac Arch Biosphere",
      url: "https://frontenacarchbiosphere.ca/",
    },
    {
      title: "Ontario Trails Council",
      url: "https://www.ontariotrails.on.ca/",
    },
    {
      title: "1000 Islands Kayaking",
      url: "https://1000islandskayaking.com/",
    },
    {
      title: "Thousand Islands Watershed Land Trust",
      url: "https://www.tiwlt.ca/",
    },
  ];

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Resources</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {links.map((link) => (
              <h3 key={link.title} className="text-xl">
                <a
                  href={link.url}
                  target="_blank"
                  className="content-link"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              </h3>
            ))}
          </div>

          <div>
            <img
              src="/assets/images/2013_late_oct.jpg"
              className="w-full h-auto img-border"
              alt="An island in late October"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
