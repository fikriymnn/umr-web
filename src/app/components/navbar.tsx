import React from "react";

import Script from "next/script";
import "flowbite";
import Image from "next/image";

function Navbar() {
  return (
    <nav className=" bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            UmrohYuk
          </span>
        </a>
        <div className="flex md:order-2">
          <p className="flex items-center text-black pe-3">Masuk</p>
          <button
            type="button"
            className="w-[94px] h-[40.29px] bg-amber-400 rounded-[10px]"
          >
            <p className="text-white text-[17px] font-semibold">Daftar</p>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <div className="w-[465px] h-12 relative">
            <div className="left-[48px] top-[14px] absolute text-black text-[17px] font-semibold">
              Paket Umroh
            </div>
            <div className="left-[222px] top-[15px] absolute text-black text-[17px] font-semibold">
              Tentang Kami
            </div>
            <div className="left-[396px] top-[15px] absolute text-black text-[17px] font-semibold">
              Lainnya
            </div>
            <Image
              className="flex w-9 h-9 left-0 top-2 absolute"
              src="/assets/images/Kaaba.png"
              width={9}
              height={9}
              alt=""
            />
            <Image
              className="w-9 h-9 left-[174px] top-2 absolute"
              src="/assets/images/icon-park-solid_all-application.png"
              width={9}
              height={9}
              alt=""
            />
            <Image
              className="w-9 h-9 left-[348px] top-2 absolute"
              src="/assets/images/InfoSquared.png"
              width={9}
              height={9}
              alt=""
            />
            <div className="w-[37px] h-[37px] left-[353px] top-[6px] absolute">
              <div className="w-[27.75px] h-[27.75px] left-[4.62px] top-[4.62px] absolute"></div>
            </div>
          </div>
        </div>
      </div>
      <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
    </nav>
  );
}

export default Navbar;
