import React from "react";

function OrderNav({ belbay, belbayl, proc, procl, done, donel }) {
  return (
    <>
      <div className="flex flex-col">
        <a href="/akun/PesananSaya/BelumBayar">
          {" "}
          <button className={`${belbay}`}>Belum Bayar</button>
        </a>
        <div className={` ${belbayl}`}></div>
      </div>
      <div className="flex flex-col">
        <a href="/akun/PesananSaya/Diproses">
          <button className={`${proc}`}>Diproses</button>
        </a>
        <div className={`${procl}`}></div>
      </div>
      <div className="flex flex-col">
        <a href="/akun/PesananSaya/Selesai">
          {" "}
          <button className={`${done}`}>Selesai</button>
        </a>
        <div className={`${donel}`}></div>
      </div>
    </>
  );
}

export default OrderNav;
