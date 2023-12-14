import React from "react";

import MitraCard from "@/components/mitraCard";

function MitraKami() {
  return (
    <>
      <div>
        {" "}
        <p className=" text-black text-xl font-bold  py-14 lg:mx-32 md:mx-10  sm:mx-5 mx-7">
          Mitra Kami
        </p>
      </div>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 lg:mx-32 md:mx-10  sm:mx-5 mx-7 pb-10">
        <MitraCard />
        <MitraCard />
        <MitraCard />
        <MitraCard />
        <MitraCard />
        <MitraCard />
      </div>
    </>
  );
}

export default MitraKami;
