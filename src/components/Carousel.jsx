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
            src={data.img}
          />
        );
      })}
    </Carousel>
  );
}
