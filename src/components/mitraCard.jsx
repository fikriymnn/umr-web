import React from "react";
import Image from "next/image";
import StarsRating from "@/components/starsRating";
function MitraCard({ id, namaTravel, noIzin, penilaian, ratingNilai, profil }) {
  const maxRating = 5;
  const rating = 2;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      const isColored = i < rating;
      stars.push(
        <div className="w-3">
          <img
            key={i}
            src={
              isColored
                ? "/assets/vector/Star.svg"
                : "/assets/vector/StarGray.svg"
            }
            alt={`Star ${i + 1} `}
          />
        </div>
      );
    }
    return stars;
  };
  return (
    <a href={`/mitraKami/detailmitra?id=${id}`} >
      <div className=" bg-white rounded-xl shadow-xl md:hover:scale-[101%] duration-100 ease-in-out h-full flex flex-col justify-between">
        <div className="px-3 pt-3 pb-1">
          <div className=" md:w-10/12 w-full  flex rounded-xl">
            <div className="flex py-1 ">

              <img src={`${profil}`} alt="" className="md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-gray-500 rounded-full bg-cover bg-no-repeat bg-center" />
              <div className="md:w-12/12 ps-5">
                <h1 className=" text-black md:text-lg text-lg md:pb-1 pb-0 font-semibold">
                  {namaTravel}
                </h1>

                <div className="md:flex md:pb-1 pb-2 md:gap-5">
                  <div className="flex gap-1">

                    <div className="pb-1 flex my-auto mr-2">
                      <img

                        src={
                          "/assets/vector/Star.svg"

                        }
                        alt={`Star  `}
                      />
                      {ratingNilai}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <p className="text-black md:text-base text-sm font-bold">
                      {penilaian}
                    </p>
                    <p className="text-black md:text-base text-sm">Penilaian</p>
                  </div>

                </div>
                <p className="text-black md:text-base text-sm  pb-0">
                  Nomor Izin Umroh:
                </p>
                <p className="text-black md:text-base text-sm  pb-0">
                  {noIzin}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>

          <div className="pb-2">
            <p className="flex justify-end md:pe-5 pe-5 text-yellow-300 md:text-xs text-sm">
              Lihat Paket Lainnya &rsaquo;
            </p>
          </div>
          <div className="flex justify-evenly pb-5">
            <div className="bg-gray-300 md:h-[75px] md:w-[120px] h-[80px] w-[90px] rounded-md"></div>
            <div className="bg-gray-300 md:h-[75px] md:w-[120px] h-[80px] w-[90px] rounded-md"></div>
            <div className="bg-gray-300 md:h-[75px] md:w-[120px] h-[80px] w-[90px] rounded-md"></div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default MitraCard;
