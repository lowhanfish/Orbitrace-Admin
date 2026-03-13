"use client"
import { useState, useEffect, useRef } from 'react'

interface BInputAutocompleteProps {
    title: string;
    placeholder: string;
    suggestions: string[]; // Daftar pilihan (misal: nama kota atau kategori)
    value: string;
    setValue: (val: string) => void;
}

const BInputAutocomplete = ({ title, placeholder, suggestions, value, setValue }: BInputAutocompleteProps) => {
    const [filtered, setFiltered] = useState<string[]>([]);
    const [show, setShow] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Filter data berdasarkan ketikan user
    useEffect(() => {
        if (value) {
            const match = suggestions.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(match);
        } else {
            setFiltered([]);
        }
    }, [value, suggestions]);

    // Menutup dropdown jika user klik di luar komponen
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='w-full relative' ref={wrapperRef}>
            <span className='text-[12px] text-b-gray-3 font-roboto'>{title}</span>
            <input
                type="text"
                value={value}
                onFocus={() => setShow(true)}
                onChange={(e) => {
                    setValue(e.target.value);
                    setShow(true);
                }}
                placeholder={placeholder}
                className='w-full border bg-b-gray-2/35 border-b-gray-3/40 px-2 py-1.5 text-[14px] rounded-[5px] outline-none focus:border-b-blue-4 transition-all'
            />

            {/* Dropdown Suggestions */}
            {show && filtered.length > 0 && (
                <ul className='absolute z-50 w-full mt-1 bg-b-gray-5 border border-b-gray-3/20 shadow-lg max-h-40 overflow-y-auto rounded-[5px] py-1'>
                    {filtered.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setValue(item);
                                setShow(false);
                            }}
                            className='px-3 py-2 text-[14px] hover:bg-b-gray-4 text-b-gray-2 hover:text-white cursor-pointer transition-colors'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BInputAutocomplete