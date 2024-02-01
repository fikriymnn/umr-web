"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import StepByStep2 from "@/components/Bayar/StepByStep2";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { format } from "date-fns";

function KonfirmasiBayar() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [order, setOrder] = useState(null);
  const [paket, setPaket] = useState(null);
  const [buktiPembayaran, setBuktiPembayaran] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    getDetailOrder(id);
  }, [id]);

  async function getDetailOrder(idd) {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/order/${idd}`, {
        withCredentials: true,
      });
      if (res.data.success == true) {
        // console.log(res.data.data);
        setOrder(res.data.data.order);
        setPaket(res.data.data.paket);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  async function changeImage(event) {
    event.preventDefault();

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("content", file);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const id = response.data.data;
      setBuktiPembayaran(id);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async function submitBukti(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}/order/${id}`,
        {
          bukti_pembayaran: buktiPembayaran,
          status: "diproses",
        },
        {
          withCredentials: true,
        }
      );
      push("/akun/PesananSaya/Notice");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  const maxRating = 5;
  const rating = paket == null ? 0 : paket.rating_hotel;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      const isColored = i < rating;
      stars.push(
        <div className="w-5">
          <img
            key={i}
            src={
              isColored
                ? "/assets/vector/Star.svg"
                : "/assets/vector/StarGray.svg"
            }
            alt={`Star ${i + 1} `}
          />
        </div>
      );
    }
    return stars;
  };
  const date = paket == null ? new Date() : new Date(paket.waktu_keberangkatan);
  // Format tanggal
  const WaktuKeberangkatan = format(date, "d MMM y");

  const nominal = order == null ? "" : order.jumlah_bayar;
  const formattedNominal = nominal.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
  return (
    <>
      <div className="bg w-full h-full md:px-14 px-5 py-10">
        <div className="mb-5">
          <StepByStep2 />
        </div>
        <div className="bg-white rounded-md md:w-9/12 h-full md:px-7 px-5 py-6 shadow-xl">
          <div className="">
            <div className="flex  gap-5 ">
              <div className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9997 2.66667C10.3672 2.66637 8.76326 3.09424 7.34786 3.90757C5.93245 4.7209 4.75512 5.89124 3.93337 7.30178C3.11163 8.71232 2.67422 10.3137 2.6648 11.9461C2.65538 13.5786 3.07428 15.1849 3.87969 16.6048C4.42407 15.8973 5.12386 15.3245 5.92495 14.9306C6.72605 14.5368 7.607 14.3324 8.49969 14.3333H15.4997C16.3924 14.3324 17.2733 14.5368 18.0744 14.9306C18.8755 15.3245 19.5753 15.8973 20.1197 16.6048C20.9251 15.1849 21.344 13.5786 21.3346 11.9461C21.3252 10.3137 20.8877 8.71232 20.066 7.30178C19.2443 5.89124 18.0669 4.7209 16.6515 3.90757C15.2361 3.09424 13.6321 2.66637 11.9997 2.66667ZM21.2665 19.0887C22.8264 17.0551 23.6701 14.5629 23.6664 12C23.6664 5.5565 18.4432 0.333336 11.9997 0.333336C5.55619 0.333336 0.333021 5.5565 0.333021 12C0.329169 14.5629 1.17291 17.0552 2.73285 19.0887L2.72702 19.1097L3.14119 19.5915C4.23539 20.8708 5.59397 21.8975 7.12329 22.6011C8.65261 23.3046 10.3163 23.6682 11.9997 23.6667C14.3649 23.671 16.675 22.9526 18.6205 21.6075C19.4499 21.0344 20.202 20.3569 20.8582 19.5915L21.2724 19.1097L21.2665 19.0887ZM11.9997 5C11.0714 5 10.1812 5.36875 9.52481 6.02513C8.86844 6.68151 8.49969 7.57174 8.49969 8.5C8.49969 9.42826 8.86844 10.3185 9.52481 10.9749C10.1812 11.6313 11.0714 12 11.9997 12C12.9279 12 13.8182 11.6313 14.4746 10.9749C15.1309 10.3185 15.4997 9.42826 15.4997 8.5C15.4997 7.57174 15.1309 6.68151 14.4746 6.02513C13.8182 5.36875 12.9279 5 11.9997 5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <p className="md:text-2xl sm:text-xl  text-lg font-bold ">
                  Konfirmasi pesanan
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-[50px] py-4">
            <p className="text-md font-semibold">Pesanan</p>
            <div className="border-2 border-slate-200 p-2">
              <p className="md:text-xl sm:text-lg text-base font-bold">
                {paket == null ? "" : paket.title}
              </p>
              <div className="flex gap-4 items-center my-2">
                <Image
                  src="/assets/vector/bed.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
                <p>{paket == null ? "" : paket.pilihan_kamar}</p>
              </div>
              <div className="flex gap-4 items-center my-2">
                <Image
                  src="/assets/vector/calendar.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
                <p>{WaktuKeberangkatan}</p>
              </div>
              <div className="flex gap-4 items-center my-2">
                <Image
                  src="/assets/vector/plane.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
                <p>{paket == null ? "" : paket.maskapai_penerbangan}</p>
              </div>
              <div className="flex gap-4 items-center my-2">
                <Image
                  src="/assets/vector/datetime.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
                <p>{paket == null ? "" : paket.durasi_perjalanan}</p>
              </div>
              <div className="flex gap-4 items-center my-2">
                <Image
                  src="/assets/vector/buildings.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
                <p>{paket == null ? "" : paket.kota_keberangkatan}</p>
              </div>
              <div className="flex gap-4 items-center my-2">
                <Image
                  src="/assets/vector/hotel.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
                {renderStars()}
              </div>
            </div>
            <p className="text-md font-semibold mt-4">Metode Pembayaran</p>
            <div className="border-2 border-slate-200 p-2 flex items-center gap-5">
              <Image
                src="/assets/images/bca.png"
                width={30}
                height={30}
                alt="icon"
              />
              <div className="font-semibold">
                Transfer {order == null ? "" : order.bank_tujuan}
              </div>
            </div>
            <div className="border-2 border-slate-200  flex items-center justify-between gap-5 mt-2 text-slate-400 font-medium">
              <div className="px-2">
                <p></p>
              </div>
              <div className="md:text-base sm:text-sm text-xs font-medium bgprim px-5 py-2 text-white">
                <p>Promo terpakai</p>
              </div>
            </div>
            <div className=" flex justify-between mt-5 mb-2 ">
              <p className="font-semibold md:text-xl sm:text-lg text-base">
                Total Jemaah
              </p>
              <p className="font-semibold md:text-xl sm:text-lg text-base ">
                {order == null ? "" : order.jamaah.length} Orang
              </p>
            </div>
            <div className=" flex justify-between mt-1 mb-7 ">
              <p className="font-bold md:text-xl sm:text-lg text-base">
                Total Harga
              </p>
              <p className="font-bold md:text-xl sm:text-lg text-base text-amber-400">
                {order == null ? "" : formattedNominal}
              </p>
            </div>
            <p className="md:text-base sm:text-sm text-xs font-semibold mt-4">
              Transaksi Pembayaran
            </p>
            <p className="md:text-4xl sm:text-3xl text-2xl">
              {order == null ? "" : order.no_rekening_bank}
            </p>
            <p>
              Silahkan lakukan transaksi pembayaran kepada nomor rekening di
              atas.
            </p>

            {/* THIS IS FORM */}
            <form onSubmit={submitBukti}>
              <p className="md:text-base sm:text-sm text-xs font-semibold mt-4">
                Unggah Bukti Pembayaran
              </p>
              <div className="border-2 border-slate-200 rounded-[8px] md:p-2 p-[2px]">
                <input
                  type="file"
                  onChange={(e) => changeImage(e)}
                  required
                  className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                />
              </div>
              <div className="md:text-base sm:text-sm text-xs my-2">
                <p>
                  Unggah foto bukti transfer anda agar pesanan bisa
                  dikonfirmasi. anda bisa mengirim bukti transaksi dalam kurun
                  waktu 24 jam kedepan.
                </p>
                <p className="text-amber-500">
                  *untuk mengakses halaman ini kembali setelah keluar, buka
                  laman
                  <span className="font-semibold ms-1">
                    akun &gt; pesanan saya &gt; belum bayar
                  </span>
                  , lalu klik tombol bayar
                </p>
              </div>
              <div>
                <div className="">
                  <button
                    type="submit"
                    className="flex items-center justify-center text-center w-full hover:bg-amber-200  rounded-md bg-amber-400 font-semibold h-10"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default KonfirmasiBayar;
