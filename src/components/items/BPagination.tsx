'use client'
import { useState } from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";

const BPagination = () => {

    const [number, setNumber] = useState<number>(1);



    return (
        <div className='flex gap-2'>

            <div className='flex gap-2'>
                <button className='rounded-full border-2 border-b-gray-5 hover:bg-b-gray-2 active:bg-b-gray-5 active:text-b-gray-3 h-7 w-7 flex justify-center items-center cursor-pointer'>
                    <BsChevronBarLeft className='' />
                </button>
                <button className='rounded-full border-2 border-b-gray-5 hover:bg-b-gray-2 active:bg-b-gray-5 active:text-b-gray-3 h-7 w-7 flex justify-center items-center cursor-pointer'>
                    <BsChevronDoubleLeft />
                </button>

            </div>

            <div className='flex gap-1'>
                {

                    [...Array(5)].map((DataTransfer, index) => (

                        <button
                            key={index}
                            onClick={() => setNumber(index + 1)}
                            className={`
                                rounded-full border border-b-gray-5 min-h-7 min-w-7 
                                hover:bg-b-gray-2 p-1 
                                ${number === index + 1 ? 'text-b-gray-1 hover:text-b-gray-5 active:text-b-gray-5 bg-b-gray-6/80 active:bg-b-gray-1' : 'text-b-gray-5 '}
                                cursor-pointer
                            `}>
                            <p className='text-[12px]'>{index + 1}</p>
                        </button>
                    ))

                }
            </div>

            <div className='flex gap-2'>
                <button className='rounded-full border-2 border-b-gray-5 hover:bg-b-gray-2 active:bg-b-gray-5 active:text-b-gray-3 h-7 w-7 flex justify-center items-center cursor-pointer'>
                    <BsChevronDoubleRight />
                </button>
                <button className='rounded-full border-2 border-b-gray-5 hover:bg-b-gray-2 active:bg-b-gray-5 active:text-b-gray-3 h-7 w-7 flex justify-center items-center cursor-pointer'>
                    <BsChevronBarRight />
                </button>

            </div>


            <p>{number}</p>


        </div>
    )
}

export default BPagination
