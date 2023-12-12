"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";
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

function PackageDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [DetailPaket, setDetailPaket] = useState(null);
  const [DetailMitra, setDetailMitra] = useState(null);
  const [Paket, setPaket] = useState(null);
  useEffect(() => {
    getDetailPaket(id);
  }, [id]);

  useEffect(() => {
    GetDataPaket();
  }, []);

  async function getDetailPaket(idd) {
    try {
      const res = await axios.get(`http://localhost:5000/api/paket/${idd}`);
      if (res.data.success == true) {
        setDetailPaket(res.data.data);
        getDetailMitra(res.data.data.id_mitra);
        //console.log(res.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  async function getDetailMitra(idMitra) {
    try {
      const res = await axios.get(`http://localhost:5000/api/mitra/${idMitra}`);
      if (res.data.success == true) {
        setDetailMitra(res.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  async function GetDataPaket() {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/paket?skip=10&limit=6"
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
      <div className="lg:flex  pt-10  bg-contain bg-[url('/assets/images/image2.png')] z-10">
        <div className="lg:w-8/12 sm:w-full  w-full">
          {DetailPaket == null ? (
            <div></div>
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
            <div></div>
          ) : (
            <MitraTravelSection
              nama={DetailMitra.nama_mitra}
              noizin={DetailMitra.no_izin_umroh}
            />
          )}

          <TestimonialSection />

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
              <div></div>
            ) : (
              <PesanPaketSection
                id={DetailPaket._id}
                description={DetailPaket.description}
                kuota={DetailPaket.kuota}
                price={DetailPaket.price}
              />
            )}
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-8/12 w-full">
          <div className="bg-white lg:w-10/12 w-11/12 mx-auto lg:ms-20  rounded-xl lg:mt-[50px] sm:mt[30px] mt-[15px] ">
            {DetailPaket == null ? (
              <div></div>
            ) : (
              <JadwalPerjalananSection jadwal={DetailPaket.jadwal} />
            )}
          </div>

          <div className=" w-full">
            <div className="bg-white lg:w-10/12 w-11/12 mx-auto lg:ms-20  rounded-xl lg:mt-[50px] sm:mt[30px] mt-[15px]">
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

      <div className="grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-1 lg:py-7 py-3 lg:px-9 px-4">
        {Paket == null ? (
          <div></div>
        ) : (
          Paket.map((data, i) => {
            return (
              <PackageCard
                key={i}
                id={data._id}
                //banner={""}
                banner={`http://localhost:5000/images/${data.content_carousel[0].img}`}
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
            );
          })
        )}
      </div>
    </div>
  );
}

export default PackageDetail;
