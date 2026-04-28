
"use client"

import { useState } from 'react'
import BInput from '@/components/items/BInput'
import TextSeparate from '@/components/items/TextSeparate';
import { BsGear } from "react-icons/bs";
import BModal from '@/components/items/BModal';
import BlistDocument from '@/components/items/BlistDocument';
import BButton from '@/components/items/BButton'

const page = () => {

    const [numberx, setNumberx] = useState<number | string>(0)
    const [textx, setTextx] = useState<string | number>("")
    const [open, setOpen] = useState(false);


    const Data = [
        {
            name: "Kiken S batara, S.Si.,MT",
            role: "Fullstack AI Engineer",
            address: "Jl. Beringin No. 31",
            status: "reject"
        },
        {
            name: "Riswan M Rizal. ST",
            role: "Fullstack AI Engineer",
            address: "Jl. Beringin No. 31",
            status: "pending"
        },
        {
            name: "Muh. Hidayat Dermawan. ST",
            role: "Fullstack AI Engineer",
            address: "Jl. Beringin No. 31",
            status: "approve"
        },
        {
            name: "Asrif Fajar Hidayat",
            role: "Fullstack AI Engineer",
            address: "Jl. Beringin No. 31",
            status: "pending"
        },
    ]

    const testClick = () => {
        console.log("hy")
    }

    return (



        <div>
            <TextSeparate title='Database Access Role' />
            <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1 w-full'>

                    <div className='col-span-6 flex gap-1 justify-center items-center'>
                        <button className='bg-linear-to-r hover:bg-linear-to-b from-b-blue-4 to-b-blue-5/80 w-12 h-8.75 rounded-sm'>
                            +
                        </button>
                        <BInput
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


                <div className='grid w-full'>
                    <div className='grid grid-cols-12 gap-2 md:gap-2'>
                        {
                            [...Array(4)].map((_, index) => (
                                <div key={index} className='col-span-12 md:col-span-6 w-full'>
                                    <BlistDocument
                                        icon={
                                            <BsGear className='text-[30px] text-b-gray-4' />
                                        }
                                        title='Ini Title'
                                        onClick={() =>
                                            setOpen(true)
                                        }
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>




            </div>

            <BModal title='Configuration' openModal={open} setOpenModal={setOpen} size='xs'>
                <div className='flex flex-col gap-2 p-4'>
                    <button className='bg-b-blue-4 hover:bg-b-blue-5/70 cursor-pointer flex gap-2 justify-center items-center text-[12px] p-1.5 rounded-md shadow-md'>
                        Detail
                    </button>
                    <button className='bg-b-yellow-4 hover:bg-b-yellow-5/70 cursor-pointer flex gap-2 justify-center items-center text-[12px] p-1.5 rounded-md shadow-md'>
                        Edit
                    </button>
                    <button className='bg-b-red-4 hover:bg-b-red-5/70 cursor-pointer flex gap-2 justify-center items-center text-[12px] p-1.5 rounded-md shadow-md'>
                        Delete
                    </button>
                </div>
            </BModal>

        </div>

    )
}

export default page


