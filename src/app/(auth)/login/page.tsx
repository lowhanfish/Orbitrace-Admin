'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import BInput from '@/components/items/BInput'


const page = () => {

    const [textx, setTextx] = useState<string | number>("")

    return (
        <main className=" h-screen w-full p-2 bg-linear-to-r from-b-gray-4 via-blue-200 to-black">

            <div className='relative h-full w-full border-2 border-b-gray-1/50 rounded-[20]'>

                <Image
                    src="/images/bg1.webp"
                    alt='Background'
                    priority
                    fill
                    className='object-cover z-0 rounded-[20] shadow-lg opacity-90'
                />
                <div className='relative z-10 grid grid-cols-12 h-full justify-center items-center md:justify-normal md:items-stretch'>
                    <div className='col-span-6 hidden md:block'>



                    </div>
                    <div className='col-span-12 md:col-span-6 p-5 md:p-0'>
                        <div className='md:h-full'>
                            <div className='bg-white/10 p-5 md:px-30 md:py-15 backdrop-blur-sm md:border-l-2 border-b-gray-1/50 h-full flex flex-col gap-1 md:rounded-r-[20]'>

                                <div className='bg-white/20 px-10 py-10 md:px-20 md:py-10 backdrop-blur-sm border-2 border-b-gray-1/50 h-full flex flex-col gap-1 rounded-[10] shadow-lg'>

                                    <div className='flex justify-center items-center'>
                                        <Image
                                            src="/images/icon_light.png"
                                            alt='Logo'
                                            width={300}
                                            height={100}
                                            className='object-cover'

                                        />
                                    </div>
                                    <div className='pt-5 md:pt-10'>
                                        <p className='text-white text-[12px]'>Username</p>
                                        <input type="text"
                                            className='bg-white/90 h-10 w-full rounded-sm px-2 border-2 border-b-blue-3'
                                        />
                                    </div>
                                    <div className=''>
                                        <p className='text-white text-[12px]'>Password</p>
                                        <input type="password"
                                            className='bg-white/90 h-10 w-full rounded-sm px-2 border-2 border-b-blue-3'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
