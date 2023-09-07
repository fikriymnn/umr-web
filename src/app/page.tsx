import Image from "next/image";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Carousel />
      </div>
      <div className="flex w-screen h-[1350px] bg-gradient-to-b from-zinc-300 via-stone-300 to-orange-200">
        <Image
          src="/assets/images/image2.png"
          className=" absolute  w-full  z-0"
          alt="..."
          width={480}
          height={1350}
        />
        <p className=" text-black text-xl font-semibold p-15">
          List Paket Umroh Yang Tersedia
        </p>
      </div>
    </>
  );
}
