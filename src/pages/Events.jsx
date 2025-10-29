import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/images/seniors/seniors1.jpg",
      caption: "A short hike on Quiddity Trail",
    },
    {
      image: "/assets/images/seniors/seniors2.jpg",
      caption: "A short hike on Quiddity Trail",
    },
    {
      image: "/assets/images/seniors/seniors3.jpg",
      caption: "Lunch",
    },
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
        <h1>Special Events</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section>
          <div className="text-center mb-8">
            <h3 className="mb-4">Seniors Day</h3>
            <p className="text-lg font-semibold mb-2">September 26th, 2024</p>
            <p className="leading-relaxed">
              Come for a walk and lunch, free entry to the park for
              participants, some transport available.
            </p>
          </div>

          <div className="relative overflow-hidden md:w-[900px] mx-auto">
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
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="leading-relaxed">
              Special events funded by the Friends of Charleston Lake Park.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
