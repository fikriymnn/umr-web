import React from "react";
import Facility from "@/components/facility";

function HotelTravelSection() {
  return (
    <div>
      <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20 rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">
        <div className=" md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
          <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
            Hotel Travel
          </p>
        </div>
        <Facility />
        <Facility />
        <Facility />
        <div className="h-[20px]"></div>
      </div>
    </div>
  );
}

export default HotelTravelSection;
