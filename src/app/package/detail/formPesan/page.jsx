"use client";
import React from "react";

import NamaCustomer from "@/components/namaCustomer";

import StepByStep from "@/components/StepByStep";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import DatadiriFoam from "@/components/datadiriFoam";
import TipePembayaranFoam from "@/components/tipePembayaranFoam";
import MetodePembayaranSection from "@/components/Bayar/MetodePembayaranSection";
import { useSearchParams } from "next/navigation";

function FormPesan() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <>
      <div className="bg">
        <div className="flex flex-col pt-10 bg-left bg-contain bg-[url('/assets/images/image2.png')] z-10">
          <StepByStep />
          <div className="lg:w-7/12 w-full lg:px-20 sm:px-10 px-4 ">
            <section>{/* <NamaCustomer /> */}</section>
            <section>{/* <TipePembayaranFoam /> */}</section>
            <section>
              <DatadiriFoam idPaket={id} />
            </section>
            {/* <section>
              <MetodePembayaranSection />
            </section> */}
            <section>
              <div className=" w-full lg:px-6 px-4 mb-36  mt-5 lg:text-base sm:text-sm text-xs">
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
