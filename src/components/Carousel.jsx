"use client";

import { Carousel } from "flowbite-react";

export default function DefaultCarousel({ image }) {
  return (
    <Carousel>
      {image.map((data, i) => {
        return (
          <img
            key={i}
            className=""
            alt="..."
            src={`${process.env.NEXT_PUBLIC_URL}/images/${data.img}`}
          />
        );
      })}
    </Carousel>
  );
}
