
"use client"

import { useState } from 'react'
import BInput from '@/components/items/BInput'
import TextSeparate from '@/components/items/TextSeparate';
import { BsGear } from "react-icons/bs";
import BModal from '@/components/items/BModal';
import BlistDocument from '@/components/items/BlistDocument';
import BButton from '@/components/items/BButton'

import ModalAdd from './components/ModalAdd';
import ModalConfig from './components/ModalConfig';
import ModalDetail from './components/ModalDetail';




const page = () => {

    const [textx, setTextx] = useState<string | number>("")
    const [modalDetail, setModalDetail] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [modalConfig, setModalConfig] = useState(false);

    const [listData, setListData] = useState([
        { id: 1, title: 'Administrator', date: '20 Apr 2026' },
        { id: 2, title: 'Configurator', date: '20 Apr 2026' },
        { id: 3, title: 'Tenant', date: '20 Apr 2026' },
        { id: 4, title: 'User', date: '20 Apr 2026' },
    ])

    return (

        <div>
            <TextSeparate title='Database Access Role' />
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
                <div className='grid w-full'>
                    <div className='grid grid-cols-12 gap-2 md:gap-2'>
                        {
                            listData.map((item, index) => (
                                <div key={item.id} className='col-span-12 md:col-span-6 w-full'>
                                    <BlistDocument
                                        icon={
                                            <BsGear className='text-[30px] text-b-gray-4' />
                                        }
                                        subtitle={item.title}
                                        stamp={item.date}
                                        onClick={() =>
                                            setModalConfig(true)
                                        }
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            <ModalAdd
                open={modalAdd}
                setOpen={setModalAdd}
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


