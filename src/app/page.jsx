import Image from "next/image";

import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import MultipleCarousel from "@/components/multipleCarousel";
import ThreeCarousel from "@/components/threeCarousel";
import Percayakan from "@/components/percayakan";

export default function Home() {
  return (
    <>
      <div className=" bg  ">
        <div></div>
        <div className="bg-white w-11/12 md:h-96 sm:h-72 h-52 m-auto pt-10">
          <DefaultCarousel />
          {/* <MultipleCarousel/> */}
        </div>
        <div className="md:mt-0 mt-5 bg-white bg-opacity-95 rounded-[10px] shadow md:w-9/12 w-11/12 md:h-28 h-24 mx-auto md:-translate-y-5 flex gap-2 items-center ">
          <div className="w-[25%] ml-5 ">
            <p className="md:text-base sm:text-sm text-[10px]">
              Lokasi Keberangkatan
            </p>
            <input
              type="text"
              className="rounded-md border-gray-300 w-full md:h-full h-8"
              placeholder="Masukan Lokasi Keberangkatan"
            />
          </div>
          <div className="w-[25%]">
            <p className="md:text-base sm:text-sm text-[10px]">
              Waktu Keberangkatan
            </p>
            <input
              type="text"
              className="rounded-md border-gray-300 w-full md:h-full h-8"
              placeholder="Masukan Waktu Keberangkatan"
            />
          </div>
          <div className="w-[25%]">
            <p className="md:text-base sm:text-sm text-[10px]">
              Estimasi Biaya Umroh
            </p>
            <input
              type="text"
              className="rounded-md border-gray-300 w-full md:h-full h-8"
              placeholder="Masukan Estimasi Biaya Umroh"
            />
          </div>
          <div className="md:pl-10 md:mt-5   mt-[24px] w-[20%] ">
            <div className="py-2 px-3 bg-black rounded-md text-white md:w-24 md:h-10 w-[70px] h-8 ">
              <p className="md:text-base sm:text-[10px] text-[10px]">
                Cari Paket
              </p>
            </div>
          </div>
        </div>
        {/* <div className="h-64  "></div> */}
        <div className=" bg-cover bg-[url('/assets/images/image2.png')] z-10">
          <p className=" text-black text-xl font-bold px-14 pt-14 pb-16">
            List Paket Umroh Yang Tersedia
          </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-14 pb-10">
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
          <a href="/package">
            <div className="flex items-center justify-center bg-black w-96 h-16 mx-auto rounded-xl mb-10">
              <p className=" text-white text-center  ">
                Tampilkan Lebih Banyak
              </p>
            </div>
          </a>
          <div className="bg-black w-full md:h-96 h-80 ">
            <p className="text-white ps-14 pt-10 font-bold">Gallery Kegiatan</p>
            <div className=" h-[250px] ps-14 z-20">
              <ThreeCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto  mt-16">
        <p className="font-extrabold text-3xl md:hidden sm:visible visible">
          Percayakan Perjalanan Umroh anda kepada Ibadahku
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className=" mx-auto md:w-11/12 w-64 bg-cover bg-[url('/assets/images/image2.png')]  ">
          <Image
            src={"/assets/images/pakhaji.png"}
            alt=""
            width={512}
            height={653}
            className="mx-auto md:mt-10 mt-10 md:mb-24"
          />
        </div>
        <Percayakan />
      </div>
      <div className="bg-black w-full h-full md:pb-14 pb-10">
        <div className="flex justify-between">
          <p className="text-white ps-14 pt-10 font-bold">100+ Biro Travel</p>
          <p className="text-white pe-14 pt-10 font-bold">Mitra Kami</p>
        </div>
        <div className="  ps-14 mt-14">
          <MultipleCarousel className="mx-auto my-auto" />
        </div>
      </div>
      <div className=" w-full ">
        <div className="px-14 w-11/12 mb-24">
          <p className="text-black pt-10 font-extrabold text-3xl">Ibadahku</p>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero rerum
            minima perferendis alias maxime non sunt explicabo numquam odit quam
            aliquid quasi ducimus velit veniam repellendus veritatis eius
            distinctio porro, provident tempore accusantium ipsa. Nulla
            perspiciatis excepturi reiciendis, odio odit dignissimos fuga vitae
            temporibus magnam. Voluptate tenetur odio aspernatur obcaecati qui
            distinctio beatae deleniti accusantium magnam dolorum voluptates
            iure laudantium perspiciatis eum quae, quisquam rem rerum illo,
            consequuntur asperiores labore, quod inventore adipisci voluptas. Ad
            dignissimos cumque dicta similique velit, fugit at, quidem
            consequuntur est voluptatibus, eligendi assumenda error excepturi
            aperiam soluta amet delectus hic. Maxime, eos nisi? Sequi, iusto.
          </p>
        </div>
      </div>
    </>
  );
}
