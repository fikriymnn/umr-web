"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { isMobile, isTablet } from "react-device-detect";
import { format } from "date-fns";
//import Progress from 'flowbite-react';

function PackageCard({
  id,
  title,
  price,
  banner,
  kuota,
  sisaKuota,
  kamar,
  maskapai,
  durasi,
  lokasi,
  ratingHotel,
  waktuKeberangkatan,
}) {
  const numero = {
    total: kuota,
    available: sisaKuota,
  };

  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };
  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nominal = price;

  const formattedNominal = nominal.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });


  const titleprice = (
    <>
      <div className="flex flex-col h-16 sm:h-20 md:h-24 lg:h-24">

        <p className="md:text-[14px] sm:text-[15px] text-[12px] font-semibold line-clamp-2 ">
          {title} {title} {title}

        </p>
        <p className="lg:text-[20px] md:text-[15px] sm:text-[20px] text-[15px] font-semibold  text-[#E3B02B] md:mb-5 mt-auto flex ">
          {formattedNominal}
        </p>
      </div>
    </>
  );

  const availability = (numero.available / numero.total) * 100 + "%";

  // const date = Date(waktuKeberangkatan);
  // const waktuBerangkat = format(date, "yyyy-MM-dd");
  const maxRating = 5;
  const rating = ratingHotel;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      const isColored = i < rating;
      stars.push(
        <div className="w-3">
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

  const date = new Date(waktuKeberangkatan);
  // Format tanggal
  const WaktuKeberangkatan = format(date, "d MMM y");

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
              className="lg:w-4/12 sm:w-full md:w-7/12 sm:h-full md:h-20 h-full mx-auto rounded-xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${banner})` }}
            >

            </div>
          </div>
          {isMobile && (
            <>
              <div className="md:w-9/12 xl:hidden py-2">{titleprice}</div>
            </>
          )}
          <div className=" pb-1">
            <div className="flex items-center justify-center">
              <div className="w-full md:h-7 h-5 rounded-md border md:border-2 relative border-black">
                <div className="md:w-full sm:w-full w-full h-full absolute flex items-center justify-center text-center font-semibold md:text-xs sm:text-xs text-xs ">
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
                <p className="ps-1 text-black md:text-xs sm:text-xs text-[10px] my-auto">
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
                <p className="ps-1 text-black md:text-xs sm:text-xs text-[10px] my-auto">
                  {WaktuKeberangkatan}
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
                <p className="ps-1 text-black md:text-xs sm:text-xs text-[10px] my-auto">
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
                <p className="ps-1 text-black md:text-xs sm:text-xs text-[10px] my-auto">
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
                <p className="ps-1 text-black md:text-xs sm:text-xs text-[10px] my-auto">
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
                <p className="ps-1 text-black md:text-xs sm:text-xs text-[10px] my-auto">
                  Hotel
                </p>
                <div className="md:w-11/12 w-[50px]">
                  <div className="ps-1 pt-1 flex items-center justify-center my-auto">
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
