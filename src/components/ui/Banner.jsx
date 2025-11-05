import { useEffect, useState } from "react";

const Banner = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(33, 39, 31, 0.387), rgba(38, 51, 38, 0.302)), url(${img})`,
          }}
          id="banner-bg"
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 id="banner-header">Welcome to Charleston Lake Park!</h1>
      </div>
    </div>
  );
};

export default Banner;
