"use client";
import React, { useState } from "react";
import "@splidejs/react-splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

function ThreeCarousel() {
  const [slid, setSlid] = useState(0);

  const slides = [
    {
      key: 1,
      content: <img src="/assets/images/Rectangle14.png" alt="1" />,
    },
    {
      key: 2,
      content: <img src="/assets/images/Rectangle14.png" alt="2" />,
    },
    {
      key: 3,
      content: <img src="/assets/images/Rectangle14.png" alt="3" />,
    },
    {
      key: 4,
      content: <img src="/assets/images/Rectangle14.png" alt="4" />,
    },
    {
      key: 5,
      content: <img src="/assets/images/Rectangle14.png" alt="5" />,
    },
    {
      key: 6,
      content: <img src="/assets/images/Rectangle14.png" alt="6" />,
    },
    {
      key: 7,
      content: <img src="/assets/images/Rectangle14.png" alt="7" />,
    },
    {
      key: 8,
      content: <img src="/assets/images/Rectangle14.png" alt="8" />,
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
