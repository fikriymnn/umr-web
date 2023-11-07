import React from "react";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";

function PackageDetail() {
  const numero = {
    total: 50,
    available: 5,
  };

  const availability = (numero.available / numero.total) * 100 + "%";
  return (
    <div className="bg">
      <div className="md:flex pt-10 bg-cover bg-[url('/assets/images/image2.png')] z-10">
        <div className="md:w-8/12 w-full">
          <section id="main">
            <div className=" bg-white md:w-10/12 w-11/12  md:ms-20 rounded-xl mx-auto">
              <div className="h-[60px] rounded-t-xl center md:mt-5 mt-4">
                <p className="md:text-2xl text-xl font-bold text-center md:py-3 py-1 px-2 text-black ">
                  Umroh Dream Exclusive Plus Kereta Cepat 10 Hari
                </p>
              </div>
              <div className="bg-gray-900 w-full md:h-[315px] h-[200px] mt-3 rounded-xl">
                <DefaultCarousel />
              </div>
              <div className="grid grid-cols-2 gap-5 py-7 md:px-9 px-4">
                <div className="flex">
                  <div className="md:w-1/12  w-3/12">
                    <Image
                      src="/assets/vector/bed.svg"
                      width={25}
                      height={25}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs text-black ">
                      Pilihan Kamar
                    </p>
                    <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs text-black">
                      Satu Kamar 4 Orang QUAD
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-1/12 w-3/12">
                    <Image
                      src="/assets/vector/calendar.svg"
                      width={25}
                      height={25}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                      Tanggal Keberangkatan
                    </p>
                    <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                      10 September 2023
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-1/12 w-3/12">
                    <Image
                      src="/assets/vector/plane.svg"
                      width={25}
                      height={25}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                      Maskapai Pesawat
                    </p>
                    <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                      Garuda
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-1/12 w-3/12">
                    <Image
                      src="/assets/vector/minlocation.svg"
                      width={25}
                      height={25}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                      Kota Keberangkatan
                    </p>
                    <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                      Jakarta
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-1/12 w-3/12">
                    <Image
                      src="/assets/vector/datetime.svg"
                      width={25}
                      height={25}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
                      Durasi Perjalanan
                    </p>
                    <p className="ps-1 pt-2 md:text-[17px] sm:text-lg text-xs">
                      9 Hari
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-1/12 w-3/12">
                    <Image
                      src="/assets/vector/hotel.svg"
                      width={25}
                      height={25}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <p className="ps-1 font-bold md:text-[17px] sm:text-lg text-xs">
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
          </section>
          <section id="Mitra travel">
            <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20 rounded-xl mt-[50px]">
              <div className=" md:w-[250px]  w-[150px] bg-black mx-auto rounded-b-xl">
                <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
                  Mitra Travel
                </p>
              </div>
              <div className="flex py-7 md:px-9 px-4">
                <div className="md:w-3/12 sm:w-3/12 w-2/12">
                  <div className="md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] w-[40px] h-[40px] bg-gray-500 rounded-full"></div>
                </div>
                <div className="w-full ps-5">
                  <h1 className=" text-black md:text-2xl sm:text-xl text-base pb-3 font-semibold">
                    Travel Keren Dongs
                  </h1>
                  <div className="md:flex md:my-3 pb-1 gap-10">
                    <p className="text-black md:text-[24px] sm:text-xl text-sm">
                      60 Penilaian
                    </p>
                    <div className="flex md:gap-7">
                      <p className="text-black md:text-[24px] sm:text-xl text-sm">
                        Rating
                      </p>
                      <div className="ps-1 flex items-center space-x-1 my-auto">
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
                  <p className="text-black md:text-[24px] sm:text-xl text-sm md:mb-3 mt-2 pb-1">
                    Nomor Izin Umroh
                  </p>
                  <p className="text-black md:text-[24px] sm:text-xl text-sm md:pb-3 pb-1">
                    123123123123
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonial">
            <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20  rounded-xl my-[50px]">
              <div className="md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
                <p className="md:text-2xl sm:text-xl text-lg  font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
                  Testimoni Travel
                </p>
              </div>
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <div className="h-[20px]"></div>
            </div>
          </section>

          <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20 rounded-xl mt-[50px]">
            <div>
              <div className=" md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
                <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
                  Fasilitas Umroh
                </p>
              </div>
              <div className="py-7 md:px-9 px-4 md:text-2xl sm:text-xl text-lg font-semibold text-black">
                <p>Kamar Hotel</p>
                <p>List nomer 2</p>
                <p>List Nomer 3</p>
              </div>
              <div className="h-[20px]"></div>
            </div>
          </div>
          <div className="h-[50px]"></div>
          <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20 rounded-xl">
            <div className=" md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
              <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
                Maskapai
              </p>
            </div>
            <div className="flex py-7 md:px-9 px-4">
              <div className="md:w-3/12 w-3/12">
                <div className="md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] w-[70px] h-[70px] bg-gray-500 rounded-full"></div>
              </div>
              <div className="w-full ps-5 my-auto">
                <h1 className=" text-black md:text-4xl sm:text-2xl text-xl   font-medium ">
                  Air Asia Airlines
                </h1>
              </div>
            </div>
            <div className="h-[20px]"></div>
          </div>
          <div className="h-[50px]"></div>
          <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20 rounded-xl">
            <div className=" md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
              <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
                Hotel Travel
              </p>
            </div>
            <Facility />
            <Facility />
            <Facility />
            <div className="h-[20px]"></div>
          </div>
          <div className="h-[50px]"></div>
        </div>
        <div className="md:w-4/12 w-11/12 mx-auto z-10 md:mr-20">
          <div className="bg-white rounded-xl  shadow-lg">
            <div className="p-7">
              <div className="">
                <h1 className="md:text-xl sm:text-lg text-base font-semibold">
                  Harga
                </h1>
              </div>
              <div className="">
                <h2 className="md:text-3xl sm:text-2xl text-xl text-[#E3B02B] font-semibold pt-2">
                  RP 39.500.000
                </h2>
              </div>
              <div className="mt-3 mx-auto">
                <div className="w-full  h-7 rounded-xl border-2 relative border-black">
                  <div className=" w-full absolute flex items-center justify-center text-center font-semibold md:text-base sm:text-base text-xs my-auto">
                    <p className="my-auto">Tersisa {numero.available} Paket</p>
                  </div>
                  <div
                    style={{ width: availability }}
                    className="h-full bg-[#be9223] rounded-xl"
                  ></div>
                </div>
              </div>
              <div className="py-3">
                <p>
                  Lorem ipsum dolor sit Amet Lorem ipsum dolor sit AmetLorem
                  ipsum dolor sit AmetLorem ipsum dolor sit AmetLorem ipsum
                  dolor sit Amet
                </p>
              </div>
              <div className="  ">
                <a href="/package/detail/formPesan">
                  <div className="my-auto  bg-[#E3B02B] hover:bg-[#fad26e] shadow-lg m-auto rounded-xl p-3 items-center justify-center">
                    <div className="flex justify-center ">
                      <div className="md:w-1/12 w-1/12 ">
                        <Image
                          src="/assets/vector/order.svg"
                          width={25}
                          height={25}
                          alt="icon"
                        />
                      </div>
                      <p className="font-semibold ">Pesan Paket Umroh</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mx-auto rounded-xl w-11/12 mt-[50px]">
        <div className=" md:w-[250px] sm:w-[200px]  w-[170px] bg-black mx-auto rounded-b-xl">
          <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
            Jadwal Perjalanan
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-y-8 md:gap-x-16 gap-2 py-7 md:px-9 px-4">
          <div className=" border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="font-semibold md:text-xl sm:text-lg text-base">
                Hari 1
              </h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 2</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 3</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 4</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 5</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 6</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 7</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 8</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
          <div className="w-3/9 border-[3px] border-gray-400 rounded-xl">
            <div className="p-3">
              <h1 className="md:text-xl sm:text-lg text-base">Hari 9</h1>
              <p className="md:text-base sm:text-sm text-xs">
                Umroh Plus Dubai Hari-1
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="md:w-8/12 w-full">
          <div className=""></div>
          <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20  rounded-xl mt-[50px]">
            <div>
              <div className=" md:w-[250px] sm:w-[200px]  w-[200px] bg-black mx-auto rounded-b-xl">
                <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
                  Syarat & Ketentuan
                </p>
              </div>
              <div className="py-7 md:px-9 px-4 md:text-2xl sm:text-xl text-base font-semibold text-black">
                <p>Syarat</p>
                <p>Syarat</p>
                <p>Ketentuan</p>
                <p>Syarat</p>
                <p>Syarat</p>
                <p>Ketentuan</p>
                <p>Syarat</p>
                <p>Syarat</p>
                <p>Ketentuan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold">Paket Umroh Lainnya</h1>
      </div>

      <div className="grid  :grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-10 gap-1 py-7 md:px-9 px-4">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </div>
  );
}

export default PackageDetail;
