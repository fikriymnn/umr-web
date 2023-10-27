import React from "react";
import TableHarga from "@/components/tableHarga";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

function TipePembayaranFoam() {
  return (
    <div className="bg-white w-10/12 ms-20 rounded-xl shadow-2xl">
      <div className="w-full py-7  font-semibold">
        <div className="flex pb-1 px-14 gap-5">
          <div>
            <img src="../../assets/vector/vector.svg" alt="" />
          </div>
          <h1 className="text-2xl text-black pb-7">Tipe Pembayaran</h1>
        </div>

        <div className=" flex justify-center items-center">
          <div className=" w-10/12 h-[50px] rounded-xl bg-gray-500 flex justify-center items-center ">
            <p className="text-[#E3B02B] text-center text-lg">
              Uang Muka Sebesar Rp 6.000.000
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mb-20">
        <div className="w-11/12">
          <TableHarga />
        </div>
      </div>
      <div className="h-[20px]"></div>
    </div>
  );
}

export default TipePembayaranFoam;
