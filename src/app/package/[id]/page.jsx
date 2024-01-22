"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Pagination } from 'flowbite-react';


import PackageCard from "@/components/packagecard";

import MainInfoPackage from "@/components/DetailPackage/MainInfoPackage";
import MitraTravelSection from "@/components/DetailPackage/MitraTravelSection";
import TestimonialSection from "@/components/DetailPackage/TestimonialSection";
import FasilitasUmrohSection from "@/components/DetailPackage/FasilitasUmrohSection";
import MaskapaiSection from "@/components/DetailPackage/MaskapaiSection";
import HotelTravelSection from "@/components/DetailPackage/HotelTravelSection";
import PesanPaketSection from "@/components/DetailPackage/PesanPaketSection";
import JadwalPerjalananSection from "@/components/DetailPackage/JadwalPerjalananSection";
import SyaratDanKetentuanSection from "@/components/DetailPackage/SyaratDanKetentuanSection";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function PackageDetail({ params }) {
    //   const searchParams = useSearchParams();
    //   const id = searchParams.get("id");
    const [DetailPaket, setDetailPaket] = useState(null);
    const [DetailMitra, setDetailMitra] = useState(null);
    const [Ulasan, setUlasan] = useState(null);
    const [Paket, setPaket] = useState(null);
    useEffect(() => {
        getDetailPaket(params.id);
    }, [params.id]);

    useEffect(() => {
        GetDataPaket();
    }, []);

    async function getDetailPaket(id) {
        try {
            const res = await axios.get(`http://localhost:5000/api/paket/${id}`);
            if (res.data.success == true) {
                setDetailPaket(res.data.data);
                getDetailMitra(res.data.data.id_mitra);
                getDataTestimoni(res.data.data.id_mitra);
                //console.log(res.data.data);
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    async function getDetailMitra(idMitra) {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/mitra/${idMitra}`);
            if (res.data.success == true) {
                setDetailMitra(res.data.data);
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    async function getDataTestimoni(idMitra) {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_URL}/api/ulasan/${idMitra}`
            );
            if (res.data.success == true) {
                setUlasan(res.data.data);
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    async function GetDataPaket() {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_URL}/api/paket?skip=0&limit=6`
            );
            if (res.data.success == true) {
                setPaket(res.data.data);
                console.log(res.data.data);
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    const numero = {
        total: 50,
        available: 5,
    };

    const availability = (numero.available / numero.total) * 100 + "%";




    return (
        <div className="bg">
            <div className="lg:flex lg:px-10  pt-10  bg-contain bg-[url('/assets/images/image2.png')] z-10">
                <div className="lg:w-8/12 sm:w-full  w-full">
                    {DetailPaket == null ? (
                        <div>
                            <section id="skeleton">
                                <div className=" bg-white md:w-11/12 w-11/12    rounded-xl mx-auto">
                                    <div className=" rounded-t-xl center "></div>
                                    <div className="bg-gray-100 w-full md:h-[315px] h-[200px]  rounded-xl"></div>
                                    <div className="grid grid-cols-2 gap-5 py-7 md:px-9 px-4">
                                        <div className="flex">
                                            <div className="md:w-1/12  w-3/12"></div>
                                            <div></div>
                                        </div>
                                        <div className="flex">
                                            <div className="md:w-1/12 w-3/12"></div>
                                            <div></div>
                                        </div>
                                        <div className="flex">
                                            <div className="md:w-1/12 w-3/12"></div>
                                            <div></div>
                                        </div>
                                        <div className="flex">
                                            <div className="md:w-1/12 w-3/12"></div>
                                            <div></div>
                                        </div>
                                        <div className="flex">
                                            <div className="md:w-1/12 w-3/12"></div>
                                            <div></div>
                                        </div>
                                        <div className="flex">
                                            <div className="md:w-1/12 w-3/12"></div>
                                            <div>
                                                <div className="ps-1 pt-2 flex items-center space-x-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ) : (
                        <MainInfoPackage
                            bintangHotel={DetailPaket.rating_hotel}
                            carousel={DetailPaket.content_carousel}
                            durasi={DetailPaket.durasi_perjalanan}
                            kamar={DetailPaket.pilihan_kamar}
                            kotaKeberangkatan={DetailPaket.kota_keberangkatan}
                            maskapai={DetailPaket.maskapai_penerbangan}
                            tanggalKeberangkatan={DetailPaket.waktu_keberangkatan}
                            title={DetailPaket.title}
                        />
                    )}

                    {DetailMitra == null ? (
                        <div>
                            <section id="skeleton">
                                <div className="bg-white md:w-11/12 w-11/12 mx-auto  rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">
                                    <div className=" md:w-[250px]  w-[150px] bg-gray-100 mx-auto rounded-b-xl"></div>
                                    <div className="flex md:py-7 py-3 md:px-9 px-4">
                                        <div className="md:w-3/12 sm:w-3/12 w-2/12">
                                            <div className="md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] w-[40px] h-[40px] bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="w-full ps-5">
                                            <div className="md:flex md:my-3 pb-1 gap-10">
                                                <div className="flex md:gap-7">
                                                    <div className="ps-1 flex items-center space-x-1 my-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ) : (
                        <MitraTravelSection

                            nama={DetailMitra.nama_mitra}
                            noizin={DetailMitra.no_izin_umroh}
                            rating={DetailMitra.rating}
                            profil={`${process.env.NEXT_PUBLIC_URL}/images/${DetailMitra.foto_profil}`}
                        />
                    )}
                    {DetailPaket == null ? (
                        <div>
                            <section id="skeleton">
                                <div className="bg-white md:w-11/12 w-11/12 mx-auto  rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">

                                    <div className="flex md:py-7 py-3 md:px-9 px-4">
                                        <div className="md:w-3/12 sm:w-3/12 w-2/12">
                                            <div className="md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] w-[40px] h-[40px] bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="w-full ps-5">
                                            <div className="md:flex md:my-3 pb-1 gap-10">
                                                <div className="flex md:gap-7">
                                                    <div className="ps-1 flex items-center space-x-1 my-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ) : (
                        <TestimonialSection testimoni={Ulasan} />

                    )}

                    <FasilitasUmrohSection
                        fasilitas={DetailPaket == null ? "" : DetailPaket.fasilitas_umroh}
                    />
                    <MaskapaiSection
                        maskapai={
                            DetailPaket == null ? "" : DetailPaket.maskapai_penerbangan
                        }
                    />
                    {DetailPaket == null ? (
                        <div></div>
                    ) : (
                        <HotelTravelSection hotel={DetailPaket.hotel} />
                    )}
                </div>
                <div className="lg:w-4/12  w-11/12 mx-auto z-10 lg:mr-20 ">
                    <div className="bg-white rounded-xl  shadow-lg lg:mt-0 sm:mt[30px] mt-[15px]">
                        {DetailPaket == null ? (
                            <div>
                                <section>
                                    <div className="">
                                        <div className="p-7">
                                            <div className="">
                                                <p className="md:text-xl sm:text-lg text-base font-semibold w-full bg-black"></p>
                                            </div>
                                            <div className="">
                                                <p className="md:text-3xl sm:text-2xl text-xl text-[#E3B02B] font-semibold pt-2"></p>
                                            </div>
                                            <div className="mt-3 mx-auto">
                                                <div className="w-full md:h-7 h-6 rounded-md border md:border-2 relative border-gray-100">
                                                    <div className="md:w-full sm:w-full w-full h-full absolute flex items-center justify-center text-center font-semibold md:text-sm sm:text-xs text-xs "></div>
                                                    <div
                                                        style={{ width: availability }}
                                                        className="h-full bg-gray-100 rounded-[4px]"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="py-3"></div>
                                            <div className="  ">
                                                <a href="/package/detail/formPesan">
                                                    <div className="my-auto  bg-gray-100 shadow-lg m-auto rounded-xl p-3 items-center justify-center">
                                                        <div className="flex justify-center ">
                                                            <div className="md:w-1/12 w-1/12 "></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        ) : (
                            <PesanPaketSection

                                id={DetailPaket._id}
                                description={DetailPaket.description}
                                kuota={DetailPaket.kuota}
                                price={DetailPaket.price}
                                sisaKuota={DetailPaket.sisa_kuota}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="lg:flex">
                <div className="lg:w-8/12 w-full">
                    <div className="bg-white lg:w-10/12 w-11/12 mx-auto lg:ms-20  rounded-xl  md:mt-[30px] mt-[15px] ">
                        {DetailPaket == null ? (
                            <div></div>
                        ) : (
                            <JadwalPerjalananSection jadwal={DetailPaket.jadwal} />
                        )}
                    </div>

                    <div className=" w-full">
                        <div className="bg-white lg:w-10/12 w-11/12 mx-auto lg:ms-20  rounded-xl  md:mt-[30px] mt-[15px]">
                            <SyaratDanKetentuanSection
                                syarat={DetailPaket == null ? "" : DetailPaket.syarat_ketentuan}
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-4/12 w-11/12 mx-auto z-10 lg:mr-20"></div>
            </div>

            <div className="text-center mt-12">
                <h1 className="lg:text-4xl sm:text-xl text-xl font-bold">
                    Paket Umroh Lainnya
                </h1>
            </div>

            <div className="grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-2 lg:py-7 py-3 lg:px-20 px-4">
                {Paket == null ? (
                    <div></div>
                ) : (

                    Paket.paket.map((data, i) => {
                        return (

                            <>
                                <PackageCard
                                    sisaKuota={data.sisa_kuota}
                                    key={i}
                                    id={data._id}
                                    //banner={""}
                                    banner={`${process.env.NEXT_PUBLIC_URL}/images/${data.content_carousel[0].img}`}
                                    durasi={data.durasi_perjalanan}
                                    ratingHotel={data.rating_hotel}
                                    kamar={data.pilihan_kamar}
                                    kuota={data.kuota}
                                    lokasi={data.kota_keberangkatan}
                                    maskapai={data.maskapai_penerbangan}
                                    price={data.price}
                                    title={data.title}
                                    waktuKeberangkatan={data.waktu_keberangkatan}
                                />
                            </>
                        );
                    }
                    )


                )}
            </div>
        </div>
    );
}

export default PackageDetail;
