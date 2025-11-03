import React, { useState, useEffect } from "react";

const MyCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
      <img
        src={images[current]}
        alt="carousel"
        className="w-full h-75 object-cover transition-all duration-700"
      />

      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/60 rounded-full text-2xl shadow-md hover:bg-white/80"
      >
        ◀
      </button>

      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/60 rounded-full text-2xl shadow-md hover:bg-white/80"
      >
        ▶
      </button>
    </div>
  );
};

export default MyCarousel;
