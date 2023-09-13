'use client'
import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
function Login() {
    return (
        <div className=" bg-login w-full h-screen z-20">
            <div className=" bg-cover bg-[url('/assets/images/image6.png')] z-10 w-full h-screen flex items-center">
                <div className='w-[389px] h-[471px] ps-14 '>
                    <p className='text-3xl font-extrabold text-white'>Selamat Datang !</p>
                    <p className='text-white pb-4'>Masukan Akun</p>
                    <Card>
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">

                                </div>
                                <TextInput
                                    id="nama"
                                    placeholder="Nomor Whatsapp atau Email"
                                    required
                                    type="nama"
                                />
                            </div>




                            <div>
                                <div className="mb-2 block">

                                </div>
                                <TextInput
                                    id="password"
                                    required
                                    type="password"
                                    placeholder='Password'
                                />
                            </div>

                            <Button type="submit" className="bg-[#E3B02B]">
                                Submit
                            </Button>
                            <div className='flex justify-center'>
                                <p className='text-black text-sm'>Sudah Punya Akun?</p>
                                <p className='text-[#E3B02B] text-sm'>Masuk Disini</p>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className='flex justify-end absolute bottom-1 right-10 '>
                    <Image
                        src={"/assets/images/kaabaAsli.png"}
                        alt=''
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login