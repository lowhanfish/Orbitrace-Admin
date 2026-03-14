"use client"
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'

interface BInputAutocompleteProps {
    title: string;
    placeholder: string;
    BSetValue: Dispatch<SetStateAction<string | number>>;
    DataObj: any,
    label: string,
    BKey: string | number
}

const BInputAutocomplete = ({ title, placeholder, BSetValue, DataObj, label = "", BKey }: BInputAutocompleteProps) => {

    const boxRef = useRef<HTMLDivElement>(null)
    const [option, setOption] = useState<any>([])
    const [showData, setShowData] = useState<boolean>(false)
    const [text, setText] = useState<string>("")

    const getListData = (e: any) => {
        setText(e)
        console.log(e.toLowerCase)
        if (e.trim() !== "") {
            const search = DataObj.filter((item: any) => {
                return item.name.toLowerCase().includes(e.toLowerCase())
            })
                .map((item: any) => ({
                    name: item.name,
                    role: item.role,
                    address: item.address,
                    status: item.status,
                }))
            setOption(search)
        } else {
            setOption(DataObj)
        }
    }

    const handleClickACT = () => {
        console.log("wah div di click")
        setShowData(true)
    }

    const selectValue = (item: any) => {
        setText(item[label]);
        if (BSetValue) {
            BSetValue(item[BKey]);
        }
        setShowData(false);
    }

    useEffect(() => {
        const handleClickOutACT = (e: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
                console.log("Wak diluar div ni")
                setShowData(false)
            }
        }
        window.addEventListener("mousedown", handleClickOutACT)
        return () => {
            window.removeEventListener("mousedown", handleClickOutACT)
        }

    }, [])

    useEffect(() => {
        setOption(DataObj)
    }, [])

    return (
        <div
            ref={boxRef}
            onClick={handleClickACT}
        >
            <div className='w-full relative'>
                <span className='text-[12px] text-b-gray-3 font-roboto'>{title}</span>
                <input
                    placeholder={placeholder}
                    value={text}
                    className='w-full border bg-b-gray-2/35 border-b-gray-3/40 px-2 py-1.5 text-[14px] rounded-[5]'
                    onChange={(e) => getListData(e.target?.value)}
                />
                {
                    showData && (

                        <div className='absolute bg-b-gray-3 w-full mt-2 rounded-[6] z-50 shadow-md'>
                            {
                                option.map((item: any, index: any) => (
                                    <div onClick={() => selectValue(item)} key={index} className='bg-b-gray-2 hover:bg-b-gray-1 flex flex-col m-1 p-1 rounded-[3] cursor-pointer'>
                                        <div className='text-[14px]'>{item.name}</div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default BInputAutocomplete