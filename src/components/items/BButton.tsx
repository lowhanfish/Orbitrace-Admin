import { ReactNode } from 'react'


interface BButtonProps {
    color: string,
    children: ReactNode
}

const colorMap: Record<string, string> = {
    gray: "bg-b-red-3 hover:bg-b-red-4 text-b-gray-1",
    blue: "bg-b-red-3 hover:bg-b-red-4 text-b-gray-1",
    green: "bg-b-red-3 hover:bg-b-red-4 text-b-gray-1",
    yellow: "bg-b-red-3 hover:bg-b-red-4 text-b-gray-1",
    red: "bg-b-red-3 hover:bg-b-red-4 text-b-gray-1",
}



const BButton = ({ color, children }: BButtonProps) => {
    return (
        <div>
            <div
                className={`
                flex flex-row gap-2 justify-center items-center
                ${colorMap[color]}
                shadow-lg
                h-10 w-full
                rounded-sm
                cursor-pointer
            `}>
                {children}
            </div>
        </div>
    )
}

export default BButton
