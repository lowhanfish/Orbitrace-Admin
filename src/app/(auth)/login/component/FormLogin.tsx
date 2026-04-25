'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import BButton from '@/components/items/BButton'
import Link from 'next/link'
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useAuthStore } from '@/store/useAuthStore'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1'

const FormLogin = () => {
    const router = useRouter();
    const login = useAuthStore((s) => s.login);

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [typePassword, setTypePassword] = useState<string>('password');

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const LoginBtn = async () => {
        // Validasi input
        if (!email.trim()) {
            setErrorMsg('Email harus diisi.');
            return;
        }
        if (!password.trim()) {
            setErrorMsg('Password harus diisi.');
            return;
        }

        setIsLoading(true);
        setErrorMsg('');

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                setErrorMsg(data.message || 'Login gagal. Periksa kembali email dan password Anda.');
                return;
            }

            // Simpan token & user ke Zustand store (otomatis ke localStorage juga)
            if (data.data?.token && data.data?.user) {
                login(data.data.token, data.data.user);
            }

            // Redirect ke halaman utama
            router.push('/home');

        } catch (error) {
            console.error('Login error:', error);
            setErrorMsg('Gagal terhubung ke server.');
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div>
            <div className='bg-gray-700/40 px-5 py-5 md:px-12 md:py-10 backdrop-blur-sm border-l-8 border-gray-600/20 h-full flex flex-col gap-1 rounded-[10] shadow-lg'>

                <div className='flex justify-center items-center'>
                    <Image
                        src="/images/icon_light.png"
                        alt='Logo'
                        width={200}
                        height={100}
                        className='object-cover'
                    />
                </div>

                <div className=''>
                    <div className='pt-5 md:pt-5'>
                        <p className='text-white text-[12px]'>Username</p>
                        <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-white/2 backdrop-blur-sm h-10 w-full rounded-[20] px-3 border-2 border-b-blue-3 text-[12px] text-white'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='pt-2'>
                        <p className='text-white text-[12px]'>Password</p>

                        <div className='flex justify-center items-center relative'>
                            <input type={typePassword}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-white/2 backdrop-blur-sm h-10 w-full rounded-[20] px-3 border-2 border-b-blue-3 text-[12px] text-white'
                                placeholder='Enter your password'
                                onKeyDown={(e) => e.key === 'Enter' && LoginBtn()}
                            />


                            {
                                showPassword ?
                                    (
                                        <div onClick={() => { setTypePassword('password'); setShowPassword(!showPassword) }} className='absolute right-2 cursor-pointer h-7 w-7  flex justify-center items-center rounded-full'>
                                            <BsEyeSlashFill className='text-gray-100/70' />
                                        </div>
                                    ) :
                                    (
                                        <div onClick={() => { setTypePassword('text'); setShowPassword(!showPassword) }} className='absolute right-2 cursor-pointer h-7 w-7  flex justify-center items-center rounded-full'>
                                            <BsEyeFill className='text-gray-100/70' />
                                        </div>
                                    )
                            }
                        </div>
                    </div>

                    {errorMsg && (
                        <div className='pt-2'>
                            <p className='text-red-400 text-[12px] text-center'>{errorMsg}</p>
                        </div>
                    )}

                    <div className='mt-5'>
                        <BButton
                            mode="glossy"
                            color='blue'
                            size='lg'
                            onClick={() => LoginBtn()}
                            disabled={isLoading}
                        >
                            <p className='text-white font-semibold text-[13px] text-shadow-xs text-shadow-zinc-500'>
                                {isLoading ? 'LOGGING IN...' : 'LOGIN'}
                            </p>
                        </BButton>
                    </div>


                    <div className='flex justify-center items-center gap-1 my-2'>
                        <div className='border-b-[0.2px] w-full border-b-gray-50'></div>
                        <p className='text-[12px] text-gray-300'>Or</p>
                        <div className='border-b-[0.2px] w-full border-b-gray-50'></div>
                    </div>


                    <div>

                        <div className='mt-5'>
                            <Link href="#">
                                <BButton
                                    mode="glossy"
                                    color='gray'
                                    size='md'
                                >
                                    <div className='flex gap-2'>
                                        <Image
                                            alt='Icon Google'
                                            width={20}
                                            height={10}
                                            src="/images/google.webp"

                                        />
                                        <p className='text-white text-[12px] text-shadow-xs'>
                                            Login with google
                                        </p>

                                    </div>
                                </BButton>

                            </Link>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default FormLogin

