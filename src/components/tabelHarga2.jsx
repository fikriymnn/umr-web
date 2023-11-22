import React from "react";

function TabelHarga2() {
  return (
    <>
      {/* <div className=" border-2  border-black rounded-lg">
        <div className="flex gap-10 justify-center items-center  border-b-2 border-black rounded-t-md">
          <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
            Tahap
          </p>
          <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
            Tanggal Pembayaran
          </p>
          <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
            Jumlah
          </p>
        </div>
        <div className="flex  justify-center items-center">
          <div className="flex flex-col justify-center items-center   w-[350px]">
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
              Uang Muka
            </p>
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
              Bayar ke-2
            </p>
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
              Bayar ke-3
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border-black border-x-2 w-full ">
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs ">
              17 Sept 23
            </p>
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
              17 Sept 23
            </p>
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
              17 Sept 23
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  w-[350px] ">
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
              Rp 6.000.000
            </p>
            <div className="">
              <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
                Rp 6.000.000
              </p>
            </div>
            <p className="md:md:p-3 p-2 p-2 font-semibold md:text-base sm:text-sm text-xs">
              Rp 6.000.000
            </p>
          </div>
        </div>
      </div> */}
      <div className="border-[1px] border-black rounded-lg overflow-hidden">

        <table className=" w-full rounded-lg ">
          <thead>
            <tr className="flex ">
              <th className="flex flex-col w-[30%] md:p-3 p-2 font-semibold border-b-[1px] border-black md:text-base sm:text-sm text-xs ">
                Tahap
              </th>
              <th className="flex flex-col   w-[40%] md:p-3 p-2 font-semibold border-b-[1px] border-black md:text-base sm:text-sm text-xs">
                Pembayaran
              </th>
              <th className="flex flex-col w-[30%] md:p-3 p-2 font-semibold border-b-[1px] border-black md:text-base sm:text-sm text-xs">
                Jumlah
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex">
              <td className="flex flex-col w-[30%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                Uang Muka
              </td>
              <td className="flex flex-col border-black border-x-[1px] w-[40%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                17 September 2023
              </td>
              <td className="flex flex-col w-[30%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                Rp 6.000.000
              </td>
            </tr>
            <tr className="flex">
              <td className="flex flex-col w-[30%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                Bayar ke-2
              </td>
              <td className="flex flex-col border-black border-x-[1px] w-[40%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                17 September 2023
              </td>
              <td className="flex flex-col w-[30%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                Rp 6.000.000
              </td>
            </tr>
            <tr className="flex">
              <td className="flex flex-col w-[30%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                Bayar ke-3
              </td>
              <td className="flex flex-col border-black border-x-[1px] w-[40%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                17 September 2023
              </td>
              <td className="flex flex-col w-[30%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                Rp 6.000.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}

export default TabelHarga2;
