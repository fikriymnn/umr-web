import React from 'react'

function StepByStep() {
    return (
        <div className="flex mx-auto gap-4 justify-between lg:w-80 w-64">
            <div className="flex gap-1">
                <p className="rounded-full lg:text-base text-xs border-2 border-amber-400 text-amber-400 lg:w-10 w-7 text-center ">
                    1
                </p>
                <p className="rounded-full text-amber-400 w-full lg:text-base text-xs ">
                    Data Pesanan
                </p>
            </div>
            <div className="w-12 h-1 bg-zinc-300 my-auto mx-auto rounded-full "></div>
            <div className="flex gap-1">
                <p className="rounded-full border-2 border-zinc-300 text-zinc-300 lg:w-10 w-7 lg:text-base text-xs  text-center ">
                    2
                </p>
                <p className="rounded-full text-zinc-300 w-full lg:text-base text-xs ">
                    Bayar
                </p>
            </div>
        </div>
    )
}

export default StepByStep