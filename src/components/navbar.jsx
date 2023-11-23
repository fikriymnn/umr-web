"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import {
  isMobile
} from "react-device-detect";
import { useState, useEffect } from "react";



export default function CustomNavbar() {
  const [comp, setComp] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const toggleNav = () => {
    setComp((prevComp) => (prevComp === 1 ? 0 : 1));
  };
  return (

    <>
      <>
        <div className="z-50 fixed h-[80px] bg-white w-full flex flex-col md:flex-row justify-between md:shadow-md">
          <div className="flex justify-between">
            <a href="/" className="md:h-full bg-white p-5 md:border-none ">
              <Image
                src="/assets/images/logo.png"
                alt=""
                width={140}
                height={140}
              />
            </a>
            {isClient && (
              <>
                {isMobile && (
                  <>
                    <div className="h-full w-20">
                      <button
                        onClick={toggleNav}
                        className="h-full w-full p-7 flex flex-col justify-between" >
                        <div className={`duration-100 bg-black h-1 w-full ${comp == 1 ? "rotate-45 translate-y-[9px]" : ""} rounded-full `}></div>
                        <div className={`duration-100  h-1 w-full rounded-full ${comp == 1 ? "bg-white" : "bg-black"}`}></div>
                        <div className={`duration-100 bg-black h-1 w-full ${comp == 1 ? "-rotate-45 -translate-y-[9px]" : ""} rounded-full `}></div>
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

          </div>



          {isClient && (
            <>
              {isMobile ? (
                <>
                  {comp == 1 && (


                    <>
                      <div className="border-t-2 border-slate-200 md:h-full bg-white flex flex-col md:flex-row p-5 gap-5 font-semibold text-[17px]">
                        <a href="/package" className="flex gap-2 items-center md:hover:scale-105 duration-100">
                          <Image
                            src="/assets/vector/kabaico.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p>Paket Umroh</p></a>
                        <a href="/" className="flex gap-2 items-center md:hover:scale-105 duration-100">
                          <Image
                            src="/assets/vector/aboutico.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p>Tentang Kami</p></a>
                        <a href="/mitraKami" className="flex gap-2 items-center md:hover:scale-105 duration-100">
                          <Image
                            src="/assets/vector/mitraico.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p>Mitra Kami</p></a>
                      </div>
                      <div className="md:h-full bg-slate-200 md:bg-white p-5 flex flex-col md:flex-row -center gap-5 font-semibold text-[17px] ">
                        <div className="flex gap-5 items-center">
                          <a className="md:hover:text-[#E3B02B]" href="/">
                            Masuk
                          </a>
                          <a href="/">
                            <div className="px-4 py-1 rounded-md bgprim text-white md:hover:bg-white md:hover:border border-[#E3B02B] md:hover:shadow-xl md:hover:text-[#E3B02B] duration-100">Daftar</div>
                          </a>
                        </div>
                        <div className="flex items-center gap-2">

                          <div className="bg-slate-400 rounded-full w-10 h-10"></div>
                          <p>Rudi Kustandi</p>
                        </div>

                      </div>
                    </>
                  )
                  }

                </>
              ) : (
                <>
                  <div className="md:h-full bg-white flex flex-col md:flex-row p-5 gap-5 font-semibold text-[17px]">
                    <a href="/package" className="flex gap-2 items-center md:hover:scale-105 duration-100">
                      <Image
                        src="/assets/vector/kabaico.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Paket Umroh</p></a>
                    <a href="/" className="flex gap-2 items-center md:hover:scale-105 duration-100">
                      <Image
                        src="/assets/vector/aboutico.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Tentang Kami</p></a>
                    <a href="/mitraKami" className="flex gap-2 items-center md:hover:scale-105 duration-100">
                      <Image
                        src="/assets/vector/mitraico.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Mitra Kami</p></a>
                  </div>
                  <div className="md:h-full bg-slate-200 md:bg-white p-5 flex flex-col md:flex-row -center gap-5 font-semibold text-[17px] ">
                    <div className="flex gap-5 items-center">
                      <a className="md:hover:text-[#E3B02B]" href="/">
                        Masuk
                      </a>
                      <a href="/">
                        <div className="px-4 py-1 rounded-md bgprim text-white md:hover:bg-white md:hover:border border-[#E3B02B] md:hover:shadow-xl md:hover:text-[#E3B02B] duration-100">Daftar</div>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">

                      <div className="bg-slate-400 rounded-full w-10 h-10"></div>
                      <p>Rudi Kustandi</p>
                    </div>

                  </div>
                </>
              )}
            </>
          )}



        </div>
        <div className="h-[80px] w-full"></div>
      </>

    </>
  );
}
