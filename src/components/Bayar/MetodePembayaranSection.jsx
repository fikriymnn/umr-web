import React from "react";
import Image from "next/image";
import { useState } from "react";
function MetodePembayaranSection() {
  const Logo = ["bca.png", "mega.jpeg", "bsi.jpeg"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    "Pilih Tujuan Transfer Bank "
  );
  const [selectedImage, setSelectedImage] = useState(Logo[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (clickedItem, image) => {
    setSelectedItem(clickedItem);
    setSelectedImage(image);
  };
  return (
    <section>
      <div className=" my-5 bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
        <div className="flex lg:px-7 px-4 py-6 gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.648 11.2653H6.35001C5.43573 11.2653 5.04389 10.2694 5.76226 9.79593L15.4112 3.47756C15.5894 3.37277 15.7923 3.3175 15.999 3.3175C16.2057 3.3175 16.4086 3.37277 16.5867 3.47756L26.2357 9.79593C26.9541 10.2694 26.5623 11.2653 25.648 11.2653Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.7959 20.2449H6.20402C5.75318 20.2449 5.3877 20.6104 5.3877 21.0613V23.5102C5.3877 23.9611 5.75318 24.3266 6.20402 24.3266H25.7959C26.2467 24.3266 26.6122 23.9611 26.6122 23.5102V21.0613C26.6122 20.6104 26.2467 20.2449 25.7959 20.2449Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.83594 11.2653V20.2449M11.9176 11.2653V20.2449M15.9992 11.2653V20.2449M20.0808 11.2653V20.2449M24.1625 11.2653V20.2449"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="2" />
          </svg>
          <p className="text-[17px] font-bold my-auto">Metode Pembayaran</p>
        </div>
        <div className="relative text-left md:px-7 px-4 flex">
          <div className="relative my-auto">
            <button
              className="flex  py-3 gap-2 rounded-md bg-white"
              onClick={toggleDropdown}
            >
              <div className="border-2 rounded-md bg-white">
                <Image
                  Image
                  src={`/assets/images/${selectedImage}`}
                  alt=""
                  width={55}
                  height={55}
                />
              </div>
              {/* <span className="my-auto text-neutral-400 font-medium">
                    Transfer Bank &#40;Transfer BCA&#41;
                  </span> */}
            </button>
            {isOpen && (
              <div
                className=" absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  href="#"
                  className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full flex justify-start"
                  role="menuitem"
                  onClick={() => handleItemClick("BCA", Logo[0])}
                >
                  BCA
                </button>
                <button
                  href="#"
                  className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full flex justify-start"
                  role="menuitem"
                  onClick={() => handleItemClick("BANK MEGA", Logo[1])}
                >
                  BANK MEGA
                </button>
                <button
                  href="#"
                  className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full flex justify-start text-start"
                  role="menuitem"
                  onClick={() =>
                    handleItemClick("BANK SYARIAH INDONESIA", Logo[2])
                  }
                >
                  BANK SYARIAH INDONESIA
                </button>
              </div>
            )}
          </div>
          <div className="relative my-auto  font-medium ">
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm    font-medium  bg-white  border-neutral-300 rounded-md hover:bg-neutral-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-neutral-200"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            >
              {selectedItem}
            </button>
          </div>
        </div>
        <div className="md:px-7 px-4 py-7 ">
          <p className="font-semibold text-base pb-2">Nama Pemilik Rekening</p>
          <input
            type="text"
            className="rounded-lg w-full border-neutral-400 text-neutral-400 "
            placeholder="Ketik Nama Pemilik Rekening... "
          />
        </div>
        <div className="lg:px-7 px-4">
          <p className="font-semibold text-base pb-2">Perhatian:</p>
          <p className="font-medium text-sm">
            Anda bisa transfer dari layanan perbankan apapun &#40; internet
            banking, SMS&#47;M-Banking, ATM &#41;
          </p>
        </div>
        <div className="lg:px-7 px-4 py-10">
          <p className="font-semibold text-base">Kode Promo</p>
          <div className="border-[1px] rounded-lg  border-neutral-400 flex lg:w-10/12 w-full">
            <input
              type="text"
              className="w-9/12 border-none mx-1"
              placeholder="Ketik Kode Promo.."
            />
            <button className="w-3/12 bg-amber-400 m-1 rounded-lg lg:text-sm text-xs font-medium p-2 ">
              Reedem
            </button>
          </div>
        </div>
      </div>
      <div className=" my-5 bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
        <div className="lg:px-7 px-4 flex justify-between pt-5 mb-7 ">
          <p className="font-bold text-base">Total Harga</p>
          <p className="font-bold text-base text-amber-400">Rp 39.500.00</p>
        </div>

        <a
          href="/akun/PesananSaya/KonfirmasiBayar"
          className="flex justify-center items-center mb-5"
        >
          <button className=" rounded-xl w-11/12 bg-amber-400 m-2 font-semibold h-10">
            Bayar
          </button>
        </a>
      </div>
    </section>
  );
}

export default MetodePembayaranSection;
