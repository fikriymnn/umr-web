import React from "react";
import Testimonial from "@/components/testimonial";

function TestimonialSection({ testimoni }) {
  return (
    <section id="testimonial">
      {testimoni == null ? (
        <div className="bg-white md:w-11/12 w-11/12 mx-auto   rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">
          <div className="md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
            <p className="md:text-2xl sm:text-xl text-lg  font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
              Testimoni Travel
            </p>
          </div>
          <div className="font-semibold text-2xl px-10">Belum ada Ulasan</div>

          <div className="h-[20px]"></div>
        </div>
      ) : (
        <div className="bg-white md:w-11/12 w-11/12 mx-auto   rounded-xl md:mt-[50px] sm:mt[30px] mt-[15px]">
          <div className="md:w-[250px] sm:w-[200px]  w-[150px] bg-black mx-auto rounded-b-xl">
            <p className="md:text-2xl sm:text-xl text-lg  font-semibold text-[#E3B02B] text-center md:py-3 py-1 px-2">
              Testimoni Travel
            </p>
          </div>
          {testimoni == null ? <div></div> : <Testimonial />}

          <div className="h-[20px]"></div>
        </div>
      )}
    </section>
  );
}

export default TestimonialSection;
