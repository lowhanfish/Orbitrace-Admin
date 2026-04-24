
"use client"

import { useState } from 'react'
import BInput from '@/components/items/BInput'
import TextSeparate from '@/components/items/TextSeparate';
import { BsGear } from "react-icons/bs";


const InputData = () => {

    const [numberx, setNumberx] = useState<number | string>(0)
    const [textx, setTextx] = useState<string | number>("")



    return (

        <div>
            <div className='p-3 mt-3 text-b-gray-5'>
                <div className='flex items-center gap-3 text-[35px]'>
                    <BsGear />
                    <p>Dashboard</p>
                </div>
                <p className='text-[12px]'>Monitor key metrics and manage your platform</p>
            </div>

            <div className='flex flex-col md:flex-row bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 md:px-10 py-3 mt-2 text-b-gray-5'>
                <div className='flex-1 text-[12px] text-center md:text-left'>
                    <p className='text-[20px] font-bold'>Good evening, Kiken S Batara</p>
                    <p className='text-[12px]'>Ready to make today productive! 🚀</p>

                    <div className='flex items-end text-[12px] text-center md:text-left'>

                        <div className='flex flex-row gap-1 items-center w-full justify-center md:justify-normal'>
                            <span className='text-[30px] font-bold text-b-blue-2 '>06:37</span>
                            <span className='text-[12px] '>PM</span>
                        </div>
                    </div>
                </div>

                <div className='flex-1 flex flex-col pt-5 md:pt-0'>
                    <div className='flex justify-center md:justify-end'>
                        <p className='text-[39px] font-bold '>28°C</p>
                    </div>
                    <div className='flex gap-2 text-[14px] justify-center md:justify-end '>
                        <p className='text-b-yellow-2 font-bold'>Sunny,</p>
                        <p>Kendari</p>

                    </div>
                    <p className='text-[12px] text-center md:text-right'>Friday, April 24, 2026</p>
                </div>



            </div>


            <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1 w-full'>
                    <div className='col-span-6 '>
                        <BInput
                            title='Data number'
                            placeholder='Data number'
                            type='number'
                            value={numberx}
                            onChange={(value) => {
                                setNumberx(value)
                            }}
                        />
                    </div>
                    <div className='col-span-6 '>
                        <BInput
                            title='Data text'
                            placeholder='Data text'
                            type='text'
                            value={textx}
                            onChange={(value) => {
                                setTextx(value)
                            }}
                        />
                    </div>

                </div>
            </div>

            <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>

            </div>


        </div>

    )
}

export default InputData


