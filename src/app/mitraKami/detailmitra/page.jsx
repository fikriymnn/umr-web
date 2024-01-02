"use client";
import React from "react";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import StarsRating from "@/components/starsRating";
import FilterNotMobilePackage from "@/components/FilterNotMobilePackage";
import FilterPackages from "@/components/FilterPackages";
function DetailMitra() {
  return (
    <div className="">
      <FilterPackages />
      <div className="pt-10 bg-cover bg-[url('/assets/images/image2.png')] z-10">
        <div className="bg-white rounded-xl md:mx-20 mx-5 mb-10 md:flex justify-between">
          <div className="  md:p-10 px-5 pt-10">
            <div className="flex py-1 ">
              <div className=" ">
                <div className="md:w-[100px] md:h-[100px] w-[40px] h-[40px] bg-gray-500 rounded-full "></div>
              </div>
              <div className="w-10/12 ps-5">
                <h1 className=" text-black md:text-3xl text-xl pb-3 font-semibold">
                  Travel Keren Dongs
                </h1>
                <div className="md:flex pb-3 gap-9">
                  <div className="flex gap-1">
                    <p className="text-black md:text-xl text-sm font-bold">
                      60
                    </p>
                    <p className="text-black md:text-xl text-sm">Penilaian</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-black md:text-xl text-sm my-auto">
                      Rating
                    </p>
                    <div className="pb-1">
                      <StarsRating />
                    </div>
                  </div>
                </div>
                <p className="text-black md:text-xl text-sm pb-1">
                  Nomor Izin Umroh:
                </p>
                <p className="text-black md:text-xl text-sm pb-1">
                  123123123123
                </p>
                <div className="flex items-center md:gap-0 gap-3">
                  <div className=" w-1/12">
                    <Image
                      src="/assets/vector/location.svg"
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <p className="text-black md:text-xl text-sm font-semibold">
                    Bandung
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-3/6  flex">
            <div className="grid grid-cols-1 md:visible invisible">
              <div></div>
              <div className="w-[3px] py-20 bg-gray-400"></div>

              <div></div>
            </div>
            <div className="w-full py-14 md:px-20 px-5 grid grid-rows-3 gap-5 items-center">
              <div className="flex">
                <div className="md:w-1/12 w-2/12">
                  <Image
                    src="/assets/vector/buildings.svg"
                    alt="icon"
                    width={25}
                    height={25}
                  />
                </div>
                <p className="md:text-xl text-sm">
                  Pt. Travel Kerens Dongs Indonesia
                </p>
              </div>
              <div className="flex">
                <div className="md:w-1/12 w-2/12">
                  <Image
                    src="/assets/vector/email.svg"
                    alt="icon"
                    width={25}
                    height={25}
                  />
                </div>
                <p className="md:text-xl text-sm">traveldongs@gmail.com</p>
              </div>

              <div className="flex">
                <div className="md:w-1/12 w-2/12    ">
                  <Image
                    src="/assets/vector/web.svg"
                    alt="icon"
                    width={25}
                    height={25}
                  />
                </div>
                <p className="md:text-xl text-sm">www.traveldongs.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg pb-10">
          <div className="h-[40px]"></div>
          <div className="flex  pt-5 bg-cover  bg-[url('/assets/images/image2.png')] z-10 relative">
            {/* <FilterIsMobilePackage /> */}
            <FilterNotMobilePackage />
            <div className="lg:w-8/12 w-full mx-auto lg:ml-10 lg:mr-20 lg:p-0 px-5">
              <div className="bg-white shadow-xl rounded-xl lg:w-10/12 w-full">
                <div className="flex lg:flex-row flex-col">
                  <div className="lg:w-3/6 w-full p-5 py-3">
                    <h1 className="w-full mb-2 text-sm lg:text-xl font-semibold">
                      Jenis Keberangkatan
                    </h1>
                    <Dropdown />
                  </div>
                  <div className="lg:w-3/6 w-full p-5 lg:py-3 pt-0">
                    <h1 className="w-full mb-2 text-sm lg:text-xl font-semibold">
                      Waktu Keberangkatan
                    </h1>
                    <Dropdown />
                  </div>
                </div>
              </div>
              <div className="mt-2 ">
                <h1 className="text-xl font-semibold  my-5">
                  List Paket Umroh Yang Tersedia
                </h1>
                <div className="mahfud lg:grid-cols-2 md:grid-cols-3 grid-cols-2 md:gap-10 gap-2">
                  {/* <PackageCard />
                                    <PackageCard />
                                    <PackageCard />
                                    <PackageCard />
                                    <PackageCard />
                                    <PackageCard /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMitra;
