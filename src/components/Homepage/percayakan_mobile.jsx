"use client";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";

function Percayakan_mobile() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
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
          <div className="w-4/5 mx-auto  mt-16">
            <p className="font-extrabold text-2xl md:hidden sm:visible visible">
              Percayakan Perjalanan Umroh anda kepada{" "}
              <span className="text-primary">Ibadahku</span>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Percayakan_mobile;
