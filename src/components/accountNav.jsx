import React from "react";

function AccountNav({ account, order }) {
  return (
    <div className="w-full md:w-2/12">
      <div className="bg-white md:h-64 md:rounded-xl rounded-t-xl border-2 border-slate-300 shadow-xl md:py-5 flex md:flex-col md:justify-between">
        <div className="w-full md:pe-2 grid md:grid-cols-1 md:gap-2">
          <button>
            <a
              href="/akun/ProfilSaya"
              className={`hover:bg-[#E3B02B] rounded-ss-xl md:rounded-s-none md:rounded-e-lg py-2 px-4 hover:text-white text-black duration-100 font-semibold text-start flex gap-2 ${account}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9997 2.66667C10.3672 2.66637 8.76326 3.09424 7.34786 3.90757C5.93245 4.7209 4.75512 5.89124 3.93337 7.30178C3.11163 8.71232 2.67422 10.3137 2.6648 11.9461C2.65538 13.5786 3.07428 15.1849 3.87969 16.6048C4.42407 15.8973 5.12386 15.3245 5.92495 14.9306C6.72605 14.5368 7.607 14.3324 8.49969 14.3333H15.4997C16.3924 14.3324 17.2733 14.5368 18.0744 14.9306C18.8755 15.3245 19.5753 15.8973 20.1197 16.6048C20.9251 15.1849 21.344 13.5786 21.3346 11.9461C21.3252 10.3137 20.8877 8.71232 20.066 7.30178C19.2443 5.89124 18.0669 4.7209 16.6515 3.90757C15.2361 3.09424 13.6321 2.66637 11.9997 2.66667ZM21.2665 19.0887C22.8264 17.0551 23.6701 14.5629 23.6664 12C23.6664 5.5565 18.4432 0.333336 11.9997 0.333336C5.55619 0.333336 0.333021 5.5565 0.333021 12C0.329169 14.5629 1.17291 17.0552 2.73285 19.0887L2.72702 19.1097L3.14119 19.5915C4.23539 20.8708 5.59397 21.8975 7.12329 22.6011C8.65261 23.3046 10.3163 23.6682 11.9997 23.6667C14.3649 23.671 16.675 22.9526 18.6205 21.6075C19.4499 21.0344 20.202 20.3569 20.8582 19.5915L21.2724 19.1097L21.2665 19.0887ZM11.9997 5C11.0714 5 10.1812 5.36875 9.52481 6.02513C8.86844 6.68151 8.49969 7.57174 8.49969 8.5C8.49969 9.42826 8.86844 10.3185 9.52481 10.9749C10.1812 11.6313 11.0714 12 11.9997 12C12.9279 12 13.8182 11.6313 14.4746 10.9749C15.1309 10.3185 15.4997 9.42826 15.4997 8.5C15.4997 7.57174 15.1309 6.68151 14.4746 6.02513C13.8182 5.36875 12.9279 5 11.9997 5Z"
                  fill="currentColor"
                />
              </svg>

              <p>Profil</p>
            </a>
          </button>
          <button>
            <a
              href="/akun/PesananSaya"
              className={`hover:bg-[#E3B02B] md:rounded-e-lg py-2 px-4 hover:text-white text-black duration-100 font-semibold text-start flex gap-2 ${order}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5938 22.6563L21.0625 22.125C20.875 21.9375 20.6513 21.8438 20.3913 21.8438C20.1313 21.8438 19.9071 21.9375 19.7188 22.125C19.5313 22.3125 19.4375 22.5313 19.4375 22.7813C19.4375 23.0313 19.5313 23.25 19.7188 23.4375L20.9375 24.6563C21.125 24.8438 21.3438 24.9375 21.5938 24.9375C21.8438 24.9375 22.0625 24.8438 22.25 24.6563L25.2813 21.6875C25.4688 21.5 25.5625 21.2758 25.5625 21.015C25.5625 20.7542 25.4688 20.5304 25.2813 20.3438C25.0938 20.1563 24.8696 20.0625 24.6088 20.0625C24.3479 20.0625 24.1242 20.1563 23.9375 20.3438L21.5938 22.6563ZM21.25 11.25C21.6042 11.25 21.9013 11.13 22.1413 10.89C22.3813 10.65 22.5008 10.3533 22.5 10C22.5 9.64584 22.38 9.34875 22.14 9.10875C21.9 8.86875 21.6033 8.74917 21.25 8.75H8.75C8.39583 8.75 8.09875 8.87 7.85875 9.11C7.61875 9.35 7.49917 9.64667 7.5 10C7.5 10.3542 7.62 10.6513 7.86 10.8913C8.1 11.1313 8.39667 11.2508 8.75 11.25H21.25ZM22.5 28.75C20.7708 28.75 19.2971 28.1404 18.0788 26.9213C16.8604 25.7021 16.2508 24.2283 16.25 22.5C16.25 20.7708 16.8596 19.2967 18.0788 18.0775C19.2979 16.8583 20.7717 16.2492 22.5 16.25C24.2292 16.25 25.7033 16.8596 26.9225 18.0788C28.1417 19.2979 28.7508 20.7717 28.75 22.5C28.75 24.2292 28.1404 25.7033 26.9213 26.9225C25.7021 28.1417 24.2283 28.7508 22.5 28.75ZM6.25 3.75H23.75C24.4375 3.75 25.0263 3.995 25.5163 4.485C26.0063 4.975 26.2508 5.56334 26.25 6.25V14.5938C25.6667 14.3021 25.0571 14.0883 24.4213 13.9525C23.7854 13.8167 23.145 13.7492 22.5 13.75H8.75C8.39583 13.75 8.09875 13.87 7.85875 14.11C7.61875 14.35 7.49917 14.6467 7.5 15C7.5 15.3542 7.62 15.6513 7.86 15.8913C8.1 16.1313 8.39667 16.2508 8.75 16.25H16.375C16.0208 16.6042 15.6929 16.9896 15.3913 17.4063C15.0896 17.8229 14.8238 18.2708 14.5938 18.75H8.75C8.39583 18.75 8.09875 18.87 7.85875 19.11C7.61875 19.35 7.49917 19.6467 7.5 20C7.5 20.3542 7.62 20.6513 7.86 20.8913C8.1 21.1313 8.39667 21.2508 8.75 21.25H13.8438C13.8021 21.4583 13.7758 21.6617 13.765 21.86C13.7542 22.0583 13.7492 22.2717 13.75 22.5C13.75 23.375 13.87 24.2138 14.11 25.0163C14.35 25.8188 14.7092 26.5842 15.1875 27.3125C15.0833 27.3333 14.9738 27.3175 14.8588 27.265C14.7438 27.2125 14.645 27.145 14.5625 27.0625L13.5625 26.0625C13.4375 25.9375 13.2917 25.875 13.125 25.875C12.9583 25.875 12.8125 25.9375 12.6875 26.0625L11.6875 27.0625C11.5625 27.1875 11.4167 27.25 11.25 27.25C11.0833 27.25 10.9375 27.1875 10.8125 27.0625L9.8125 26.0625C9.6875 25.9375 9.54167 25.875 9.375 25.875C9.20833 25.875 9.0625 25.9375 8.9375 26.0625L7.9375 27.0625C7.8125 27.1875 7.66667 27.25 7.5 27.25C7.33333 27.25 7.1875 27.1875 7.0625 27.0625L6.0625 26.0625C5.9375 25.9375 5.79167 25.875 5.625 25.875C5.45833 25.875 5.3125 25.9375 5.1875 26.0625L4.1875 27.0625L3.75 27.3438V6.25C3.75 5.5625 3.995 4.97375 4.485 4.48375C4.975 3.99375 5.56333 3.74917 6.25 3.75Z"
                  fill="currentColor"
                />
              </svg>
              <p>Pesanan Saya</p>
            </a>
          </button>
        </div>
        <div className="flex">
          <button className=" text-black hover:text-red-700 py-2 px-5 font-semibold flex gap-2 items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3337 11H9.25033M18.0003 14.5L21.5003 11L18.0003 7.49999M12.167 5.16666V3.99999C12.167 3.38115 11.9212 2.78766 11.4836 2.35007C11.046 1.91249 10.4525 1.66666 9.83366 1.66666H4.00033C3.38149 1.66666 2.78799 1.91249 2.35041 2.35007C1.91282 2.78766 1.66699 3.38115 1.66699 3.99999V18C1.66699 18.6188 1.91282 19.2123 2.35041 19.6499C2.78799 20.0875 3.38149 20.3333 4.00033 20.3333H9.83366C10.4525 20.3333 11.046 20.0875 11.4836 19.6499C11.9212 19.2123 12.167 18.6188 12.167 18V16.8333"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Keluar</p>
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AccountNav;
