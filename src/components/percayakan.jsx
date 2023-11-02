import React from "react";
import { isMobile } from "react-device-detect";

function Percayakan() {
  return (
    <div>
      <div className=" grid grid-cols-1  mx-auto  ">
        {!isMobile && (
          <div className="w-4/5 mx-auto mb-10 md:mt-16 mt-5 ">
            <p className="font-extrabold text-3xl  ">
              Percayakan Perjalanan Umroh anda kepada umroh Yuk
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:gap-7 gap-3 ">
          <div className=" flex w-4/5 py-3 px-1 bg-[#959595] mx-auto rounded-xl">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl">
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl  md:ml-0 sm:ml-0 ml-3"></div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white  md:text-base sm:text-base text-xs font-bold pt-2">
                Lorem ipsum Dolor sit Amet
              </p>
              <p className="text-white md:text-base sm:text-base text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                quia a dicta molestias sed
              </p>
            </div>
          </div>
          <div className=" flex w-4/5 py-3 px-1 bg-[#959595] mx-auto rounded-xl">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl">
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl md:ml-0 sm:ml-0 ml-3"></div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white  md:text-base sm:text-base text-xs font-bold pt-2">
                Lorem ipsum Dolor sit Amet
              </p>
              <p className="text-white md:text-base sm:text-base text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                quia a dicta molestias sed
              </p>
            </div>
          </div>
          <div className=" flex w-4/5 py-3 px-1 bg-[#959595] mx-auto rounded-xl">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl">
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl  md:ml-0 sm:ml-0 ml-3"></div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white  md:text-base sm:text-base text-xs font-bold pt-2">
                Lorem ipsum Dolor sit Amet
              </p>
              <p className="text-white  md:text-base sm:text-base text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                quia a dicta molestias sed
              </p>
            </div>
          </div>
          <div className=" flex w-4/5 py-3 px-1 bg-[#959595] mx-auto rounded-xl mb-20">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl">
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl  md:ml-0 sm:ml-0 ml-3"></div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white  md:text-base sm:text-base text-xs font-bold pt-2">
                Lorem ipsum Dolor sit Amet
              </p>
              <p className="text-white  md:text-base sm:text-base text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                quia a dicta molestias sed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Percayakan;
