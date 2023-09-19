'use client';
import React from 'react';
import Image from 'next/image';
import Testimonial from "@/components/testimonial";
import Facility from "@/components/facility";
import DefaultCarousel from "@/components/Carousel";
import PackageCard from "@/components/packagecard"
import { Carousel } from 'flowbite';
import TableHarga from '@/components/tableHarga'
import DropdownDetail from '@/components/DropdownDetail'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';



function formPesan() {
    return (
        <div className='bg'>

            <div className="flex pt-10 bg-cover bg-[url('/assets/images/image2.png')] z-10">
                <div className='w-8/12'>

                    <div className='h-[50px]'></div>
                    <div className='bg-white w-10/12 ms-20 rounded-xl'>

                        <div className='flex py-7 px-14'>
                            <div className='w-[140px]'>
                                <div className='w-[120px] h-[120px] bg-gray-500 rounded-full'></div>
                            </div>
                            <div className='w-full ps-5'>
                                <h1 className=' text-black text-4xl pb-3 font-semibold'>Nama Pemesan</h1>
                                <div className='flex pb-3'>
                                    <p className='text-black text-2xl'>Rudi Kastana</p>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-10/12 ms-20 rounded-xl'>

                        <div className='w-full py-7  font-semibold'>
                            <div className='flex pb-1 px-14 gap-5'>
                                <div>
                                    <img src="../../assets/vector/vector.svg" alt="" />
                                </div>
                                <h1 className='text-2xl text-black pb-7'>Tipe Pembayaran</h1>
                            </div>


                            <div className=' flex justify-center items-center'>
                                <div className=' w-10/12 h-[50px] rounded-xl bg-gray-500 flex justify-center items-center '>
                                    <p className='text-[#E3B02B] text-center text-lg'>Uang Muka Sebesar Rp 6.000.000</p>
                                </div>

                            </div>
                        </div>
                        <div className=' flex justify-center items-center mb-20'>

                            <TableHarga />
                        </div>
                        <div className='h-[20px]'></div>
                    </div>

                    <div className='bg-white w-10/12 ms-20 rounded-xl mt-10 mb-10'>

                        <div className='w-full py-7 font-semibold'>
                            <div className='flex pb-1 px-14 gap-5'>
                                <div>
                                    <img src="../../assets/vector/vectorya.svg" alt="" />
                                </div>
                                <h1 className='text-2xl text-black pb-7'>Jemaah Ke-1</h1>
                            </div>


                            <div className=' flex  px-14 gap-5'>
                                <div className='grid grid-cols-1'>

                                    <p>Gender</p>
                                    <DropdownDetail />
                                    <br />
                                </div>
                                <div>
                                    <div>
                                        <p>Nama Lengkap</p>
                                    </div>
                                    <TextInput
                                        id="nama"
                                        placeholder="Ketik Nama Lengkap.."
                                        required
                                        type="nama"
                                        className='w-96 '
                                    />
                                    <div>
                                        <p className='text-[#E3B02B] text-xs'>&#40;Sesuai dengan KTP &sol; Paspor tanpa gelar&#41;</p>
                                    </div>
                                </div>

                            </div>
                            <div className=' flex  px-14 gap-5 pt-5'>
                                <div>
                                    <div>
                                        <p>Nomor Whatsapp</p>
                                    </div>
                                    <TextInput
                                        id="whatsapp"
                                        placeholder="Ketik Nomor Whatsapp.."
                                        required
                                        type="whatsapp"
                                        className=' '
                                    />

                                </div>
                                <div>
                                    <div>
                                        <p>Email</p>
                                    </div>
                                    <TextInput
                                        id="Email"
                                        placeholder="Ketik Email.."
                                        required
                                        type="Email"
                                        className='mb-10 '
                                    />

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='px-14 w-10/12 ms-10 mb-20 h-96'> <p className='font-bold'>
                        Jika anda setuju dengan <span className='text-[#E3B02B]'>Syarat & Kebijakan Privasi,</span>  Silahkan klik tombol &rdquo;Lanjut Pembayaran&rdquo; . untuk memilih cara pembayaran</p></div>



                </div>




            </div >







        </div>
    )
}

export default formPesan