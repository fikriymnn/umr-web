import React from "react";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import FilterNotMobilePackage from "@/components/FilterNotMobilePackage";
import FilterIsMobilePackage from "@/components/FilterIsMobilePackage";
import FilterPackages from "@/components/FilterPackages";
import axios from "axios";

async function GetDataPaket() {
  let data;
  try {
    const res = await axios.get(
      "http://localhost:5000/api/paket?skip=0&limit=15"
    );
    data = res.data.data;
  } catch (error) {
    data = null;
  }
  return data;
}

async function Package() {
  const DataPaket = await GetDataPaket();

  return (
    <div className="bg pb-10">
      <div className=" lg:px-20 bg-cover  bg-[url('/assets/images/image2.png')]">
        <FilterPackages />
        <div className="h-[40px]"></div>
        <div className="flex  pt-5   z-10 relative">
          <FilterNotMobilePackage />
          <div className="lg:w-8/12 w-full mx-auto lg:ml-10 lg:mr-20 lg:p-0 px-5">
            <div className="bg-white shadow-xl rounded-xl lg:w-full w-full">
              <div className="flex lg:flex-row flex-col">
                <div className="lg:w-3/6 w-full p-5 py-3">
                  <h1 className="w-full mb-2 text-sm lg:text-xl font-semibold">
                    Jenis Keberangkatan
                  </h1>
                  <Dropdown />
                </div>
                <div className="lg:w-3/6 w-full p-5 lg:py-3 pt-0">
                  <h1 className="w-full mb-2 text-sm lg:text-xl font-semibold">
                    Waktu Keberangkatan
                  </h1>
                  <Dropdown />
                </div>
              </div>
            </div>
            <div className="mt-2 ">
              <h1 className="text-xl font-semibold  my-5">
                List Paket Umroh Yang Tersedia
              </h1>
              <div className="mahfud lg:grid-cols-2 md:grid-cols-3 grid-cols-2 md:gap-10 gap-2">
                {DataPaket == null ? (
                  <div></div>
                ) : (
                  DataPaket.paket.map((data, index) => {
                    return (
                      <PackageCard
                        key={index}
                        id={data._id}
                        banner={`http://localhost:5000/images/${data.content_carousel[0].img}`}
                        durasi={data.durasi_perjalanan}
                        ratingHotel={data.rating_hotel}
                        kamar={data.pilihan_kamar}
                        kuota={data.kuota}
                        lokasi={data.kota_keberangkatan}
                        maskapai={data.maskapai_penerbangan}
                        price={data.price}
                        title={data.title}
                        waktuKeberangkatan={data.waktu_keberangkatan}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
