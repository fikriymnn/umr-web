import React from "react";
import Image from "next/image";
import StarsRating from "@/components/starsRating";
function MitraCard() {
  return (
    <a href="mitraKami/detailmitra">
      <div className=" bg-white rounded-xl shadow-xl">
        <div className="p-3">
          <div className=" md:w-10/12 w-full  flex rounded-xl">
            <div className="flex py-1 ">
              <div className=" ">
                <div className="md:w-[120px] md:h-[120px] w-[50px] h-[50px] bg-gray-500 rounded-full "></div>
              </div>
              <div className="md:w-9/12 ps-5">
                <h1 className=" text-black md:text-3xl text-lg md:pb-3 pb-0 font-semibold">
                  Travel Keren Dongs
                </h1>
                <div className="md:flex md:pb-3 pb-0 md:gap-9">
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
                <p className="text-black md:text-xl text-sm md:pb-3 pb-0">
                  Nomor Izin Umroh:
                </p>
                <p className="text-black md:text-xl text-sm md:pb-3 pb-0">
                  123123123123
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-2">
          <p className="flex justify-end md:pe-10 pe-5 text-yellow-300 md:text-base text-sm">
            Lihat Paket Lainnya &rsaquo;
          </p>
        </div>
        <div className="flex justify-evenly pb-9">
          <div className="bg-gray-300 md:h-[100px] md:w-[160px] h-[80px] w-[90px] rounded-md"></div>
          <div className="bg-gray-300 md:h-[100px] md:w-[160px] h-[80px] w-[90px] rounded-md"></div>
          <div className="bg-gray-300 md:h-[100px] md:w-[160px] h-[80px] w-[90px] rounded-md"></div>
        </div>
      </div>
    </a>
  );
}

export default MitraCard;
