"use client";
import React from "react";
import Image from "next/image";
import { isMobile, isTablet } from "react-device-detect";
// import { format } from "date-fns";
//import Progress from 'flowbite-react';

function PackageCard({
  id,
  title,
  price,
  banner,
  kuota,
  kamar,
  maskapai,
  durasi,
  lokasi,
  ratingHotel,
  waktuKeberangkatan,
}) {
  const numero = {
    total: kuota,
    available: kuota,
  };

  const titleprice = (
    <>
      <p className="md:text-[14px] sm:text-[15px] text-[12px] font-semibold line-clamp-2 ">
        {title}
        {title}
        {title}
      </p>
      <p className="md:text-[26px] sm:text-[24px] text-[15px] font-semibold  text-[#E3B02B] pt-1">
        RP {price}
      </p>
    </>
  );

  const availability = (numero.available / numero.total) * 100 + "%";
  const harga = price / 1000000;
  // const date = Date(waktuKeberangkatan);
  // const waktuBerangkat = format(date, "yyyy-MM-dd");
  const maxRating = 5;
  const rating = ratingHotel;
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
    <a href={`/package/detail?id=${id}`}>
      <div className=" bg-white rounded-xl shadowcard md:hover:scale-[102%] duration-100 ease-in-out">
        <div className="p-3">
          <div className="h-24 md:flex md:flex-row gap-1">
            {!isMobile && (
              <>
                <div className="md:w-8/12">{titleprice}</div>
              </>
            )}
            <div
              className="lg:w-4/12 sm:w-full md:w-full sm:h-full md:h-20 h-full mx-auto rounded-xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${banner})` }}
            >
              {/* <Image
                src={banner}
                width={400}
                height={95}
                alt=""
                className="rounded-lg pb-1"
              /> */}
            </div>
          </div>
          {isMobile && (
            <>
              <div className="md:w-9/12 xl:hidden ">{titleprice}</div>
            </>
          )}
          <div className=" pb-1">
            <div className="flex items-center justify-center">
              <div className="w-full md:h-7 h-5 rounded-md border md:border-2 relative border-black">
                <div className="md:w-full sm:w-full w-full h-full absolute flex items-center justify-center text-center font-semibold md:text-sm sm:text-xs text-xs ">
                  <p>Tersisa {numero.available} Paket</p>
                </div>
                <div
                  style={{ width: availability }}
                  className="h-full bg-[#F5CA77] rounded-[4px]"
                ></div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-1">
            <div className="flex">
              <div className="md:w-1/6 w-1/12">
                <Image
                  src="/assets/vector/bed.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-start">
                <p className="ps-1 text-black md:text-sm sm:text-xs text-[10px] mb-auto">
                  {kamar}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="md:w-1/6 w-1/12">
                <Image
                  src="/assets/vector/calendar.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-start">
                <p className="ps-1 text-black md:text-sm sm:text-xs text-[10px] mb-auto">
                  9 Sep, 2023
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/6 w-1/12">
                <Image
                  src="/assets/vector/plane.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-start">
                <p className="ps-1 text-black md:text-sm sm:text-xs text-[10px] mb-auto">
                  {maskapai}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/6 w-1/12">
                <Image
                  src="/assets/vector/minlocation.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-start">
                <p className="ps-1 text-black md:text-sm sm:text-xs text-[10px] mb-auto">
                  {lokasi}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/6 w-1/12">
                <Image
                  src="/assets/vector/datetime.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-start">
                <p className="ps-1 text-black md:text-sm sm:text-xs text-[10px] mb-auto">
                  {durasi}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/6 w-1/12 md:my-0 my-auto">
                <Image
                  src="/assets/vector/hotel.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
              <div className="md:flex-col flex ">
                <p className="ps-1 text-black md:text-sm sm:text-xs text-[10px] my-auto">
                  Hotel
                </p>
                <div className="md:w-11/12 w-[50px]">
                  <div className="ps-1 pt-1 flex items-center">
                    {renderStars()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default PackageCard;
