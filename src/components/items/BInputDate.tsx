"use client"
import { useState, useEffect, Dispatch, SetStateAction } from 'react'


interface BInputProps {
    title?: string,
    value: string | number,
    placeholder?: string,
    setValue: Dispatch<SetStateAction<any>>
}

const BInputDate = ({ title, value, placeholder, setValue }: BInputProps) => {





    const getSetValue = (val: any) => {
        setValue(val)
    }
    return (
        <div className='w-full'>
            <span className='text-[12px] text-b-gray-3 font-roboto'>{title}</span>
            <input
                placeholder={placeholder}
                onChange={(e) => getSetValue(e.target.value)}
                value={value}
                className='w-full border bg-b-gray-2/35 border-b-gray-3/40 px-2 py-1.5 text-[14px] rounded-[5]'
                type="date"
            />
        </div>
    )
}
export default BInputDate
