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
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
          Welcome to Charleston Lake Park!
        </h1>
      </div>
    </div>
  );
};

export default Banner;
