
"use client"

import { useState } from 'react'
import BInput from '@/components/items/BInput'
import TextSeparate from '@/components/items/TextSeparate';
import { BsGear } from "react-icons/bs";
import BPagination from '@/components/items/BPagination'
import BFrameLinear from '@/components/items/BFrameLinear';

import ModalAdd from './components/ModalAdd';
import ModalConfig from './components/ModalConfig';
import ModalDetail from './components/ModalDetail';
import routex from '@/utilities/routes';




const page = () => {

    const [textx, setTextx] = useState<string | number>("")
    const [modalDetail, setModalDetail] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [modalConfig, setModalConfig] = useState(false);




    return (

        <div>
            <TextSeparate title='Route List Management' />
            <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1 w-full'>

                    <div className='col-span-6 flex gap-1 justify-center items-center'>
                        <button
                            onClick={
                                () => setModalAdd(true)
                            }
                            className='bg-linear-to-r hover:bg-linear-to-b from-b-blue-4 to-b-blue-5/80 w-12 h-8.75 rounded-sm cursor-pointer'>
                            +
                        </button>
                        <BInput
                            placeholder='Data text'
                            type='text'
                            value={textx}
                            onChange={(value) => {
                                setTextx(value)
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
                <table className='Btable w-full'>
                    <thead>
                        <tr>
                            <th className='w-[5%]'>
                                <p className='text-center'>No</p>
                            </th>
                            <th className='w-[5%]'>
                                <p className='text-center'>Act</p>
                            </th>
                            <th className='w-[70%]'>Route Name</th>
                            <th className='w-[20%]'>Route Link</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            routex.map((item, index) => (
                                <>
                                    <tr className='poppins' key={index}>
                                        <td className=''>
                                            <button className='text-center text-[20px] w-full cursor-pointer'>
                                                🟢
                                            </button>
                                        </td>
                                        <td className=''>
                                            <div className='flex justify-center'>
                                                <button onClick={() => setModalConfig(!modalConfig)} className='bg-b-gray-2/80 hover:bg-b-gray-2/50 flex justify-center items-center rounded-full w-6 h-6 cursor-pointer'>
                                                    <BsGear className='text-b-gray-6' />
                                                </button>
                                            </div>
                                        </td>
                                        <td className='font-bold'>{item.title}</td>
                                        <td className=''><p className='text-center bg-b-gray-2 rounded-sm'>email</p></td>
                                    </tr>

                                    {
                                        (item.children.length > 0) && (


                                            item.children.map((item, index) => (

                                                <>
                                                    <tr className='poppins bg-b-gray-2/30!' key={index}>
                                                        <td className=''>
                                                            <button className='text-center text-[20px] w-full cursor-pointer'>
                                                                ◻️
                                                            </button>
                                                        </td>
                                                        <td className=''>
                                                            <div className='flex justify-center'>
                                                                <button onClick={() => setModalConfig(!modalConfig)} className='bg-b-gray-2/80 hover:bg-b-gray-2/50 flex justify-center items-center rounded-full w-6 h-6 cursor-pointer'>
                                                                    <BsGear className='text-b-gray-6' />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className='pl-7!'>◻️ {item.title}</td>
                                                        <td className=''><p className='text-center bg-b-gray-2 rounded-sm'>email</p></td>
                                                    </tr>

                                                    {

                                                    }

                                                    <tr className='poppins bg-b-gray-2/50!'>
                                                        <td className=''>
                                                            <button className='text-center text-[20px] w-full cursor-pointer'>
                                                                🔘
                                                            </button>
                                                        </td>
                                                        <td className=''>
                                                            <div className='flex justify-center'>
                                                                <button onClick={() => setModalConfig(!modalConfig)} className='bg-b-gray-2/80 hover:bg-b-gray-2/50 flex justify-center items-center rounded-full w-6 h-6 cursor-pointer'>
                                                                    <BsGear className='text-b-gray-6' />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className='pl-14!'>🔘 asdasd</td>
                                                        <td className=''><p className='text-center bg-b-gray-2 rounded-sm'>email</p></td>
                                                    </tr>
                                                </>
                                            ))

                                        )
                                    }

                                </>
                            ))


                        }

                    </tbody>
                </table>

            </div>



            <ModalAdd
                open={modalAdd}
                setOpen={setModalAdd}
                action="Add"
            />

            <ModalConfig
                open={modalConfig}
                setOpen={setModalConfig}
            />

            <ModalDetail
                open={modalDetail}
                setOpen={setModalDetail}

            />



        </div>

    )
}

export default page


