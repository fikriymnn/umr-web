"use client";
import React from "react";

import Image from "next/image";

import StepByStep2 from "@/components/Bayar/StepByStep2";
import MetodePembayaranSection from "@/components/Bayar/MetodePembayaranSection";
import PesananKamuSection from "@/components/Bayar/PesananKamuSection";

function BayarPage() {
  return (
    <>
      <div className="bg ">
        <div className="flex flex-col pt-5 bg-left bg-contain bg-image-container-bayar z-10">
          <div className="flex mx-auto gap-4 justify-between mb-5">
            <StepByStep2 />
          </div>
          <PesananKamuSection />
          <MetodePembayaranSection />
        </div>
      </div>
    </>
  );
}

export default BayarPage;
