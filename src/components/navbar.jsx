"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";

export default function CustomNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white ml-10">
          UmrohYuk
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 mr-10">
        <a href="/login">
          <p className="pt-1 pe-3 hover:text-[#E3B02B]">Masuk</p>
        </a>
        <a href="/signin">
          <div className="text-center bg-[#E3B02B] hover:bg-white text-white hover:text-[#E3B02B] w-[110px] h-[30px] rounded-xl">
            <p className="pt-1">Daftar</p>
          </div>
        </a>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/package">
          <div className="flex">
            <div className="w-2/12">
              <Image
                src='/assets/images/Kaaba.png'
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <p>Paket Umroh</p>
          </div>
        </Navbar.Link>
        <Navbar.Link href="/about">
          <div className="flex">
            <div className="w-2/12 ">
              <Image
                src='/assets/images/InfoSquared.png'
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <p>Tentang Kami</p>
          </div>
        </Navbar.Link>
        <Navbar.Link href="/more">
          <div className="flex">
            <div className="w-2/12">
              <Image
                src='/assets/images/grid.png'
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <p>Lainnya</p>
          </div>
        </Navbar.Link>
        <Navbar.Link href="/search">S</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
