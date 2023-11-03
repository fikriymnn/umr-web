import React from "react";
import DropdownDetail from "@/components/DropdownDetail";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

import { useState } from "react";
function DatadiriFoam({}) {
  const [jamaah, setJamaah] = useState([
    { gender: "", name: "", noWhatsapp: "", email: "" },
  ]);

  const handleClick = () => {
    setJamaah([...jamaah, { gender: "", name: "", noWhatsapp: "", email: "" }]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...jamaah];
    onchangeVal[i][name] = value;
    setJamaah(onchangeVal);
  };
  const handleDelete = (i) => {
    const deleteVal = [...jamaah];
    deleteVal.splice(i, 1);
    setJamaah(deleteVal);
  };
  return (
    <>
      <div>
        <div className="bg-white md:w-10/12 w-11/12 md:ms-20 sm:ms-10  mx-auto rounded-xl mt-10 shadow-2xl h-full">
          {jamaah.map((val, i) => {
            return (
              <div key={i} className="w-full pt-7 font-semibold">
                <div className="flex pb-1 md:px-14 mx-4 gap-5">
                  <div>
                    <img src="../../assets/vector/vectorya.svg" alt="" />
                  </div>
                  <h1 className="md:text-2xl sm:text-xl text-lg text-black pb-7">
                    Jemaah Ke-
                    {i + 1}
                  </h1>
                </div>

                <div className=" md:flex  md:px-14 mx-4 gap-5">
                  <div className="grid grid-cols-1">
                    <p>Gender</p>
                    <DropdownDetail />
                    <br />
                  </div>
                  <div className="grid grid-cols-1 w-full">
                    <div>
                      <p>Nama Lengkap</p>
                    </div>
                    <TextInput
                      id="nama"
                      placeholder="Ketik Nama Lengkap.."
                      required
                      type="nama"
                      className=""
                    />
                    <div>
                      <p className="text-[#E3B02B] text-xs">
                        &#40;Sesuai dengan KTP &#47; Paspor tanpa gelar&#41;
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" md:flex  md:px-14 mx-4 gap-5 pt-5">
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
                  <div className="mt-5 md:mt-0">
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
            );
          })}

          <div className="flex justify-center items-center md:pb-20 pb-10 pt-5">
            <button onClick={handleClick} type="button">
              <img src="../../assets/vector/VectorPlus.svg" alt="" />
            </button>{" "}
          </div>
          <div className="pb-10 ">
            <a href="/package/detail/bayar">
              <div className="flex justify-center h-[60px] bg-[#E3B02B] hover:bg-[#fad26e] m-auto rounded-xl p-3 items-center w-11/12 ">
                <p className="font-bold ">Lanjut Pembayaran</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatadiriFoam;
