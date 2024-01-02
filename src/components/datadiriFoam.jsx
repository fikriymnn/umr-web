import React from "react";
import DropdownDetail from "@/components/DropdownDetail";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard";
import { Carousel } from "flowbite";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
function DatadiriFoam({ idPaket }) {
  const { push } = useRouter();
  const Bank = [
    { img: "bca.png", bankName: "bca", value: "0780878787" },
    { img: "mega.jpeg", bankName: "mega", value: "78978788" },
    { img: "bsi.jpeg", bankName: "bsi", value: "789787899" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [noRekening, setNoRekening] = useState("Pilih Tujuan Transfer Bank ");
  const [namaBank, setNamaBank] = useState("");
  const [selectedImage, setSelectedImage] = useState(Bank[0]);
  const [namaPemilikRekening, setNamaPemilikRekening] = useState("");
  const [DetailPaket, setDetailPaket] = useState(null);

  const [DataUser, setDataUser] = useState({
    nama_lengkap: "",
    no_whatsapp: "",
    email: "",
  });

  useEffect(() => {
    getuser();
  }, []);

  async function getuser() {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      if (res.data.success == true) {
        setDataUser(res.data.data);

        console.log(res.data.data._id);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getDetailPaket(idPaket);
  }, [idPaket]);

  async function getDetailPaket(idd) {
    try {
      const res = await axios.get(`http://localhost:5000/api/paket/${idd}`);
      if (res.data.success == true) {
        setDetailPaket(res.data.data);

        //console.log(res.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (clickedItem, image) => {
    setNoRekening(clickedItem);
    setSelectedImage(image);
    setNamaBank(image.bankName);
  };
  const [isOpenGender, setIsOpenGender] = useState(false);

  const toggleDropdownGender = () => {
    setIsOpenGender(!isOpenGender);
  };

  const [jamaah, setJamaah] = useState([
    {
      gender: "",
      name: "",
      noWhatsapp: "",
      email: "",
      no_ktp: "",
      foto_ktp: "",
      foto_passport: "",
      foto_kk: "",
    },
  ]);

  const handleClick = () => {
    setJamaah([
      ...jamaah,
      {
        gender: "",
        name: "",
        noWhatsapp: "",
        email: "",
        no_ktp: "",
        foto_ktp: "",
        foto_passport: "",
        foto_kk: "",
      },
    ]);
  };
  const handleChange = (e, i, gender) => {
    //parameter gender khusus untuk dropdown gender
    const { name, value } = e.target;
    const onchangeVal = [...jamaah];
    if (name == "gender") {
      onchangeVal[i]["gender"] = gender;
    } else {
      onchangeVal[i][name] = value;
    }

    setJamaah(onchangeVal);
  };

  const handleDelete = (i) => {
    const deleteVal = [...jamaah];
    deleteVal.splice(i, 1);
    setJamaah(deleteVal);
  };

  //handle image upload content hotel
  async function changeImage(event, i) {
    event.preventDefault();
    const { name, value } = event.target;
    const onchangeVal = [...jamaah];
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("content", file);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      const id = response.data.data;
      onchangeVal[i][name] = id;
      setJamaah(onchangeVal);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async function submitOrder(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/order",
        {
          id_user: DataUser._id,
          id_mitra: DetailPaket.id_mitra,
          id_paket: DetailPaket._id,
          jumlah_bayar: DetailPaket.price * jamaah.length,
          jamaah: jamaah,
          bank_tujuan: namaBank,
          no_rekening_bank: noRekening,
          bukti_pembayaran: "",
          nama_lengkap: DataUser.nama_lengkap,
          nama_pemilik_rekening: namaPemilikRekening,
          email: DataUser.email,
          no_telp: DataUser.no_whatsapp,
          status: "belum bayar",
        },
        {
          withCredentials: true,
        }
      );

      alert("Order succsess");
      push(`/akun/PesananSaya/KonfirmasiBayar?id=${response.data.data._id}`);
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data);
    }
  }
  return (
    <>
      <div>
        <div className="md:pt-[30px] sm:pt-[30px] pt-[15px]">
          <div className="bg-white   rounded-xl shadow-2xl ">
            <div className="flex md:px-7 px-5 py-6 gap-5 ">
              <div className="">
                <svg
                  width="30"
                  height="30"
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
                <p className="md:text-2xl sm:text-xl text-lg font-bold ">
                  Nama Pemesan
                </p>
                <p className="md:text-xl sm:text-lg text-base font-medium ">
                  {DataUser.nama_lengkap}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={submitOrder}>
        <div>
          <div className="bg-white rounded-xl md:mt-[30px] sm:mt-[30px] mt-[15px] shadow-2xl h-full">
            {jamaah.map((val, i) => {
              return (
                <div key={i} className="w-full font-semibold">
                  <div className="flex pb-1 md:px-7 px-5 py-6 gap-5">
                    <div>
                      <img src="../../assets/vector/vectorya.svg" alt="" />
                    </div>
                    <h1 className="md:text-2xl sm:text-xl text-lg text-black pb-7">
                      Jemaah Ke-
                      {i + 1}
                    </h1>
                    {jamaah.length !== 1 && (
                      <div className="flex h-7 w-10 md:pt-1 text-center items-center text-white">
                        <button type="button" onClick={(e) => handleDelete(i)}>
                          <Image
                            src={"/assets/images/delete.png"}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className=" md:flex  md:px-14 mx-4 gap-5">
                    <div className="grid grid-cols-1">
                      <p className="md:text-base text-sm">Gender</p>
                      <div className="relative inline-block text-left w-full">
                        <button

                          onClick={toggleDropdownGender}
                          type="button"
                          className="flex justify-between items-center px-2 py-3 mt-1 text-gray-800 border border-gray-300 rounded-lg  focus:outline-none focus:ring w-full"
                        >
                          <span className="text-xs text-gray-400">
                            {val.gender == "" ? "Pilih" : val.gender}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`w-4 h-4 ml-2 ${isOpenGender ? "transform rotate-180" : ""
                              }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {isOpenGender && (
                          <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                            {/* Dropdown content */}
                            <button

                              href="#"
                              type="button"
                              className="block px-4 py-2 text-gray-800 "
                              onClick={(e) => handleChange(e, i, "laki-laki")}
                              name="gender"
                            >
                              Laki-Laki
                            </button>
                            <button

                              href="#"
                              type="button"
                              className="block px-4 py-2 text-gray-800 "
                              onClick={(e) => handleChange(e, i, "perempuan")}
                              name="gender"
                            >
                              Perempuan
                            </button>
                          </div>
                        )}
                      </div>
                      <br />
                    </div>
                    <div className="grid grid-cols-1 w-full">
                      <div>
                        <p className="md:text-base text-sm">Nama Lengkap</p>
                      </div>
                      <TextInput
                        id="name"
                        placeholder="Ketik Nama Lengkap.."
                        required
                        type="name"
                        className=""
                        name="name"
                        onChange={(e) => handleChange(e, i)}
                      />
                      <div>
                        <p className="text-[#E3B02B] text-xs">
                          &#40;Sesuai dengan KTP &#47; Paspor tanpa gelar&#41;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" md:grid grid-cols-2  md:px-14 mx-4 gap-5 pt-5">
                    <div>
                      <div>
                        <p className="md:text-base text-sm">Nomor Whatsapp</p>
                      </div>
                      <TextInput
                        id="whatsapp"
                        placeholder="Ketik Nomor Whatsapp.."
                        required
                        type="whatsapp"
                        className=" "
                        name="noWhatsapp"
                        onChange={(e) => handleChange(e, i)}
                      />
                    </div>
                    <div className="mt-5 md:mt-0">
                      <div>
                        <p className="md:text-base text-sm">Email</p>
                      </div>
                      <TextInput
                        id="Email"
                        placeholder="Ketik Email.."
                        required
                        type="Email"
                        className=" "
                        name="email"
                        onChange={(e) => handleChange(e, i)}
                      />
                    </div>
                  </div>
                  <div className="  md:px-14 mx-4 gap-5 pt-5">
                    <di className="md:w-[50%] pt-5">
                      <div>
                        <p className="md:text-base text-sm">
                          Masukkan nomor KTP
                        </p>
                      </div>

                      <div className="  rounded-md ">
                        <TextInput
                          type="text"
                          className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                          name="no_ktp"
                          required
                          onChange={(e) => handleChange(e, i)}
                        />
                      </div>
                    </di>
                    <div className=" pt-5">
                      <div>
                        <p className="md:text-base text-sm">
                          Lampiran Foto KTP
                        </p>
                      </div>

                      <div className="border-[1px] border-gray-300 bg-gray-50 rounded-md p-1">
                        <input
                          type="file"
                          required
                          className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500  file:text-white hover:file:bg-blue-600 "
                          name="foto_ktp"
                          onChange={(e) => changeImage(e, i)}
                        />
                      </div>
                    </div>
                    <div className=" pt-5">
                      <div>
                        <p className="md:text-base text-sm">
                          Lampiran Foto Passport
                        </p>
                      </div>

                      <div className="border-[1px] border-gray-300 bg-gray-50 rounded-md p-1">
                        <input
                          type="file"
                          required
                          className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                          name="foto_passport"
                          onChange={(e) => changeImage(e, i)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="   md:px-14 mx-4 gap-5 pb-5">
                    <div className=" pt-5">
                      <div>
                        <p className="md:text-base text-sm">Lampiran Foto KK</p>
                      </div>

                      <div className="border-[1px] border-gray-300 bg-gray-50 rounded-md p-1">
                        <input
                          type="file"
                          required
                          className="block w-full text-sm text-gray-500  file:rounded-md rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                          name="foto_kk"
                          onChange={(e) => changeImage(e, i)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-center items-center md:pb-10 pb-5 pt-5">
              <button onClick={handleClick} type="button">
                <Image
                  width={30}
                  height={30}
                  src="../../assets/vector/VectorPlus.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>

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

                  type="button"
                  className="flex  py-3 gap-2 rounded-md bg-white"
                  onClick={toggleDropdown}
                >
                  <div className="border-2 rounded-md bg-white">
                    <Image
                      Image
                      src={`/assets/images/${selectedImage.img}`}
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
                      type="button"
                      href="#"

                      className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full flex justify-start"
                      role="menuitem"
                      onClick={() => handleItemClick("67867878676", Bank[0])}
                    >
                      BCA
                    </button>
                    <button
                      type="button"
                      href="#"

                      className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full flex justify-start"
                      role="menuitem"
                      onClick={() => handleItemClick("678678678678", Bank[1])}
                    >
                      BANK MEGA
                    </button>
                    <button
                      type="button"
                      href="#"

                      className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full flex justify-start text-start"
                      role="menuitem"
                      onClick={() => handleItemClick("6786786886", Bank[2])}
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
                  {noRekening}
                </button>
              </div>
            </div>
            <div className="md:px-7 px-4 py-7 ">
              <p className="font-semibold text-base pb-2">
                Nama Pemilik Rekening
              </p>
              <input
                type="text"
                required
                className="rounded-lg w-full border-neutral-400 text-neutral-600 "
                placeholder="Ketik Nama Pemilik Rekening... "
                onChange={(e) => setNamaPemilikRekening(e.target.value)}
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
                <button type="button" className="w-3/12 bg-amber-400 m-1 rounded-lg lg:text-sm text-xs font-medium p-2 ">
                  Reedem
                </button>
              </div>
            </div>
          </div>

          <div className=" my-5 bg-white rounded-[10px] shadow border-2 border-neutral-400 border-opacity-20">
            <div className="lg:px-7 px-4 flex justify-between pt-5 mb-7 ">
              <p className="font-bold text-base">Total Harga</p>
              <p className="font-bold text-base text-amber-400">
                Rp{DetailPaket == null ? 0 : DetailPaket.price * jamaah.length}
              </p>
            </div>

            <a
              // href="/akun/PesananSaya/KonfirmasiBayar"
              className="flex justify-center items-center mb-5"
            >
              <button
                type="submit"
                className=" rounded-xl w-11/12 bg-amber-400 m-2 font-semibold h-10"
              >
                Bayar
              </button>
            </a>
          </div>
        </section>
      </form>
    </>
  );
}

export default DatadiriFoam;
