import React from 'react'
import { BsFileTextFill, BsGear } from "react-icons/bs";

const BlistDocument = () => {
    return (
        <div className='flex p-2 w-full bg-b-gray-2/70 rounded-[3]'>
            <div className='p-2 bg-b-gray-2 flex items-start'>
                <BsFileTextFill className='text-[30px] text-b-gray-4' />
            </div>
            <div className='flex-1 bg-b-gray-2/50 p-2'>
                <p className='text-[12px] font-bold'>Sales Purchase Agreement (PPJB)</p>
                <p >Swarna Dwipa Property - Edward Newgate</p>
                <p className='text-[10px]'>12 Mar 2026</p>
            </div>
            <div className='bg-b-gray-2/50 p-1'>
                <button className='bg-b-gray-3/80 hover:bg-b-gray-3/40 flex justify-center items-center rounded-full w-6 h-6 cursor-pointer'>
                    <BsGear className='text-b-gray-6' />
                </button>
            </div>
        </div>
    )
}

export default BlistDocument
