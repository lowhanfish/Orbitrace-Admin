'use client'
import { useState, useEffect } from 'react'
import { FaBeer, FaList } from 'react-icons/fa';
import { useTheme } from "next-themes"
import Image from 'next/image';


const Header = () => {

    const { theme, setTheme } = useTheme()
    const [statusx, setStatusx] = useState(false)

    const changeTheme = () => {
        if (theme === "light") {
            // setStatusx(true)
            setTheme("dark")
        } else {
            // setStatusx(false)
            setTheme("light")
        }
    }

    useEffect(() => {
        if (theme === "light") {
            setStatusx(false)
        } else {
            setStatusx(true)
        }
    }, [theme])

    return (
        <div className='w-full'>
            <div className='flex items-center w-full rounded-md h-15 bg-linear-to-r from-b-gray-1 from-5% to-b-gray-1/20 shadow-md'>


                <div className='flex gap-3 flex-1 px-5'>
                    <div className='flex cursor-pointer justify-center items-center h-8 w-8 bg-b-gray-2/90 hover:bg-b-gray-3/70 rounded-[50%]'>
                        <FaList className='text-b-gray-6' />
                    </div>
                    <Image className='object-fill' src={theme == 'dark' ? '/images/icon_light.png' : '/images/icon_dark.png'} alt='' width={150} height={100} />
                </div>
                <div className='md:flex-1 flex justify-end px-5 gap-2'>
                    <div onClick={() => changeTheme()} className='md:flex hidden cursor-pointer justify-center items-center h-8 w-8 bg-b-gray-3/90 hover:bg-b-gray-3/70 rounded-[50%]'>
                        {
                            statusx ? <span className='text-b-gray-6'>☀️</span> : <span className='text-b-gray-6'>🌙</span>
                        }
                    </div>
                    <div className='md:flex hidden cursor-pointer justify-center items-center h-8 w-8 bg-b-gray-2/90 hover:bg-b-gray-3/70 rounded-[50%]'>
                        <span className='text-b-gray-6'>🛎️</span>
                    </div>
                    <div className='md:flex hidden gap-2 cursor-pointer justify-center items-center bg-b-gray-1/90 hover:bg-b-gray-3/70 rounded-md px-3'>
                        <div>
                            <img className='rounded-[50%] border-2 border-b-gray-2 w-6 h-6' src="https://avatars.githubusercontent.com/u/105328583?v=4" alt="" />
                        </div>
                        <span className='font-bold text-[12px]'>Kiken S Batara</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
