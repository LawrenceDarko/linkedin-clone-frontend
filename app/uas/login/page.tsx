'use client'

import CustomInput from '@/app/Components/CustomInput';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { RiLoader4Fill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/app/contexts/AuthContext';

const LinkedInLogin = () => {
    const { control, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState<string>('')
    const { dispatch } = useAuthContext()
    const router = useRouter()

    const onSubmit = async(data: FieldValues) => {
        // Handle login logic with the form data
        console.log(data);
        try {
            setErrMsg('')
            setLoading(true)
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Set appropriate headers
                },
                body: JSON.stringify(data),
                credentials: 'include', // Include cookies in the request
            });
            const body = await response.json();
            console.log("LOGIN RES DATA:", body)

            if(!body?.data){
                setErrMsg(body?.message)
            }
            
            if(body.success) {
                localStorage.setItem('userData', JSON.stringify(body.data))
                dispatch({type: 'LOGIN', payload: body.data})
                router.push('/feed')
            }

        } catch (error: any) {
            console.log("LOGGING IN ERROR", error)
            setErrMsg(error?.response?.message)
        } finally {
            setLoading(false)
        }
    };

    return (
    <div className="flex items-center justify-center h-screen bg-[#F4F2EE]">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-3xl font-bold text-[#0960B7] mb-4">Sign in</h1>
            <p className="text-sm text-gray-600 mb-6">
            Stay updated on your professional world.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CustomInput
                name="email"
                placeholder="Email"
                control={control}
                customStyles="py-3 px-4 border border-gray-300 focus:outline-none focus:border-[#0960B7] rounded w-full"
                type="text"
                rules={{ required: 'Email is required' }}
            />
            <CustomInput
                name="password"
                placeholder="Password"
                control={control}
                customStyles="py-3 px-4 border border-gray-300 focus:outline-none focus:border-[#0960B7] rounded w-full"
                type="password"
                rules={{ required: 'Password is required' }}
            />
            {errMsg && <p className="pt-3 italic text-red-500 text-center">{errMsg}</p>}
            <button
                type="submit"
                className="bg-[#0960B7] flex justify-center items-center text-white py-3 px-4 rounded-full hover:bg-blue-600 transition duration-300 w-full"
            >
                {loading? <RiLoader4Fill size={22} className="text-white animate-spin"/> : "Sign In"}
            </button>
            </form>
            <div className="my-4 border-gray-300 flex items-start justify-start">
                <span className="text-sm text-[#0960B7] cursor-pointer">
                    Forgot password?
                </span>
            </div>
            <div className="flex items-center border-b relative justify-center mb-4">
                <div className='absolute bg-white p-2'>or</div>
            </div>
            <div className='py-3'>
                <p className='text-xs'>By clicking Continue, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</p>
            </div>
            <button className="border border-gray-300 text-sm text-[#0960B7] py-2 px-4 rounded-full w-full">
            Sign in with Google
            {/* Add Google logo here if needed */}
            </button>
            <p className="mt-6 text-sm text-gray-600">
            New to LinkedIn?{' '}
            <Link className="text-[#0960B7] hover:underline" href={{ pathname: '/signup', query: {  source: 'cold_join_sign_in' } }}>Join now</Link>
            </p>
        </div>
        </div>
    );
};

export default LinkedInLogin;
