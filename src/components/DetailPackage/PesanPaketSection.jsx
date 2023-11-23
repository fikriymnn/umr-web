import React from "react";
import Image from "next/image";
function PesanPaketSection() {
  const numero = {
    total: 50,
    available: 5,
  };

  const availability = (numero.available / numero.total) * 100 + "%";
  return (
    <div>
      <div className="p-7">
        <div className="">
          <h1 className="md:text-xl sm:text-lg text-base font-semibold">
            Harga
          </h1>
        </div>
        <div className="">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-[#E3B02B] font-semibold pt-2">
            RP 39.500.000
          </h2>
        </div>
        <div className="mt-3 mx-auto">
          <div className="w-full md:h-7 h-6 rounded-md border md:border-2 relative border-black">
            <div className="md:w-full sm:w-full w-full h-full absolute flex items-center justify-center text-center font-semibold md:text-sm sm:text-xs text-xs ">
              <p>Tersisa {numero.available} Paket</p>
            </div>
            <div
              style={{ width: availability }}
              className="h-full bg-[#ffc73a] rounded-[4px]"
            ></div>
          </div>
        </div>
        <div className="py-3">
          <p>
            Lorem ipsum dolor sit Amet Lorem ipsum dolor sit AmetLorem ipsum
            dolor sit AmetLorem ipsum dolor sit AmetLorem ipsum dolor sit Amet
          </p>
        </div>
        <div className="  ">
          <a href="/package/detail/formPesan">
            <div className="my-auto  bg-[#E3B02B] hover:bg-[#fad26e] shadow-lg m-auto rounded-xl p-3 items-center justify-center">
              <div className="flex justify-center ">
                <div className="md:w-1/12 w-1/12 ">
                  <Image
                    src="/assets/vector/order.svg"
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <p className="font-semibold ">Pesan Paket Umroh</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PesanPaketSection;
