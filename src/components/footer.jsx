"use client";

import { Footer } from "flowbite-react";
import {
  BsDribble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Image from "next/image";
export default function CustomFooter() {
  return (
    <Footer>
      <div className="w-full bg-[#E3B02B]">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="md:w-96 w-11/12">
            <p className="md:text-3xl text-lg font-extrabold md:pt-14 pt-7 md:ps-14 ps-4 pb-6">
              Ibadahku
            </p>
            <p className="font-bold md:ps-14 ps-4 md:text-base text-sm">
              jl. Wastukencana Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 md:p-14 p-4">
            <div>
              <Footer.Title
                title="Tentang Perusahaan"
                className="font-extrabold text-black"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="/">
                  <p className="text-black font-bold md:text-base text-sm">
                    Beranda
                  </p>
                </Footer.Link>
                <Footer.Link href="/package">
                  <p className="text-black font-bold md:text-base text-sm">
                    Paket Umroh
                  </p>
                </Footer.Link>

                <Footer.Link href="/tentangKami">
                  <p className="text-black font-bold md:text-base text-sm">
                    Tentang Kami
                  </p>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Jadi Mitra Kami"
                className="text-black font-extrabold"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  <p className="text-black font-bold md:text-base text-sm">
                    Gabung Mitra
                  </p>
                </Footer.Link>
                <Footer.Link href="#">
                  <p className="text-black font-bold md:text-base text-sm">
                    Mitra Kami
                  </p>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="">
                  <div className="flex justify-center items-center gap-1 bg-[#404040]/[.65] rounded-3xl h-10  w-44">
                    <Image
                      src="/assets/vector/whatsapp.svg"
                      width={25}
                      height={5}
                      alt="Picture of the author"
                      className=""
                    />
                    <p className="text-white text-center">Hubungi Kami</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <p className="text-black font-bold md:text-base text-sm">
                    Phone: 08293874783773
                  </p>
                </Footer.Link>
                <Footer.Link href="#">
                  <p className="text-black font-bold md:text-base text-sm">
                    Fax: 1232242442
                  </p>
                </Footer.Link>
                <Footer.Link href="#">
                  <p className="text-black font-bold md:text-base text-sm">
                    Contact Center: 08293874783773
                  </p>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full h-20 sm:flex sm:items-center sm:justify-between bg-black">
          <p className="text-white md:ps-14 ps-9">
            &copy;2023 Umroh Yuk Indonesia
          </p>
        </div>
      </div>
    </Footer>
  );
}
