"use client";
import React from "react";
import { isMobile } from "react-device-detect";
import { useEffect, useRef, useState } from "react";
function FilterNotMobilePackage() {
  const [isMobile, setIsMobile] = useState(false);
  const [comp, setComp] = useState(0);
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
    <>
      {!isMobile && (
        <div className="w-4/12">
          <div className="bg-white w-10/12 ms-14 rounded-xl">
            <div>
              <div className="h-[60px] w-[250px] bg-black mx-auto rounded-b-xl">
                <p className="text-2xl font-semibold text-[#E3B02B] text-center pt-3">
                  Filter Berdasarkan
                </p>
              </div>
              <div className="py-5 px-7 text-xl text-center font-medium text-black">
                <h1 className="font-semibold">Kota Keberangkatan</h1>
                <div className="grid grid-cols-2 gap-5 py-3">
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Semua
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Bandung
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Jakarta
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Bogor
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Semarang
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Jogjakarta
                  </button>
                </div>
              </div>

              <div className="py-5 px-7 text-xl text-center font-medium text-black">
                <h1 className="font-semibold">Kategori Paket Umroh</h1>
                <div className="grid grid-cols-2 gap-5 py-3">
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Semua
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Reguler
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Plus Wisata
                  </button>
                </div>
              </div>

              <div className="py-5 px-7 text-xl text-center font-medium text-black">
                <h1 className="font-semibold">Estimasi Biaya Umroh</h1>
                <div className="grid grid-cols-2 gap-5 py-3">
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Semua
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    30jt - 40jt
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    &lt; 30jt
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    &gt; 30jt
                  </button>
                </div>
              </div>

              <div className="py-5 px-7 text-xl text-center font-medium text-black">
                <h1 className="font-semibold">Durasi Perjalanan</h1>
                <div className="grid grid-cols-2 gap-5 py-3">
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    Semua
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    7 Hari
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    8 hari
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    9 hari
                  </button>
                  <button className="text-sm p-2 hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                    10 hari
                  </button>
                </div>
              </div>
              <div className="h-[20px]"></div>
              <div className="flex justify-center">
                <div className="w-4/12 p-2 text-center mb-6 bg-green-600 rounded-md text-white">
                  Search
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterNotMobilePackage;
