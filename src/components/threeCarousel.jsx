"use client";
import React, { useState } from "react";
import "@splidejs/react-splide/css/sea-green";

import Image from "next/image";

import uuidv4 from "uuid";
import { config } from "react-spring";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

function ThreeCarousel() {
  const [slid, setSlid] = useState(0);

  const slides = [
    {
      key: 1,
      content: <img src="/assets/images/haji.jpg" alt="1" />,
    },
    {
      key: 2,
      content: <img src="/assets/images/haji.jpg" alt="2" />,
    },
    {
      key: 3,
      content: <img src="/assets/images/haji.jpg" alt="3" />,
    },
    {
      key: 4,
      content: <img src="/assets/images/haji.jpg" alt="4" />,
    },
    {
      key: 5,
      content: <img src="/assets/images/haji.jpg" alt="5" />,
    },
    {
      key: 6,
      content: <img src="/assets/images/haji.jpg" alt="6" />,
    },
    {
      key: 7,
      content: <img src="/assets/images/haji.jpg" alt="7" />,
    },
    {
      key: 8,
      content: <img src="/assets/images/haji.jpg" alt="8" />,
    },
  ];
  return (
    <div className="z-100 h-full flex">
      <div className="z-10 m-auto text-red-900 w-1/12">
        <button
          onClick={() => {
            setSlid(slid - 1);
          }}
        >
          <Image
            alt="img"
            src="/assets/images/arrow.png"
            width={50}
            height={50}
          />
        </button>
      </div>

      <Carousel
        className=""
        slides={slides}
        goToSlide={slid}
        offsetRadius={5}
        animationConfig={config.gentle}
      />

      <div className="z-10 md:mr-0 sm:mr-12 mr-12 m-auto text-red-900 w-1/12">
        <button
          onClick={() => {
            setSlid(slid + 1);
          }}
        >
          <Image
            className="rotate-180"
            alt="img"
            src="/assets/images/arrow.png"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
}

export default ThreeCarousel;
