import React from "react";
import Image from "next/image";
function FacilityAndPriceSection() {
  return (
    <div className=" lg:w-11/12 w-11/12 lg:ml-7 mx-auto  mt-3 flex flex-col justify-center items-center">
      <div className="my-4 lg:mx-5">
        <div className="border-2 border-b-0 p-2 border-slate-200">
          <p className="lg:text-2xl font-bold">
            Umroh Dream Exclusive Plus Kereta Cepat 10 Hari
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-7 gap-5 mt-5">
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
                <p className="ps-1 font-bold lg:text-[17px]  text-xs text-black">
                  Pilihan Kamar
                </p>
                <p className="ps-1 pt-2 lg:text-[17px] text-xs text-black">
                  Satu Kamar 4 Orang QUAD
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
                <p className="ps-1 font-bold lg:text-[17px] text-xs text-black">
                  Tanggal Keberangkatan
                </p>
                <p className="ps-1 pt-2 lg:text-[17px] text-xs text-black">
                  10 September 2023
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
                <p className="ps-1 font-bold lg:text-[17px] text-xs text-black">
                  Maskapai Pesawat
                </p>
                <p className="ps-1 pt-2 lg:text-[17px] text-xs text-black">
                  Garuda
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
                <p className="ps-1 font-bold lg:text-[17px] text-xs text-black">
                  Kota Keberangkatan
                </p>
                <p className="ps-1 pt-2 lg:text-[17px] text-xs text-black">
                  Jakarta
                </p>
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
                <p className="ps-1 font-bold lg:text-[17px] text-xs text-black">
                  Durasi Perjalanan
                </p>
                <p className="ps-1 pt-2 lg:text-[17px] text-xs text-black">
                  9 Hari
                </p>
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
                <p className="ps-1 font-bold lg:text-[17px] text-xs text-black">
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
        <div className="flex lg:flex-row flex-col">
          <div className="flex border-2 lg:border-e-0 p-2 border-slate-200 lg:w-[40%] lg:text-2xl sm:text-xl text-lg py-3 font-bold  justify-center items-center ">
            <p className="my-2 text-center lg:text-start">Total Biaya</p>
          </div>
          <div className="border-2 p-2 border-slate-200 lg:w-[60%] lg:border-t-2 border-t-0 lg:text-2xl sm:text-xl text-lg font-bold px-12 py-3 flex lg:flex-row flex-col justify-center items-center ">
            <p className="my-2 text-center lg:text-start">Rp 39.500.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityAndPriceSection;
