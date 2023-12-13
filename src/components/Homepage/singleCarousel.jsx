"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function SingleCarousel() {
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
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <div className="z-10">
                <Carousel responsive={responsive} autoPlay={true} infinite={true} arrows={false} autoPlaySpeed={1800} >
                    <div className="text-white  flex justify-center items-center z-0">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="text-white  flex justify-center items-center">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="text-white  flex justify-center items-center">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="text-white  flex justify-center items-center">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="text-white  flex justify-center items-center">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="text-white  flex justify-center items-center">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="text-white  flex justify-center items-center">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="text-white  flex justify-center items-center">
                        <Image
                            src={"/assets/images/cs-1.jpeg"}
                            width={350}
                            height={350}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default SingleCarousel;
