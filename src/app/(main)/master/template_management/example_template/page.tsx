import BInput from '@/components/items/BInput'
import TitleBar from '@/components/TitleBar'
import { BsFileTextFill } from "react-icons/bs";
import React from 'react'






const page = () => {
    return (
        <div>
            <TitleBar title='Example Template' subtitle='Template Management' />

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




            <div className='flex bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>

                <div className='grid w-full'>
                    <div className='grid grid-cols-12 gap-5'>


                        {
                            [...Array(10)].map(() => (

                                <div className='col-span-6 w-full'>
                                    <div className='flex w-full bg-b-gray-2/70 rounded-[3]'>
                                        <div className='bg-red-300 flex items-center'>
                                            <BsFileTextFill />
                                        </div>
                                        <div className='flex-1 bg-red-400'>
                                            <p>Title</p>
                                        </div>
                                        <div className='bg-red-500'>
                                            :
                                        </div>
                                    </div>

                                </div>
                            ))
                        }


                    </div>
                </div>



            </div>



        </div>
    )
}

export default page
