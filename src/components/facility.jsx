import React from 'react'
import Image from 'next/image'

function Facility() {
    return (
        <div className='w-full py-7 px-14 font-semibold'>
            <h1 className='text-2xl text-black pb-1'>Mekkah</h1>
            <h3 className='text-2xl text-black pb-1'>Rayyana Hotel</h3>

            <div className='grid grid-cols-4 gap-1 pt-5'>
                <div className='w-[122px] h-[88px] bg-gray-500'></div>
                <div className='w-[122px] h-[88px] bg-gray-500'></div>
                <div className='w-[122px] h-[88px] bg-gray-500'></div>
                <div className='w-[122px] h-[88px] bg-gray-500'></div>
            </div>
            <h1 className='text-2xl text-black pt-5'>Fasilitas</h1>
            <div className='grid grid-cols-3 pt-5 gap-y-1'>
                <div className='flex '>
                    <div className='w-2/12'>
                        <Image
                            src='/assets/vector/wifi.svg'
                            alt='icon'
                            width={25}
                            height={25}
                        />
                    </div>
                    <div>
                        <p className='ps-1 text-xl text-black'>Free WiFi</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-2/12'>
                        <Image
                            src='/assets/vector/spoon.svg'
                            alt='icon'
                            width={25}
                            height={25}
                        />
                    </div>
                    <div>
                        <p className='ps-1 text-xl text-black'>Tempat Makan</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-2/12'>
                        <Image
                            src='/assets/vector/door.svg'
                            alt='icon'
                            width={25}
                            height={25}
                        />
                    </div>
                    <div>
                        <p className='ps-1 text-xl text-black'>Pelayanan Kamar</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-2/12'>
                        <Image
                            src='/assets/vector/disabled.svg'
                            alt='icon'
                            width={25}
                            height={25}
                        />
                    </div>
                    <div>
                        <p className='ps-1 text-xl text-black'>Disabilitas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility