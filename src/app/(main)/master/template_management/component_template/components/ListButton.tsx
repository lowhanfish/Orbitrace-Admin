import React from 'react'
import CodeWrapper from './CodeWrapper'
import BButton from '@/components/items/BButton'



const ListButton = () => {
    return (
        <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1 w-full'>

                <div className='col-span-6 flex flex-row  gap-2'>

                    <BButton
                        color='gray'
                        size='xs'
                    >
                        <p className='text-b-gray-6 text-[12px]'>Gray</p>
                    </BButton>
                    <BButton
                        color='gray'
                        size='sm'
                    >
                        <p className='text-b-gray-6 text-[13px]'>Gray</p>
                    </BButton>
                    <BButton
                        color='gray'
                        size='md'
                    >
                        <p className='text-b-gray-6 text-[14px]'>Gray</p>
                    </BButton>
                    <BButton
                        color='gray'
                        size='lg'
                    >
                        <p className='text-b-gray-6 text-[15px]'>Gray</p>
                    </BButton>
                    <BButton
                        color='gray'
                        size='xl'
                    >
                        <p className='text-b-gray-6 text-[16px]'>Gray</p>
                    </BButton>

                </div>

                <div className='col-span-6 flex flex-row  gap-2'>

                    <BButton
                        color='gray'
                        size='sm'
                    >
                        <p className='text-b-gray-6 text-[13px]'>Gray</p>
                    </BButton>
                    <BButton
                        color='blue'
                        size='sm'
                    >
                        <p className='text-b-gray-6 text-[13px]'>Blue</p>
                    </BButton>
                    <BButton
                        color='green'
                        size='sm'
                    >
                        <p className='text-b-gray-6 text-[13px]'>Green</p>
                    </BButton>
                    <BButton
                        color='yellow'
                        size='sm'
                    >
                        <p className='text-b-gray-6 text-[13px]'>Yellow</p>
                    </BButton>
                    <BButton
                        color='red'
                        size='sm'
                    >
                        <p className='text-b-gray-6 text-[13px]'>Red</p>
                    </BButton>


                </div>




            </div>

            <div className='mt-5'>
                <CodeWrapper codeString={codeString} />
            </div>

        </div>
    )
}

export default ListButton



const codeString = `
"use client"

import { useState } from 'react'
import BCheckBox from '@/components/items/BCheckBox'

const InputDataRd = () => {

    const [data, setData] = useState<boolean>(false);

    
}

export default InputDataRd
    
`
