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
                    src="/images/bg.png"
                    alt='Background'
                    priority
                    fill
                    className='object-cover z-0 rounded-[20] shadow-lg opacity-90'
                />
                <div className='relative z-10 grid grid-cols-12 h-full'>
                    <div className='col-span-12 md:col-span-6'>



                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <div className='h-full'>
                            <div className='bg-white/10 md:px-30 md:py-15 backdrop-blur-sm border-l-2 border-b-gray-1/50 h-full flex flex-col gap-1 rounded-r-[20]'>

                                <div className='bg-white/20 px-10 py-10 md:px-20 md:py-10 backdrop-blur-sm border-2 border-b-gray-1/50 h-full flex flex-col gap-1 rounded-[10] shadow-lg'>

                                    <div className='flex justify-center items-center'>
                                        <Image
                                            src="/images/icon_light.png"
                                            alt='Logo'
                                            width={200}
                                            height={100}
                                            className='object-cover'

                                        />
                                    </div>
                                    <div>
                                        <BInput
                                            title='Username'
                                            placeholder='Username'
                                            type='text'
                                            value={textx}
                                            onChange={(value) => {
                                                setTextx(value)
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <BInput
                                            title='Password'
                                            placeholder='Password'
                                            type='text'
                                            value={textx}
                                            onChange={(value) => {
                                                setTextx(value)
                                            }}
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
