"use client";
import React from "react";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

function FilterPackageMobile() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [comp, setComp] = useState(0);

  return (
    <>
      {isClient && (
        <>
          {isMobile && (
            <>
              <button
                className="bg-red-900 z-40"
                onClick={() => setComp((prevComp) => (prevComp === 1 ? 0 : 1))}
              >
                Filter
              </button>
              <div
                className={`${
                  comp == 0
                    ? "hidden -translate-x-96 duration-10"
                    : "visible duration-100"
                } w-full absolute z-50 top-0 duration-100`}
              >
                <div className="bg-white  rounded-xl">
                  <div>
                    <div className="h-[60px] w-[250px] bg-black mx-auto rounded-b-xl">
                      <p className="text-2xl font-semibold text-[#E3B02B] text-center pt-3">
                        Filter Berdasarkan
                      </p>
                    </div>
                    <div className="py-5 px-7 text-xl text-center font-medium text-black">
                      <h1 className="font-semibold">Kota Keberangkatan</h1>
                      <div className="grid grid-cols-2 gap-5 py-3">
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Semua
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Bandung
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Jakarta
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Bogor
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Semarang
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Jogjakarta
                        </button>
                      </div>
                    </div>

                    <div className="py-5 px-7 text-xl text-center font-medium text-black">
                      <h1 className="font-semibold">Kategori Paket Umroh</h1>
                      <div className="grid grid-cols-2 gap-5 py-3">
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Semua
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Reguler
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Plus Wisata
                        </button>
                      </div>
                    </div>

                    <div className="py-5 px-7 text-xl text-center font-medium text-black">
                      <h1 className="font-semibold">Estimasi Biaya Umroh</h1>
                      <div className="grid grid-cols-2 gap-5 py-3">
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Semua
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          30jt - 40jt
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          &lt; 30jt
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          &gt; 30jt
                        </button>
                      </div>
                    </div>

                    <div className="py-5 px-7 text-xl text-center font-medium text-black">
                      <h1 className="font-semibold">Durasi Perjalanan</h1>
                      <div className="grid grid-cols-2 gap-5 py-3">
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          Semua
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          7 Hari
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          8 hari
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          9 hari
                        </button>
                        <button className="h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center">
                          10 hari
                        </button>
                      </div>
                    </div>
                    <div className="h-[20px]"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default FilterPackageMobile;
