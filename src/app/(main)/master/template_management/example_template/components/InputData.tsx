"use client"

import { useState } from 'react'
import CodeWrapper from './CodeWrapper'
import BInput from '@/components/items/BInput'
import BInputFile from '@/components/items/BInputFile'



const codeString = `
import React from 'react'
import BInput from '@/components/items/BInput'

const InputData = () => {
    return (
        <div className='flex bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='flex flex-col md:flex-row gap-5 w-full'>
                <div className='flex-1 '>
                    <BInput />
                </div>
                <div className='flex-1 '>
                    <BInput />
                </div>
                <div className='flex-1 '>
                    <BInput />
                </div>
            </div>
        </div>
    )
}

export default InputData

    
`

const InputData = () => {

    const [numberx, setNumberx] = useState("")
    const [textx, setTextx] = useState("")
    const [filex, setFilex] = useState<File | null>(null)



    return (
        <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1 w-full'>
                <div className='col-span-4 '>
                    <BInput
                        title='Data number'
                        placeholder='Data number'
                        type='number'
                        value={numberx}
                        setValue={setNumberx} />
                </div>
                <div className='col-span-4 '>
                    <BInput
                        title='Data text'
                        placeholder='Data text'
                        type='text'
                        value={textx}
                        setValue={setTextx} />
                </div>
                <div className='col-span-4 '>
                    <BInputFile
                        accept='image/*'
                        onFileSelect={(file) => { setFilex(file); console.log(file) }}
                        placeholder='pilih file'
                        title='File Lampiran'
                        multiple={true}
                    />
                </div>
                <div className='col-span-4 '>
                    <BInput title='Data date' placeholder='Data date' type='text' value={textx} setValue={setTextx} />
                </div>
            </div>


            <div className='mt-5'>
                <CodeWrapper codeString={codeString} />
            </div>
        </div>
    )
}

export default InputData
