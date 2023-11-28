"use client";
import React, { useRef, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Bag1 from "../../../public/bags/bag1.jpg";
import Bag2 from "../../../public/bags/bag2.jpg";
import Bag3 from "../../../public/bags/bag3.jpg";
import Image from "next/image";

const Carousel = () => {
  const scrollContainer = useRef(null);

  const data = [
    { img: Bag1 },
    { img: Bag2 },
    { img: Bag3 },
    { img: Bag1 },
    { img: Bag2 },
    { img: Bag3 },
    { img: Bag1 },
    { img: Bag2 },
    { img: Bag3 },
  ];

  useEffect(() => {
    const container = scrollContainer.current;

    if (container) {
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;

      let scrollPos = 0;

      const scrollCarousel = () => {
        if (scrollPos >= scrollWidth - containerWidth) {
          scrollPos = 0;
          container.scrollTo({ left: scrollPos, behavior: "auto" });
        } else {
          scrollPos += 1; // Adjust the scrolling speed here
          container.scrollTo({ left: scrollPos, behavior: "auto" });
        }
      };

      const interval = setInterval(scrollCarousel, 50); // Adjust the interval for smoothness

      return () => clearInterval(interval);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 200; // Adjust scroll amount here
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 200; // Adjust scroll amount here
    }
  };

  return (
    <div className="w-full overflow-hidden relative py-10 px-5">
      <MdChevronLeft
        size={40}
        className="bg-white left-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
        onClick={scrollLeft}
      />
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto whitespace-nowrap space-x-5 scrollbar-hide"
        style={{ minWidth: "100%" }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <div className={`w-60 h-60 bg-cover bg-center rounded-3xl p-5`}>
              <Image
                src={item.img}
                className="w-full h-full rounded-3xl bg-cover bg-no-repeat hover:scale-110 duration-150 transition-all ease-in-out"
              />
            </div>
            {/* Add item description if needed */}
          </div>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="bg-white right-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
        onClick={scrollRight}
      />
    </div>
  );
};

export default Carousel;
