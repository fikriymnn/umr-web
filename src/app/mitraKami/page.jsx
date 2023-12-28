import React from "react";

import MitraCard from "@/components/mitraCard";

function MitraKami() {
  return (
    <>
      <div className="bg ">
        <div className="bg-image-container">

          <div className="xl:w-9/12 lg:w-full  md:w-11/12 w-full min-h-screen  mx-auto ">

            <div>
              {" "}
              <p className=" text-black md:text-xl text-2xl font-bold  md:py-12 py-8 md:mx-5 mx-5">
                Mitra Kami
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-3  pb-10 xl:p-0 lg:p-5 px-3">
              <MitraCard />
              <MitraCard />
              <MitraCard />
              <MitraCard />
              <MitraCard />
              <MitraCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MitraKami;
