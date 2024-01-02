
'use client'
import { React, useState } from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import Image from 'next/image';
const GenericPdfDownloader = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    const downloadPdfDocument = () => {
        if (!imageLoaded) {
            console.warn('Image not fully loaded. Aborting PDF download.');
            return;
        }

        const input = document.getElementById("testId");
        const scaleOptions = { scale: 4 }; // Set the scale to a fixed value (you can adjust this as needed)

        html2canvas(input, { width: 1200, height: 1600, ...scaleOptions })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'JPEG', 10, 10, 180, 240, '', 'FAST');
                pdf.save(`invoice.pdf`);
            });
    }

    return (
        <>
            <div className='w-full flex justify-center items-center p-3'>

                <button className='p-3 bg-green-500 text-white' onClick={downloadPdfDocument}>Download PDF</button>
            </div>
            <div className='flex justify-center items-center bg-slate-100'>

                <div id="testId" style={{ width: 1200, height: 1600 }} className=''>
                    <div>

                        <div className='flex justify-between'>
                            <div>


                                <p className='font-bold md:text-3xl sm:text-xl text-lg md:px-0 px-3'>IBADAHKU</p>

                            </div>



                            <div className='text-end md:mb-10 mb-2 md:px-0 px-3'>

                                <p className='md:text-6xl sm:text-4xl text-2xl font-bold'>INVOICE</p>
                                <p className='text-xl mt-3'>#1</p>
                            </div>
                        </div>

                        <div className='md:flex justify-between mt-5'>
                            <div className='px-3 md:pb-0 pb-5'>

                                <p className='md:text-xl sm:text-lg text-sm'>Bill To:</p>
                                <p className='font-semibold md:text-xl sm:text-lg text-sm'>Bukan Saya</p>



                            </div>
                            <div className='flex gap-5 md:justify-normal justify-between px-3 '>
                                <div className='md:text-end text-start flex flex-col gap-2 '>

                                    <p className='text-slate-500 md:text-xl sm:text-lg text-sm'>Date:</p>
                                    <p className='text-slate-500 md:text-xl sm:text-lg text-sm'>Payment Terms:</p>
                                    <p className='text-slate-500 md:text-xl sm:text-lg text-sm'>Due Date:</p>
                                    <p className='text-slate-500 md:text-xl sm:text-lg text-sm'>PO Number:</p>
                                    <p className='font-semibold md:text-xl sm:text-lg text-sm'>Balance Due:</p>
                                </div>
                                <div className='text-end flex flex-col gap-2'>
                                    <p className='md:text-xl sm:text-lg text-sm'>Des 20, 1945</p>
                                    <p className='md:text-xl sm:text-lg text-sm'>3</p>
                                    <p className='md:text-xl sm:text-lg text-sm'>Dec 1, 1975</p>
                                    <p className='md:text-xl sm:text-lg text-sm'>2223344</p>
                                    <p className='font-semibold md:text-xl sm:text-lg text-sm'>IDR 96.000.000</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <table className=" w-full rounded-lg mt-10 px-3">
                        <thead className=''>
                            <tr className="flex bg-gray-900 rounded-lg">
                                <th className="text-white flex flex-col md:w-[50%] w-[35%] md:p-3 p-2 font-semibold  md:text-lg sm:text-sm text-xs text-start my-auto">
                                    Item
                                </th>
                                <th className="text-white flex flex-col w-[15%] md:p-3 p-2 font-semibold  md:text-lg sm:text-sm text-xs text-start">
                                    Quantity
                                </th>
                                <th className="text-white flex flex-col   md:w-[15%] w-[25%] md:p-3 p-2 font-semibold  md:text-lg sm:text-sm text-xs text-end">
                                    Rate
                                </th>
                                <th className="text-white flex flex-col md:w-[20%] w-[25%] md:p-3 p-2 font-semibold  md:text-lg sm:text-sm text-xs text-end">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="flex">
                                <td className="flex flex-col md:w-[50%] w-[35%] md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-xs">
                                    Paket super hemat bersama Komeng
                                </td>
                                <td className="flex flex-col  w-[15%] md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-xs">
                                    3
                                </td>
                                <td className="flex flex-col md:w-[15%] w-[25%]  md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-xs text-end">
                                    IDR 32,000,000.00
                                </td>
                                <td className="flex flex-col md:w-[20%] w-[25%] md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-xs text-end">
                                    IDR 96,000,000.00
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div>
                        <div className='flex gap-5 justify-end mt-20 px-3'>
                            <div className='text-end flex flex-col gap-2'>

                                <p className='text-slate-500 md:text-xl sm:text-lg text-xs'>SubTotal:</p>
                                <p className='text-slate-500 md:text-xl sm:text-lg text-xs'>Tax 4%:</p>
                                <p className='text-slate-500 md:text-xl sm:text-lg text-xs'>Total:</p>
                                <p className='text-slate-500 md:text-xl sm:text-lg text-xs'>Amount Paid:</p>

                            </div>
                            <div className='text-end flex flex-col gap-2'>
                                <p className='md:text-xl sm:text-lg text-xs'>IDR 96,000,000.00</p>
                                <p className='md:text-xl sm:text-lg text-xs'>IDR 3,000,000.00</p>
                                <p className='md:text-xl sm:text-lg text-xs'>IDR 99,000,000.00</p>
                                <p className='md:text-xl sm:text-lg text-xs'>IDR 30,000,000.00</p>

                            </div>

                        </div>
                    </div>
                    <div className='px-3'>
                        <p className='md:text-lg sm:text-base text-xs'>Note: </p>
                        <p className='md:text-lg sm:text-base text-xs'>

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facilis adipisci illo? Neque eos dolorem alias ad, tempore ea voluptates, magnam, eum earum tenetur praesentium accusantium id eligendi labore quo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default GenericPdfDownloader;