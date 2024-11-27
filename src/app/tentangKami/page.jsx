import React from "react";
import Image from "next/image";
import MultipleCarousel from "@/components/Homepage/multipleCarousel";
function TentangKami() {
  return (
    <div className="bg">
      <div className=" bg-image-container ">
        <div className=" md:mx-64 mx-5 mb-16 ">
          <div className="w-full mb-24">
            <p className="text-black pt-10 font-extrabold md:text-3xl sm:text-xl text-lg">
              Tentang <span className="text-primary">IBADAHKU</span>
            </p>
            <p className="text-black font-semibold md:text-xl sm:text-sm text-sm italic pt-3">
              Ibadah yang Amanah, Transparan, dan Tenang.

            </p>
            <p className="font-semibold md:text-base text-sm md:line-clamp-none line-clamp-6 pt-2">
              Berawal dari keprihatinan terhadap berbagai masalah dalam layanan
              haji dan umroh—mulai dari overclaim, pengelolaan keuangan yang buruk,
              hingga agen yang tidak bertanggung jawab—Ibadahku hadir sebagai solusi.
            </p>
            <p className="font-semibold md:text-base text-sm md:line-clamp-none line-clamp-6 pt-1">
              Kami percaya, perjalanan ibadah ke Tanah Suci adalah momen suci yang
              harus dijalani dengan amanah dan tenang. Dengan teknologi canggih,
              kami membuka akses informasi yang transparan dan memastikan setiap mitra mematuhi standar pelayanan terbaik.
            </p>
            <p className="font-semibold md:text-lg text-base md:line-clamp-none line-clamp-6 pt-3">
              Ibadahku ada untuk melindungi langkah suci Anda.
            </p>
            <p className="text-black font- md:text-lg text-base  italic">
              Bersama kami, mari wujudkan ibadah yang lebih bermakna.
            </p>

          </div>

          <div className=" grid grid-cols-1  w-full mt-10 gap-5">
            <div className="flex flex-col gap-2">
              <p className=" text-2xl font-bold text-center">Visi</p>
              <div className=" bg-[#ffffff] place-content-center shadow-md rounded-xl text-center flex  md:px-1 py-3  w-full ">
                <p className="md:text-base text-xs  text-justify font-medium mx-4">
                  Menjadi platform terpercaya yang mendukung umat Islam dalam menjalankan ibadah haji, umroh, dan kegiatan keislaman lainnya dengan aman, transparan, dan penuh keberkahan.
                </p>
              </div>
            </div>
            <p className=" text-2xl font-bold text-center">Misi</p>
            <div className=" flex shadow-md w-full px-1 bg-[#ffffff] mx-auto rounded-xl py-2">
              <div className="flex md:px-4 px-3">
                <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                  <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">1</div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                    Memberikan Transparansi Penuh
                  </p>
                  <p className="text-black md:text-base sm:text-base text-xs">
                    Menyediakan akses informasi yang jelas dan terbuka untuk jamaah, sehingga setiap proses ibadah dapat dilakukan dengan tenang dan tanpa kekhawatiran.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex shadow-md w-full px-1 bg-[#ffffff] mx-auto rounded-xl py-2">
              <div className="flex md:px-4 px-3">
                <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                  <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">2</div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                    Membangun Kepercayaan Umat
                  </p>
                  <p className="text-black md:text-base sm:text-base text-xs">
                    Bekerja sama dengan mitra yang amanah dan profesional untuk memberikan pelayanan terbaik bagi jamaah.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex shadow-md w-full px-1 bg-[#ffffff] mx-auto rounded-xl py-2">
              <div className="flex md:px-4 px-3">
                <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                  <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">3</div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                    Menggunakan Teknologi sebagai Solusi
                  </p>
                  <p className="text-black md:text-base sm:text-base text-xs">
                    Menghadirkan sarana teknologi modern untuk memantau, mengelola, dan memastikan kelancaran perjalanan ibadah.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex shadow-md w-full px-1 bg-[#ffffff] mx-auto rounded-xl py-2">
              <div className="flex md:px-4 px-3">
                <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                  <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">4</div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                    Menghapus Isu Negatif di Industri Haji dan Umroh
                  </p>
                  <p className="text-black md:text-base sm:text-base text-xs">
                    Berperan aktif dalam menengahi isu seperti overclaim, pengelolaan keuangan yang buruk, dan agen yang tidak bertanggung jawab, demi menjaga kepercayaan umat.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex shadow-md w-full px-1 bg-[#ffffff] mx-auto rounded-xl py-2">
              <div className="flex md:px-4 px-3">
                <div className=" bg-[#ffffff]  grid place-content-center rounded-xl  md:px-1 ">
                  <div className="bg-primary h-16 w-16 rounded-[8px] mr-3  items-center justify-center flex text-white font-extrabold text-2xl">5</div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-black  md:text-base sm:text-base text-xs font-bold pt-2">
                    Mendukung Pendidikan dan Panduan Ibadah
                  </p>
                  <p className="text-black md:text-base sm:text-base text-xs">
                    Menyediakan panduan komprehensif dan inspiratif untuk mempermudah jamaah dalam memahami dan menjalankan ibadah sesuai tuntunan Islam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:flex gap-10 mt-20 md:mx-20 ">
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9999 70.8333L70.3899 66.075V18.3017L39.9999 9.16666M39.9999 70.8333V9.16666M39.9999 70.8333L9.60986 66.075V18.3017L39.9999 9.16666M70.3882 28.2L39.9999 19.635L9.60986 28.2M70.3882 35.0517L39.9999 28.01L9.60986 35.0517"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="my-auto">
              <p className="font-semibold">Sejarah Umrohku</p>
              is Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem Ipsum and Iorem
              Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum is Lorem Ipsum
              is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ips Umum is Lorem
              Ipsum
            </div> */}
          {/* </div> */}
          {/* <div className="flex gap-10 mt-20 md:mx-20">
            <div className="my-auto">
              <p className="font-semibold">Sejarah Umrohku</p>
              is Lorem Ipsum is Lorem Ips lorem Ipsum is Lorem Ipsum and Iorem
              Ipsum is Lorem Ipsum and Iorem Ipsum is Lorem Ipsum is Lorem Ipsum
              is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ips Umum is Lorem
              Ipsum
            </div>
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9999 70.8333L70.3899 66.075V18.3017L39.9999 9.16666M39.9999 70.8333V9.16666M39.9999 70.8333L9.60986 66.075V18.3017L39.9999 9.16666M70.3882 28.2L39.9999 19.635L9.60986 28.2M70.3882 35.0517L39.9999 28.01L9.60986 35.0517"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
