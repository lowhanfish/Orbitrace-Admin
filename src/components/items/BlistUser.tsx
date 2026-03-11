import Image from 'next/image'
import React from 'react'


const BlistUser = () => {
    return (
        <div className='flex flex-col p-2 w-full bg-b-gray-2/70 rounded-[5] border-5 border-b-gray-2 shadow-md'>
            <div className='flex items-center justify-center py-3'>
                <div className='p-1 bg-b-gray-3/30 rounded-full'>
                    <Image className='rounded-full' alt='Profile' src="/images/photo1.png" width={100} height={100} />
                </div>
            </div>
            <div className='flex flex-col py-1 items-center justify-center'>
                <p>Kiken Sukma Batara</p>
                <p className='font-roboto text-[13px]'>Fullstack AI Engineer</p>
            </div>
            <div>

            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default BlistUser
