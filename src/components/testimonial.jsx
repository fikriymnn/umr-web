import React from "react";

function Testimonial() {
  return (
    <div className="w-full md:py-7 py-2 md:px-9 px-4 font-semibold">
      <h1 className="md:text-[20px] sm:text-xl text-lg text-black pb-1">
        Acep Wahyu
      </h1>
      <h3 className="md:text-base sm:text-sm text-xs text-gray-400 pb-1">
        Jakarta
      </h3>
      <div className="line-clamp-3 mb-2">
        <p className="md:text-base sm:text-sm text-xs text-black font-medium">
          Layanan umrohnya bagus banget aku suka, lain kali umroh lagi disini
          sama keluarga, otw langganan ke travel ini aku rekomendasiin ke kalian
          juga dijamin gabakal nyesel deh.
        </p>
      </div>
      <div className="grid grid-cols-4 md:gap-5 gap-2 md:pt-5 pt-2">
        <div className="w-full h-full md:p-12 sm:p-8 p-6 bg-gray-500"></div>
        <div className="w-full h-full md:p-12 sm:p-8 p-6 bg-gray-500"></div>
        <div className="w-full h-full md:p-12 sm:p-8 p-6 bg-gray-500"></div>
        <div className="w-full h-full md:p-12 sm:p-8 p-6 bg-gray-500"></div>
      </div>
    </div>
  );
}

export default Testimonial;
