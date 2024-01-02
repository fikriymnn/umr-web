"use client";
import React from "react";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import ThreeCarousel from "./threeCarousel";
import SingleCarousel from "@/components/Homepage/singleCarousel"

function MitrakamiCarousel() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    setIsClient(true);
    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <>
      {isMobile && (
        <>
          <div className="z-10 mx-auto  translate-y-5">
            <SingleCarousel />
          </div>
        </>
      )}
      {!isMobile && (<>
        <ThreeCarousel />

      </>)}

    </>
  )
}

export default MitrakamiCarousel