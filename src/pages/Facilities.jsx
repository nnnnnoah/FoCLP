import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Facilities() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/images/tour/tour1.jpg",
      caption: "Bayside Comfort Station",
    },
    { image: "/assets/images/tour/tour2.jpg", caption: "Boat Launch" },
    { image: "/assets/images/tour/tour3.jpg", caption: "Boat Launch at Dusk" },
    { image: "/assets/images/tour/tour4.jpg", caption: "Buckhorn Point" },
    { image: "/assets/images/tour/tour5.jpg", caption: "Canoe Launch" },
    { image: "/assets/images/tour/tour6.jpg", caption: "Park Entrance" },
    { image: "/assets/images/tour/tour7.jpg", caption: "Day Use Beach" },
    { image: "/assets/images/tour/tour8.jpg", caption: "Day Use Canoe Launch" },
    { image: "/assets/images/tour/tour9.jpg", caption: "Day Use Parking" },
    { image: "/assets/images/tour/tour10.jpg", caption: "Day Use Picnic Area" },
    { image: "/assets/images/tour/tour11.jpg", caption: "Discover Centre" },
    {
      image: "/assets/images/tour/tour12.jpg",
      caption: "Discover Centre Interior",
    },
    { image: "/assets/images/tour/tour13.jpg", caption: "Dog Beach" },
    { image: "/assets/images/tour/tour14.jpg", caption: "Dog Beach" },
    { image: "/assets/images/tour/tour15.jpg", caption: "Gatehouse" },
    { image: "/assets/images/tour/tour16.jpg", caption: "Group Camping Area" },
    { image: "/assets/images/tour/tour17.jpg", caption: "Group Camping Area" },
    { image: "/assets/images/tour/tour18.jpg", caption: "Group Camping Area" },
    { image: "/assets/images/tour/tour19.jpg", caption: "Group Camping Area" },
    { image: "/assets/images/tour/tour20.jpg", caption: "Main Office" },
    {
      image: "/assets/images/tour/tour21.jpg",
      caption: "Meadowlands Small Comfort Station",
    },
    {
      image: "/assets/images/tour/tour22.jpg",
      caption: "Quiddity Trail Lookout",
    },
    {
      image: "/assets/images/tour/tour23.jpg",
      caption: "Quiddity Trail Final Lookout",
    },
    {
      image: "/assets/images/tour/tour24.jpg",
      caption: "Quiddity Trail First Lookout",
    },
    { image: "/assets/images/tour/tour25.jpg", caption: "Second Boardwalk" },
    { image: "/assets/images/tour/tour26.jpg", caption: "Shadyridge Beach" },
    {
      image: "/assets/images/tour/tour27.jpg",
      caption: "Shadyridge Comfort Station",
    },
    {
      image: "/assets/images/tour/tour28.jpg",
      caption: "Shoreline Picnic Area",
    },
    { image: "/assets/images/tour/tour29.jpg", caption: "Shoreline Trailhead" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>A Tour Of Park Facilities</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section>
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-96 md:h-[600px]">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-4 px-6">
                <h3 className="text-xl font-bold text-center">
                  {slides[currentSlide].caption}
                </h3>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-lg">
              For the Tabloid Map of Campsites, click{" "}
              <a href="#" className="content-link">
                here
              </a>
              .
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4">What We Offer</h3>
            <ul className="space-y-2 leading-relaxed list-disc list-inside">
              <li>Natural Environment Class Park</li>
              <li>Area of Park: 2891 hectares</li>
              <li>Open for Business 1972 (Officially Open 1975)</li>
              <li>Master Plan - Approved 1978</li>
              <li>Overnight Camping &amp; Day Use Visitation</li>
              <li>Trails of various levels of difficulty</li>
              <li>Approximate # of annual visitors: 90,000</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Campgrounds</h3>
            <ul className="space-y-2 leading-relaxed list-disc list-inside">
              <li>Total # of Campsites (in campgrounds): 235</li>
              <li>Electrical Campsites: 122</li>
              <li>
                Barrier Free Campsites (with electrical hookup &amp; water tap):
                4
              </li>
              <li>Interior Campsites (boat-in or hike-in): 10</li>
              <li>Interior Picnic Sites: 6</li>
              <li>Group Campsite Sites: 3</li>
              <li>Yurts: 4 (each sleeps 6)</li>
              <li>
                Rustic Tall Pines Cabin (sleeps 6){" "}
                <span className="italic">This cabin is water access only.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4">Other</h3>
            <ul className="space-y-2 leading-relaxed list-disc list-inside">
              <li>
                Comfort Stations (with showers, laundry facilities, wheelchair
                access)
              </li>
              <li>2 beaches</li>
              <li>Day Use Picnic Area</li>
              <li>Playground</li>
              <li>4 Self-guided Interpretive Trails</li>
              <li>
                10 km hiking trail with first 1 km wheelchair accessible over a
                boardwalk
              </li>
              <li>Discovery Centre (summer)</li>
              <li>Amphitheatre (summer)</li>
              <li>
                Natural Heritage Education Program includes Guided Hikes,
                Evening Amphitheatre Programs, Children's Programs, Special
                Events (summer)
              </li>
              <li>Boat Launch</li>
              <li>Canoe Launch</li>
              <li>Canoe, Kayak and Paddle Board Rental (summer / fall)</li>
              <li>Operating Season: Second Friday of May to Thanksgiving</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Reservations</h3>
            <ul className="space-y-2 leading-relaxed list-disc list-inside">
              <li>
                By phone:{" "}
                <a href="tel:1-888-668-7275" className="content-link">
                  1-888-ONT-PARK (1-888-668-7275)
                </a>
              </li>
              <li>
                By Internet:{" "}
                <a
                  href="http://www.OntarioParks.com"
                  target="_blank"
                  className="content-link"
                  rel="noopener noreferrer"
                >
                  www.OntarioParks.com
                </a>
              </li>
              <li>
                Information - Park Office:{" "}
                <a href="tel:613-659-2065" className="content-link">
                  (613) 659-2065
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
