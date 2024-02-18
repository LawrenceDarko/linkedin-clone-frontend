import React from 'react';

const AddToFeed = () => {
    return (
        <div className="w-full bg-white dark:bg-[var(--dark-card-bg-color)] p-4 rounded-md border mb-4">

            <div className="mb-4 text-md font-medium">Add to your feed</div>

            <div className="flex items-center mb-4">
                {/* Profile Image */}
                <img
                src="https://placekitten.com/40/40"
                alt="Profile Image"
                className="w-10 h-10 object-cover rounded-full mr-4"
                />

                {/* Name and About */}
                <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-600">Company • Computer Software</p>
                    <button className="border-2 dark:border-[#76797B] dark:text-[#76797B] text-gray-600 px-3 py-1 rounded-full">Follow +</button>
                </div>

            </div>

            <div className="flex items-center mb-4">
                {/* Profile Image */}
                <img
                src="https://placekitten.com/40/41"
                alt="Profile Image"
                className="w-10 h-10 object-cover rounded-full mr-4"
                />

                <div>
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-xs text-gray-600">Company • Design</p>
                    <button className="border-2 dark:border-[#76797B] dark:text-[#76797B] text-gray-600 px-3 py-1 rounded-full">Follow +</button>
                </div>
                
            </div>

        </div>
    );
};

export default AddToFeed;
