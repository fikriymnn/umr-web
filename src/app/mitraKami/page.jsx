import React from 'react'

import MitraCard from '@/components/mitraCard'

function MitraKami() {
    return (
        <>

            <div> <p className=" text-black text-xl font-bold md:px-32 py-14 p-7">
                Mitra Kami
            </p></div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:mx-32 mx-7 pb-10'>
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