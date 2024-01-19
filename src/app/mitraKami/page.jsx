import React from "react";
import axios from "axios";
import MitraCard from "@/components/mitraCard";
async function GetDataMitra() {
  let data;
  try {
    const res = await axios.get(
      "http://localhost:5000/api/mitra?skip=0&limit=9"
    );
    data = res.data.data;


  } catch (error) {
    data = null;
  }
  return data;
}
async function MitraKami() {
  const DataMitra = await GetDataMitra();
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
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-3  pb-10 xl:p-0 lg:p-5 px-3 mb-20">
              {DataMitra == null ? (
                <div>skksks</div>
              ) : (
                DataMitra.map((data, index) => {

                  return (
                    <>

                      <MitraCard id={data._id} namaTravel={data.nama_mitra}
                        key={index}
                        noIzin={data.no_izin_umroh} penilaian={"data.rating.length"} ratingNilai={data.rating.toFixed(1)} profil={`http://localhost:5000/images/${data.foto_profil}`} />
                    </>
                  )
                }))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MitraKami;
