"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "@/components/accountNav";

function ProfilSaya() {
  const [DataUser, setDataUser] = useState({
    nama_lengkap: "",
    no_whatsapp: "",
    email: "",
  });

  useEffect(() => {
    getuser();
  });

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

  return (
    <div className="lg:px-14 px-5 py-10 bg-slate-100">
      <div className=" flex lg:flex-row flex-col">
        <AccountNav account="bg-[#E3B02B] text-white" />

        <div className="w-full lg:w-10/12 lg:ps-5">
          <div className="bg-white grid grid-cols-1 gap-3 lg:rounded-xl rounded-b-xl lg:border-t-2 border-t-0 border-2 border-slate-300 shadow-xl p-3">
            <div className="text-xl font-extrabold px-5">
              <p>Profil</p>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl py-2 px-2 ">
              <div className="flex justify-between">
                <p className="font-bold px-2">Nama Lengkap</p>
                <div className=""></div>
              </div>
              <div className="bg-slate-200 rounded-xl px-3 py-2 mt-2 font-medium">
                <p>{DataUser.nama_lengkap}</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl py-2 px-3 ">
              <div className="flex justify-between">
                <p className="font-bold px-2">Nomor WhatsApp</p>
                <button className="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0833 0.25C11.3595 0.250306 11.625 0.356036 11.8258 0.545586C12.0266 0.735136 12.1474 0.994199 12.1636 1.26984C12.1798 1.54549 12.0901 1.81691 11.9129 2.02865C11.7357 2.24039 11.4843 2.37647 11.2101 2.40908L11.0833 2.41667H2.41667V17.5833H17.5833V8.91667C17.5836 8.64055 17.6894 8.37496 17.8789 8.17418C18.0685 7.9734 18.3275 7.85258 18.6032 7.8364C18.8788 7.82022 19.1502 7.9099 19.362 8.08712C19.5737 8.26434 19.7098 8.51573 19.7424 8.78992L19.75 8.91667V17.5833C19.7502 18.13 19.5437 18.6564 19.172 19.0573C18.8004 19.4581 18.2909 19.7036 17.7458 19.7446L17.5833 19.75H2.41667C1.87004 19.7502 1.34355 19.5437 0.94274 19.172C0.541927 18.8004 0.296414 18.2909 0.255417 17.7458L0.25 17.5833V2.41667C0.249827 1.87004 0.456274 1.34355 0.827955 0.94274C1.19964 0.541927 1.70908 0.296414 2.25417 0.255417L2.41667 0.25H11.0833ZM17.8466 0.621583C18.0415 0.42729 18.3031 0.314487 18.5783 0.306086C18.8534 0.297685 19.1214 0.394316 19.3278 0.576353C19.5342 0.758389 19.6637 1.01218 19.6898 1.28618C19.7159 1.56018 19.6367 1.83384 19.4683 2.05158L19.3784 2.1545L8.65342 12.8784C8.45846 13.0727 8.19686 13.1855 7.92175 13.1939C7.64664 13.2023 7.37864 13.1057 7.1722 12.9236C6.96575 12.7416 6.83634 12.4878 6.81024 12.2138C6.78413 11.9398 6.8633 11.6662 7.03167 11.4484L7.12158 11.3466L17.8466 0.621583Z"
                      fill="#E3B02B"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-slate-200 rounded-xl px-3 py-2 mt-2 font-medium">
                <p>{DataUser.no_whatsapp}</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl py-2 px-3">
              <div className=" flex justify-between">
                <p className="font-bold px-2">Email</p>
                <button className="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0833 0.25C11.3595 0.250306 11.625 0.356036 11.8258 0.545586C12.0266 0.735136 12.1474 0.994199 12.1636 1.26984C12.1798 1.54549 12.0901 1.81691 11.9129 2.02865C11.7357 2.24039 11.4843 2.37647 11.2101 2.40908L11.0833 2.41667H2.41667V17.5833H17.5833V8.91667C17.5836 8.64055 17.6894 8.37496 17.8789 8.17418C18.0685 7.9734 18.3275 7.85258 18.6032 7.8364C18.8788 7.82022 19.1502 7.9099 19.362 8.08712C19.5737 8.26434 19.7098 8.51573 19.7424 8.78992L19.75 8.91667V17.5833C19.7502 18.13 19.5437 18.6564 19.172 19.0573C18.8004 19.4581 18.2909 19.7036 17.7458 19.7446L17.5833 19.75H2.41667C1.87004 19.7502 1.34355 19.5437 0.94274 19.172C0.541927 18.8004 0.296414 18.2909 0.255417 17.7458L0.25 17.5833V2.41667C0.249827 1.87004 0.456274 1.34355 0.827955 0.94274C1.19964 0.541927 1.70908 0.296414 2.25417 0.255417L2.41667 0.25H11.0833ZM17.8466 0.621583C18.0415 0.42729 18.3031 0.314487 18.5783 0.306086C18.8534 0.297685 19.1214 0.394316 19.3278 0.576353C19.5342 0.758389 19.6637 1.01218 19.6898 1.28618C19.7159 1.56018 19.6367 1.83384 19.4683 2.05158L19.3784 2.1545L8.65342 12.8784C8.45846 13.0727 8.19686 13.1855 7.92175 13.1939C7.64664 13.2023 7.37864 13.1057 7.1722 12.9236C6.96575 12.7416 6.83634 12.4878 6.81024 12.2138C6.78413 11.9398 6.8633 11.6662 7.03167 11.4484L7.12158 11.3466L17.8466 0.621583Z"
                      fill="#E3B02B"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-slate-200 rounded-xl px-3 py-2 mt-2 font-medium">
                <p>{DataUser.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilSaya;
