import React from "react";
import StarsRating from "@/components/starsRating";

function BayarPage() {
  return (
    <>
      <div className="bg">
        <div className="flex flex-col pt-10 bg-left bg-contain bg-[url('/assets/images/image2.png')] z-10">
          <section>
            <div className="ml-20 w-6/12 h-[689px] bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
              <div className="flex px-7 py-6 gap-2">
                <div className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7H11V14H3V5H1V20H3V17H21V20H23V11C23 9.93913 22.5786 8.92172 21.8284 8.17157C21.0783 7.42143 20.0609 7 19 7ZM7 13C7.79565 13 8.55871 12.6839 9.12132 12.1213C9.68393 11.5587 10 10.7956 10 10C10 9.20435 9.68393 8.44129 9.12132 7.87868C8.55871 7.31607 7.79565 7 7 7C6.20435 7 5.44129 7.31607 4.87868 7.87868C4.31607 8.44129 4 9.20435 4 10C4 10.7956 4.31607 11.5587 4.87868 12.1213C5.44129 12.6839 6.20435 13 7 13Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold px- ">Pesanan Kamu</p>
                </div>
              </div>
              <div className="flex gap-3 ml-[73px]">
                <div>
                  <div className="w-[59px] h-[59px] bg-gray-500 rounded-full "></div>
                </div>
                <div className="grid grid-cols-1 ">
                  <p className="text-xl font-semibold ">Travel Keren Dongs</p>
                  <div className="flex gap-12">
                    <p className="text-xl font-medium">60 Penilaian</p>
                    <div className="flex justify-center items-center">
                      <p className="text-xl font-medium">Rating</p>
                      <StarsRating />
                    </div>
                  </div>
                  <p className="text-xl font-medium">Nomor Izin Umroh:</p>
                  <p className="text-xl font-medium">1230349594899489</p>
                </div>
              </div>
              <div className="border-4 w-10/12 ml-14 mt-12">
                <p className="text-black text-2xl font-bold flex items-center justify-center">
                  Umroh Dream Exclusive Plus Kereta Cepat 10 Hari
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default BayarPage;
