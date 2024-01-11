"use client";
import { React, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function MultipleCarousel({ JumlahTravel }) {
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
  const [arrowHover, setArrowHover] = useState(false);


  return (
    <>
      <div onMouseEnter={() => setArrowHover(true)} onMouseLeave={() => setArrowHover(false)} className="bg-black w-full h-full lg:px-14 md:px-10 px-5 pb-10 ">
        <div className="flex justify-between">
          <p className="text-white  md:pt-10 sm:pt-7 pt-4 font-bold">
            {JumlahTravel}
          </p>
          <p className="text-white  md:pt-10 sm:pt-7 pt-4 font-bold">
            Mitra Kami
          </p>
        </div>
        <div className="mt-14 z-20">
          <Carousel responsive={responsive} autoPlay={true} infinite={true} arrows={arrowHover} className="z-0" >
            <div className="text-white  flex justify-center items-center flex-col ">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
                className=""
              />
              <p className="pt-2 line-clamp-1">Mari Mari</p>
            </div>

            <div className="text-white  flex justify-center items-center flex-col">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
              />
              <p className="pt-2 line-clamp-1">Mari Mari</p>
            </div>

            <div className="text-white  flex justify-center items-center flex-col">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
              />
              <p className="pt-2 line-clamp-1">Acep Travel mantap</p>
            </div>

            <div className="text-white  flex justify-center items-center flex-col">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
              />
              <p className="pt-2 line-clamp-1">Acep Travel mantap</p>
            </div>

            <div className="text-white  flex justify-center items-center flex-col">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
              />
              <p className="pt-2 line-clamp-1">Acep Travel mantap</p>
            </div>

            <div className="text-white  flex justify-center items-center flex-col">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
              />
              <p className="pt-2 line-clamp-1">Jaya Abadi</p>
            </div>

            <div className="text-white  flex justify-center items-center flex-col">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
              />
              <p className="pt-2 line-clamp-1">Tio Umroh Berkah</p>
            </div>

            <div className="text-white  flex justify-center items-center flex-col">
              <Image
                src={"/assets/images/cs-1.jpeg"}
                width={150}
                height={150}
                alt=""
              />
              <p className="pt-2 line-clamp-1">Acep Travel mantap</p>
            </div>

          </Carousel>
        </div>
      </div>



    </>
  );
}

export default MultipleCarousel;
