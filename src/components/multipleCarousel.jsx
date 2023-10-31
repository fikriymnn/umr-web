"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function MultipleCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <div className="mx-auto md:mr-0 sm:mr-6 mr-10">
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px] ">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px]">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px]">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px]">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px]">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px]">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px]">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="text-white md:w-[200px] sm:w-[150px] w-[100px]">
            <Image
              src={"/assets/images/rectangle20.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default MultipleCarousel;
