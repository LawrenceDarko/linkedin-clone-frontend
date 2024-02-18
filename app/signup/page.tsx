'use client'

import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import CustomInput from '../Components/CustomInput';
import Link from 'next/link';
import { RiLoader4Fill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';


const LinkedInSignUp = () => {
    const router = useRouter()
    const { control, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async(data: FieldValues) => {
        // Handle sign-up logic with the form data
        // console.log(data);
        try {
            setLoading(true)
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Set appropriate headers
                },
                body: JSON.stringify(data),
                credentials: 'include', // Include cookies in the request
            });
            const body = await response.json();
            console.log("RES DATA:", body)
            if(body.success){
                router.push('/uas/login')
            }

        } catch (error) {
            console.log("LOGGING IN ERROR", error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#F4F2EE]">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-3xl font-bold text-[#0960B7] mb-4">Join LinkedIn</h1>
            <p className="text-sm text-gray-600 mb-6">
            Make the most of your professional life.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <CustomInput
                    name="firstName"
                    placeholder="First Name"
                    control={control}
                    customStyles="py-3 px-4 border border-gray-300 focus:outline-none focus:border-[#0960B7] rounded w-full"
                    type="text"
                    rules={{ required: 'First Name is required' }}
                />
                <CustomInput
                    name="lastName"
                    placeholder="Last Name"
                    control={control}
                    customStyles="py-3 px-4 border border-gray-300 focus:outline-none focus:border-[#0960B7] rounded w-full"
                    type="text"
                    rules={{ required: 'Last Name is required' }}
                />
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
                <button
                    type="submit"
                    className="bg-[#0960B7] flex justify-center items-center text-white py-3 px-4 rounded-full hover:bg-blue-600 transition duration-300 w-full"
                >
                    {loading? <RiLoader4Fill size={22} className="text-white animate-spin"/> : "Join now"}
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
            Already on LinkedIn?{' '}
            <Link className="text-[#0960B7] hover:underline" href={{ pathname: '/uas/login', query: {  source: 'cold_join_sign_in' } }}>Sign in</Link>
            </p>
        </div>
        </div>
    );
};

export default LinkedInSignUp;
