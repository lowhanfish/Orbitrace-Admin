import React from 'react'
import { BsFillHouseFill, BsPlayFill } from "react-icons/bs";
import routes from '@/utilities/routes';

const SideBar = () => {
    return (
        <aside className='w-64 bg-b-gray-1 rounded-[5] px-2 py-5'>

            {
                routes.map((data, index) => (

                    <div key={index} className='flex items-center px-2 py-3 hover:bg-b-gray-2 rounded-[5]'>
                        <div>
                            {data.icon}
                        </div>
                        <div className='flex-1 text-[13px] px-2 text-b-gray-5'>{data.title}</div>
                        <div className='w-fit flex justify-end '>
                            <BsPlayFill className='text-b-gray-3' />
                        </div>
                    </div>
                ))
            }


        </aside>
    )
}

export default SideBar
