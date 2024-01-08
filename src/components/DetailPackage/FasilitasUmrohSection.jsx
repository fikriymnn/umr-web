import React from "react";

function FasilitasUmrohSection({ fasilitas }) {
  return (
    <div className="bg-white md:w-11/12 w-11/12 mx-auto rounded-xl md:mt-[30px]  mt-[15px]">
      <div>
        <div className=" md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
          <p className="md:text-2xl sm:text-xl text-base   font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
            Fasilitas Umroh
          </p>
        </div>
        <div className="md:py-7 py-3 md:px-9 px-4 md:text-2xl sm:text-xl text-base   font-semibold text-black">
          {fasilitas}
        </div>
        <div className="h-[20px]"></div>
      </div>
    </div>
  );
}

export default FasilitasUmrohSection;
