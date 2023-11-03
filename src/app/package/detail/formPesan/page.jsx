"use client";
import React from "react";

import NamaCustomer from "@/components/namaCustomer";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Typography from "@mui/material/Typography";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import DatadiriFoam from "@/components/datadiriFoam";
import TipePembayaranFoam from "@/components/tipePembayaranFoam";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

function FormPesan() {
  return (
    <>
      <div className="bg">
        <div className="flex flex-col pt-10 bg-left bg-contain bg-[url('/assets/images/image2.png')] z-10">
          <div className="flex mx-auto gap-4 justify-between md:w-80 w-64">
            <div className="flex gap-1">
              <p className="rounded-full md:text-base text-xs border-2 border-amber-400 text-amber-400 md:w-10 w-7 text-center ">
                1
              </p>
              <p className="rounded-full text-amber-400 w-full md:text-base text-xs ">
                Data Pesanan
              </p>
            </div>
            <div className="w-12 h-1 bg-zinc-300 my-auto mx-auto rounded-full "></div>
            <div className="flex gap-1">
              <p className="rounded-full border-2 border-zinc-300 text-zinc-300 md:w-10 w-7 md:text-base text-xs  text-center ">
                2
              </p>
              <p className="rounded-full text-zinc-300 w-full md:text-base text-xs ">
                Bayar
              </p>
            </div>
          </div>
          <div className="md:w-6/12  ">
            <section>
              <NamaCustomer />
            </section>
            <section>
              <TipePembayaranFoam />
            </section>
            <section>
              <DatadiriFoam />
            </section>
            <section>
              <div className="md:px-14 w-10/12 md:ms-10 mb-20 md:h-96 h-52 mt-5 ml-10 md:text-base sm:text-sm text-xs">
                {" "}
                <p className="font-bold">
                  Jika anda setuju dengan{" "}
                  <span className="text-[#E3B02B]">
                    Syarat & Kebijakan Privasi,
                  </span>{" "}
                  Silahkan klik tombol &rdquo;Lanjut Pembayaran&rdquo; . untuk
                  memilih cara pembayaran
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPesan;
