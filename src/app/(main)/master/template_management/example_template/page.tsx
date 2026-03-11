import BInput from '@/components/items/BInput'

import { BsGear } from "react-icons/bs";

import TitleBar from '@/components/TitleBar'
import BlistDocument from '@/components/items/BlistDocument';






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
                    <div className='grid grid-cols-12 gap-2 md:gap-2'>
                        {
                            [...Array(4)].map((_, index) => (

                                <div key={index} className='col-span-12 md:col-span-6 w-full'>
                                    <BlistDocument />

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <p className='p-3 text-[18px] text-b-gray-5'>List Photo</p>


            <div className='flex bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
                <div className='grid w-full'>
                    <div className='grid grid-cols-12 gap-2 md:gap-2'>
                        {
                            [...Array(4)].map((_, index) => (

                                <div key={index} className='col-span-12 md:col-span-6 w-full'>
                                    <BlistDocument />

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
