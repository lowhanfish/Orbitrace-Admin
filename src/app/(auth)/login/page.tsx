import Image from 'next/image'
import React from 'react'


const page = () => {
    return (
        <main className="relative h-screen w-full">
            <Image
                src="/images/bg.png"
                alt='Background'
                fill
                priority
                className='object-cover z-0'
            />
            <div className='relative z-10 grid grid-cols-12'>
                <div className='col-span-6'>p</div>
                <div className='col-span-6'>
                    <div className='p-5 md:p-10'>
                        <div className='bg-amber-400'>

                        </div>
                    </div>


                </div>
            </div>
        </main>
    )
}

export default page
