'use client'

import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = 260; // Update with the actual height of your navbar
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            setIsFixed(scrollY > navbarHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`text-center flex items-center text-gray-600 w-[301px] justify-center flex-col text-xs ${isFixed ? ' fixed' : ''}`}>
            <div className='flex text-center items-center justify-center px-12 flex-wrap w-full gap-2'>
                <p className='dark:text-[#A4A5A7]'>About</p>
                <p className='dark:text-[#A4A5A7]'>Accessibility</p>
                <p className='dark:text-[#A4A5A7]'>Help</p>
                <p className='dark:text-[#A4A5A7]'>Center</p>
                <p className='dark:text-[#A4A5A7]'>Privacy & Terms</p>
                <p className='dark:text-[#A4A5A7]'>Ad Choices</p>
                <p className='dark:text-[#A4A5A7]'>Advertising</p>
                <p className='dark:text-[#A4A5A7]'>Business Services</p>
                <p className='dark:text-[#A4A5A7]'>Get the LinkedIn app</p>
                <p className='dark:text-[#A4A5A7]'>More</p>
                <p>LinkedIn Corporation © 2024</p>
            </div>
        </div>
    )
}

export default Footer