import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { ReactNode } from 'react'


const layout = ({ children }: { children: ReactNode }) => {

    // setInterval(() => {
    //     console.log("jalan")
    // }, 3000)

    return (
        <div className='flex flex-col px-3 py-2 w-full h-full'>
            <Header />
            <div className='flex gap-2 flex-1 mt-2' >
                <SideBar />
                <div className='w-full h-full relative'>
                    <div className='absolute overflow-y-scroll w-full h-full'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default layout
