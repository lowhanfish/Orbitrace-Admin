'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    // Jika sudah login (ada token), langsung arahkan ke /home
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/home');
        }
    }, [router]);

    return (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout

