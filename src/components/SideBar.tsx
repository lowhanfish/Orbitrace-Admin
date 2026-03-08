import React from 'react'
import { BsFillHouseFill, BsPlayFill, BsDot } from "react-icons/bs";
import routes from '@/utilities/routes';

const SideBar = () => {
    return (
        <aside className='w-64 bg-b-gray-1 rounded-[5] px-2 py-5'>

            {
                routes.map((data, index) => (
                    <div className='relative'>

                        <div key={index} className='flex items-center py-3 hover:bg-b-gray-2 rounded-[5]'>
                            <div>
                                {data.icon}
                            </div>
                            <div className='flex-1 text-[13px] px-2 text-b-gray-5'>{data.title}</div>
                            <div className='w-fit flex justify-end '>
                                <BsPlayFill className='text-b-gray-3' />
                            </div>
                        </div>
                        {
                            data.children && data.children.map((data, index) => (
                                <div className='relative py-1 pl-6'>
                                    <div key={index} className='flex items-center'>
                                        <div>
                                            <BsDot />
                                        </div>
                                        <p className='flex-1 text-[12px] text-b-gray-5'>{data.title}</p>
                                        <div><BsPlayFill className='text-b-gray-3' /></div>
                                    </div>

                                    {
                                        data.children && data.children.map((data, index) => (
                                            <div className='relative py-1'>
                                                <div key={index} className='flex items-center'>
                                                    <div>
                                                        <BsDot />
                                                    </div>
                                                    <p className='flex-1 text-[12px] px-2 text-b-gray-5'>{data.title}</p>
                                                    <div><BsPlayFill className='text-b-gray-3' /></div>
                                                </div>

                                            </div>

                                        ))
                                    }

                                </div>

                            ))
                        }
                    </div>
                ))
            }


        </aside>
    )
}







export default SideBar
