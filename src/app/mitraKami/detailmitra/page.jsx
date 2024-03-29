"use client";
import React, { useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import StarsRating from "@/components/starsRating";
import FilterNotMobilePackage from "@/components/FilterNotMobilePackage";
import FilterPackages from "@/components/FilterPackages";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Pagination } from 'flowbite-react';
import { useRouter } from "next/navigation";

function DetailMitra() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [DetailMitra, setDetailMitra] = useState(null);


  const pageParams = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(pageParams);
  const [dataPaket, setDataPaket] = useState(null);
  const router = useRouter()
  const limit = 8;


  useEffect(() => {
    getDetailMitra(id);
  }, [id]);

  async function getDetailMitra(idMitra) {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/mitra/${idMitra}`);
      if (res.data.success == true) {
        setDetailMitra(res.data.data.mitra);
        console.log(res.data.data)
      }
    } catch (error) {
      console.log(error.response);

    }
  }




  useEffect(() => {


    fetchData(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPageChange = async (pagee) => {
    router.push(`/detailmitra?id=${id}&page=${pagee}`);
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
            skip: 0,
            limit: limit,
            id_mitra: id,
            status: "aktif"


          }
        }
      );
      setCurrentPage(response.data.data.page)
      setDataPaket(response.data.data.paket)
      // console.log(response.data.data.paket)
    } catch (error) {
      // Handle error
    }
  };


  return (

    <>
      {DetailMitra == null ? (
        <>
          <div className="w-10/12 bg-slate-200 mx-auto h-56 my-10 rounded-lg">

          </div>
          <div className="flex gap-5 w-10/12 mx-auto">
            <div className="w-40 h-96 bg-slate-200">

            </div>
            <div className="w-11/12 bg-slate-200 h-32">

            </div>
          </div>
        </>
      ) :
        (<>

          <div className="">
            <FilterPackages />
            <div className="pt-10 bg-cover bg-[url('/assets/images/image2.png')] z-10">
              <div className="bg-white rounded-xl md:mx-20 mx-5 mb-10 md:flex justify-between">
                <div className="  md:p-10 px-5 pt-10">
                  <div className="flex py-1 ">
                    <div className=" ">
                      <div className="md:w-[100px] md:h-[100px] w-[40px] h-[40px] bg-gray-500 rounded-full bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/images/${DetailMitra.foto_profil})` }}></div>
                    </div>
                    <div className="w-10/12 ps-5">
                      <h1 className=" text-black md:text-3xl text-xl pb-3 font-semibold">
                        {DetailMitra.nama_mitra}
                      </h1>
                      <div className="md:flex flex-col grid grid-cols-2">

                        <div className="md:flex pb-3 gap-9">
                          <div className="flex gap-1">
                            <p className="text-black md:text-xl text-sm font-bold">
                              60
                            </p>
                            <p className="text-black md:text-xl text-sm">Penilaian</p>
                          </div>
                          <div className="flex gap-2">
                            {/* <p className="text-black md:text-xl text-sm my-auto">
                            Rating
                          </p> */}
                            <div className="">
                              <div className="flex gap-1">
                                <p className="text-black md:text-xl text-sm my-auto">
                                  Rating
                                </p>
                                <div className=" flex my-auto mr-2 w-4">
                                  <img


                                    src={
                                      "/assets/vector/Star.svg"

                                    }
                                    alt={`Star  `}
                                  />
                                  <div className="text-xs md:text-lg sm:text-base">

                                    {DetailMitra == null ? "" : DetailMitra.rating.toFixed(1)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>

                          <p className="text-black md:text-xl text-sm pb-1">
                            Nomor Izin Umroh:
                          </p>
                          <p className="text-black md:text-xl text-sm pb-1">
                            {DetailMitra.no_izin_umroh}
                          </p>
                        </div>
                        <div className="flex items-center md:gap-0 sm:gap-2 gap-3 -translate-x-14 md:translate-x-0">
                          <div className=" md:w-1/12">
                            <Image
                              src="/assets/vector/location.svg"
                              alt="icon"
                              width={15}
                              height={15}
                            />
                          </div>
                          <p className="text-black md:text-xl text-sm font-semibold">
                            {DetailMitra.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" md:w-3/6  flex">
                  <div className="grid grid-cols-1 md:visible invisible">
                    <div></div>
                    <div className="w-[3px] py-20 bg-gray-400"></div>

                    <div></div>
                  </div>
                  <div className="w-full md:py-14 py-5 lg:px-20  md:px-5 sm:px-5 px-5 grid grid-rows-3 gap-5 items-center">
                    <div className="flex gap-3">
                      <div className="w-5 my-auto ">
                        <Image
                          src="/assets/vector/buildings.svg"
                          alt="icon"
                          width={25}
                          height={25}
                        />
                      </div>
                      <p className="md:text-xl text-sm ">
                        {DetailMitra.nama_pt}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-5 my-auto">
                        <Image
                          src="/assets/vector/email.svg"
                          alt="icon"
                          width={25}
                          height={25}
                        />
                      </div>
                      <p className="md:text-xl text-sm">{DetailMitra.email}</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-5 my-auto    ">
                        <Image
                          src="/assets/vector/web.svg"
                          alt="icon"
                          width={25}
                          height={25}
                        />
                      </div>
                      <p className="md:text-xl text-sm">{DetailMitra.website}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg pb-10">
                <div className="h-[40px]"></div>
                <div className="flex  pt-5 bg-cover  bg-[url('/assets/images/image2.png')] z-10 relative">
                  {/* <FilterIsMobilePackage /> */}
                  <FilterNotMobilePackage />
                  <div className="lg:w-8/12 w-full mx-auto lg:ml-10 lg:mr-20 lg:p-0 px-5">
                    <div className="bg-white shadow-xl rounded-xl lg:w-10/12 w-full">


                    </div>
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

                          {/* <Pagination currentPage={pageParams} totalPages={currentPage} onPageChange={onPageChange} showIcons /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>)}
    </>
  );
}

export default DetailMitra;
