"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
function Login() {
  const { push } = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const url = `${process.env.NEXT_PUBLIC_URL}/login`;

  async function submitLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        url,
        { email: Email, password: Password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("login success");
      push("/");
      console.log(response)
    } catch (error) {

      alert(error.response.data.message);

    }
  }
  return (
    <div className=" bg-login w-full min-h-screen z-20">
      <div className=" bg-cover bg-[url('/assets/images/bgLogin.jpg')] z-10 w-full min-h-screen grid md:grid-cols-2 items-center">
        <div className="md:w-[400px] w-11/12  md:ps-14 md:mx-0 mx-auto mt-10 ">
          <p className="text-3xl font-extrabold text-white ">
            Selamat Datang !
          </p>
          <p className="text-white pb-4">Masukkan Akun</p>
          <Card>
            <form onSubmit={submitLogin} className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="nama"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="nama"
                />
              </div>

              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="bg-[#E3B02B] p-2 rounded-lg text-white hover:bg-[#bb9023]"
              >
                Login
              </button>
              <div className="flex justify-center">
                <p className="text-black text-sm">Belum Punya Akun?</p>
                <a href="/register">
                  <p className="text-[#E3B02B] text-sm">Masuk Disini</p>
                </a>
              </div>
            </form>
          </Card>
        </div>
        <div className="mt-24 md:mx-0 pb-10 mx-2">
          <div className="flex gap-6 mx-auto mb-5">
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_439_638)">
                  <path
                    d="M40.3451 5.08828e-06C41.6551 5.08828e-06 42.9451 0.0850051 44.1451 0.285005C45.327 0.439868 46.493 0.697511 47.6301 1.05501C48.7701 1.4 49.8851 1.83001 51.0001 2.37001C52.0851 2.88501 53.2001 3.51501 54.3151 4.20001C56.2001 5.4 58.0551 6.37001 59.9451 7.14501C63.6658 8.63417 67.6003 9.5203 71.6001 9.77001C73.6301 9.915 75.7151 10 77.8851 10V30C77.8851 33.8 77.4001 37.4 76.4301 40.83C75.4984 44.2111 74.1744 47.4715 72.4851 50.545C70.803 53.6142 68.8127 56.5041 66.5451 59.17C64.2427 61.8965 61.7498 64.4563 59.0851 66.83C56.3852 69.2107 53.5415 71.4232 50.5701 73.455C47.6001 75.515 44.6001 77.43 41.6001 79.17L40.4001 79.885L39.2001 79.17C36.1161 77.3845 33.1038 75.478 30.1701 73.455C27.1821 71.4461 24.3369 69.2325 21.6551 66.83C18.9921 64.4562 16.5008 61.8965 14.2001 59.17C11.9386 56.4928 9.9394 53.6045 8.23011 50.545C6.56977 47.4579 5.24713 44.2007 4.28511 40.83C3.30896 37.3037 2.82769 33.6588 2.85511 30V10C5.03011 10 7.11511 9.915 9.14511 9.77001C11.1434 9.63121 13.1288 9.34543 15.0851 8.915C17.0001 8.48501 18.9151 7.91501 20.8001 7.14501C22.7561 6.35558 24.6315 5.37939 26.4001 4.23001C28.6001 2.80001 30.8301 1.74501 33.0301 1.05C35.3994 0.323663 37.8671 -0.0305525 40.3451 5.08828e-06ZM72.8551 14.915C69.0703 14.7314 65.3206 14.0986 61.6851 13.03C58.0688 11.9513 54.6243 10.3637 51.4551 8.31501C49.8113 7.23599 48.026 6.38963 46.1501 5.8C44.2763 5.23368 42.3276 4.95385 40.3701 4.97001C38.3981 4.95725 36.4351 5.23696 34.5451 5.8C32.6665 6.37046 30.8835 7.21814 29.2551 8.31501C26.0804 10.3749 22.627 11.9694 19.0001 13.05C15.4551 14.08 11.7451 14.71 7.85511 14.94V30.025C7.85511 33.34 8.28511 36.51 9.14511 39.565C10.0212 42.5935 11.2285 45.5161 12.7451 48.28C14.2799 51.0727 16.0888 53.7057 18.1451 56.14C20.2301 58.595 22.4551 60.88 24.8551 63.05C27.2551 65.225 29.7701 67.225 32.4001 69.08C35.0551 70.94 37.7151 72.625 40.3701 74.165C43.0887 72.5824 45.7394 70.8858 48.3151 69.08C50.9625 67.2308 53.4908 65.2169 55.8851 63.05C58.2851 60.88 60.5151 58.595 62.6001 56.14C64.6567 53.7058 66.4656 51.0728 68.0001 48.28C69.51 45.5196 70.6994 42.5956 71.5451 39.565C72.4313 36.4631 72.8723 33.251 72.8551 30.025V14.915Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.9851 23.545L56.7851 21.655L54.7551 21.83L32.9551 47.57L25.5301 36.97L23.5301 36.63L21.2151 38.285L20.8701 40.285L30.4151 53.915L31.5001 54.515L33.7851 54.655L34.9551 54.145L59.1301 25.57L58.9851 23.545Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_439_638">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="md:w-80">
              <p className="md:text-xl sm:text-lg text-base font-semibold">
                Lorem Ipsum dolor sit amet
              </p>
              <p className="font-medium md:text-lg sm:text-base text-sm text-opacity-60">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
              </p>
            </div>
          </div>
          <div className="flex gap-6 mx-auto mb-5">
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.3335 36.6667C58.8668 36.6667 63.3002 32.2 63.3002 26.6667C63.3002 21.1333 58.8668 16.6667 53.3335 16.6667C47.8002 16.6667 43.3335 21.1333 43.3335 26.6667C43.3335 32.2 47.8002 36.6667 53.3335 36.6667ZM26.6668 36.6667C32.2002 36.6667 36.6335 32.2 36.6335 26.6667C36.6335 21.1333 32.2002 16.6667 26.6668 16.6667C21.1335 16.6667 16.6668 21.1333 16.6668 26.6667C16.6668 32.2 21.1335 36.6667 26.6668 36.6667ZM26.6668 43.3333C18.9002 43.3333 3.3335 47.2333 3.3335 55V63.3333H50.0002V55C50.0002 47.2333 34.4335 43.3333 26.6668 43.3333ZM53.3335 43.3333C52.3668 43.3333 51.2668 43.4 50.1002 43.5C53.9668 46.3 56.6668 50.0667 56.6668 55V63.3333H76.6668V55C76.6668 47.2333 61.1002 43.3333 53.3335 43.3333Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="md:w-80">
              <p className="md:text-xl sm:text-lg text-base font-semibold">
                Lorem Ipsum dolor sit amet
              </p>
              <p className="font-medium md:text-lg sm:text-base text-sm text-opacity-60">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
              </p>
            </div>
          </div>
          <div className="flex gap-6 mx-auto mb-5">
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9998 13.3333H16.6665C14.0143 13.3333 11.4708 14.3869 9.59544 16.2623C7.72007 18.1376 6.6665 20.6812 6.6665 23.3333V50C6.6665 52.6522 7.72007 55.1957 9.59544 57.0711C11.4708 58.9464 14.0143 60 16.6665 60L13.3332 63.3333V66.6667H16.6665L23.3332 59.9L29.9998 60V43.3333H13.3332V20H43.3332V26.6667H49.9998V23.3333C49.9998 20.6812 48.9463 18.1376 47.0709 16.2623C45.1955 14.3869 42.652 13.3333 39.9998 13.3333ZM16.6665 46.6667C17.5506 46.6667 18.3984 47.0179 19.0235 47.643C19.6486 48.2681 19.9998 49.1159 19.9998 50C19.9998 50.884 19.6486 51.7319 19.0235 52.357C18.3984 52.9821 17.5506 53.3333 16.6665 53.3333C15.7824 53.3333 14.9346 52.9821 14.3095 52.357C13.6844 51.7319 13.3332 50.884 13.3332 50C13.3332 49.1159 13.6844 48.2681 14.3095 47.643C14.9346 47.0179 15.7824 46.6667 16.6665 46.6667ZM68.5665 32.2C68.0998 30.8667 66.8332 30 65.3332 30H41.3665C39.8332 30 38.5998 30.8667 38.0998 32.2L33.3332 45.9V64.2667C33.3332 65.5333 34.3998 66.6667 35.6665 66.6667H37.7332C38.9998 66.6667 39.9998 65.4 39.9998 64.1333V60H66.6665V64.1333C66.6665 65.4 67.6998 66.6667 68.9665 66.6667H70.9998C72.2665 66.6667 73.3332 65.5333 73.3332 64.2667V45.9L68.5665 32.2ZM41.3665 33.3333H65.3332L68.7665 43.3333H37.9332L41.3665 33.3333ZM39.9998 53.3333C39.1158 53.3333 38.2679 52.9821 37.6428 52.357C37.0177 51.7319 36.6665 50.884 36.6665 50C36.6665 49.1159 37.0177 48.2681 37.6428 47.643C38.2679 47.0179 39.1158 46.6667 39.9998 46.6667C40.8839 46.6667 41.7317 47.0179 42.3569 47.643C42.982 48.2681 43.3332 49.1159 43.3332 50C43.3332 50.884 42.982 51.7319 42.3569 52.357C41.7317 52.9821 40.8839 53.3333 39.9998 53.3333ZM66.6665 53.3333C65.7824 53.3333 64.9346 52.9821 64.3095 52.357C63.6844 51.7319 63.3332 50.884 63.3332 50C63.3332 49.1159 63.6844 48.2681 64.3095 47.643C64.9346 47.0179 65.7824 46.6667 66.6665 46.6667C67.5506 46.6667 68.3984 47.0179 69.0235 47.643C69.6486 48.2681 69.9998 49.1159 69.9998 50C69.9998 50.884 69.6486 51.7319 69.0235 52.357C68.3984 52.9821 67.5506 53.3333 66.6665 53.3333Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="md:w-80">
              <p className="md:text-xl sm:text-lg text-base font-semibold">
                Lorem Ipsum dolor sit amet
              </p>
              <p className="font-medium md:text-lg sm:text-base text-sm text-opacity-60">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
              </p>
            </div>
          </div>
          <div className="flex gap-6 mx-auto mb-5">
            <div className="my-auto ">
              <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9999 70.8333L70.3899 66.075V18.3017L39.9999 9.16666M39.9999 70.8333V9.16666M39.9999 70.8333L9.60986 66.075V18.3017L39.9999 9.16666M70.3882 28.2L39.9999 19.635L9.60986 28.2M70.3882 35.0517L39.9999 28.01L9.60986 35.0517"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="md:w-80">
              <p className="md:text-xl sm:text-lg text-base font-semibold">
                Lorem Ipsum dolor sit amet
              </p>
              <p className="font-medium md:text-lg sm:text-base text-sm text-opacity-60">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
