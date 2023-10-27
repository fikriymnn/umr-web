'use client'
import React from 'react'
import Dropdown from '@/components/Dropdown';
import Image from 'next/image';
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard"

function Package() {
    return (
        <div className='bg mb-10'>
            <div className="flex pt-10 bg-cover bg-[url('/assets/images/image2.png')] z-10 ">

                <div className='w-4/12'>
                    <div className='bg-white w-10/12 ms-20 rounded-xl'>
                        <div >
                            <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                                <p className='text-2xl font-semibold text-[#E3B02B] text-center pt-3'>Filter Berdasarkan</p>
                            </div>
                            <div className='py-5 px-7 text-xl text-center font-medium text-black'>
                                <h1 className='font-semibold'>Kota Keberangkatan</h1>
                                <div className='grid grid-cols-2 gap-5 py-3'>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Semua
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Bandung
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Jakarta
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Bogor
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Semarang
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Jogjakarta
                                    </button>
                                </div>
                            </div>

                            <div className='py-5 px-7 text-xl text-center font-medium text-black'>
                                <h1 className='font-semibold'>Kategori Paket Umroh</h1>
                                <div className='grid grid-cols-2 gap-5 py-3'>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Semua
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Reguler
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Plus Wisata
                                    </button>
                                </div>
                            </div>

                            <div className='py-5 px-7 text-xl text-center font-medium text-black'>
                                <h1 className='font-semibold'>Estimasi Biaya Umroh</h1>
                                <div className='grid grid-cols-2 gap-5 py-3'>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Semua
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        30jt - 40jt
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        &lt; 30jt
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        &gt; 30jt
                                    </button>
                                </div>
                            </div>

                            <div className='py-5 px-7 text-xl text-center font-medium text-black'>
                                <h1 className='font-semibold'>Durasi Perjalanan</h1>
                                <div className='grid grid-cols-2 gap-5 py-3'>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        Semua
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        7 Hari
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        8 hari
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        9 hari
                                    </button>
                                    <button
                                        className='h-[50px] hover:bg-[#E3B02B] border border-gray-500 rounded-xl flex items-center justify-center'
                                    >
                                        10 hari
                                    </button>
                                </div>
                            </div>
                            <div className='h-[20px]'></div>
                        </div>
                    </div>
                </div>
                <div className='w-8/12 ml-10 mr-20'>
                    <div className='bg-white rounded-xl w-10/12'>
                        <div className='flex '>
                            <div className='w-3/6 p-5'>
                                <h1 className='w-full mb-2 text-xl font-semibold'>Jenis Keberangkatan</h1>
                                <Dropdown />
                            </div>
                            <div className='w-3/6 p-5'>
                                <h1 className='w-full mb-2 text-xl font-semibold'>Waktu Keberangkatan</h1>
                                <Dropdown />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-semibold  my-5'>List Paket Umroh Yang Tersedia</h1>
                        <div className='grid grid-cols-2 gap-10'>
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Package