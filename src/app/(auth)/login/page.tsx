'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import BInput from '@/components/items/BInput'
import BButton from '@/components/items/BButton'
import Link from 'next/link'



const page = () => {

    const [textx, setTextx] = useState<string | number>("")

    const testClick = () => {

    }

    return (
        <main className=" h-screen w-full p-2 md:px-20 bg-black">

            <div className='relative h-full w-full shadow-2xl rounded-[20]'>

                <Image
                    src="/images/bg.png"
                    alt='Background'
                    priority
                    fill
                    className='object-cover z-0 rounded-[20] shadow-lg opacity-90'
                />
                <div className="absolute inset-0 z-10 bg-linear-to-b from-black via-transparent via-20% to-black" />

                <div className='relative z-10 grid grid-cols-12 h-full'>
                    <div className='col-span-6 hidden md:block p-2 '>
                        <div className='flex flex-col justify-center items-center h-full '>
                            <div className=' pl-5 pr-20 pt-5 pb-10 '>
                                <p className='text-white/90 font-bold text-shadow-2xs text-shadow-black'>
                                    <span className='text-[35px] text-b-blue-3'>Orbit</span>
                                    <span className='text-[50px]'> TRACE</span>
                                </p>
                                <p className='text-white/90 text-[12px] text-shadow-2xs text-shadow-black pr-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed quo nemo dignissimos non accusamus beatae nam ipsam vel sint? Sequi fugiat adipisci magni, in vel accusamus excepturi nemo! Voluptatibus?</p>
                            </div>

                        </div>

                    </div>
                    <div className='col-span-12 md:col-span-6 p-0 md:p-0 flex flex-col justify-center'>
                        <div className='md:h-full p-3 items-center justify-center'>
                            <div className='bg-black/10 p-5 md:px-30 md:py-15 backdrop-blur-sm border-12 border-black/20 h-full flex flex-col gap-1 md:rounded-[20]'>

                                <div className='bg-gray-700/40 px-5 py-5 md:px-12 md:py-10 backdrop-blur-sm border-l-8 border-gray-600/20 h-full flex flex-col gap-1 rounded-[10] shadow-lg'>

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
                                        <div className='pt-5 md:pt-5'>
                                            <p className='text-white text-[12px]'>Username</p>
                                            <input type="text"
                                                className='bg-white/80 h-10 w-full rounded-[20] px-2 border-2 border-b-blue-3 text-[12px] text-black'
                                            />
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-white text-[12px]'>Password</p>
                                            <input type="password"
                                                className='bg-white/80 h-10 w-full rounded-[20] px-2 border-2 border-b-blue-3 text-[12px] text-black'
                                            />
                                        </div>


                                        <div className='mt-5'>
                                            <Link href="/home">
                                                <BButton
                                                    mode="glossy"
                                                    color='blue'
                                                    size='lg'
                                                    onClick={() => testClick()}
                                                >
                                                    <p className='text-white font-semibold text-[13px] text-shadow-xs text-shadow-zinc-500'>
                                                        LOGIN
                                                    </p>
                                                </BButton>

                                            </Link>

                                        </div>


                                        <div className='flex justify-center items-center gap-1 my-2'>
                                            <div className='border-b-[0.2px] w-full border-b-gray-50'></div>
                                            <p className='text-[12px]'>Or</p>
                                            <div className='border-b-[0.2px] w-full border-b-gray-50'></div>
                                        </div>


                                        <div>

                                            <div className='mt-5'>
                                                <Link href="/home">
                                                    <BButton
                                                        mode="glossy"
                                                        color='gray'
                                                        size='md'
                                                        onClick={() => testClick()}
                                                    >
                                                        <div className='flex gap-2'>
                                                            <Image
                                                                alt='Icon Google'
                                                                width={20}
                                                                height={10}
                                                                src="/images/google.webp"

                                                            />
                                                            <p className='text-white text-[12px] text-shadow-xs'>
                                                                Login with google
                                                            </p>

                                                        </div>
                                                    </BButton>

                                                </Link>
                                            </div>


                                        </div>


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
