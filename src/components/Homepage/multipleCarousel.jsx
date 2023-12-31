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
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>

      <Carousel responsive={responsive} autoPlay={true} infinite={true} className="z-0" >
        <div className="text-white  flex justify-center items-center ">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
            className=""
          />
        </div>
        <div className="text-white  flex justify-center items-center">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="text-white  flex justify-center items-center">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="text-white  flex justify-center items-center">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="text-white  flex justify-center items-center">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="text-white  flex justify-center items-center">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="text-white  flex justify-center items-center">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="text-white  flex justify-center items-center">
          <Image
            src={"/assets/images/cs-1.jpeg"}
            width={150}
            height={150}
            alt=""
          />
        </div>
      </Carousel>

    </>
  );
}

export default MultipleCarousel;
