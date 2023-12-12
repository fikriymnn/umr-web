import React from "react";
import Image from "next/image";

function Facility({ lokasi, namaHotel, content, fasilitas }) {
  return (
    <div className="w-full md:py-4 py-3 md:px-9 px-4 ">
      <h1 className="md:text-xl sm:text-xl text-lg font-semibold text-black pb-1">
        {lokasi}
      </h1>
      <h3 className="md:text-xl sm:text-xl text-lg text-black pb-1">
        {namaHotel}
      </h3>

      <div className="grid grid-cols-4 md:gap-5 gap-2 md:pt-5 pt-2">
        {content.map((data, i) => {
          return (
            <img
              key={i}
              className="w-full h-full md:p-12 sm:p-8 p-6 bg-gray-500"
              alt=""
              src={`http://localhost:5000/images/${data.img}`}
            />
          );
        })}
      </div>
      <h1 className="md:text-xl sm:text-xl text-lg text-black pt-5">
        Fasilitas
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 pt-5 gap-y-2 ">
        {fasilitas.FreeWiFi == false ? (
          <div></div>
        ) : (
          <div className="flex ">
            <div className="md:w-1/12 w-8    my-auto">
              <Image
                src="/assets/vector/wifi.svg"
                alt="icon"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className="ps-1 md:text-sm sm:text-base text-sm text-black my-auto font-medium ">
                Free WiFi
              </p>
            </div>
          </div>
        )}

        {fasilitas.TempatMakan == false ? (
          <div></div>
        ) : (
          <div className="flex">
            <div className="md:w-1/12  w-8  my-auto ">
              <Image
                src="/assets/vector/spoon.svg"
                alt="icon"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className="ps-1 md:text-sm sm:text-base text-sm text-black my-auto font-medium  ">
                Tempat Makan
              </p>
            </div>
          </div>
        )}
        {fasilitas.PelayananKamar == false ? (
          <div></div>
        ) : (
          <div className="flex">
            <div className="md:w-1/12 w-8  my-auto  ">
              <Image
                src="/assets/vector/door.svg"
                alt="icon"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className="ps-1 md:text-sm sm:text-base text-sm text-black my-auto font-medium  ">
                Pelayanan Kamar
              </p>
            </div>
          </div>
        )}
        {fasilitas.Disabilitas == false ? (
          <div></div>
        ) : (
          <div className="flex">
            <div className="md:w-1/12 w-8  my-auto  ">
              <Image
                src="/assets/vector/disabled.svg"
                alt="icon"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className="ps-1 md:text-sm sm:text-base text-sm text-black my-auto font-medium  ">
                Disabilitas
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Facility;
