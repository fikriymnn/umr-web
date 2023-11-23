import React from "react";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";

function MainInfoPackage() {
  const numero = {
    total: 50,
    available: 5,
  };

  const availability = (numero.available / numero.total) * 100 + "%";
  return (
    <section id="main">
      <div className=" bg-white md:w-10/12 w-11/12  md:ms-20   rounded-xl mx-auto">
        <div className=" rounded-t-xl center ">
          <p className="md:text-2xl text-sm font-bold text-center md:py-3 py-2 px-2 text-black ">
            Umroh Dream Exclusive Plus Kereta Cepat 10 Hari
          </p>
        </div>
        <div className="bg-gray-900 w-full md:h-[315px] h-[200px]  rounded-xl">
          <DefaultCarousel />
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
                Satu Kamar 4 Orang QUAD
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
                Garuda
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
                Jakarta
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
                9 Hari
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
    </section>
  );
}

export default MainInfoPackage;
