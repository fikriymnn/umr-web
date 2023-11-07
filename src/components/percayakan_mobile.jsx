'use client'
import React from 'react'
import { isMobile } from "react-device-detect";

function Percayakan_mobile() {
    return (
        <>
            {isMobile && (
                <div className="w-4/5 mx-auto  mt-16">
                    <p className="font-extrabold text-3xl md:hidden sm:visible visible">
                        Percayakan Perjalanan Umroh anda kepada Ibadahku
                    </p>
                </div>
            )}
        </>
    )
}

export default Percayakan_mobile