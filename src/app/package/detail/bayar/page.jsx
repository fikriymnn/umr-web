import React from "react";
import StarsRating from "@/components/starsRating";

import Image from "next/image";

function BayarPage() {
  return (
    <>
      <div className="bg ">
        <div className="flex flex-col pt-5 bg-left bg-contain bg-[url('/assets/images/image2.png')] z-10">
          <div className="flex mx-auto gap-4 justify-between mb-5">
            <div className="flex gap-1">
              <p className="rounded-full border-2 border-amber-400 text-amber-400 md:w-8 w-6 md:text-base text-xs text-center ">
                1
              </p>
              <p className="rounded-full text-amber-400 w-full  md:text-base text-xs">
                Data Pesanan
              </p>
            </div>
            <div className="w-12 h-1  my-auto mx-auto rounded-full bg-amber-400 "></div>
            <div className="flex gap-1">
              <p className="rounded-full border-2 border-amber-400 text-amber-400 md:w-10 w-7 md:text-base text-xs text-center ">
                2
              </p>
              <p className="rounded-full text-amber-400 w-full  md:text-base text-xs">
                Bayar
              </p>
            </div>
          </div>
          <section>
            <div className="md:ml-20 mx-4 md:w-6/12 w-11-12  bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
              <div className="flex md:px-7 px-4 py-6 gap-2">
                <div className="">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9997 2.66667C10.3672 2.66637 8.76326 3.09424 7.34786 3.90757C5.93245 4.7209 4.75512 5.89124 3.93337 7.30178C3.11163 8.71232 2.67422 10.3137 2.6648 11.9461C2.65538 13.5786 3.07428 15.1849 3.87969 16.6048C4.42407 15.8973 5.12386 15.3245 5.92495 14.9306C6.72605 14.5368 7.607 14.3324 8.49969 14.3333H15.4997C16.3924 14.3324 17.2733 14.5368 18.0744 14.9306C18.8755 15.3245 19.5753 15.8973 20.1197 16.6048C20.9251 15.1849 21.344 13.5786 21.3346 11.9461C21.3252 10.3137 20.8877 8.71232 20.066 7.30178C19.2443 5.89124 18.0669 4.7209 16.6515 3.90757C15.2361 3.09424 13.6321 2.66637 11.9997 2.66667ZM21.2665 19.0887C22.8264 17.0551 23.6701 14.5629 23.6664 12C23.6664 5.5565 18.4432 0.333336 11.9997 0.333336C5.55619 0.333336 0.333021 5.5565 0.333021 12C0.329169 14.5629 1.17291 17.0552 2.73285 19.0887L2.72702 19.1097L3.14119 19.5915C4.23539 20.8708 5.59397 21.8975 7.12329 22.6011C8.65261 23.3046 10.3163 23.6682 11.9997 23.6667C14.3649 23.671 16.675 22.9526 18.6205 21.6075C19.4499 21.0344 20.202 20.3569 20.8582 19.5915L21.2724 19.1097L21.2665 19.0887ZM11.9997 5C11.0714 5 10.1812 5.36875 9.52481 6.02513C8.86844 6.68151 8.49969 7.57174 8.49969 8.5C8.49969 9.42826 8.86844 10.3185 9.52481 10.9749C10.1812 11.6313 11.0714 12 11.9997 12C12.9279 12 13.8182 11.6313 14.4746 10.9749C15.1309 10.3185 15.4997 9.42826 15.4997 8.5C15.4997 7.57174 15.1309 6.68151 14.4746 6.02513C13.8182 5.36875 12.9279 5 11.9997 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="md:text-2xl sm:text-xl text-base font-bold px- ">
                    Pesanan Kamu
                  </p>
                </div>
              </div>

              <div className="flex gap-3 gap-y-4 md:ml-[73px] ml-4">
                <div>
                  <div className="md:w-[59px] md:h-[59px] w-[40px] h-[40px]  bg-gray-500 rounded-full "></div>
                </div>
                <div className="grid grid-cols-1 ">
                  <p className="md:text-lg font-semibold text-base">
                    Travel Keren Dongs
                  </p>
                  <div className="md:flex gap-12">
                    <p className="md:text-lg text-sm font-medium">
                      60 Penilaian
                    </p>
                    <div className="flex md:justify-center md:items-center">
                      <p className="md:text-lg text-sm font-medium my-auto">
                        Rating
                      </p>
                      <div className="md:w-full w-5/12 my-auto ">
                        <StarsRating />
                      </div>
                    </div>
                  </div>
                  <p className="md:text-lg text-sm font-medium mt-3">
                    Nomor Izin Umroh:
                  </p>
                  <p className="md:text-lg text-sm font-medium">
                    1230349594899489
                  </p>
                </div>
              </div>

              <div className=" md:w-11/12 sm:w-full w-11/12 md:ml-7 mx-auto  mt-3 flex flex-col justify-center items-center">
                <div className="my-4 md:mx-5">
                  <div className="border-2 border-b-0 p-2 border-slate-200">
                    <p className="md:text-2xl font-bold">
                      Umroh Dream Exclusive Plus Kereta Cepat 10 Hari
                    </p>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-5 mt-5">
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
                          <p className="ps-1 font-bold md:text-[17px]  text-xs text-black">
                            Pilihan Kamar
                          </p>
                          <p className="ps-1 pt-2 md:text-[17px] text-xs text-black">
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
                          <p className="ps-1 font-bold md:text-[17px] text-xs text-black">
                            Tanggal Keberangkatan
                          </p>
                          <p className="ps-1 pt-2 md:text-[17px] text-xs text-black">
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
                          <p className="ps-1 font-bold md:text-[17px] text-xs text-black">
                            Maskapai Pesawat
                          </p>
                          <p className="ps-1 pt-2 md:text-[17px] text-xs text-black">
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
                          <p className="ps-1 font-bold md:text-[17px] text-xs text-black">
                            Kota Keberangkatan
                          </p>
                          <p className="ps-1 pt-2 md:text-[17px] text-xs text-black">
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
                          <p className="ps-1 font-bold md:text-[17px] text-xs text-black">
                            Durasi Perjalanan
                          </p>
                          <p className="ps-1 pt-2 md:text-[17px] text-xs text-black">
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
                          <p className="ps-1 font-bold md:text-[17px] text-xs text-black">
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
                    <div className="flex border-2 md:border-e-0 p-2 border-slate-200 md:w-[40%] md:text-2xl sm:text-xl text-lg py-3 font-bold  justify-center items-center ">
                      <p className="my-2 text-center md:text-start">
                        Total Biaya
                      </p>
                    </div>
                    <div className="border-2 p-2 border-slate-200 md:w-[60%] md:border-t-2 border-t-0 md:text-2xl sm:text-xl text-lg font-bold px-12 py-3 flex md:flex-row flex-col justify-center items-center ">
                      <p className="my-2 text-center md:text-start">
                        Rp 39.500.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="md:ml-20 mx-4 md:w-6/12 w-11-12 my-5 bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
              <div className="flex md:px-7 px-4 py-6 gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.648 11.2653H6.35001C5.43573 11.2653 5.04389 10.2694 5.76226 9.79593L15.4112 3.47756C15.5894 3.37277 15.7923 3.3175 15.999 3.3175C16.2057 3.3175 16.4086 3.37277 16.5867 3.47756L26.2357 9.79593C26.9541 10.2694 26.5623 11.2653 25.648 11.2653Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.7959 20.2449H6.20402C5.75318 20.2449 5.3877 20.6104 5.3877 21.0613V23.5102C5.3877 23.9611 5.75318 24.3266 6.20402 24.3266H25.7959C26.2467 24.3266 26.6122 23.9611 26.6122 23.5102V21.0613C26.6122 20.6104 26.2467 20.2449 25.7959 20.2449Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.83594 11.2653V20.2449M11.9176 11.2653V20.2449M15.9992 11.2653V20.2449M20.0808 11.2653V20.2449M24.1625 11.2653V20.2449"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="15"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
                <p className="text-[17px] font-bold my-auto">
                  Metode Pembayaran
                </p>
              </div>
              <div className="relative inline-block text-left md:px-7 px-4">
                <button className="flex  py-3 gap-2 rounded-md bg-white">
                  <div className="border-2 rounded-md bg-white">
                    <Image
                      src={"/assets/images/bca.png"}
                      alt=""
                      width={55}
                      height={55}
                    />
                  </div>
                  <span className="my-auto text-neutral-400 font-medium">
                    Transfer Bank &#40;Transfer BCA&#41;
                  </span>
                </button>
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {/* Add more dropdown items as needed */}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      role="menuitem"
                    >
                      Item 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      role="menuitem"
                    >
                      Item 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      role="menuitem"
                    >
                      Item 3
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:px-7 px-4 py-7 ">
                <p className="font-semibold text-base pb-2">
                  Nama Pemilik Rekening
                </p>
                <input
                  type="text"
                  className="rounded-lg w-full border-neutral-400 text-neutral-400 "
                  placeholder="Ketik Nama Pemilik Rekening... "
                />
              </div>
              <div className="md:px-7 px-4">
                <p className="font-semibold text-base pb-2">Perhatian:</p>
                <p className="font-medium text-sm">
                  Anda bisa transfer dari layanan perbankan apapun &#40;
                  internet banking, SMS&#47;M-Banking, ATM &#41;
                </p>
              </div>
              <div className="md:px-7 px-4 py-10">
                <p className="font-semibold text-base">Kode Promo</p>
                <div className="border-[1px] rounded-lg  border-neutral-400 flex md:w-10/12 w-full">
                  <input
                    type="text"
                    className="w-9/12 border-none mx-1"
                    placeholder="Ketik Kode Promo.."
                  />
                  <button className="w-3/12 bg-amber-400 m-1 rounded-lg md:text-sm text-xs font-medium p-2 ">
                    Reedem
                  </button>
                </div>
              </div>
            </div>
            <div className="md:ml-20 mx-4 md:w-6/12 w-11-12 my-5 bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
              <div className="md:px-7 px-4 flex justify-between pt-5 mb-7 ">
                <p className="font-bold text-base">Total Harga</p>
                <p className="font-bold text-base text-amber-400">
                  Rp 39.500.00
                </p>
              </div>
              <a
                href="/akun/PesananSaya/KonfirmasiBayar"
                className="flex justify-center items-center mb-5"
              >
                <button className=" rounded-md w-11/12 bg-amber-400 m-2 font-semibold h-10">
                  Bayar
                </button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default BayarPage;
