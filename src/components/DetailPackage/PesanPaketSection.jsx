import React from "react";
import Image from "next/image";
function PesanPaketSection({ id, price, kuota, description }) {
  const numero = {
    total: 50,
    available: 5,
  };

  const availability = (kuota / kuota) * 100 + "%";
  return (
    <div className="">
      <div className="p-7">
        <div className="">
          <p className="md:text-xl sm:text-lg text-base font-semibold">Harga</p>
        </div>
        <div className="">
          <p className="md:text-3xl sm:text-2xl text-xl text-[#E3B02B] font-semibold pt-2">
            RP {price}
          </p>
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
          <p>{description}</p>
        </div>
        <div className="  ">
          <a href={`/package/detail/formPesan?id=${id}`}>
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
