import React from "react";
import AccountNav from "@/components/accountNav";
import OrderNav from "@/components/orderNav";
import Image from "next/image";

function Diproses() {
  return (
    <div className="md:px-14 px-5 py-10 bg-slate-100">
      <div className=" flex md:flex-row flex-col">
        <AccountNav order="bg-[#E3B02B] text-white" />

        <div className="w-full md:w-10/12 md:ps-5">
          <div className="bg-white grid grid-cols-1 gap-3 md:rounded-xl rounded-b-xl border-2 md:border-t-2 border-t-0 border-slate-300 shadow-xl p-3 md:px-8 px-5">
            <div className="flex justify-center items-center md:gap-32 gap-3 pt-3">
              <OrderNav
                belbay={"text-black "}
                proc={"text-[#E3B02B]"}
                procl={"h-[2px] bg-[#E3B02B]"}
                done={"text-black"}
              />
            </div>
            <div className="my-4">
              <div className="border-2 border-b-0 p-2 border-slate-200">
                <p className="md:text-2xl font-bold">
                  Umroh Regular Pack 11 Hari
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                  <div className="flex">
                    <div className="w-1/12">
                      <Image
                        src="/assets/vector/bed.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <p className="ps-1 font-bold md:text-xl text-black">
                        Pilihan Kamar
                      </p>
                      <p className="ps-1 pt-2 md:text-xl text-black">
                        Satu Kamar 2 Orang DOUBLE
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/12">
                      <Image
                        src="/assets/vector/calendar.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <p className="ps-1 font-bold md:text-xl text-black">
                        Tanggal Keberangkatan
                      </p>
                      <p className="ps-1 pt-2 md:text-xl text-black">
                        10 Agustus 2030
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/12">
                      <Image
                        src="/assets/vector/plane.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <p className="ps-1 font-bold md:text-xl text-black">
                        Maskapai Pesawat
                      </p>
                      <p className="ps-1 pt-2 md:text-xl text-black">
                        Air Asia
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/12">
                      <Image
                        src="/assets/vector/minlocation.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <p className="ps-1 font-bold md:text-xl text-black">
                        Kota Keberangkatan
                      </p>
                      <p className="ps-1 pt-2 md:text-xl text-black">Bandung</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/12">
                      <Image
                        src="/assets/vector/datetime.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <p className="ps-1 font-bold md:text-xl text-black">
                        Durasi Perjalanan
                      </p>
                      <p className="ps-1 pt-2 md:text-xl text-black">10 Hari</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/12">
                      <Image
                        src="/assets/vector/hotel.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <p className="ps-1 font-bold md:text-xl text-black">
                        Hotel
                      </p>

                      <div className="ps-1 pt-2 flex items-center space-x-1">
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-gray-300 dark:text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col">
                <div className="border-2 md:border-e-0 p-2 border-slate-200 md:w-[30%]  md:text-2xl sm:text-lg text-base py-3 font-bold md:ps-12 ">
                  <p className="my-2 text-center md:text-start">Total Biaya</p>
                </div>
                <div className="border-2 p-2 border-slate-200 md:w-[70%] md:border-t-2 border-t-0  md:text-2xl sm:text-lg text-base font-bold px-12 py-3 flex md:flex-row flex-col justify-between ">
                  <p className="my-2 text-center md:text-start">
                    Rp 29.999.999
                  </p>
                  <div className="flex gap-2">
                    <div className="flex justify-center">
                      <a href="invoice" className="bg-amber-500 px-7 rounded-lg md:py-0 py-1 md:mt-0 mt-2 text-white flex justify-center items-center text-center text-sm md:text-base  bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(/assets/vector/download.svg)` }}>

                      </a>
                    </div>
                    <div className="bg-orange-500 px-7 rounded-lg md:py-0 py-2 md:mt-0 mt-2 text-white flex justify-center items-center text-center text-sm md:text-base">
                      Pesanan Diproses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diproses;
