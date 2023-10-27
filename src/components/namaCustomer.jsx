import React from "react";

function NamaCustomer() {
  return (
    <div>
      <div className="py-[50px]">
        <div className="bg-white w-10/12 ms-20 rounded-xl shadow-2xl">
          <div className="flex py-7 px-14">
            <div className="w-[140px]">
              <div className="w-[120px] h-[120px] bg-gray-500 rounded-full"></div>
            </div>
            <div className="w-full ps-5">
              <h1 className=" text-black text-2xl pb-3 font-bold">
                Nama Pemesan
              </h1>
              <div className="flex pb-3">
                <p className="text-black text-xl font-medium">Rudi Kastana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NamaCustomer;
