"use client";
import React from "react";
import AccountNav from "@/components/accountNav";
import OrderNav from "@/components/orderNav";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function Diproses() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getuser();
  }, []);

  async function getuser() {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      if (res.data.success == true) {
        getDetailOrder(res.data.data._id);
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  async function getDetailOrder(idd) {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/order?id_user=${idd}&status=diproses&skip=0&limit=20`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success == true) {
        console.log(res.data.data);
        setOrder(res.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div className="lg:px-14 px-5 py-10 bg-slate-100">
      <div className=" flex lg:flex-row flex-col">
        <AccountNav order="bg-[#E3B02B] text-white" />

        <div className="w-full lg:w-10/12 lg:ps-5">
          <div className="bg-white grid grid-cols-1 gap-3 lg:rounded-xl rounded-b-xl border-2 lg:border-t-2 border-t-0 border-slate-300 shadow-xl p-3 lg:px-8 px-5">
            <div className="flex justify-center items-center lg:gap-32 gap-3 pt-3">
              <OrderNav
                belbay={"text-black "}
                proc={"text-[#E3B02B]"}
                procl={"h-[2px] bg-[#E3B02B]"}
                done={"text-black"}
              />
            </div>
            {order != null &&
              order.map((data, i) => {
                const maxRating = 5;
                const rating = data.paket.rating_hotel;
                const renderStars = () => {
                  const stars = [];
                  for (let i = 0; i < maxRating; i++) {
                    const isColored = i < rating;
                    stars.push(
                      <div className="w-5">
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
                const date = new Date(data.paket.waktu_keberangkatan);
                // Format tanggal
                const WaktuKeberangkatan = format(date, "d MMM y");
                const nominal = data.order.jumlah_bayar;
                const formattedNominal = nominal.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                });
                return (
                  <div key={i} className="my-4">
                    <div className="border-2 border-b-0 p-2 border-slate-200">
                      <p className="lg:text-2xl font-bold">
                        {data.paket.title}
                      </p>
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
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
                            <p className="ps-1 font-bold lg:text-xl text-black">
                              Pilihan Kamar
                            </p>
                            <p className="ps-1 pt-2 lg:text-xl text-black">
                              {data.paket.pilihan_kamar}
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
                            <p className="ps-1 font-bold lg:text-xl text-black">
                              Tanggal Keberangkatan
                            </p>
                            <p className="ps-1 pt-2 lg:text-xl text-black">
                              {WaktuKeberangkatan}
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
                            <p className="ps-1 font-bold lg:text-xl text-black">
                              Maskapai Pesawat
                            </p>
                            <p className="ps-1 pt-2 lg:text-xl text-black">
                              {data.paket.maskapai_penerbangan}
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
                            <p className="ps-1 font-bold lg:text-xl text-black">
                              Kota Keberangkatan
                            </p>
                            <p className="ps-1 pt-2 lg:text-xl text-black">
                              {data.paket.kota_keberangkatan}
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
                            <p className="ps-1 font-bold lg:text-xl text-black">
                              Durasi Perjalanan
                            </p>
                            <p className="ps-1 pt-2 lg:text-xl text-black">
                              {data.paket.durasi_perjalanan}
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
                            <p className="ps-1 font-bold lg:text-xl text-black">
                              Hotel
                            </p>
                            <div className="ps-1 pt-2 flex items-center space-x-1">
                              {renderStars()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:flex-row flex-col">
                      <div className="border-2 lg:border-e-0 p-2 border-slate-200 lg:w-[30%]  lg:text-2xl sm:text-lg text-base py-3 font-semibold lg:ps-12 ">
                        <p className="my-2 text-center lg:text-start">
                          Total Jemaah
                        </p>
                      </div>
                      <div className="border-2 p-2 border-slate-200 lg:w-[70%] lg:border-t-2 border-t-0  lg:text-2xl sm:text-lg text-base font-semibold px-12 py-3 flex lg:flex-row flex-col justify-between ">
                        <p className="my-2 text-center lg:text-start">
                          {data.order.jamaah.length} Jamaah
                        </p>
                        {/* <div className="flex gap-2">

                          <div className="bg-green-500 px-7 rounded-lg lg:py-0 py-2 lg:mt-0 mt-2 text-white flex justify-center items-center text-center text-sm lg:text-base">
                            Details
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="flex lg:flex-row flex-col">
                      <div className="border-2 lg:border-e-0 p-2 border-slate-200 lg:w-[30%]  lg:text-2xl sm:text-lg text-base py-3 font-bold lg:ps-12 ">
                        <p className="my-2 text-center lg:text-start">
                          Total Biaya
                        </p>
                      </div>
                      <div className="border-2 p-2 border-slate-200 lg:w-[70%] lg:border-t-2 border-t-0  lg:text-2xl sm:text-lg text-base font-bold px-12 py-3 flex lg:flex-row flex-col justify-between ">
                        <p className="my-2 text-center lg:text-start">
                          {formattedNominal}
                        </p>
                        <div className="flex gap-2 lg:mx-0 mx-auto">
                          <div className="flex justify-center">
                            <a
                              href={`invoice?id=${data.order._id}`}
                              className="bg-amber-500 px-7 rounded-lg lg:py-0 py-1 lg:mt-0 mt-2 text-white flex justify-center items-center text-center text-sm lg:text-base  bg-no-repeat bg-center"
                              style={{
                                backgroundImage: `url(/assets/vector/download.svg)`,
                              }}
                            ></a>
                          </div>
                          <div className="bg-orange-500 px-7 rounded-lg lg:py-0 py-2 lg:mt-0 mt-2 text-white flex justify-center items-center text-center text-sm lg:text-base">
                            Pesanan Diproses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diproses;
