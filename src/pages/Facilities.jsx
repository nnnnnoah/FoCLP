import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import tour1 from "@/assets/images/tour/tour1.jpg";
import tour2 from "@/assets/images/tour/tour2.jpg";
import tour3 from "@/assets/images/tour/tour3.jpg";
import tour4 from "@/assets/images/tour/tour4.jpg";
import tour5 from "@/assets/images/tour/tour5.jpg";
import tour6 from "@/assets/images/tour/tour6.jpg";
import tour7 from "@/assets/images/tour/tour7.jpg";
import tour8 from "@/assets/images/tour/tour8.jpg";
import tour9 from "@/assets/images/tour/tour9.jpg";
import tour10 from "@/assets/images/tour/tour10.jpg";
import tour11 from "@/assets/images/tour/tour11.jpg";
import tour12 from "@/assets/images/tour/tour12.jpg";
import tour13 from "@/assets/images/tour/tour13.jpg";
import tour14 from "@/assets/images/tour/tour14.jpg";
import tour15 from "@/assets/images/tour/tour15.jpg";
import tour16 from "@/assets/images/tour/tour16.jpg";
import tour17 from "@/assets/images/tour/tour17.jpg";
import tour18 from "@/assets/images/tour/tour18.jpg";
import tour19 from "@/assets/images/tour/tour19.jpg";
import tour20 from "@/assets/images/tour/tour20.jpg";
import tour21 from "@/assets/images/tour/tour21.jpg";
import tour22 from "@/assets/images/tour/tour22.jpg";
import tour23 from "@/assets/images/tour/tour23.jpg";
import tour24 from "@/assets/images/tour/tour24.jpg";
import tour25 from "@/assets/images/tour/tour25.jpg";
import tour26 from "@/assets/images/tour/tour26.jpg";
import tour27 from "@/assets/images/tour/tour27.jpg";
import tour28 from "@/assets/images/tour/tour28.jpg";
import tour29 from "@/assets/images/tour/tour29.jpg";

export default function Facilities() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: tour1,
      caption: "Bayside Comfort Station",
    },
    { image: tour2, caption: "Boat Launch" },
    { image: tour3, caption: "Boat Launch at Dusk" },
    { image: tour4, caption: "Buckhorn Point" },
    { image: tour5, caption: "Canoe Launch" },
    { image: tour6, caption: "Park Entrance" },
    { image: tour7, caption: "Day Use Beach" },
    { image: tour8, caption: "Day Use Canoe Launch" },
    { image: tour9, caption: "Day Use Parking" },
    { image: tour10, caption: "Day Use Picnic Area" },
    { image: tour11, caption: "Discovery Centre" },
    {
      image: tour12,
      caption: "Discovery Centre Interior",
    },
    { image: tour13, caption: "Dog Beach" },
    { image: tour14, caption: "Dog Beach" },
    { image: tour15, caption: "Gatehouse" },
    { image: tour16, caption: "Group Camping Area" },
    { image: tour17, caption: "Group Camping Area" },
    { image: tour18, caption: "Group Camping Area" },
    { image: tour19, caption: "Group Camping Area" },
    { image: tour20, caption: "Main Office" },
    {
      image: tour21,
      caption: "Meadowlands Small Comfort Station",
    },
    {
      image: tour22,
      caption: "Quiddity Trail Lookout",
    },
    {
      image: tour23,
      caption: "Quiddity Trail Final Lookout",
    },
    {
      image: tour24,
      caption: "Quiddity Trail First Lookout",
    },
    { image: tour25, caption: "Second Boardwalk" },
    { image: tour26, caption: "Shadyridge Beach" },
    {
      image: tour27,
      caption: "Shadyridge Comfort Station",
    },
    {
      image: tour28,
      caption: "Shoreline Picnic Area",
    },
    { image: tour29, caption: "Shoreline Trailhead" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatically flip through slideshow on mobile
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>A Tour Of Park Facilities</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section>
          <div className="relative overflow-hidden">
            <div className="relative h-50 md:h-[600px]">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full h-full img-border"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 text-white py-4 px-6">
                <h3 className="text-xl font-bold text-center">
                  {slides[currentSlide].caption}
                </h3>
              </div> */}
            </div>

            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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
