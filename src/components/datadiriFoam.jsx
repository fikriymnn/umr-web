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
        <div className="bg-white rounded-xl md:mt-[50px] sm:mt-[30px] mt-[15px] shadow-2xl h-full">
          {jamaah.map((val, i) => {
            return (
              <div key={i} className="w-full font-semibold">
                <div className="flex pb-1 md:px-7 px-5 py-6 gap-5">
                  <div>
                    <img src="../../assets/vector/vectorya.svg" alt="" />
                  </div>
                  <h1 className="md:text-2xl sm:text-xl text-lg text-black pb-7">
                    Jemaah Ke-
                    {i + 1}
                  </h1>
                  {jamaah.length !== 1 && (
                    <div className="flex h-7 w-10 md:pt-1 text-center items-center text-white">
                      <button type="button" onClick={(e) => handleDelete(i)}>
                        <Image
                          src={"/assets/images/delete.png"}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </button>
                    </div>
                  )}
                </div>

                <div className=" md:flex  md:px-14 mx-4 gap-5">
                  <div className="grid grid-cols-1">
                    <p className="md:text-base text-sm">Gender</p>
                    <DropdownDetail />
                    <br />
                  </div>
                  <div className="grid grid-cols-1 w-full">
                    <div>
                      <p className="md:text-base text-sm">Nama Lengkap</p>
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
                      <p className="md:text-base text-sm">Nomor Whatsapp</p>
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
                      <p className="md:text-base text-sm">Email</p>
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
                <div className="  md:px-14 mx-4 gap-5 pt-5">
                  <di className="md:w-[50%] pt-5">
                    <div>
                      <p className="md:text-base text-sm">Masukkan nomor KTP</p>
                    </div>

                    <div className="  rounded-md ">
                      <TextInput
                        type="text"
                        className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                      />
                    </div>
                  </di>
                  <div className=" pt-5">
                    <div>
                      <p className="md:text-base text-sm">Lampiran Foto KTP</p>
                    </div>

                    <div className="border-[1px] border-gray-300 bg-gray-50 rounded-md p-1">
                      <input
                        type="file"
                        className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500  file:text-white hover:file:bg-blue-600 "
                      />
                    </div>
                  </div>
                  <div className=" pt-5">
                    <div>
                      <p className="md:text-base text-sm">
                        Lampiran Foto Passport
                      </p>
                    </div>

                    <div className="border-[1px] border-gray-300 bg-gray-50 rounded-md p-1">
                      <input
                        type="file"
                        className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                      />
                    </div>
                  </div>
                </div>
                <div className="   md:px-14 mx-4 gap-5 pb-5">
                  <div className=" pt-5">
                    <div>
                      <p className="md:text-base text-sm">Lampiran Foto KK</p>
                    </div>

                    <div className="border-[1px] border-gray-300 bg-gray-50 rounded-md p-1">
                      <input
                        type="file"
                        className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-center items-center md:pb-10 pb-5 pt-5">
            <button onClick={handleClick} type="button">
              <img src="../../assets/vector/VectorPlus.svg" alt="" />
            </button>{" "}
          </div>
          <div className="pb-10 ">
            <a href="/package/detail/bayar">
              <div className="flex justify-center  bg-[#E3B02B] hover:bg-[#fad26e] m-auto md:rounded-xl rounded-lg md:p-3 p-2 items-center md:w-11/12 w-10/12 ">
                <p className="font-bold md:text-base text-sm">
                  Lanjut Pembayaran
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatadiriFoam;
