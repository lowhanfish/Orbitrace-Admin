"use client"

import { ReactNode, useState } from 'react'
import { BsFillHouseFill, BsPlayFill, BsDot } from "react-icons/bs";
import routes from '@/utilities/routes';

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <aside className='bg-linear-to-b from-b-gray-1 from-5% to-b-gray-1/20 shadow-md fixed h-full w-60 rounded-[10] px-2 py-5 overflow-y-scroll'>

            {/* <aside className={`
    fixed top-0 left-0 h-full w-64 bg-b-gray-1 overflow-y-scroll
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
`}> */}
            {/* <h1>nilai : {isOpen.toString()}</h1> */}
            {
                routes.map((data, index) => (
                    <div key={data.title} className=''>

                        <Submenu key={data.title} data={data} level={1} />

                        {/* <div key={index} className='flex pl-2 pr-1 items-center py-3 hover:bg-b-gray-2 rounded-[5]'>
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
                                <Submenu key={data.title} data={data} level={2} />
                            ))
                        } */}
                    </div>
                ))
            }


        </aside>
    )
}


type dataProps = {
    title: string,
    children?: dataProps[],
    icon?: ReactNode,
    path?: string
}

const Submenu = ({ data, level }: { data: dataProps, level: number }) => {

    const [isDropDown, setIsDropDown] = useState(false);

    const getContainerClass = () => {
        if (level === 1) {
            return "flex pl-2 pr-1 items-center py-3 hover:bg-b-gray-2 rounded-[5px] cursor-pointer mb-1";
        }
        if (level === 2) {
            return "py-2 pl-8 pr-1 font-bold hover:bg-b-gray-2 rounded-[5px] cursor-pointer";
        }
        // Level 3 dst
        return "py-2 pl-12 pr-1 font-normal hover:bg-b-gray-2 rounded-[5px] cursor-pointer";
    }


    return (
        <div className="w-full">
            {/* Wrapper utama item menu */}
            <div onClick={() => setIsDropDown(!isDropDown)} className={getContainerClass()}>
                <div className='flex items-center w-full'>
                    {/* Render Icon untuk Level 1 */}
                    {level === 1 && data.icon && (
                        <div className="text-lg mr-2 text-b-gray-5">{data.icon}</div>
                    )}

                    {/* Render Dot untuk Level 3 */}
                    {level === 3 && (
                        <div className='-ml-1.5'><BsDot className="text-b-gray-3" /></div>
                    )}

                    <p className={`flex-1 text-b-gray-5 ${level === 1 ? 'text-[13px]' : 'text-[12px]'}`}>
                        {data.title}
                    </p>

                    {/* Icon Play jika ada children */}
                    {data.children && data.children.length > 0 && (
                        <div className="ml-auto">
                            <BsPlayFill className={`text-b-gray-3 text-[12px] ${isDropDown && "rotate-90"}`} />
                        </div>
                    )}
                </div>
            </div>

            {/* Rekursi: Render anak jika ada */}
            {
                // data.children && data.children.length > 0 && isDropDown && (
                //     <div>
                //         {data.children.map((child) => (
                //             <Submenu key={child.title} data={child} level={level + 1} />
                //         ))}
                //     </div>
                // )


                <div className={`grid transition-all duration-300 ${isDropDown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                        <div>
                            {data.children?.map((child) => (
                                <Submenu key={child.title} data={child} level={level + 1} />
                            ))}
                        </div>
                    </div>
                </div>


            }
        </div>
    )
}


export default SideBar
