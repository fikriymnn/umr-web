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
      <div className="md:flex pt-10 bg-contain bg-[url('/assets/images/image2.png')] z-10">
        <div className="md:w-8/12  w-full">
          <MainInfoPackage />
          <MitraTravelSection />
          <TestimonialSection />
          <FasilitasUmrohSection />
          <MaskapaiSection />
          <HotelTravelSection />
        </div>
        <div className="md:w-4/12  w-11/12 mx-auto z-10 md:mr-20 ">
          <div className="bg-white rounded-xl  shadow-lg md:mt-0 sm:mt[30px] mt-[15px]">
            <PesanPaketSection />
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-8/12 w-full">
          <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20  rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px] ">
            <JadwalPerjalananSection />
          </div>

          <div className=" w-full">
            <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20  rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">
              <SyaratDanKetentuanSection />
            </div>
          </div>
        </div>

        <div className="md:w-4/12 w-11/12 mx-auto z-10 md:mr-20"></div>
      </div>

      <div className="text-center mt-12">
        <h1 className="md:text-4xl sm:text-xl text-xl font-bold">
          Paket Umroh Lainnya
        </h1>
      </div>

      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-10 gap-1 md:py-7 py-3 md:px-9 px-4">
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
