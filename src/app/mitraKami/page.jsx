import React from 'react'

import MitraCard from '@/components/mitraCard'

function MitraKami() {
    return (
        <>

            <div> <p className=" text-black text-xl font-bold p-14">
                Mitra Kami
            </p></div>
            <div className='grid grid-cols-2 gap-5 mx-14 pb-10'>
                <MitraCard />
                <MitraCard />
                <MitraCard />
                <MitraCard />
                <MitraCard />
                <MitraCard />
            </div>
        </>
    )
}

export default MitraKami