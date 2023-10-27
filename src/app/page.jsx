import Image from "next/image";
import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";

import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import MultipleCarousel from "@/components/multipleCarousel"
import ThreeCarousel from "@/components/threeCarousel";

export default function Home() {
  return (
    <>
      <div className=" bg  ">
        <div>

        </div>
        <div className="bg-white w-11/12 h-96 m-auto pt-10">
          <DefaultCarousel />
          {/* <MultipleCarousel/> */}
        </div>
        {/* <div className="h-64  "></div> */}
        <div className=" bg-cover bg-[url('/assets/images/image2.png')] z-10">
          <p className=" text-black text-xl font-bold p-14">
            List Paket Umroh Yang Tersedia
          </p>
          <div className="grid grid-cols-3 gap-10 mx-14 pb-10">
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
              <p className=" text-white text-center  ">Tampilkan Lebih Banyak</p>
            </div>
          </a>
          <div className="bg-black w-full h-96 ">
            <p className="text-white ps-14 pt-10 font-bold">Gallery Kegiatan</p>
            <div className=" h-[250px] ps-14 z-20">

              <ThreeCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className=" bg-cover bg-[url('/assets/images/image2.png')]  ">
          <Image
            src={'/assets/images/pakhaji.png'}
            alt=""
            width={512}
            height={653}
            className="mx-auto mt-10 mb-24"
          />
        </div>
        <div className=" grid grid-cols-1 h-screen mx-auto  ">
          <div className="w-4/5 mx-auto mb-10 mt-16">

            <p className="font-extrabold text-3xl ">Percayakan Perjalanan Umroh anda kepada umroh Yuk</p>
          </div>
          <div>

          </div>
          <div className=" flex w-4/5 h-24 bg-[#959595] mx-auto rounded-xl">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl" >
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl ">

              </div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white font-bold pt-2">Lorem ipsum Dolor sit Amet</p>
              <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quia a dicta molestias sed</p>
            </div>
          </div>
          <div className=" flex w-4/5 h-24 bg-[#959595] mx-auto rounded-xl">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl" >
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl ">

              </div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white font-bold pt-2">Lorem ipsum Dolor sit Amet</p>
              <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quia a dicta molestias sed</p>
            </div>
          </div>
          <div className=" flex w-4/5 h-24 bg-[#959595] mx-auto rounded-xl">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl" >
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl ">

              </div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white font-bold pt-2">Lorem ipsum Dolor sit Amet</p>
              <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quia a dicta molestias sed</p>
            </div>
          </div>
          <div className=" flex w-4/5 h-24 bg-[#959595] mx-auto rounded-xl mb-20">
            <div className=" bg-[#959595] w-4/12 grid place-content-center rounded-xl" >
              <div className="bg-[#E3B02B] h-16 w-16 rounded-xl ">

              </div>
            </div>
            <div className="grid grid-cols-1  ps-2">
              <p className="text-white font-bold pt-2">Lorem ipsum Dolor sit Amet</p>
              <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quia a dicta molestias sed</p>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-black w-full h-96 ">
        <div className="flex justify-between">
          <p className="text-white ps-14 pt-10 font-bold">100+ Biro Travel</p>
          <p className="text-white pe-14 pt-10 font-bold">Mitra Kami</p>
        </div>
        <div className=" h-[300px] ps-14 mt-14">

          <MultipleCarousel className="mx-auto my-auto" />
        </div>
      </div>
      <div className=" w-full ">
        <div className="px-14 w-11/12 mb-24">

          <p className="text-black pt-10 font-extrabold text-3xl">Umroh Yuk</p>
          <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero rerum minima perferendis alias maxime non sunt explicabo numquam odit quam aliquid quasi ducimus velit veniam repellendus veritatis eius distinctio porro, provident tempore accusantium ipsa. Nulla perspiciatis excepturi reiciendis, odio odit dignissimos fuga vitae temporibus magnam. Voluptate tenetur odio aspernatur obcaecati qui distinctio beatae deleniti accusantium magnam dolorum voluptates iure laudantium perspiciatis eum quae, quisquam rem rerum illo, consequuntur asperiores labore, quod inventore adipisci voluptas. Ad dignissimos cumque dicta similique velit, fugit at, quidem consequuntur est voluptatibus, eligendi assumenda error excepturi aperiam soluta amet delectus hic. Maxime, eos nisi? Sequi, iusto.</p>
        </div>
      </div>
    </>
  );
}
