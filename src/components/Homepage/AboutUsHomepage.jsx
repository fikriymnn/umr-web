import React from "react";

function AboutUsHomepage() {
  return (
    <div className="md:px-14 sm:px-14 px-4 w-11/12 mb-24">
      <p className="text-black pt-10 font-extrabold md:text-3xl sm:text-xl text-lg">
        Tentang <span className="text-primary">IBADAHKU</span>
      </p>
      <p className="text-black font-semibold md:text-xl sm:text-sm text-sm italic pt-3">
        Ibadah yang Amanah, Transparan, dan Tenang.

      </p>
      <p className="font-semibold md:text-base text-sm md:line-clamp-none line-clamp-6 pt-2">
        Berawal dari keprihatinan terhadap berbagai masalah dalam layanan
        haji dan umroh—mulai dari overclaim, pengelolaan keuangan yang buruk,
        hingga agen yang tidak bertanggung jawab—Ibadahku hadir sebagai solusi.
      </p>
      <p className="font-semibold md:text-base text-sm md:line-clamp-none line-clamp-6 pt-1">
        Kami percaya, perjalanan ibadah ke Tanah Suci adalah momen suci yang
        harus dijalani dengan amanah dan tenang. Dengan teknologi canggih,
        kami membuka akses informasi yang transparan dan memastikan setiap mitra mematuhi standar pelayanan terbaik.
      </p>
      <p className="font-semibold md:text-lg text-base md:line-clamp-none line-clamp-6 pt-3">
        Ibadahku ada untuk melindungi langkah suci Anda.
      </p>
      <p className="text-black font- md:text-lg text-base  italic">
        Bersama kami, mari wujudkan ibadah yang lebih bermakna.
      </p>
      <a href="/tentangKami" className="font-semibold md:text-base text-sm md:line-clamp-none line-clamp-6 text-amber-500 pt-2">
        lainnya...
      </a>
    </div>
  );
}

export default AboutUsHomepage;
