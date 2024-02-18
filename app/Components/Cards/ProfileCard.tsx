import React from 'react';

const ProfileCard = () => {
    return (
        <div className="w-60 dark:bg-[var(--dark-card-bg-color)] text-sm text-gray-500 bg-white border rounded-md">
        {/* Cover Image */}
        <div className="mb-4 h-24 relative flex justify-center">
            <img
            src="https://placekitten.com/600/200"
            alt="Cover Image"
            className="w-full h-16 object-cover rounded-tr-md rounded-tl-md"
            />
            <div className="absolute bottom-0">
                <img
                src="https://placekitten.com/100/100"
                alt="Profile Image"
                className="w-16 h-16 object-cover rounded-full border-2 border-white"
                />
            </div>
        </div>

        {/* Profile Image */}
        

        <div className='px-4 pb-4'>
            {/* Username */}
            <div className="mb-4 text-center">
                <p className="text-md font-semibold hover:underline pb-3 cursor-pointer">John Doe</p>
                <p className='text-center dark:text-[#A4A5A7] text-xs font-thin'>
                Software Developer (Web and Mobile) | Full Stack Engineer | Seeking Full-Time Software Engineer Job | JavaScript, React Native, React.js, Node.js, Next.js, Python, HTML, CSS, Tailwindcss, AWS, REST APIs
                </p>
            </div>

            {/* Horizontal Line */}
            <hr className="border-b-1 border-gray-300 mb-4" />

            {/* Profile Viewers and Post Impressions */}
            <div className="flex flex-col mb-4 w-full gap-3">
                <div className='flex justify-between'>
                    <p className="text-xs dark:text-[#A4A5A7] font-medium">Profile Viewers</p>
                    <p className="text-xs dark:text-[#A4A5A7] text-gray-600">123</p>
                </div>
                <div className='flex justify-between'>
                    <p className="text-xs dark:text-[#A4A5A7] font-medium">Post Impressions</p>
                    <p className="text-xs dark:text-[#A4A5A7] text-gray-600">456</p>
                </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-b-1 border-gray-300 mb-4" />

            {/* Premium Offer */}
            <div className="mb-4">
                <p className="text-xs dark:text-[#A4A5A7] text-gray-500">
                    Strengthen your profile with an AI writing assistant
                </p>
                <p className="text-xs font-semibold text-blue-500">Try Premium for $0</p>
            </div>

            {/* Horizontal Line */}
            <hr className="border-b-1 border-gray-300 mb-4" />

            {/* My Items */}
            <div className="text-xs font-semibold mb-2 dark:text-[#A4A5A7]">My Items</div>
            {/* Add your items list here */}
        </div>
        </div>
    );
};

export default ProfileCard;
