"use client"

import { useState } from 'react'
import CodeWrapper from './CodeWrapper'
import BInput from '@/components/items/BInput'
import BInputFile from '@/components/items/BInputFile'
import BInputDate from '@/components/items/BInputDate'

const InputData = () => {

    const [numberx, setNumberx] = useState("")
    const [textx, setTextx] = useState("")
    const [filex, setFilex] = useState<File | FileList | null>(null)
    const [datex, setDatex] = useState(new Date().toISOString().split('T')[0]);

    const [form, setForm] = useState({
        name: "",
        age: 0,
        gender: "F"
    })

    const gender = [
        { id: 1, gender: "Female", code: "F" },
        { id: 2, gender: "Male", code: "M" },
    ]


    return (
        <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1 w-full'>
                <div className='col-span-3 '>
                    <BInput
                        title='Data number'
                        placeholder='Data number'
                        type='number'
                        value={numberx}
                        setValue={setNumberx} />
                </div>
                <div className='col-span-3 '>
                    <BInput
                        title='Data text'
                        placeholder='Data text'
                        type='text'
                        value={textx}
                        setValue={setTextx} />
                </div>
                <div className='col-span-3 '>
                    <BInputFile
                        accept='image/*'
                        onFileSelect={(file) => { setFilex(file); console.log(file) }}
                        placeholder='pilih file'
                        title='File Lampiran'
                        multiple={true}
                    />
                </div>
                <div className='col-span-3 '>
                    <BInputDate
                        title='Data date'
                        placeholder='Data date'
                        value={datex}
                        setValue={setDatex}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <CodeWrapper codeString={codeString} />
            </div>
        </div>
    )
}

export default InputData



const codeString = `
"use client"

import { useState } from 'react'
import CodeWrapper from './CodeWrapper'
import BInput from '@/components/items/BInput'
import BInputFile from '@/components/items/BInputFile'
import BInputDate from '@/components/items/BInputDate'

const InputData = () => {

    const [numberx, setNumberx] = useState("")
    const [textx, setTextx] = useState("")
    const [filex, setFilex] = useState<File | FileList | null>(null)
    const [datex, setDatex] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1 w-full'>
                <div className='col-span-3 '>
                    <BInput
                        title='Data number'
                        placeholder='Data number'
                        type='number'
                        value={numberx}
                        setValue={setNumberx} />
                </div>
                <div className='col-span-3 '>
                    <BInput
                        title='Data text'
                        placeholder='Data text'
                        type='text'
                        value={textx}
                        setValue={setTextx} />
                </div>
                <div className='col-span-3 '>
                    <BInputFile
                        accept='image/*'
                        onFileSelect={(file) => { setFilex(file); console.log(file) }}
                        placeholder='pilih file'
                        title='File Lampiran'
                        multiple={true}
                    />
                </div>
                <div className='col-span-3 '>
                    <BInputDate
                        title='Data date'
                        placeholder='Data date'
                        value={datex}
                        setValue={setDatex}
                    />
                </div>
            </div>
        </div>
    )
}

export default InputData

    
`
