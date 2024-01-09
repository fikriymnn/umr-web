"use client";
import StepByStep from "@/components/StepByStep";
import DatadiriFoam from "@/components/datadiriFoam";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function FormPesan() {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { push } = useRouter();

  useEffect(() => {
    getuser();
  }, []);

  async function getuser() {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      if (getuser == true) {
        setDataUser(res.data.data);

        push(`/package/detail/formPesan?id=${id}`)
      }
    } catch (error) {

      const result = confirm('Anda belum Login, Apakah Anda ingin melanjutkan?');
      // console.log(error.response);
      if (result) {
        push(`/login`)
      } else {
        push(`/package/detail?id=${id}`)

      }
    }
  }
  return (
    <>
      <div className="bg">
        <div className="flex flex-col pt-10 bg-left bg-contain bg-[url('/assets/images/image2.png')] z-10">
          <StepByStep />
          <div className="lg:w-7/12 w-full lg:px-20 sm:px-10 px-4 ">

            <section>
              <DatadiriFoam idPaket={id} />


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
