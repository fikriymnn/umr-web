import React from "react";
import Facility from "@/components/facility";

function HotelTravelSection({ hotel }) {
  return (
    <div>
      <div className="bg-white md:w-11/12 w-11/12 mx-auto rounded-xl md:mt-[30px]  mt-[15px]">
        <div className=" md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
          <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
            Hotel Travel
          </p>
        </div>
        {hotel.map((data, i) => {
          return (
            <Facility
              key={i}
              content={data.content}
              fasilitas={data.fasilitas}
              lokasi={data.city}
              namaHotel={data.name}
            />
          );
        })}

        <div className="h-[20px]"></div>
      </div>
    </div>
  );
}

export default HotelTravelSection;
