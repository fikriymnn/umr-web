import React from "react";
import Image from "next/image";

import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";
import MainInfoPackage from "@/components/MainInfoPackage";
import MitraTravelSection from "@/components/DetailPackage/MitraTravelSection";
import TestimonialSection from "@/components/DetailPackage/TestimonialSection";
import FasilitasUmrohSection from "@/components/DetailPackage/FasilitasUmrohSection";
import MaskapaiSection from "@/components/DetailPackage/MaskapaiSection";
import HotelTravelSection from "@/components/DetailPackage/HotelTravelSection";
import PesanPaketSection from "@/components/DetailPackage/PesanPaketSection";
import JadwalPerjalananSection from "@/components/DetailPackage/JadwalPerjalananSection";
import SyaratDanKetentuanSection from "@/components/DetailPackage/SyaratDanKetentuanSection";

function PackageDetail() {
  const numero = {
    total: 50,
    available: 5,
  };

  const availability = (numero.available / numero.total) * 100 + "%";
  return (
    <div className="bg">
      <div className="lg:flex  pt-10  bg-contain bg-[url('/assets/images/image2.png')] z-10">
        <div className="lg:w-8/12 sm:w-full  w-full">
          <MainInfoPackage />
          <MitraTravelSection />
          <TestimonialSection />
          <FasilitasUmrohSection />
          <MaskapaiSection />
          <HotelTravelSection />
        </div>
        <div className="lg:w-4/12  w-11/12 mx-auto z-10 lg:mr-20 ">
          <div className="bg-white rounded-xl  shadow-lg lg:mt-0 sm:mt[30px] mt-[15px]">
            <PesanPaketSection />
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-8/12 w-full">
          <div className="bg-white lg:w-10/12 w-11/12 mx-auto lg:ms-20  rounded-xl lg:mt-[50px] sm:mt[30px] mt-[15px] ">
            <JadwalPerjalananSection />
          </div>

          <div className=" w-full">
            <div className="bg-white lg:w-10/12 w-11/12 mx-auto lg:ms-20  rounded-xl lg:mt-[50px] sm:mt[30px] mt-[15px]">
              <SyaratDanKetentuanSection />
            </div>
          </div>
        </div>

        <div className="lg:w-4/12 w-11/12 mx-auto z-10 lg:mr-20"></div>
      </div>

      <div className="text-center mt-12">
        <h1 className="lg:text-4xl sm:text-xl text-xl font-bold">
          Paket Umroh Lainnya
        </h1>
      </div>

      <div className="grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-1 lg:py-7 py-3 lg:px-9 px-4">
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
