import Image from "next/image";
import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";

import DefaultCarousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <div className=" bg ">
        <div className="bg-white w-11/12 h-96 m-auto">
          <DefaultCarousel />
        </div>
        {/* <div className="h-64  "></div> */}
        <div className="h-[1350px] bg-cover bg-[url('/assets/images/image2.png')] z-10 h-">
          <p className=" text-black text-xl font-semibold p-15">
            List Paket Umroh Yang Tersedia
          </p>
        </div>
      </div>
    </>
  );
}
