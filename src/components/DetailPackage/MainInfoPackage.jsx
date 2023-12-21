import React from "react";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";

function MainInfoPackage({
  title,
  carousel,
  kamar,
  maskapai,
  durasi,
  tanggalKeberangkatan,
  kotaKeberangkatan,
  bintangHotel,
}) {
  const numero = {
    total: 50,
    available: 5,
  };

  const availability = (numero.available / numero.total) * 100 + "%";

  const maxRating = 5;
  const rating = bintangHotel;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      const isColored = i < rating;
      stars.push(
        <div className="w-5">
          <img
            key={i}
            src={
              isColored
                ? "/assets/vector/Star.svg"
                : "/assets/vector/StarGray.svg"
            }
            alt={`Star ${i + 1} `}
          />
        </div>
      );
    }
    return stars;
  };

  return (
    <section id="main">
      <div className=" bg-white md:w-11/12 w-11/12     rounded-xl mx-auto">
        <div className=" rounded-t-xl center ">
          <p className="md:text-2xl text-sm font-bold text-center md:py-3 py-2 px-2 text-black ">
            {title}
          </p>
        </div>
        <div className="bg-gray-900 w-full md:h-[315px] h-[200px]  rounded-xl">
          <DefaultCarousel image={carousel} />
        </div>
        <div className="grid grid-cols-2 gap-5 py-7 md:px-9 px-4">
          <div className="flex">
            <div className="md:w-1/12  w-3/12">
              <Image
                src="/assets/vector/bed.svg"
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div>
              <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs text-black ">
                Pilihan Kamar
              </p>
              <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs text-black">
                {kamar}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="md:w-1/12 w-3/12">
              <Image
                src="/assets/vector/calendar.svg"
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div>
              <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                Tanggal Keberangkatan
              </p>
              <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                10 September 2023
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="md:w-1/12 w-3/12">
              <Image
                src="/assets/vector/plane.svg"
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div>
              <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                Maskapai Pesawat
              </p>
              <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                {maskapai}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="md:w-1/12 w-3/12">
              <Image
                src="/assets/vector/minlocation.svg"
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div>
              <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                Kota Keberangkatan
              </p>
              <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                {kotaKeberangkatan}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="md:w-1/12 w-3/12">
              <Image
                src="/assets/vector/datetime.svg"
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div>
              <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                Durasi Perjalanan
              </p>
              <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                {durasi}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="md:w-1/12 w-3/12">
              <Image
                src="/assets/vector/hotel.svg"
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div>
              <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                Hotel
              </p>

              <div className="ps-1 pt-2 flex items-center space-x-1">
                {renderStars()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainInfoPackage;
