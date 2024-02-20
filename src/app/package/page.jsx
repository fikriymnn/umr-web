'use client'

import React, { useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown";
import PackageCard from "@/components/packagecard";
import FilterNotMobilePackage from "@/components/FilterNotMobilePackage";
import FilterPackages from "@/components/FilterPackages";
import axios from "axios";

import { useSearchParams } from "next/navigation";
import { Pagination } from 'flowbite-react';
import { useRouter } from "next/navigation";

// async function GetDataPaket() {
//   let data;
//   try {
//     const res = await axios.get(
//       "http://localhost:5000/api/paket?skip=0&limit=15"
//     );
//     data = res.data.data;
//   } catch (error) {
//     data = null;
//   }
//   return data;
// }

function Package() {
  //const DataPaket = await GetDataPaket();
  const router = useRouter()
  const searchParams = useSearchParams();
  const pageParams = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(pageParams);
  const [dataPaket, setDataPaket] = useState(null);

  const limit = 8;



  useEffect(() => {


    fetchData(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPageChange = async (pagee) => {
    router.push(`/package?page=${pagee}`);
    setDataPaket(null)
    fetchData(pagee)

  };

  const fetchData = async (pagee) => {
    try {
      const skip = (pagee - 1) * limit;
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/paket`,
        {
          params: {
            durasi_perjalanan: "",
            category_paket: "",
            kota_keberangkatan: "",
            priceFrom: "",
            priceTo: "",
            skip: skip,
            limit: limit,
            status: "aktif"

          }
        }
      );
      setCurrentPage(response.data.data.page)
      setDataPaket(response.data.data.paket)
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="bg pb-10">
      <div className=" lg:px-20 bg-cover  bg-[url('/assets/images/image2.png')]">
        <FilterPackages />
        <div className="h-[40px]"></div>
        <div className="flex  pt-5   z-10 relative">
          <FilterNotMobilePackage />
          <div className="lg:w-8/12 w-full mx-auto lg:ml-10 lg:mr-20 lg:p-0 px-5">
            <div className="mt-2 ">
              <div className="flex flex-col justify-between min-h-screen">
                <div>
                  <h1 className="text-xl font-semibold  my-5">
                    List Paket Umroh Yang Tersedia
                  </h1>
                  <div className="mahfud  grid-cols-2 md:gap-5 gap-2 ">
                    {dataPaket == null ? (
                      <div>loading</div>
                    ) : (
                      dataPaket.map((data, index) => {
                        return (

                          <PackageCard
                            key={index}
                            id={data._id}
                            banner={data.content_carousel[0].img}
                            durasi={data.durasi_perjalanan}
                            ratingHotel={data.rating_hotel}
                            kamar={data.pilihan_kamar}
                            kuota={data.kuota}
                            sisaKuota={data.sisa_kuota}
                            lokasi={data.kota_keberangkatan}
                            maskapai={data.maskapai_penerbangan}
                            price={data.price}
                            title={data.title}
                            waktuKeberangkatan={data.waktu_keberangkatan}
                          />

                        );
                      })
                    )}


                  </div>
                </div>
                <div className="flex justify-end items-end my-10 w-full">

                  <Pagination currentPage={pageParams} totalPages={currentPage} onPageChange={onPageChange} showIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
