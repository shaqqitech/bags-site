"use client";
import Image from "next/image";
import React, { useState } from "react";
import Bag1 from "../../../public/bags/bag1.jpg";
import Bag2 from "../../../public/bags/bag2.jpg";
import Bag3 from "../../../public/bags/bag3.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";

const Main = () => {
  const [currentImage, setCurrentImage] = useState(Bag2);
  const [activeSpan, setActiveSpan] = useState(1); // Initialize active span

  const data = [{ img: Bag1 }, { img: Bag2 }, { img: Bag3 }];
  const totalImages = data.length;

  const changeImage = (image, index) => {
    setCurrentImage(image);
    setActiveSpan(index);
  };

  const upArrow = () => {
    const nextIndex = (activeSpan + 1) % totalImages;
    changeImage(data[nextIndex].img, nextIndex);
  };

  const downArrow = () => {
    const nextIndex = (activeSpan - 1 + totalImages) % totalImages;
    changeImage(data[nextIndex].img, nextIndex);
  };

  return (
    <main className="w-screen h-full px-3 py-3">
      {/* Grid Div */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-full gap-4">
        {/* Left Box */}
        <div className="h-full rounded-3xl bg-[#b08968] py-16 px-10 flex flex-col justify-center items-start text-start">
          <p>Tbm Fletcher</p>
          <h1 className="text-5xl font-bold py-5">
            ELEGANT LEATHER MEN'S BACKPACKS
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis alias harum ipsum ea laboriosam voluptatum optio
            exercitationem ducimus enim mollitia commodi libero esse, voluptate
            cupiditate.
          </p>
          <p className="w-36 h-10 text-sm font-semibold rounded-full grid place-content-center bg-red-950 my-8">
            Explore More
          </p>
          <div className="flex justify-center items-cente mt-16">
            <span className="w-8 h-8 rounded-full bg-white grid place-content-center mr-3 text-[#b08968]">
              <FaLocationPin />
            </span>
            Lahore, <p className="pl-1 font-bold">Pakistan</p>
          </div>
        </div>
        {/* Right Box */}
        <div className="h-full rounded-3xl overflow-hidden relative">
          {/* Image */}
          <Image
            src={currentImage}
            alt="Bags Images"
            objectFit="cover"
            className="w-full h-full z-0"
          />

          {/* Pics change Div */}
          <div className="absolute bg-gradient-to-r from-gray-400/5 via-gray-600/30 to-gray-700/60 w-full lg:w-32 h-24 lg:h-full bottom-0  lg:top-0 lg:right-0 z-10 flex flex-row lg:flex-col justify-between items-center px-5 pb-7 lg:py-10">
            <span
              className="w-12 h-12 rounded-full bg-white hover:bg-slate-200 flex justify-center items-center cursor-pointer"
              onClick={upArrow}
            >
              <FaArrowRight className="text-2xl text-black" />
            </span>
            {/* OnClick Pics Change */}
            <div className="flex justify-center items-center flex-row lg:flex-col gap-3">
              {data.map((item, index) => (
                <span
                  key={index}
                  className={`${
                    index === activeSpan
                      ? "w-2 h-6 bg-white"
                      : "w-2 h-4 bg-transparent border-2"
                  } rounded-xl cursor-pointer transform ease-in-out duration-200`}
                  onClick={() => changeImage(item.img, index)}
                ></span>
              ))}
            </div>

            {/* onClick on arrow pics change */}
            <div className="flex justify-center items-center flex-col gap-3">
              <span
                className="w-6 h-12 rounded-xl bg-white cursor-pointer text-black grid place-content-center"
                onClick={upArrow}
              >
                <FaArrowUp />
              </span>
              <span
                className="w-6 h-12 rounded-xl bg-transparent border-2 cursor-pointer text-black grid place-content-center"
                onClick={downArrow}
              >
                <FaArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
