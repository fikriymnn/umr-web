import React from "react";
import DropdownDetail from "@/components/DropdownDetail";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
function DatadiriFoam({ onClick }) {
  return (
    <div>
      <div className="bg-white w-10/12 ms-20 rounded-xl mt-10 shadow-2xl h-full">
        <div className="w-full pt-7 font-semibold">
          <div className="flex pb-1 px-14 gap-5">
            <div>
              <img src="../../assets/vector/vectorya.svg" alt="" />
            </div>
            <h1 className="text-2xl text-black pb-7">Jemaah Ke-1</h1>
          </div>

          <div className=" flex  px-14 gap-5">
            <div className="grid grid-cols-1">
              <p>Gender</p>
              <DropdownDetail />
              <br />
            </div>
            <div className="grid grid-cols-1">
              <div>
                <p>Nama Lengkap</p>
              </div>
              <TextInput
                id="nama"
                placeholder="Ketik Nama Lengkap.."
                required
                type="nama"
              />
              <div>
                <p className="text-[#E3B02B] text-xs">
                  &#40;Sesuai dengan KTP &#47; Paspor tanpa gelar&#41;
                </p>
              </div>
            </div>
          </div>
          <div className=" flex  px-14 gap-5 pt-5">
            <div>
              <div>
                <p>Nomor Whatsapp</p>
              </div>
              <TextInput
                id="whatsapp"
                placeholder="Ketik Nomor Whatsapp.."
                required
                type="whatsapp"
                className=" "
              />
            </div>
            <div>
              <div>
                <p>Email</p>
              </div>
              <TextInput
                id="Email"
                placeholder="Ketik Email.."
                required
                type="Email"
                className=" "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-20 pt-5">
          <button type="button">
            <img src="../../assets/vector/VectorPlus.svg" alt="" />
          </button>{" "}
        </div>
        <div className="pb-10 ">
          <a onClick={onClick}>
            <div className="flex justify-center h-[60px] bg-[#E3B02B] hover:bg-[#fad26e] m-auto rounded-xl p-3 items-center w-11/12 ">
              <p className="font-bold ">Lanjut Pembayaran</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DatadiriFoam;
