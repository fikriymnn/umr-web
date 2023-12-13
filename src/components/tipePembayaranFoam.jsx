import React from "react";


import TableHarga2 from "@/components/tabelHarga2";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

function TipePembayaranFoam() {
  return (
    <div className="bg-white rounded-xl shadow-2xl">
      <div className="w-full pb-6 font-semibold">
        <div className="flex pb-1 md:px-7 px-5 py-6  gap-5">
          <div>
            <img src="../../assets/vector/vector.svg" alt="" />
          </div>
          <h1 className="md:text-2xl sm:text-xl text-xl text-black pb-6">
            Tipe Pembayaran
          </h1>
        </div>

        <div className=" flex justify-center items-center">
          <div className=" w-11/12 h-[50px] rounded-xl bg-black flex justify-center items-center ">
            <p className="text-[#E3B02B] text-center md:text-lg sm:text-base text-sm">
              Uang Muka Sebesar Rp 6.000.000
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center md:mb-20">
        <div className="w-11/12">
          <TableHarga2 />
        </div>
      </div>
      <div className="h-[20px]"></div>
    </div>
  );
}

export default TipePembayaranFoam;
