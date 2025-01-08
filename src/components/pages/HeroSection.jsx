import React from "react";

import image1 from "../../assets/pexels-lyn-ong-2836069-5005518.jpg";
import image2 from "../../assets/pexels-pragyanbezbo-4199762.jpg";
import image3 from "../../assets/www-zanda-photography-RBdE3jv5y68-unsplash.jpg";
import image4 from "../../assets/thomas-verbruggen-cVYLIzF6Gh0-unsplash.jpg";

const HeroSection = () => {
  const images = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Image changes every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center relative">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-1000 flex justify-center items-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg text-center shadow-lg">
          <h1 className="text-4xl md:text-6xl text-green-600 font-bold drop-shadow-lg">
            Welcome to Manic Organix
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl drop-shadow-lg">
          From Farm to Future: Innovating Health with Agri-Tech
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
