import React from 'react'
import Image from "next/image";
import StarsRating from '@/components/starsRating'
function MitraCard() {
    return (

        <div className=' bg-white rounded-xl shadow-xl'>
            <div className='p-3'>
                <div className='bg-white w-10/12 flex justify-center rounded-xl'>

                    <div className='flex py-1 '>
                        <div className=' '>
                            <div className='w-[120px] h-[120px] bg-gray-500 rounded-full '></div>
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
                            <p className='text-black text-xl pb-3'>Nomor Izin Umroh:</p>
                            <p className='text-black text-xl pb-3'>123123123123</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className='pb-2'>
                <a href="">
                    <p className='flex justify-end pe-10 text-yellow-300'>Lihat Paket Lainnya &rsaquo;</p>
                </a>

            </div>
            <div className="flex justify-evenly pb-9">

                <div className='bg-gray-300 h-[100px] w-[160px] rounded-md'>

                </div>
                <div className='bg-gray-300 h-[100px] w-[160px] rounded-md'>

                </div>
                <div className='bg-gray-300 h-[100px] w-[160px] rounded-md'>

                </div>
            </div>
        </div>

    )
}

export default MitraCard