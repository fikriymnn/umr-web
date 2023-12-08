import React from "react";
import StarsRating from "@/components/starsRating";
function BayarMitraTravelSection() {
  return (
    <div className="flex gap-3 gap-y-4 lg:ml-[73px] ml-4">
      <div>
        <div className="lg:w-[59px] lg:h-[59px] w-[40px] h-[40px]  bg-gray-500 rounded-full "></div>
      </div>
      <div className="grid grid-cols-1 ">
        <p className="lg:text-lg font-semibold text-base">Travel Keren Dongs</p>
        <div className="lg:flex gap-12">
          <p className="lg:text-lg text-sm font-medium">60 Penilaian</p>
          <div className="flex lg:justify-center lg:items-center">
            <p className="lg:text-lg text-sm font-medium my-auto">Rating</p>
            <div className="lg:w-full w-5/12 my-auto ">
              <StarsRating />
            </div>
          </div>
        </div>
        <p className="lg:text-lg text-sm font-medium mt-3">Nomor Izin Umroh:</p>
        <p className="lg:text-lg text-sm font-medium">1230349594899489</p>
      </div>
    </div>
  );
}

export default BayarMitraTravelSection;
