'use client'
import React from 'react'
import Dropdown from '@/components/Dropdown';
import Image from 'next/image';
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard"
import StarsRating from '@/components/starsRating';

function DetailMitra() {
    return (
        <div className='bg'>
            <div className="pt-10 bg-cover bg-[url('/assets/images/image2.png')] z-10">
                <div className='bg-white rounded-xl mx-20 mb-10 flex'>
                    <div className=' w-3/6 p-10'>
                        <div className='flex py-1 '>
                            <div className=' '>
                                <div className='w-[100px] h-[100px] bg-gray-500 rounded-full '></div>
                            </div>
                            <div className='w-9/12 ps-5'>
                                <h1 className=' text-black text-3xl pb-3 font-semibold'>Travel Keren Dongs</h1>
                                <div className='flex pb-3 gap-9'>
                                    <div className='flex gap-1'>

                                        <p className='text-black text-xl font-bold'>60</p>
                                        <p className='text-black text-xl'>Penilaian</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <p className='text-black text-xl'>Rating</p>
                                        <div className='pb-1'>

                                            <StarsRating />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-black text-xl pb-1'>Nomor Izin Umroh:</p>
                                <p className='text-black text-xl pb-1'>123123123123</p>
                                <div className='flex items-center'>
                                    <div className=' w-1/12'>
                                        <Image
                                            src='/assets/vector/location.svg'
                                            alt='icon'
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                    <p className='text-black text-xl font-semibold'>Bandung</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=' w-3/6 flex'>
                        <div className='grid grid-cols-1'>
                            <div></div>
                            <div className='w-[3px] bg-gray-400'></div>
                            <div className='w-[3px] bg-gray-400'></div>
                            <div className='w-[3px] bg-gray-400'></div>
                            <div className='w-[3px] bg-gray-400'></div>
                            <div className='w-[3px] bg-gray-400'></div>
                            <div></div>
                        </div>
                        <div className='w-full py-14 px-20 grid grid-rows-3 gap-5 items-center'>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/vector/buildings.svg'
                                        alt='icon'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className='text-xl'>Pt. Travel Kerens Dongs Indonesia</p>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/vector/email.svg'
                                        alt='icon'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className='text-xl'>traveldongs@gmail.com</p>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/vector/web.svg'
                                        alt='icon'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className='text-xl'>www.traveldongs.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex'>
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
                </div>
            </div >
        </div>
    )
}

export default DetailMitra