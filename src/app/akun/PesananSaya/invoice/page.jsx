
'use client'
import { React, useState, useEffect } from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import Image from 'next/image';
const GenericPdfDownloader = () => {
    const searchParams = useSearchParams();
    const [order, setOrder] = useState(null);
    const id = searchParams.get("id");
    useEffect(() => {

        getDetailOrder(id);
    }, [id]);


    async function getDetailOrder(idd) {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_URL}/order/${id}`,
                {
                    withCredentials: true,
                }
            );
            if (res.data.success == true) {
                console.log(res.data.data);
                setOrder(res.data.data);

            }
        } catch (error) {
            console.log(error.response);
        }
    }
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    const downloadPdfDocument = () => {


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
            {order == null ? (<></>) :
                (<>


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
                                        <p className='font-semibold md:text-xl sm:text-lg text-sm'> {order.nama_pemilik_rekening}</p>



                                    </div>
                                    <div className='flex gap-5 md:justify-normal justify-between px-3 '>
                                        <div className='md:text-end text-start flex flex-col gap-2 '>

                                            <p className='text-slate-500 md:text-xl sm:text-lg text-xs'>Date:</p>

                                            <p className='text-slate-500 md:text-xl sm:text-lg text-xs'>PO Number:</p>
                                            <p className='font-semibold md:text-xl sm:text-lg text-xs'>Balance Due:</p>
                                        </div>
                                        <div className='text-end flex flex-col gap-2'>
                                            <p className='md:text-xl sm:text-lg text-xs'>Des 20, 1945</p>

                                            <p className='md:text-xl sm:text-lg text-xs'>2223344</p>
                                            <p className='font-semibold md:text-xl sm:text-lg text-xs'>{order == null ? "ddd" : order.jumlah_bayar.toLocaleString('id-ID', {
                                                style: 'currency',
                                                currency: 'IDR',
                                                minimumFractionDigits: 0,
                                            })}</p>
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
                                        <td className="flex flex-col md:w-[50%] w-[35%] md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-[10px]">
                                            {order.paket[0].title}
                                        </td>
                                        <td className="flex flex-col  w-[15%] md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-[10px]">
                                            {order.jamaah.length}
                                        </td>
                                        <td className="flex flex-col md:w-[15%] w-[25%]  md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-[10px] text-end">
                                            {order.paket[0].price.toLocaleString('id-ID', {
                                                style: 'currency',
                                                currency: 'IDR',
                                                minimumFractionDigits: 0,
                                            })}
                                        </td>
                                        <td className="flex flex-col md:w-[20%] w-[25%] md:p-3 p-2 font-semibold md:text-lg sm:text-sm text-[10px] text-end">
                                            {order.jumlah_bayar.toLocaleString('id-ID', {
                                                style: 'currency',
                                                currency: 'IDR',
                                                minimumFractionDigits: 0,
                                            })}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div>
                                <div className='flex gap-5 justify-end mt-20 px-3'>
                                    <div className='text-end flex flex-col gap-2'>

                                        <p className='text-slate-500 md:text-xl sm:text-lg text-[10px]'>SubTotal:</p>
                                        <p className='text-slate-500 md:text-xl sm:text-lg text-[10px]'>Tax 4%:</p>
                                        <p className='text-slate-500 md:text-xl sm:text-lg text-[10px]'>Total:</p>
                                        <p className='text-slate-500 md:text-xl sm:text-lg text-[10px]'>Amount Paid:</p>

                                    </div>
                                    <div className='text-end flex flex-col gap-2'>
                                        <p className='md:text-xl sm:text-lg text-[10px]'>IDR 96,000,000.00</p>
                                        <p className='md:text-xl sm:text-lg text-[10px]'>IDR 3,000,000.00</p>
                                        <p className='md:text-xl sm:text-lg text-[10px]'>IDR 99,000,000.00</p>
                                        <p className='md:text-xl sm:text-lg text-[10px]'>IDR 30,000,000.00</p>

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
                </>)}
        </>
    )

}

export default GenericPdfDownloader;