import React from "react";
export default function Trails() {
  const trails = [
    {
      name: "Beech Woods",
      length: "1.5 km",
      guide: "Interpretive panels along trail",
      theme: "Wildlife of the park",
      features: "Mature forest; diverse habitats",
      difficulty: "Easy",
      image: "assets/images/trails/beech.jpg",
      alt: "Beech Woods Trail",
    },
    {
      name: "Quiddity",
      length: "2.4 km",
      map: "images/trails/maps/quiddity.png",
      theme: "Charleston's diverse habitats",
      features: "Boardwalk over wetland; scenic lookout",
      difficulty: "Easy",
      image: "assets/images/trails/quiddity.jpg",
      alt: "Quiddity Trail",
    },
    {
      name: "Sandstone Island",
      length: "3.3 km",
      map: "images/trails/maps/sandstone.png",
      theme: "Geological and human history of the park",
      features:
        "Historic rock shelter; scenic lookout; interesting geological features",
      difficulty: "Moderate",
      image: "assets/images/trails/sandstone.jpg",
      alt: "Sandstone Island Trail",
    },
    {
      name: "Shoreline Centennial",
      length: "2.0 km",
      map: "images/trails/maps/shoreline.png",
      theme: "The story of Charleston Lake",
      features: "Scenic views of the rugged shoreline",
      difficulty: "Moderate",
      image: "assets/images/trails/shoreline.jpg",
      alt: "Shoreline Centennial Trail",
    },
    {
      name: "Hemlock Ridge",
      length: "2.0 km",
      map: "images/trails/maps/hemlock.png",
      theme: "Plant communities of the park",
      features: "Views of a beaver pond; rock crevasses",
      difficulty: "Moderate",
      image: "assets/images/trails/hemlock.jpg",
      alt: "Hemlock Ridge Trail",
    },
    {
      name: "Tallow Rock Bay",
      subtitle: "(aka The Westside Trail)",
      length: "10 km",
      map: "https://trailpeak.com/trails/Tallow-Rock-Bay-Loop-near-Brockville-ON-3299",
      guide:
        "For an excellent map with pictures and points of interest, check out Trail Peak",
      guideUrl: "https://www.trailpeak.com",
      features:
        "Scenic lookouts; more remote areas of the park; floating bridge",
      difficulty: "Difficult",
      image: "assets/images/trails/tallow.jpg",
      alt: "Tallow Rock Bay Trail",
    },
    {
      name: "Blue Mountain",
      length: "5.7 km",
      map: "images/trails/maps/blue.png",
      theme: "Wildlife of the park",
      features: "Scenic lookout (the highest point in Leeds County)",
      difficulty: "Difficult",
      note: "Accessible by water from the Huckleberry Hollow picnic site.",
      image: "assets/images/trails/blue.jpg",
      alt: "Blue Mountain Trail",
    },
  ];

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>The Trails of the Park</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section>
          <div className="space-y-4 leading-relaxed">
            <p>
              The hiking trails within Charleston Lake Park are varied and
              include distances for hikers of every experience level. Each trail
              has a theme, and the shorter and relatively easy east side
              Shoreline Centennial, Sandstone Island, Hemlock Ridge and Beech
              Woods Trails have interpretive trail guides available.
            </p>

            <p>
              The longest trail in the Park, the Tallow Rock Bay loop, is on the
              west side, and from the trail head, (museum), is approximately 14
              kilometers end to end. It is in more remote areas and rates a
              difficult by park staff.
            </p>

            <p>
              While hiking in the park, you can expect to enjoy breathtaking
              views of Charleston Lake, ancient aboriginal cave dwellings,
              unique rock and forest settings, and well maintained footpaths.
              Come and enjoy.
            </p>

            <p>
              Interpretive Trail Guides are available at the Discovery Centre,
              Gatehouse, and Park Office. All of our trails are also highlighted
              in the{" "}
              <a
                href="https://www.ontariotrails.on.ca/"
                target="_blank"
                className="content-link"
                rel="noopener noreferrer"
              >
                Ontario Trails Council Trail Guide
              </a>
              .
            </p>
          </div>
        </section>

        {trails.map((trail, index) => (
          <React.Fragment key={trail.name}>
            <hr className="my-8" />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="!mt-0">
                  {trail.name}
                  {trail.subtitle && (
                    <span className="italic text-base ml-2">
                      {trail.subtitle}
                    </span>
                  )}
                </h3>
                <ul className="space-y-2 leading-relaxed">
                  <li>
                    <strong>Length:</strong> {trail.length}
                  </li>
                  {trail.map && (
                    <li>
                      <strong>Map:</strong>{" "}
                      <a
                        href={trail.map}
                        target="_blank"
                        className="content-link"
                        rel="noopener noreferrer"
                      >
                        Available here
                      </a>
                    </li>
                  )}
                  {trail.guide && !trail.guideUrl && (
                    <li>
                      <strong>Trail guide:</strong> {trail.guide}
                    </li>
                  )}
                  {trail.guide && trail.guideUrl && (
                    <li>
                      <strong>Trail Guide:</strong>{" "}
                      <a
                        href={trail.guideUrl}
                        target="_blank"
                        className="content-link"
                        rel="noopener noreferrer"
                      >
                        Trail Peak
                      </a>
                    </li>
                  )}
                  {trail.theme && (
                    <li>
                      <strong>Theme:</strong> {trail.theme}
                    </li>
                  )}
                  {trail.features && (
                    <li>
                      <strong>Features:</strong> {trail.features}
                    </li>
                  )}
                  <li>
                    <strong>Difficulty:</strong> {trail.difficulty}
                  </li>
                  {trail.note && <li className="italic">{trail.note}</li>}
                </ul>
              </div>
              <div>
                <img
                  src={trail.image}
                  className="w-full h-75 object-cover img-border"
                  alt={trail.alt}
                />
              </div>
            </section>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
