import React from "react";

function TabelHarga2() {
  return (
    <>
      <div className="flex gap-16 justify-center items-center  border-2 border-black rounded-t-md">
        <p className="">Tahap</p>
        <p>Tanggal Pembayaran</p>
        <p>Jumlah</p>
      </div>
      <div className="flex gap-16 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p>Uang Muka</p>
          <p>Bayar ke-2</p>
          <p>Bayar ke-3</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Uang Muka</p>
          <p>Bayar ke-2</p>
          <p>Bayar ke-3</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Uang Muka</p>
          <p>Bayar ke-2</p>
          <p>Bayar ke-3</p>
        </div>
      </div>
    </>
  );
}

export default TabelHarga2;
