import React from 'react';
import { FaUser } from 'react-icons/fa'; // Assuming you're using react-icons for icons

const PremiumCard = () => {
    return (
        <div className="w-full flex flex-col items-start bg-white dark:bg-[var(--dark-card-bg-color)] p-4 border rounded-lg mb-4">
        {/* Card Title */}
        <div className="mb-2 text-lg font-medium">Achieve Your Goals Faster with Premium</div>

        {/* Premium Information */}
        <p className="text-sm mb-4">
            See who's viewed your profile and directly message members outside of your network.
        </p>

        {/* Premium Users */}
        <div className="flex items-center mb-4">
            <div className="flex space-x-2 relative items-center justify-center">
                <div className="w-6 h-6 absolute left-0 border overflow-hidden rounded-full">
                    <img
                    src="https://placekitten.com/40/40"
                    alt="User 1"
                    className="object-cover w-full h-full rounded-full"
                    />
                </div>
                <div className="w-6 h-6 absolute left-1 border overflow-hidden rounded-full">
                    <img
                    src="https://placekitten.com/40/40"
                    alt="User 2"
                    className="object-cover w-full h-full rounded-full"
                    />
                </div>
                <div className="w-6 h-6 left-4 border absolute overflow-hidden rounded-full">
                    <img
                    src="https://placekitten.com/40/40"
                    alt="User 3"
                    className="object-cover w-full h-full rounded-full"
                    />
                </div>
            </div>
            <p className="text-sm pl-16">Joshua Richardson and millions of other members use Premium</p>
        </div>

        {/* Try Premium Offer */}
        <div className="text-center mb-4">
            <div className="flex ">
                <button className="bg-[#F9C982] dark:text-black px-4 py-1 font-semibold text-sm rounded-full">
                Try Premium for $0
                </button>
            </div>
            <p className="text-xs pt-3">1-month free trial. Cancel anytime.</p>
        </div>

        {/* Premium CTA Button */}
        
        </div>
    );
};

export default PremiumCard;
