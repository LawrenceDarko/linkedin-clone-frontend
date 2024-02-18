'use client'

import React from 'react';
import { BsImage } from 'react-icons/bs';
import { FiCamera, FiCalendar, FiEdit } from 'react-icons/fi'; // Assuming you're using react-icons for icons
import { PiArticleMedium } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import useNewPostModalStore from '@/app/hooks/useNewPostModalStore';

const StartPostCard = () => {
    const { onOpen } = useNewPostModalStore()
    return (
        <div className="w-full dark:bg-[var(--dark-card-bg-color)] bg-white p-4 border rounded-lg mb-4">
        {/* Profile Image */}
        <div className="flex items-center mb-4">
            <img
                src="https://placekitten.com/40/40"
                alt="Profile Image"
                className="w-12 h-12 object-cover rounded-full mr-4"
            />
            {/* Start a Post Div */}
            <div onClick={onOpen} className="border border-gray-300 dark:hover:bg-[#424549] dark:border-[#76797B] px-5 cursor-pointer rounded-full flex-grow p-3">
                <p className="text-gray-500">Start a post</p>
            </div>
        </div>

        {/* Media, Event, Write Article */}
        <div className="flex justify-between px-12">
            {/* Media */}
            <div className="flex items-center">
                <BsImage className='mr-2 text-blue-500 text-lg'/>
                <p className="text-sm text-gray-600">Media</p>
            </div>

            {/* Event */}
            <div className="flex items-center">
                <SlCalender className="mr-2 text-[#C37D16] text-lg" />
                <p className="text-sm text-gray-600">Event</p>
            </div>

            {/* Write Article */}
            <div className="flex items-center">
                <PiArticleMedium className="mr-2 text-[#E06847] text-lg" />
                <p className="text-sm text-gray-600">Write Article</p>
            </div>
        </div>
        </div>
    );
};

export default StartPostCard;
