import React from 'react';
import { FiMoreHorizontal, FiHeart, FiMessageSquare, FiRepeat, FiSend, FiSmile, FiImage } from 'react-icons/fi';
import { AiTwotoneLike } from "react-icons/ai";

const PostCard = () => {
    return (
        <div className="w-full border bg-white dark:bg-[var(--dark-card-bg-color)] rounded-lg mb-4">
        {/* Top Section: Profile Image, Name, About, and More Options */}
        <div className="flex p-4 items-start justify-between">
            {/* Profile Image */}
            <div className='flex justify-center items-center'>
                <img
                    src="https://placekitten.com/40/40"
                    alt="Profile Image"
                    className="w-10 h-10 object-cover rounded-full mr-4"
                />

                {/* Name and About */}
                <div>
                    <p className="text-sm font-semibold">John Doe</p>
                    <p className="text-xs text-gray-600">Company • Computer Software</p>
                </div>
            </div>
            
            <FiMoreHorizontal size={24} className="text-gray-600" />
        </div>

        {/* Post Text */}
        <p className="text-sm px-4 text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ac augue eget convallis.
        </p>

        {/* Post Image */}
        <div className='w-full'>
            <img
                src="https://placekitten.com/500/300"
                alt="Post Image"
                className="w-full h-48 object-cover mb-4"
            />
        </div>

        {/* Horizontal Line */}
        <div className='px-3 w-full'>
            <div className='px-2 text-xs text-gray-500 flex justify-between'>
                <div className='flex gap-1 items-center'>
                    <AiTwotoneLike className='text-red-400'/>
                    <p>Akosua and 50 Others</p>
                </div>
                
                <div className='flex gap-1'>
                    <p>6 Comments</p>
                    <p>.</p>
                    <p>1 Repost</p>
                </div>
            </div>
            
            <hr className="border-b-1 mx-2 border-gray-300 mb-4 mt-2" />
        </div>

        {/* Like, Comment, Repost, Send */}
        <div className="flex md:px-12 pb-5 text-[#5E5E5E] justify-between items-center">
            {/* Like */}
            <div className="flex items-center">
                <FiHeart className=" mr-2 text-xl" />
                <p className="text-sm ">Like</p>
            </div>

            {/* Comment */}
            <div className="flex items-center">
                <FiMessageSquare className=" mr-2 text-xl" />
                <p className="text-sm ">Comment</p>
            </div>

            {/* Repost */}
            <div className="flex items-center font-medium">
                <FiRepeat className=" mr-2 text-xl" />
                <p className="text-sm ">Repost</p>
            </div>

            {/* Send */}
            <div className="flex items-center">
                <FiSend className=" mr-2 text-xl" />
                <p className="text-sm ">Send</p>
            </div>
        </div>

        {/* Comment Section */}
        <div className="mb-4 px-4">
            {/* Add Comment Section */}
            <div className="flex items-center mb-2">
                {/* Profile Image for Comment */}
                <img
                    src="https://placekitten.com/30/30"
                    alt="Profile Image"
                    className="w-10 h-10 object-cover rounded-full mr-2"
                />

                {/* Comment Input Section */}
                <div className="border-2 border-gray-300 dark:border-[#76797B] rounded-full flex-grow p-2">
                    <div className="flex justify-between items-center">
                        <input className="text-xs text-gray-600 bg-transparent h-full w-full p-1 outline-none border-transparent" placeholder='Add a comment'/>
                        <div className="flex items-center">
                            <FiSmile className="text-gray-600 mr-2" />
                            <FiImage className="text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments of Others */}
            <div className="flex items-center mb-2">
                <img
                    src="https://placekitten.com/30/30"
                    alt="Profile Image"
                    className="w-10 h-10 object-cover rounded-full mr-2"
                />
                {/* Comment Content */}
                <div className='w-full bg-[#F2F2F2] dark:bg-[#364547] rounded-b-md rounded-tr-md p-3'>
                    <div className='pb-3'>
                        <p className="text-sm text-gray-600 font-semibold">Jane Smith</p>
                        <p className="text-xs text-gray-600 dark:text-[#AFB5B5]">Software Engineer | Data Scientist</p>
                    </div>
                    
                    <p className="text-sm text-gray-800">Great post! 😺</p>
                </div>
            </div>

            {/* Add more comments as needed */}
        </div>
        
        </div>
    );
};

export default PostCard;
