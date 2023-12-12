import React from "react";

function MaskapaiSection({ maskapai }) {
  return (
    <div>
      <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20 rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">
        <div className=" md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
          <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
            Maskapai
          </p>
        </div>
        <div className="flex md:py-7 py-2 md:px-9 px-4">
          <div className="md:w-3/12 w-3/12">
            <div className="md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] w-[70px] h-[70px] bg-gray-500 rounded-full"></div>
          </div>
          <div className="w-full ps-5 my-auto">
            <h1 className=" text-black md:text-4xl sm:text-2xl text-xl   font-medium ">
              {maskapai}
            </h1>
          </div>
        </div>
        <div className="h-[20px]"></div>
      </div>
    </div>
  );
}

export default MaskapaiSection;
