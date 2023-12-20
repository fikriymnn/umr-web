
'use client'
import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import Image from 'next/image';

const GenericPdfDownloader = () => {

    const downloadPdfDocument = () => {
        const input = document.getElementById("testId");
        html2canvas(input, { width: 1200, height: 1600 })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                // Sesuaikan koordinat dan ukuran sesuai kebutuhan Anda
                pdf.addImage(imgData, 'JPEG', 10, 10, 180, 240, '', 'FAST'); // Ganti 'FAST' dengan nilai kualitas yang diinginkan

                pdf.save(`invoice.pdf`);
            });

    }
    return (
        <>
            <button onClick={downloadPdfDocument}>Download Pdf</button>
            <div className='flex justify-center items-center bg-slate-100'>

                <div id="testId" style={{ width: 1200, height: 1600 }}>
                    <div>

                        <div className='flex justify-between'>
                            <div>

                                <Image
                                    src="/assets/images/ibadahku1k2.png"
                                    alt=""
                                    width={200}
                                    height={200}
                                />
                                <p className='font-bold text-lg'>IBADAHKU</p>

                            </div>



                            <div className='text-end mb-10'>

                                <p className='text-4xl font-bold'>INVOICE</p>
                                <p>#1</p>
                            </div>
                        </div>

                        <div className='flex justify-between mt-5'>
                            <div>

                                <p>Bill To:</p>
                                <p className='font-semibold'>Bukan Saya</p>



                            </div>
                            <div className='flex gap-5 '>
                                <div className='text-end flex flex-col gap-2'>

                                    <p className='text-slate-500'>Date:</p>
                                    <p className='text-slate-500'>Payment Terms:</p>
                                    <p className='text-slate-500'>Due Date:</p>
                                    <p className='text-slate-500'>PO Number:</p>
                                    <p className='font-semibold'>Balance Due:</p>
                                </div>
                                <div className='text-end flex flex-col gap-2'>
                                    <p className=''>Des 20, 1945</p>
                                    <p className=''>3</p>
                                    <p className=''>Dec 1, 1975</p>
                                    <p className=''>2223344</p>
                                    <p className='font-semibold text-lg'>IDR 96.000.000</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <table className=" w-full rounded-lg mt-10">
                        <thead>
                            <tr className="flex bg-gray-900 rounded-lg">
                                <th className="text-white flex flex-col w-[50%] md:p-3 p-2 font-semibold  md:text-base sm:text-sm text-xs text-start">
                                    Item
                                </th>
                                <th className="text-white flex flex-col w-[15%] md:p-3 p-2 font-semibold  md:text-base sm:text-sm text-xs text-start">
                                    Quantity
                                </th>
                                <th className="text-white flex flex-col   w-[15%] md:p-3 p-2 font-semibold  md:text-base sm:text-sm text-xs text-end">
                                    Rate
                                </th>
                                <th className="text-white flex flex-col w-[20%] md:p-3 p-2 font-semibold  md:text-base sm:text-sm text-xs text-end">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="flex">
                                <td className="flex flex-col w-[50%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                                    Paket super hemat bersama
                                </td>
                                <td className="flex flex-col  w-[15%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs">
                                    3
                                </td>
                                <td className="flex flex-col w-[15%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs text-end">
                                    IDR 32,000,000.00
                                </td>
                                <td className="flex flex-col w-[20%] md:p-3 p-2 font-semibold md:text-base sm:text-sm text-xs text-end">
                                    IDR 96,000,000.00
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div>
                        <div className='flex gap-5 justify-end mt-20 '>
                            <div className='text-end flex flex-col gap-2'>

                                <p className='text-slate-500'>SubTotal:</p>
                                <p className='text-slate-500'>Tax 4%:</p>
                                <p className='text-slate-500'>Total:</p>
                                <p className='text-slate-500'>Amount Paid:</p>

                            </div>
                            <div className='text-end flex flex-col gap-2'>
                                <p className=''>IDR 96,000,000.00</p>
                                <p className=''>IDR 3,000,000.00</p>
                                <p className=''>IDR 99,000,000.00</p>
                                <p className=''>IDR 30,000,000.00</p>

                            </div>

                        </div>
                    </div>
                    <div>
                        <p>Note: </p>
                        <p>

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facilis adipisci illo? Neque eos dolorem alias ad, tempore ea voluptates, magnam, eum earum tenetur praesentium accusantium id eligendi labore quo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default GenericPdfDownloader;