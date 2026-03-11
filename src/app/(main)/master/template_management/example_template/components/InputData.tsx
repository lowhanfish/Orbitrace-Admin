import React from 'react'
import BInput from '@/components/items/BInput'

const InputData = () => {
    return (
        <div className='flex bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='flex flex-col md:flex-row gap-5 w-full'>
                <div className='flex-1 '>
                    <BInput />
                </div>
                <div className='flex-1 '>
                    <BInput />
                </div>
                <div className='flex-1 '>
                    <BInput />
                </div>

            </div>
        </div>
    )
}

export default InputData
