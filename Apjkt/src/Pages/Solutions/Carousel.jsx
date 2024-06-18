import  { useState, useEffect, useRef } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isInView, images.length]);

  return (
    <div ref={carouselRef} className="carousel flex justify-center items-center">
      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex}`}
        className="carousel-image w-[400px] h-[300px] object-contain "
      />
    </div>
  );
};

export default Carousel;
