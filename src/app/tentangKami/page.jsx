import React from "react";
import Image from "next/image";
function TentangKami() {
  return (
    <div className=" md:mx-16 mx-5 mb-16">
      <div className=" flex flex-col  w-full text-center mt-10">
        <p className=" text-sm font-semibold">Misi Kami</p>
        <p className="md:text-3xl text-lg font-bold mt-1 mb-6">
          Membuat Ibadah Lebih Modern dan Praktis
        </p>
        <p className="md:text-base text-xs  text-justify font-medium">
          lorem Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum and Iorem
          Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum
          is Lorem Ips Umum is Lorem Ipsum is Lorem Ipsum is Lore mipsum is
          Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem Ipsum and Iorem Ipsum is
          Lorem Ipsum and Iorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore
          Lorem Ipsum is Lorem Ipsum is Lorem Ips Umum is Lorem Ipsum is Lorem
          Ipsum is Lore mipsum is Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem
          Ipsum and Iorem Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum is
          Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ips Umum is
          Lorem Ipsum is Lorem Ipsum is Lore mipsum is Lorem Ipsum is Lorem Ips
          lorem Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum and Iorem
          Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum
          is Lorem Ips Umum is Lorem Ipsum is Lorem Ipsum is Lore mipsum is
          Lorem Ipsum is Lorem Ips
        </p>
      </div>
      <div className="mt-5 md:flex w-full">
        <div className="bg-amber-100  my-5 py-10 pl-10 pr-16 ">
          <p className="text-xs font-semibold">Our People</p>
          <p className="text-lg font-semibold my-2">Lorem Ipsum</p>
          <p className="md:text-base text-sm text-justify font-medium">
            Lorem ipsum dolor sit am id elit, consectetur adipiscing elit sed
            diam non pro pos posuere cubilia Cur et non pro posuere cubilia Cur
            et non pro posuere cub dalam. Ut enim ad minim veniam et al ground
            al ea commodo consequat et ea commodo consequat vel scelerisque
            Lorem ipsum dolor sit am id elit, consectetur adipiscing elit sed
            diam non pro pos posuere cubilia Cur et non pro posuere cubilia Cur
            et non pro posuere cub dalam. Ut enim ad minim veniam et al ground
            al ea commodo consequat et ea commodo consequat vel scelerisque
            Lorem ipsum dolor sit am id elit, consectetur adipiscing elit sed
            diam non pro pos posuere cubilia Cur et non pro posuere cubilia Cur
            et non pro posuere cub dalam. Ut enim ad minim veniam et al ground
            al ea commodo consequat et ea commodo consequat vel scelerisque
            Lorem ipsum dolor sit am id elit, consectetur adipiscing elit sed
            diam non pro pos posuere cubilia Cur et non pro posuere cubilia Cur
            et non pro posuere cub dalam. Ut enim ad minim veniam et al ground
            al ea commodo consequat et ea commodo consequat vel scelerisque
          </p>
        </div>
        <Image
          src={"/assets/images/cs-1.jpeg"}
          alt=""
          width={400}
          height={100}
          className="mx-auto md:-translate-x-10 my-auto"
        />
      </div>
      <div className="grid grid-cols-3 mt-20">
        <Image
          src={"/assets/images/cs-2.jpg"}
          alt=""
          width={400}
          height={100}
          className="mx-auto md:-translate-x-10 my-auto"
        />
        <Image
          src={"/assets/images/cs-2.jpg"}
          alt=""
          width={400}
          height={100}
          className="mx-auto md:-translate-x-10 my-auto"
        />
        <Image
          src={"/assets/images/cs-2.jpg"}
          alt=""
          width={400}
          height={100}
          className="mx-auto md:-translate-x-10 my-auto"
        />
      </div>
    </div>
  );
}

export default TentangKami;
