import React from "react";

function CariPaket() {
  return (
    <div>
      <div className="md:mt-0 mt-5 md:py-0 py-3 bg-white bg-opacity-95 rounded-[10px] shadow md:w-9/12 w-11/12 md:h-28 mx-auto md:-translate-y-5 md:flex gap-2 items-center grid grid-cols-3">
        <div className="md:w-[25%] ml-5 ">
          <p className="lg:w-full md:w-full sm:w-11/12 md:text-base sm:text-sm text-[10px] ">
            Lokasi Keberangkatan
          </p>
          <input
            type="text"
            className="rounded-md border-gray-300 w-full md:h-full h-8 text-xs"
            placeholder="Masukan Lokasi Keberangkatan"
          />
        </div>
        <div className="md:w-[25%]">
          <p className="lg:w-full md:w-full w-9/12 md:text-base sm:text-sm text-[10px]">
            Waktu Keberangkatan
          </p>
          <input
            type="text"
            className="rounded-md border-gray-300 w-full md:h-full h-8 text-xs"
            placeholder="Masukan Waktu Keberangkatan"
          />
        </div>
        <div className="md:w-[25%] mr-5">
          <p className="lg:w-full md:w-full sm:w-11/12 md:text-base sm:text-sm text-[10px] ">
            Estimasi Biaya Umroh
          </p>
          <input
            type="text"
            className="rounded-md border-gray-300 w-full md:h-full h-8 text-xs"
            placeholder="Masukan Estimasi Biaya Umroh"
          />
        </div>
        <div className="md:mt-5 w-full col-span-3 md:w-[20%] mb-1">
          <div className="py-2 px-3 bg-black rounded-md text-white md:w-24 md:h-10 w-[80px] h-8 mx-auto">
            <p className="md:text-[14px] sm:text-[10px] text-[10px] text-center ">
              Cari Paket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CariPaket;
