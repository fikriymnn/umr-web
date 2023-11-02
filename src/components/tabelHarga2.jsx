import React from "react";

function TabelHarga2() {
  return (
    <>

      <div className=" border-2  border-black rounded-lg">
        <div className="flex gap-10 justify-center items-center  border-b-2 border-black rounded-t-md">
          <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
            Tahap
          </p>
          <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
            Tanggal Pembayaran
          </p>
          <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
            Jumlah
          </p>
        </div>
        <div className="flex  justify-center items-center">
          <div className="flex flex-col justify-center items-center   w-[350px]">
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              Uang Muka
            </p>
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              Bayar ke-2
            </p>
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              Bayar ke-3
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border-black border-x-2 w-full">
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              17 September 2023
            </p>
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              17 September 2023
            </p>
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              17 September 2023
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  w-[350px] ">
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              Rp 6.000.000
            </p>
            <div className="">
              <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
                Rp 6.000.000
              </p>
            </div>
            <p className="p-3 font-semibold md:text-base sm:text-sm text-xs">
              Rp 6.000.000
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default TabelHarga2;
