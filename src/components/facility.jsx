import React from "react";
import Image from "next/image";

function Facility() {
  return (
    <div className="w-full py-7 px-14 font-semibold">
      <h1 className="md:text-2xl sm:text-xl text-lg text-black pb-1">Mekkah</h1>
      <h3 className="md:text-2xl sm:text-xl text-lg text-black pb-1">
        Rayyana Hotel
      </h3>

      <div className="grid grid-cols-4 md:gap-5 gap-1 pt-5">
        <div className="w-full md:h-[88px] sm:h-[75px] h-[70px] bg-gray-500"></div>
        <div className="w-full md:h-[88px] sm:h-[75px] h-[70px] bg-gray-500"></div>
        <div className="w-full md:h-[88px] sm:h-[75px] h-[70px] bg-gray-500"></div>
        <div className="w-full md:h-[88px] sm:h-[75px] h-[70px] bg-gray-500"></div>
      </div>
      <h1 className="md:text-2xl sm:text-xl text-lg text-black pt-5">
        Fasilitas
      </h1>
      <div className="grid grid-cols-3 pt-5 gap-y-1">
        <div className="flex ">
          <div className="md:w-1/12 w-3/12">
            <Image
              src="/assets/vector/wifi.svg"
              alt="icon"
              width={25}
              height={25}
            />
          </div>
          <div>
            <p className="ps-1 md:text-xl sm:text-lg text-base text-black">
              Free WiFi
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="md:w-1/12 w-3/12">
            <Image
              src="/assets/vector/spoon.svg"
              alt="icon"
              width={25}
              height={25}
            />
          </div>
          <div>
            <p className="ps-1 md:text-xl sm:text-lg text-base text-black">
              Tempat Makan
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="md:w-1/12 w-3/12">
            <Image
              src="/assets/vector/door.svg"
              alt="icon"
              width={25}
              height={25}
            />
          </div>
          <div>
            <p className="ps-1 md:text-xl sm:text-lg text-base text-black">
              Pelayanan Kamar
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="md:w-1/12 w-3/12">
            <Image
              src="/assets/vector/disabled.svg"
              alt="icon"
              width={25}
              height={25}
            />
          </div>
          <div>
            <p className="ps-1 md:text-xl sm:text-lg text-base text-black">
              Disabilitas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
