import React from 'react';
import Image from 'next/image';
import Testimonial from "@/components/testimonial";
import DefaultCarousel from "@/components/Carousel";
import { Carousel } from 'flowbite';

function PackageDetail() {
    return (
        <div className='bg'>

            <div className="flex pt-10 bg-cover bg-[url('/assets/images/image2.png')] z-10">
                <div className='w-8/12'>
                    <div className=' bg-white w-10/12 h-[681px] ms-20 rounded-xl'>
                        <div className='h-[60px] rounded-t-xl center'>
                            <p className='text-xl text-semibold text-center pt-3 text-black'>Umroh Dream Exclusive Plus Kereta Cepat 10 Hari</p>
                        </div>
                        <div className='bg-gray-900 w-full h-[315px] rounded-xl'>
                            <DefaultCarousel />
                        </div>
                        <div className='grid grid-cols-2 gap-5 p-7'>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/images/mdi_guest-room.png'
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Pilihan Kamar</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>Satu Kamar 4 Orang QUAD</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/images/mdi_guest-room.png'
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Tanggal Keberangkatan</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>10 September 2023</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/images/mdi_guest-room.png'
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Maskapai Pesawat</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>Garuda</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/images/mdi_guest-room.png'
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Kota Keberangkatan</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>Jakarta</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/images/mdi_guest-room.png'
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Durasi Perjalanan</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>9 Hari</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src='/assets/images/mdi_guest-room.png'
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Hotel</p>

                                    <div class="ps-1 pt-2 flex items-center space-x-1">
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-10/12 ms-20 rounded-xl'>
                        <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                            <p className='text-2xl font-semibold text-[#E3B02B] text-center pt-3'>Mitra Travel</p>
                        </div>
                        <div className='flex py-7 px-14'>
                            <div className='w-[140px]'>
                                <div className='w-[120px] h-[120px] bg-gray-500 rounded-full'></div>
                            </div>
                            <div className='w-full ps-5'>
                                <h1 className=' text-black text-4xl pb-3 font-semibold'>Travel Keren Dongs</h1>
                                <div className='flex pb-3'>
                                    <p className='text-black text-2xl'>60 Penilaian</p>
                                    <div className='flex'>
                                        <p className='text-black text-2xl'>Rating</p>
                                        <p className='text-black text-2xl'>Bintang</p>
                                    </div>
                                </div>
                                <p className='text-black text-2xl pb-3'>Nomor Izin Umroh</p>
                                <p className='text-black text-2xl pb-3'>123123123123</p>

                            </div>
                        </div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-10/12 ms-20 rounded-xl'>
                        <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                            <p className='text-2xl font-semibold text-[#E3B02B] text-center pt-3'>Testimoni Travel</p>
                        </div>
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <div className='h-[20px]'></div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-10/12 ms-20 rounded-xl'>
                        <div >
                            <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                                <p className='text-2xl font-semibold text-[#E3B02B] text-center pt-3'>Fasilitas Umroh</p>
                            </div>
                            <div className='py-7 px-14 text-2xl font-semibold text-black'>
                                <p>Kamar Hotel</p>
                                <p>List nomer 2</p>
                                <p>List Nomer 3</p>
                            </div>
                            <div className='h-[20px]'></div>
                        </div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-10/12 ms-20 rounded-xl'>
                        <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                            <p className='text-2xl font-semibold text-[#E3B02B] text-center pt-3'>Maskapai</p>
                        </div>
                        <div className='flex py-7 px-14'>
                            <div className='w-[140px]'>
                                <div className='w-[120px] h-[120px] bg-gray-500 rounded-full'></div>
                            </div>
                            <div className='w-full ps-5'>
                                <h1 className=' text-black text-4xl pt-[40px] font-semibold'>Air Asia Airlines</h1>

                            </div>
                        </div>
                        <div className='h-[20px]'></div>
                    </div>

                </div>
                <div className='w-4/12 z-10 fixed right-10'>
                    {/* <DetailCard /> */}
                </div>
            </div >

        </div>
    )
}

export default PackageDetail