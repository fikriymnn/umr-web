import React from "react";

function JadwalPerjalananSection({ jadwal }) {
  return (
    <div>
      <div className=" md:w-[250px] sm:w-[200px]  w-[170px] bg-black mx-auto rounded-b-xl">
        <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
          Jadwal Perjalanan
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-y-8 md:gap-x-16 gap-2 py-7 md:px-9 px-4">
        {jadwal.map((data, i) => {
          return (
            <div key={i} className=" border-[3px] border-gray-400 rounded-xl">
              <div className="p-3">
                <h1 className="font-semibold md:text-xl sm:text-lg text-base">
                  {data.hari}
                </h1>
                <p className="md:text-base sm:text-sm text-xs">{data.agenda}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JadwalPerjalananSection;
