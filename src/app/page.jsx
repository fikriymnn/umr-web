import Image from "next/image";

import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import MultipleCarousel from "@/components/Homepage/multipleCarousel";
import ThreeCarousel from "@/components/Homepage/threeCarousel";
import Percayakan from "@/components/Homepage/percayakan";
import Percayakan_mobile from "@/components/Homepage/percayakan_mobile";
import CariPaket from "@/components/Homepage/CariPaket";
import AboutUsHomepage from "@/components/Homepage/AboutUsHomepage";

export default function Home() {
  return (
    <>
      <div className=" bg  ">
        <div className="w-11/12 md:h-96 sm:h-72 h-52 m-auto pt-10">
          <DefaultCarousel />
        </div>
        <section>
          <CariPaket />
        </section>

        <div className=" bg-image-container z-10 flex flex-col justify-center items-center">
          <div className="md:w-9/12 w-11/12">
            <p className=" text-black text-xl font-bold  py-5">
              List Paket Umroh Yang Tersedia
            </p>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-4 sm:gap-3 gap-2 pb-10">
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
            </div>
            <a href="/package" className="flex">
              <div className="flex items-center justify-center bg-black p-4 mx-auto rounded-xl mb-10">
                <p className=" text-white text-center  ">
                  Tampilkan Lebih Banyak
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFEFC] w-full md:h-96 h-80 shadow-lg shadowy">
        <p className="text-black lg:ps-14 md:ps-10 ps-5 pt-10 font-bold">
          Gallery Kegiatan
        </p>
        <div className=" h-[250px] ps-14 z-20">
          <ThreeCarousel />
        </div>
      </div>

      <Percayakan_mobile />
      <div className="grid md:grid-cols-2 grid-cols-1  bg mt-5">
        <div className=" mx-auto md:w-11/12 w-64 bg-cover bg-image-container-left  ">
          <div className=" unflip">
            <Image
              src={"/assets/images/pakhaji.png"}
              alt=""
              width={512}
              height={653}
              className="mx-auto md:mt-10 mt-10 md:mb-24"
            />
          </div>
        </div>
        <div className="">
          <Percayakan />
        </div>
      </div>
      <div className="bg-black w-full h-full lg:px-14 md:px-10 px-5 pb-10">
        <div className="flex justify-between">
          <p className="text-white  md:pt-10 sm:pt-7 pt-4 font-bold">
            100+ Biro Travel
          </p>
          <p className="text-white  md:pt-10 sm:pt-7 pt-4 font-bold">
            Mitra Kami
          </p>
        </div>
        <div className="mt-14 z-20">
          <MultipleCarousel />
        </div>
      </div>
      <div className=" w-full ">
        <AboutUsHomepage />
      </div>
    </>
  );
}
