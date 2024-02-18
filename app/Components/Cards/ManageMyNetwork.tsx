import React from 'react';
import { FiUsers, FiBook, FiHeart } from 'react-icons/fi';

const ManageNetworkCard = () => {
  // Array of network items with icon, text, and number
    const networkItems = [
        { icon: <FiUsers className="text-gray-600 mr-2 text-2xl" />, text: 'Connections', number: '500' },
        { icon: <FiUsers className="text-gray-600 mr-2 text-2xl" />, text: 'Contacts', number: '200' },
        { icon: <FiHeart className="text-gray-600 mr-2 text-2xl" />, text: 'Following & Followers', number: '300' },
        { icon: <FiUsers className="text-gray-600 mr-2 text-2xl" />, text: 'Groups', number: '50' },
        { icon: <FiUsers className="text-gray-600 mr-2 text-2xl" />, text: 'Events', number: '10' },
        { icon: <FiUsers className="text-gray-600 mr-2 text-2xl" />, text: 'Pages', number: '5' },
        { icon: <FiUsers className="text-gray-600 mr-2 text-2xl" />, text: 'Newsletters', number: '2' },
    ];

    return (
        <div className="fixed bg-white dark:bg-[var(--dark-card-bg-color)] p-4 rounded-lg border w-[301px]">
        {/* Card Title */}
        <div className="mb-4 text-lg font-semibold">Manage my network</div>

        {/* Network Items */}
        <div className="space-y-7">
            {/* Map over network items */}
            {networkItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                        {item.icon}
                        <p className="text-sm">{item.text}</p>
                    </div>
                    <p className="text-sm text-gray-600">{item.number}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ManageNetworkCard;
