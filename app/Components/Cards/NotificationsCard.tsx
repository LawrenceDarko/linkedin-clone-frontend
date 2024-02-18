import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

const NotificationsCard = () => {

    const notifications = [
        {
            profileImage: 'https://placekitten.com/41/41',
            senderName: 'Kofi Boadi',
            message: 'Congratulations... Keep Soaring Higher',
            time: '31m',
        },
        {
            profileImage: 'https://placekitten.com/42/42',
            senderName: 'Anna Smith',
            message: 'You have a new message!',
            time: '1h',
        },
        {
            profileImage: 'https://placekitten.com/43/43',
            senderName: 'John Doe',
            message: 'Event reminder: Meeting at 2 PM',
            time: '2h',
        },
        {
            profileImage: 'https://placekitten.com/41/41',
            senderName: 'Kofi Boadi',
            message: 'Congratulations... Keep Soaring Higher',
            time: '31m',
        },
        {
            profileImage: 'https://placekitten.com/42/42',
            senderName: 'Anna Smith',
            message: 'You have a new message!',
            time: '1h',
        },
        {
            profileImage: 'https://placekitten.com/43/43',
            senderName: 'John Doe',
            message: 'Event reminder: Meeting at 2 PM',
            time: '2h',
        },{
            profileImage: 'https://placekitten.com/41/41',
            senderName: 'Kofi Boadi',
            message: 'Congratulations... Keep Soaring Higher',
            time: '31m',
        },
        {
            profileImage: 'https://placekitten.com/42/42',
            senderName: 'Anna Smith',
            message: 'You have a new message!',
            time: '1h',
        },
        {
            profileImage: 'https://placekitten.com/43/43',
            senderName: 'John Doe',
            message: 'Event reminder: Meeting at 2 PM',
            time: '2h',
        },{
            profileImage: 'https://placekitten.com/41/41',
            senderName: 'Kofi Boadi',
            message: 'Congratulations... Keep Soaring Higher',
            time: '31m',
        },
        {
            profileImage: 'https://placekitten.com/42/42',
            senderName: 'Anna Smith',
            message: 'You have a new message!',
            time: '1h',
        },
        {
            profileImage: 'https://placekitten.com/43/43',
            senderName: 'John Doe',
            message: 'Event reminder: Meeting at 2 PM',
            time: '2h',
        },
    ];

    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className='flex p-3 rounded-lg w-full bg-white border dark:bg-[var(--dark-card-bg-color)]'>
                <div className='bg-[#37C898] text-black p-1 px-3 rounded-2xl'>All</div>
            </div>

            <div  className='border p-2 rounded-lg bg-white dark:bg-[var(--dark-card-bg-color)]'>
                {notifications?.map((notification, index)=>(
                    <div key={index} className="flex justify-between items-center mb-4 pt-3">
                        <div className="flex items-start">
                            <img
                                src={notification.profileImage}
                                alt="Profile Image"
                                className="w-16 h-16 object-cover rounded-full mr-3"
                            />
                            <div>
                                <p className="font-semibold">{notification.senderName}</p>
                                <p className="text-gray-600">{notification.message}</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="dark:text-[#DDDDDE] text-gray-600 text-xs px-3 py-1 mr-2">{notification.time}</div>
                            <FiMoreHorizontal size={24} className="text-gray-600" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotificationsCard