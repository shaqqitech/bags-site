'use client'
import React, { useState } from "react";
import { bebas_neue } from "../fonts";
import About1 from "../../../public/about/about1.jpg";
import About2 from "../../../public/about/about2.jpg";
import Image from "next/image";

const About = () => {
    const [currentImage, setCurrentImage] = useState(About1);
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [{ img: About1 }, { img: About2 }];

    const changedImage = (image, index) => {
        setCurrentImage(image.img);
        setActiveIndex(index);
    };

    return (
        <main className="w-full min-h-screen p-2 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 relative">
            {/* Left Box */}
            <div className="w-full h-full pt-8 flex flex-col justify-start items-center lg:items-start space-y-6">
                <h1 className={`${bebas_neue.className} text-6xl text-center`}>ABOUT US</h1>
                <p className="w-3/4 lg:w-1/2 text-center lg:text-left md:px-16 lg:px-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                    quam.
                </p>
                <div className="pt-8 px-4 md:px-8 md:text-xl lg:px-0 lg:w-3/4 lg:pt-5 space-y-2 flex flex-col justify-start items-center lg:items-start">
                    <p className="text-center lg:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo
                        dolorum autem, eius quae et officiis dolores ducimus laboriosam
                        nostrum?
                    </p>
                    <p className="text-center lg:text-left">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                        nulla tempore nemo explicabo, magnam eligendi distinctio
                        exercitationem reiciendis cum quia.
                    </p>
                </div>
            </div>
            {/* Right Box */}
            <div className="w-full h-full flex justify-center items-center p-10 lg:p-5 relative">
                <div className="z-20">
                    <Image
                        src={currentImage}
                        alt="Bags Images"
                        // layout="fill"
                        objectFit="cover"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
                {/* Image Design Box */}
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-2 lg:right-0 transform  w-20 h-48 rounded-xl bg-[#b08968]"></div>
            </div>
            {/* Dots Div */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end space-x-1 pb-8 md:pb-16 lg:pb-24">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full cursor-pointer bg-white ${
                            activeIndex === index ? 'bg-white' : 'bg-slate-600'
                        }`}
                        onClick={() => changedImage(item, index)}
                    ></div>
                ))}
            </div>
        </main>
    );
};

export default About;
