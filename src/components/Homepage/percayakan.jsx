"use client";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

function Percayakan() {
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

  return (
    <div>
      <div className=" grid grid-cols-1  mx-auto mb-10 ">
        {!isMobile && (
          <div className="w-10/12 mx-auto mb-10 md:mt-16 mt-5 ">
            <p className="font-extrabold text-3xl  ">
              Percayakan Perjalanan Umroh anda kepada
              <span className="text-[#E3B02B]"> Ibadahku</span>
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:gap-7 gap-3 md:mt-0 sm:mt-5 mt-5">
          <div className=" flex shadow-md w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl shadow-md">
            <div className="flex px-1">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl lg:px-7 md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-xl  "></div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Lorem ipsum Dolor sit Amet
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  quia a dicta molestias sed
                </p>
              </div>
            </div>
          </div>
          <div className=" flex shadow-md w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl">
            <div className="flex px-1">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl lg:px-7 md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-xl  "></div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Lorem ipsum Dolor sit Amet
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  quia a dicta molestias sed
                </p>
              </div>
            </div>
          </div>
          <div className=" flex shadow-md w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl">
            <div className="flex px-1">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl lg:px-7 md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-xl  "></div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Lorem ipsum Dolor sit Amet
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  quia a dicta molestias sed
                </p>
              </div>
            </div>
          </div>
          <div className=" flex shadow-md w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl">
            <div className="flex px-1">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl lg:px-7 md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-xl  "></div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Lorem ipsum Dolor sit Amet
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  quia a dicta molestias sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Percayakan;
