import { useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react'


interface BModalProps {
    title?: string,
    size?: string,
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>
    children: ReactNode
}

const BModal = ({ title, size, openModal, setOpenModal, children }: BModalProps) => {
    const [width, setWidth] = useState("")

    useEffect(() => {
        if (size === 'xs') {
            setWidth('w-[75%] md:w-[20%]')
        } else if (size === 'sm') {
            setWidth('w-[95%] md:w-[35%]')
        } else if (size === 'md') {
            setWidth('w-[95%] md:w-[50%]')
        } else if (size === 'lg') {
            setWidth('w-[95%] md:w-[75%]')
        } else if (size === 'xl') {
            setWidth('w-[95%] md:w-[90%]')
        }
    }, [])

    return (
        <div>

            {
                openModal && (
                    <div className='fixed inset-0 flex justify-center items-center bg-black/50 '>
                        <div className={`${width}`}>
                            <div className='bg-white w-full rounded-[6]'>
                                <div className='p-3 bg-neutral-800  rounded-t-[5] flex flex-row'>
                                    <div className='flex-1'>
                                        <p className='text-gray-200'>{title}</p>
                                    </div>
                                    <button onClick={() => setOpenModal(!openModal)} className='w-5 h-5 bg-b-gray-5 hover:bg-b-gray-3 rounded-full flex justify-center items-center'>
                                        <p className='text-b-gray-2'>X</p>
                                    </button>
                                </div>
                                <div className='p-2'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default BModal
