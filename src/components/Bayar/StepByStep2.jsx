import React from "react";

function StepByStep2() {
  return (
    <div className="flex mx-auto gap-4 justify-between lg:w-80 w-64">
      <div className="flex gap-1">
        <p className="rounded-full lg:text-base text-xs border-2 border-amber-400 text-amber-400 lg:w-10 w-7 text-center ">
          1
        </p>
        <p className="rounded-full text-amber-400 w-full lg:text-base text-xs ">
          Data Pesanan
        </p>
      </div>
      <div className="w-12 h-1 bg-amber-400 my-auto mx-auto rounded-full "></div>
      <div className="flex gap-1">
        <p className="rounded-full border-2 border-amber-400 text-amber-400  lg:w-10 w-7 lg:text-base text-xs  text-center ">
          2
        </p>
        <p className="rounded-full text-amber-400 w-full lg:text-base text-xs ">
          Bayar
        </p>
      </div>
    </div>
  );
}

export default StepByStep2;
