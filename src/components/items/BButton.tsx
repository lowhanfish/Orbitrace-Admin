import { ReactNode } from 'react'


interface BButtonProps {
    color: string,
    children: ReactNode,
    size: string
}

const colorMap: Record<string, string> = {
    gray: "bg-gradient-to-r from-b-gray-5/30 via-b-gray-3 to-b-gray-5/50 text-b-gray-6 hover:from-b-gray-4/70 hover:to-b-gray-4/50",
    blue: "bg-gradient-to-r from-b-blue-5 via-b-blue-6 to-b-blue-5 text-b-blue-6 hover:from-b-blue-4 hover:to-b-blue-4",
    green: "bg-gradient-to-r from-b-green-5 via-b-green-6 to-b-green-5 text-b-green-6 hover:from-b-green-4 hover:to-b-green-4",
    yellow: "bg-gradient-to-r from-b-yellow-4/90 via-b-yellow-5 to-b-yellow-4/90 text-b-yellow-6 hover:from-b-yellow-2 hover:to-b-yellow-2",
    red: "bg-gradient-to-r from-b-red-3/90 via-b-red-5 to-b-red-3/90 text-b-red-6 hover:from-b-red-2 hover:to-b-red-2",
}

const sizeMap: Record<string, string> = {
    xs: 'h-5',
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-11',
    xl: 'h-13',
}



const BButton = ({ color, children, size }: BButtonProps) => {
    return (
        <div className='w-full'>
            <div
                className={`
                flex flex-row gap-2 justify-center items-center
                ${colorMap[color]}
                shadow-lg
                ${sizeMap[size]}
                w-full
                rounded-sm
                cursor-pointer
            `}>
                {children}
            </div>
        </div>
    )
}

export default BButton
