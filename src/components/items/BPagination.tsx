'use client'
import { useEffect, useState } from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";

const BPagination = () => {



    const [pageSelect, setPageSelect] = useState<number>(1);
    const [pageShow, setPageShow] = useState<number>(4)
    const [dataLength, setDataLength] = useState<number>(9)

    const [listPage, setListPage] = useState([])

    // const total_page = Math.ceil(dataLength/pageShow);
    // const start_number = pageShow*pageSelect-(pageShow-1) // page dimulai dari

    const next = () => {
        if (pageSelect < dataLength) {
            setPageSelect(pageSelect + 1)
        }
    }

    const back = () => {
        if (pageSelect > 1) {
            setPageSelect(pageSelect - 1)
        }
    }

    const pushArray = () => {

    }


    useEffect(() => {

    }, [])



    return (
        <div className='flex gap-2'>

            <div className='flex gap-2'>
                <button
                    onClick={back}
                    className='rounded-full border-2 border-b-gray-5 hover:bg-b-gray-2 active:bg-b-gray-5 active:text-b-gray-3 h-7 w-7 flex justify-center items-center cursor-pointer'>
                    <BsChevronDoubleLeft />
                </button>

            </div>

            <div className='flex gap-1'>

                {
                    pageSelect > pageShow &&
                    (
                        <>
                            <button
                                onClick={() => setPageSelect(dataLength)}
                                className={`
                                rounded-full min-h-7 min-w-7 
                                 p-1 
                                ${pageSelect === dataLength ? 'text-b-gray-1 hover:text-b-gray-2 active:text-b-gray-5 bg-b-gray-6/80 active:bg-b-gray-1' : 'text-b-gray-5 active:bg-b-gray-6/80 active:text-b-gray-1 hover:bg-b-gray-2'}
                                cursor-pointer
                            `}>
                                <p className='text-[12px]'>1</p>
                            </button>
                            <p>...</p>

                        </>
                    )
                }


                {

                    listPage.map((data, index) => (
                        <button
                            key={index}
                            onClick={() => setPageSelect(index + 1)}
                            className={`
                                rounded-full min-h-7 min-w-7 
                                 p-1 
                                ${pageSelect === index + 1 ? 'text-b-gray-1 hover:text-b-gray-2 active:text-b-gray-5 bg-b-gray-6/80 active:bg-b-gray-1' : 'text-b-gray-5 active:bg-b-gray-6/80 active:text-b-gray-1 hover:bg-b-gray-2'}
                                cursor-pointer
                            `}>
                            <p className='text-[12px]'>{index + 1}</p>
                        </button>
                    ))

                }
                {
                    dataLength > pageShow &&
                    (
                        <>
                            <p>...</p>
                            <button
                                onClick={() => setPageSelect(dataLength)}
                                className={`
                                rounded-full min-h-7 min-w-7 
                                 p-1 
                                ${pageSelect === dataLength ? 'text-b-gray-1 hover:text-b-gray-2 active:text-b-gray-5 bg-b-gray-6/80 active:bg-b-gray-1' : 'text-b-gray-5 active:bg-b-gray-6/80 active:text-b-gray-1 hover:bg-b-gray-2'}
                                cursor-pointer
                            `}>
                                <p className='text-[12px]'>{dataLength}</p>
                            </button>

                        </>
                    )
                }

            </div>


            <div className='flex gap-2'>
                <button
                    onClick={next}
                    className='rounded-full border-2 border-b-gray-5 hover:bg-b-gray-2 active:bg-b-gray-5 active:text-b-gray-3 h-7 w-7 flex justify-center items-center cursor-pointer'>
                    <BsChevronDoubleRight />
                </button>
            </div>


            <p>{pageSelect}</p>


        </div>
    )
}

export default BPagination
