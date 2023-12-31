import React from "react";
import BayarMitraTravelSection from "@/components/Bayar/BayarMitraTravelSection";
import FacilityAndPriceSection from "@/components/Bayar/FacilityAndPriceSection";

function PesananKamuSection() {
  return (
    <section>
      <div className="lg:ml-20 mx-4 lg:w-6/12 md:w-7/12 w-11-12  bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
        <div className="flex lg:px-7 px-4 py-6 gap-2">
          <div className="">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9997 2.66667C10.3672 2.66637 8.76326 3.09424 7.34786 3.90757C5.93245 4.7209 4.75512 5.89124 3.93337 7.30178C3.11163 8.71232 2.67422 10.3137 2.6648 11.9461C2.65538 13.5786 3.07428 15.1849 3.87969 16.6048C4.42407 15.8973 5.12386 15.3245 5.92495 14.9306C6.72605 14.5368 7.607 14.3324 8.49969 14.3333H15.4997C16.3924 14.3324 17.2733 14.5368 18.0744 14.9306C18.8755 15.3245 19.5753 15.8973 20.1197 16.6048C20.9251 15.1849 21.344 13.5786 21.3346 11.9461C21.3252 10.3137 20.8877 8.71232 20.066 7.30178C19.2443 5.89124 18.0669 4.7209 16.6515 3.90757C15.2361 3.09424 13.6321 2.66637 11.9997 2.66667ZM21.2665 19.0887C22.8264 17.0551 23.6701 14.5629 23.6664 12C23.6664 5.5565 18.4432 0.333336 11.9997 0.333336C5.55619 0.333336 0.333021 5.5565 0.333021 12C0.329169 14.5629 1.17291 17.0552 2.73285 19.0887L2.72702 19.1097L3.14119 19.5915C4.23539 20.8708 5.59397 21.8975 7.12329 22.6011C8.65261 23.3046 10.3163 23.6682 11.9997 23.6667C14.3649 23.671 16.675 22.9526 18.6205 21.6075C19.4499 21.0344 20.202 20.3569 20.8582 19.5915L21.2724 19.1097L21.2665 19.0887ZM11.9997 5C11.0714 5 10.1812 5.36875 9.52481 6.02513C8.86844 6.68151 8.49969 7.57174 8.49969 8.5C8.49969 9.42826 8.86844 10.3185 9.52481 10.9749C10.1812 11.6313 11.0714 12 11.9997 12C12.9279 12 13.8182 11.6313 14.4746 10.9749C15.1309 10.3185 15.4997 9.42826 15.4997 8.5C15.4997 7.57174 15.1309 6.68151 14.4746 6.02513C13.8182 5.36875 12.9279 5 11.9997 5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <p className="lg:text-2xl sm:text-xl text-base font-bold px- ">
              Pesanan Kamu
            </p>
          </div>
        </div>

        <BayarMitraTravelSection />

        <FacilityAndPriceSection />
      </div>
    </section>
  );
}

export default PesananKamuSection;
