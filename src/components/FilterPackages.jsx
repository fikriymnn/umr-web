'use client'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { useState, useEffect } from "react";
import Image from 'next/image';

function FilterPackages() {
    const [comp, setComp] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    const toggleNav = () => {
        setComp((prevComp) => (prevComp === 1 ? 0 : 1));
    };
    return (
        <>

            {isClient && (
                <>
                    {isMobile && (
                        <>

                            <div onClick={toggleNav} className=" bg-slate-100 w-full flex px-7 py-2 fixed z-40 shadow-md">

                                <div className=" flex gap-1 border  rounded-md px-3 py-1 bg-white">
                                    <Image src={"/assets/images/settings-sliders.png"} width={20} height={10} alt="" />
                                    <p className="my-auto">Filter</p>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}

            {isClient && (
                <>
                    {isMobile && (
                        <>
                            {comp == 1 && (
                                <>
                                    <div className="bg-white  rounded-xl h-[90%] overflow-y-scroll fixed z-30">
                                        <div>
                                            <div className='flex'>

                                                <div className=" bg-black mx-auto rounded-b-xl">
                                                    <p className="text-lg font-semibold text-[#E3B02B] text-center py-2 px-3">
                                                        Filter Berdasarkan
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-5 px-7 text-base text-center font-medium text-black">
                                                <h1 className="font-semibold">Kota Keberangkatan</h1>
                                                <div className="grid grid-cols-3 gap-2 py-3">
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center ">
                                                        Semua
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Bandung
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Jakarta
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Bogor
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Bangka Belitung
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Jogjakarta
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="py-5 px-7 text-xl text-center font-medium text-black">
                                                <h1 className="font-semibold">Kategori Paket Umroh</h1>
                                                <div className="grid grid-cols-3 gap-5 py-3">
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Semua
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Reguler
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Plus Wisata
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="py-5 px-7 text-xl text-center font-medium text-black">
                                                <h1 className="font-semibold">Estimasi Biaya Umroh</h1>
                                                <div className="grid grid-cols-3 gap-2 py-3">
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Semua
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        30jt - 40jt
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        &lt; 30jt
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        &gt; 30jt
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="py-5 px-7 text-xl text-center font-medium text-black">
                                                <h1 className="font-semibold">Durasi Perjalanan</h1>
                                                <div className="grid grid-cols-3 gap-2 py-3">
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        Semua
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        7 Hari
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        8 hari
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        9 hari
                                                    </button>
                                                    <button className=" text-sm h-[30px] hover:bg-[#E3B02B] border border-gray-500 rounded-md flex items-center justify-center">
                                                        10 hari
                                                    </button>
                                                </div>
                                            </div>
                                            <div onClick={toggleNav} className="flex justify-center">
                                                <div className='w-4/12 p-2 text-center mb-6 bg-green-600 rounded-md text-white'>
                                                    Search
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default FilterPackages