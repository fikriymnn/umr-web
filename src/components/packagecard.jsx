"use client";
import React from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";
//import Progress from 'flowbite-react';

function PackageCard() {
  const numero = {
    total: 50,
    available: 5,
  };

  const availability = (numero.available / numero.total) * 100 + "%";
  return (
    <a href="/package/detail">
      <div className=" bg-white rounded-xl shadow-xl md:hover:translate-y-[-15px] duration-100 ease-in-out">
        <div className="p-3">
          <div className="md:flex md:flex-row gap-1">
            {!isMobile && (
              <>
                <div className="md:w-8/12">
                  <h1 className="md:text-[17px] sm:text-[15px] text-[12px] font-semibold">
                    Umroh Dream Exclusive Plus Kereta Cepat
                  </h1>
                  <h2 className="md:text-[28px] sm:text-[24px] text-[15px] font-semibold  text-[#E3B02B] pt-2">
                    RP 39.5 Jt
                  </h2>
                </div>
              </>
            )}
            <div className="md:w-4/12 w-full sm:w-full sm:h-full md:h-full h-full mx-auto rounded-xl">
              <Image
                src={"/assets/images/haji.jpg"}
                width={400}
                height={95}
                alt=""
                className="rounded-lg"
              />
            </div>
            {isMobile && (
              <>
                <div className="md:w-8/12 md:hidden ">
                  <h1 className="md:text-[17px] sm:text-[15px] text-[12px] font-semibold">
                    Umroh Dream Exclusive Plus Kereta Cepat
                  </h1>
                  <h2 className="md:text-[28px] sm:text-[24px] text-[15px] font-semibold  text-[#E3B02B] pt-2">
                    RP 39.5 Jt
                  </h2>
                </div>
              </>
            )}
          </div>
          <div className=" py-3">
            <div className="flex items-center justify-center">
              <div className="w-full h-7 rounded-xl border-2 relative border-black">
                <div className="md:w-full sm:w-full w-full absolute flex items-center justify-center text-center font-semibold md:text-base sm:text-base text-xs md:mt-0 sm:mb-0 mt-1">
                  <p>Tersisa {numero.available} Paket</p>
                </div>
                <div
                  style={{ width: availability }}
                  className="h-full bg-[#be9223] rounded-xl"
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
                <p className="ps-1 text-black md:text-base sm:text-xs text-[10px] my-auto">
                  Satu kamar 4 Orang
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
                <p className="ps-1 text-black md:text-base sm:text-xs text-[10px] my-auto">
                  10 Sep 2023
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
                <p className="ps-1 text-black md:text-base sm:text-xs text-[10px] my-auto">
                  Garuda
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
                <p className="ps-1 text-black md:text-base sm:text-xs text-[10px] my-auto">
                  Jakarta, +2 Kota
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
                <p className="ps-1 text-black md:text-base sm:text-xs text-[10px] my-auto">
                  9 Hari
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/6 w-1/12">
                <Image
                  src="/assets/vector/hotel.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-start">
                <p className="ps-1 text-black md:text-base sm:text-xs text-[10px] my-auto">
                  Hotel
                </p>
                <div className="md:w-10/12 w-[50px]">
                  <div className="ps-1 pt-1 flex items-center space-x-1">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
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
