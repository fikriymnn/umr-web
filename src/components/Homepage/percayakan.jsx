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
              Kenapa Harus Pilih
              <span className="text-[#E3B02B]"> IBADAHKU?</span>
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:gap-7 gap-3 md:mt-0 sm:mt-5 mt-5">
          <div className=" flex  w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl shadow-md bg-cover bg-no-repeat">
            <div className="flex md:px-4 px-3">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl" >1</div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Transparansi Terjamin
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Kami memastikan semua informasi terkait layanan, biaya, dan proses ibadah terbuka tanpa ada yang ditutupi. Kejujuran adalah prioritas kami.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex shadow-md w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl">
            <div className="flex md:px-4 px-3">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">2</div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Dukungan Teknologi Modern
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Dengan sistem teknologi yang canggih, Anda bisa memantau setiap tahap perjalanan haji dan umroh, mulai dari pendaftaran hingga kepulangan.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex shadow-md w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl">
            <div className="flex md:px-4 px-3">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">3</div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Mitra yang Terpercaya
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Kami hanya bekerja sama dengan mitra yang telah lolos seleksi ketat untuk memastikan amanah dan profesionalisme dalam melayani jamaah.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex shadow-md w-10/12 py-3 px-1 bg-[#ffffff] mx-auto rounded-xl">
            <div className="flex md:px-4 px-3">
              <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">4</div>
              </div>
              <div className="grid grid-cols-1  ps-2">
                <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                  Solusi untuk Umat
                </p>
                <p className="text-black md:text-base sm:text-base text-xs">
                  Ibadahku hadir untuk menghapus isu negatif seperti overclaim dan pengelolaan keuangan yang buruk, demi memberikan pengalaman ibadah yang tenang dan penuh keberkahan.
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
