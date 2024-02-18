import React from 'react';

const InvitationCard = () => {
    // Sample data for invitation items
    const invitationItems = [
        {
            profileImage: 'https://placekitten.com/40/40',
            name: 'John Doe',
            about: 'Company • Computer Software',
        },
        {
            profileImage: 'https://placekitten.com/41/41',
            name: 'Jane Smith',
            about: 'Designer • Creative Enthusiast',
        },
        {
            profileImage: 'https://placekitten.com/41/41',
            name: 'Jane Smith',
            about: 'Designer • Creative Enthusiast',
        },
        {
            profileImage: 'https://placekitten.com/41/41',
            name: 'Jane Smith',
            about: 'Designer • Creative Enthusiast',
        },

    ];

    return (
        <div className="border dark:bg-[var(--dark-card-bg-color)] bg-white p-4 rounded-lg mb-4">
        {/* Card Title */}
        <div className="mb-4 font-medium flex justify-between text-sm">
            <p>Invitations</p>
            <p>See all</p>
        </div>

        {/* Invitation Items */}
        {invitationItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 border-t pt-3">
            {/* Left Div: Profile Image, Name, About */}
            <div className="flex items-center">
                <img
                    src={item.profileImage}
                    alt="Profile Image"
                    className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.about}</p>
                </div>
            </div>

            <div className="flex">
                <button className="dark:text-[#DDDDDE] text-gray-600 font-semibold px-3 py-1 mr-2">Ignore</button>
                <button className="text-[#70B5F8] dark:text-[#70B5F8] px-3 py-1 border-2 border-[#70B5F8] rounded-full">Accept</button>
            </div>
            </div>
        ))}
        </div>
    );
};

export default InvitationCard;
