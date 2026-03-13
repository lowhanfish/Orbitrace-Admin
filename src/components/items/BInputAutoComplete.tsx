"use client"
import { useState, useEffect, useRef } from 'react'

interface BInputAutocompleteProps {
    title: string;
    placeholder: string;
    suggestions: string[]; // Daftar pilihan (misal: nama kota atau kategori)
    value: string;
    setValue: (val: string) => void;

}

const DataObj = [
    {
        name: "Kiken S batara, S.Si.,MT",
        role: "Fullstack AI Engineer",
        address: "Jl. Beringin No. 31",
        status: "reject"
    },
    {
        name: "Riswan M Rizal. ST",
        role: "Fullstack AI Engineer",
        address: "Jl. Beringin No. 31",
        status: "pending"
    },
    {
        name: "Muh. Hidayat Dermawan. ST",
        role: "Fullstack AI Engineer",
        address: "Jl. Beringin No. 31",
        status: "approve"
    },
    {
        name: "Asrif Fajar Hidayat",
        role: "Fullstack AI Engineer",
        address: "Jl. Beringin No. 31",
        status: "pending"
    },
    {
        name: "Fajar Syahputra, ST",
        role: "Fullstack AI Engineer",
        address: "Jl. Beringin No. 31",
        status: "pending"
    },
]

const BInputAutocomplete = ({ title, placeholder }: BInputAutocompleteProps) => {

    const boxRef = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState<string>("")
    const [option, setOption] = useState<any>([])
    const [showData, setShowData] = useState<boolean>(false)

    const getValue = (e: any) => {
        setValue(e)
        console.log(e.toLowerCase)
        if (e.trim() !== "") {
            const search = DataObj.filter((item) => {
                return item.name.toLowerCase().includes(e.toLowerCase())
            })
                .map((item) => ({
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
                    value={value}
                    className='w-full border bg-b-gray-2/35 border-b-gray-3/40 px-2 py-1.5 text-[14px] rounded-[5]'
                    onChange={(e) => getValue(e.target?.value)}

                />


                {
                    showData && (

                        <div className='absolute bg-b-gray-3 w-full mt-2 rounded-[5] z-50'>
                            {
                                option.map((item, index) => (
                                    <div key={index} className='bg-b-gray-2 flex flex-col m-1 p-1 rounded-[5]'>
                                        <div>{item.name}</div>
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