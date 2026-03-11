import BlistDocument from '@/components/items/BlistDocument';
import CodeWrapper from './CodeWrapper';


const ListDocuments = () => {

    const codeString = `
import BlistDocument from '@/components/items/BlistDocument';
import CodeWrapper from './CodeWrapper';


const ListDocuments = () => {
    return (
        <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='grid w-full'>
                <div className='grid grid-cols-12 gap-2 md:gap-2'>
                    {
                        [...Array(4)].map((_, index) => (
                            <div key={index} className='col-span-12 md:col-span-6 w-full'>
                                <BlistDocument />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListDocuments

        `;

    return (
        <div className='flex flex-col bg-linear-to-r from-b-gray-1 to-50% to-b-gray-1/40 shadow-sm rounded-[5] px-3 py-3 mt-2'>
            <div className='grid w-full'>
                <div className='grid grid-cols-12 gap-2 md:gap-2'>
                    {
                        [...Array(4)].map((_, index) => (
                            <div key={index} className='col-span-12 md:col-span-6 w-full'>
                                <BlistDocument />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='mt-5'>
                <CodeWrapper codeString={codeString} />
            </div>
        </div>
    )
}

export default ListDocuments
