"use client";
import React from "react";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import Image from "next/image";

function FilterPackages() {
  const [comp, setComp] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [DropdownKota, setDropdownKota] = useState(false);
  const [DropdownKategori, setDropdownKategori] = useState(false);
  const [DropdownEstimasi, setDropdownEstimasi] = useState(false);
  const [DropdownDurasi, setDropdownDurasi] = useState(false);
  const [DropdownJenis, setDropdownJenis] = useState(false);
  const [DropdownWaktu, setDropdownWaktu] = useState(false);


  const toggleDropdownKota = () => {
    setDropdownKota(!DropdownKota);
  };
  const toggleDropdownKategori = () => {
    setDropdownKategori(!DropdownKategori);
  };
  const toggleDropdownEstimasi = () => {
    setDropdownEstimasi(!DropdownEstimasi);
  };
  const toggleDropdownDurasi = () => {
    setDropdownDurasi(!DropdownDurasi);
  };
  const toggleDropdownJenis = () => {
    setDropdownJenis(!DropdownJenis);
  };
  const toggleDropdownWaktu = () => {
    setDropdownWaktu(!DropdownWaktu);
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };
  useEffect(() => {
    setIsClient(true);
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleNav = () => {
    setComp((prevComp) => (prevComp === 1 ? 0 : 1));
  };
  return (
    <>
      {isClient && (
        <>
          {isMobile && (
            <>
              <div
                onClick={toggleNav}
                className=" bg-slate-100 w-full flex px-7 py-2 fixed z-40 shadow-md"
              >
                <div className=" flex gap-1 border  rounded-md px-3 py-1 bg-white">
                  <Image
                    src={"/assets/images/settings-sliders.png"}
                    width={20}
                    height={10}
                    alt=""
                  />
                  <p className="my-auto">Filter</p>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {isClient && (
        <>
          {isMobile && (
            <>
              {comp == 1 && (
                <>
                  <div className="bg-white  rounded-xl h-[90%] overflow-y-scroll fixed z-30">
                    <div>
                      <div className="flex">
                        <div className=" bg-black mx-auto rounded-b-xl">
                          <p className="text-lg font-semibold text-[#E3B02B] text-center py-2 px-3">
                            Filter Berdasarkan
                          </p>
                        </div>
                      </div>
                      <div className="py-5 px-7 text-xl text-center font-medium text-black">
                        <h1 className="font-semibold">Kota Keberangkatan</h1>
                        <div className="">
                          <div className="relative inline-block text-left w-full">
                            <button
                              onClick={toggleDropdownKota}
                              className="flex justify-between items-center px-4 py-1 md:py-2 text-gray-800 border border-gray-500 rounded-lg  focus:outline-none focus:ring w-full"
                            >

                              <span className="text-base">Dropdown Button</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-4 h-4 ml-2 ${DropdownKota ? 'transform rotate-180' : ''}`}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {DropdownKota && (
                              <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                                {/* Dropdown content */}
                                <button onClick={() => setSubService("Trademark")} className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 1</button>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 3</a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="py-5 px-7 text-xl text-center font-medium text-black">
                        <h1 className="font-semibold">Kategori Paket Umroh</h1>
                        <div className="relative inline-block text-left w-full">
                          <button
                            onClick={toggleDropdownKategori}
                            className="flex justify-between items-center px-4 py-1 md:py-2 text-gray-800 border border-gray-500 rounded-lg  focus:outline-none focus:ring w-full"
                          >

                            <span className="text-base">Dropdown Button</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className={`w-4 h-4 ml-2 ${DropdownKategori ? 'transform rotate-180' : ''}`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {DropdownKategori && (
                            <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                              {/* Dropdown content */}
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 1</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 2</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 3</a>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="py-5 px-7 text-xl text-center font-medium text-black">
                        <h1 className="font-semibold">Estimasi Biaya Umroh</h1>
                        <div className="relative inline-block text-left w-full">
                          <button
                            onClick={toggleDropdownEstimasi}
                            className="flex justify-between items-center px-4 py-1 md:py-2 text-gray-800 border border-gray-500 rounded-lg  focus:outline-none focus:ring w-full"
                          >

                            <span className="text-base">Dropdown Button</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className={`w-4 h-4 ml-2 ${DropdownEstimasi ? 'transform rotate-180' : ''}`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {DropdownEstimasi && (
                            <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                              {/* Dropdown content */}
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 1</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 2</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 3</a>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="py-5 px-7 text-xl text-center font-medium text-black">
                        <h1 className="font-semibold">Durasi Perjalanan</h1>
                        <div className="relative inline-block text-left w-full">
                          <button
                            onClick={toggleDropdownDurasi}
                            className="flex justify-between items-center px-4 py-1 md:py-2 text-gray-800 border border-gray-500 rounded-lg  focus:outline-none focus:ring w-full"
                          >

                            <span className="text-base">Dropdown Button</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className={`w-4 h-4 ml-2 ${DropdownDurasi ? 'transform rotate-180' : ''}`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {DropdownDurasi && (
                            <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                              {/* Dropdown content */}
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 1</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 2</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 3</a>
                            </div>
                          )}
                        </div>

                      </div>
                      <div className="py-5 px-7 text-xl text-center font-medium text-black">
                        <h1 className="font-semibold">Jenis Keberangkatan</h1>
                        <div className="relative inline-block text-left w-full">
                          <button
                            onClick={toggleDropdownJenis}
                            className="flex justify-between items-center px-4 py-1 md:py-2 text-gray-800 border border-gray-500 rounded-lg  focus:outline-none focus:ring w-full"
                          >

                            <span className="text-base">Dropdown Button</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className={`w-4 h-4 ml-2 ${DropdownJenis ? 'transform rotate-180' : ''}`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {DropdownJenis && (
                            <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                              {/* Dropdown content */}
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 1</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 2</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 3</a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="py-5 px-7 text-xl text-center font-medium text-black">
                        <h1 className="font-semibold">Waktu Keberangkatan</h1>
                        <div className="relative inline-block text-left w-full">
                          <button
                            onClick={toggleDropdownWaktu}
                            className="flex justify-between items-center px-4 py-1 md:py-2 text-gray-800 border border-gray-500 rounded-lg  focus:outline-none focus:ring w-full"
                          >

                            <span className="text-base">Dropdown Button</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className={`w-4 h-4 ml-2 ${DropdownWaktu ? 'transform rotate-180' : ''}`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {DropdownWaktu && (
                            <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                              {/* Dropdown content */}
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 1</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 2</a>
                              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 3</a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div onClick={toggleNav} className="flex justify-center">
                        <div className="w-4/12 p-2 text-center mb-6 bg-green-600 rounded-md text-white">
                          Search
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default FilterPackages;
