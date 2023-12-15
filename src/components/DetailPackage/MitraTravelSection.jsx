import React from "react";

function MitraTravelSection({ profil, nama, rating, noizin }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isColored = i < rating;
      stars.push(
        <div className="w-5">
          <img
            key={i}
            src={
              isColored
                ? "/assets/vector/Star.svg"
                : "/assets/vector/StarGray.svg"
            }
            alt={`Star ${i + 1} `}
          />
        </div>
      );
    }
    return stars;
  };
  return (
    <section id="Mitra travel">
      <div className="bg-white md:w-10/12 w-11/12 mx-auto md:ms-20 rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">
        <div className=" md:w-[250px]  w-[150px] bg-black mx-auto rounded-b-xl">
          <p className="md:text-2xl sm:text-xl text-lg font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
            Mitra Travel
          </p>
        </div>
        <div className="flex md:py-7 py-3 md:px-9 px-4">
          <div className="md:w-3/12 sm:w-3/12 w-2/12">
            <div
              className="md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] w-[40px] h-[40px] bg-gray-500 rounded-full bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${profil})` }}
            ></div>
          </div>
          <div className="w-full ps-5">
            <h1 className=" text-black md:text-2xl sm:text-xl text-base pb-1 font-semibold">
              {nama}
            </h1>
            <div className="flex md:mt-3 pb-1 md:gap-10 gap-4">
              {/* <p className="text-black md:text-[20px] sm:text-xl text-sm">
                60 Penilaian
              </p> */}
              <div className="flex ">
                <p className="text-black md:text-[20px] sm:text-xl text-sm my-auto">
                  Rating
                </p>
                <div className="ps-1 flex items-center space-x-1 ">
                  {renderStars()}
                </div>
              </div>
            </div>
            <p className="text-black md:text-[20px] sm:text-xl text-sm   pb-1">
              Nomor Izin Umroh
            </p>
            <p className="text-black md:text-[20px] sm:text-xl text-sm md:pb-3 pb-1">
              {noizin}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MitraTravelSection;
