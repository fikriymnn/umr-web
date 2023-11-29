import React from "react";
import Image from "next/image";

function Notice() {
  return (
    <div className="bg w-screen h-screen -translate-y-8 flex flex-col justify-center items-center text-center">
      <Image
        src="/assets/images/betol.png"
        width={200}
        height={200}
        alt="icon"
      />
      <div className="font-bold text-3xl text-amber-500">
        <p>Bukti Pembayaran Terkirim</p>
      </div>
      <div className="py-2 px-60 text-lg font-medium">
        <p>
          Terimakasih telah mengirim bukti pembayaran anda, tim Ibadahku akan
          mengonfirmasi bukti transaksi anda, untuk mengecek status pesanan
          anda, masuk ke halaman{" "}
          <a
            className="font-bold text-amber-600 hover:text-amber-400"
            href="/akun/PesananSaya/Diproses"
          >
            Pesanan Saya
          </a>
        </p>
      </div>
    </div>
  );
}

export default Notice;
