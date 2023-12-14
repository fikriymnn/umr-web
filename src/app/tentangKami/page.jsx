import React from "react";
import Image from "next/image";
import MultipleCarousel from "@/components/Homepage/multipleCarousel";
function TentangKami() {
  return (
    <div className="bg">
      <div className=" bg-image-container ">
        <div className=" md:mx-64 mx-5 mb-16 ">
          <div className=" flex flex-col  w-full text-center mt-10 ">
            <p className=" text-sm font-semibold">Misi Kami</p>
            <p className="md:text-3xl text-lg font-bold mt-1 mb-6">
              Membuat Ibadah Lebih Modern dan Praktis
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-16">
              <p className="md:text-base text-xs  text-justify font-medium">
                lorem Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum and
                Iorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is
                Lorem Ipsum is Lorem Ips Umum is Lorem Ipsum is Lorem Ipsum is
                Lore mipsum is Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem
                Ipsum and Iorem Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem
                Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem
                Ips Umum is Lorem Ipsum is Lorem
              </p>
              <p className="md:text-base text-xs  text-justify font-medium">
                lorem Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum and
                Iorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is
                Lorem Ipsum is Lorem Ips Umum is Lorem Ipsum is Lorem Ipsum is
                Lore mipsum is Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem
                Ipsum and Iorem Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem
                Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem
                Ips Umum is Lorem Ipsum is Lorem
              </p>
            </div>
          </div>

          <div className="md:flex gap-10 mt-20 md:mx-64 ">
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9999 70.8333L70.3899 66.075V18.3017L39.9999 9.16666M39.9999 70.8333V9.16666M39.9999 70.8333L9.60986 66.075V18.3017L39.9999 9.16666M70.3882 28.2L39.9999 19.635L9.60986 28.2M70.3882 35.0517L39.9999 28.01L9.60986 35.0517"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="my-auto">
              <p className="font-semibold">Sejarah Umrohku</p>
              is Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem Ipsum and Iorem
              Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum is Lorem Ipsum
              is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ips Umum is Lorem
              Ipsum
            </div>
          </div>
          <div className="flex gap-10 mt-20 md:mx-64">
            <div className="my-auto">
              <p className="font-semibold">Sejarah Umrohku</p>
              is Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem Ipsum and Iorem
              Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum is Lorem Ipsum
              is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ips Umum is Lorem
              Ipsum
            </div>
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9999 70.8333L70.3899 66.075V18.3017L39.9999 9.16666M39.9999 70.8333V9.16666M39.9999 70.8333L9.60986 66.075V18.3017L39.9999 9.16666M70.3882 28.2L39.9999 19.635L9.60986 28.2M70.3882 35.0517L39.9999 28.01L9.60986 35.0517"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
