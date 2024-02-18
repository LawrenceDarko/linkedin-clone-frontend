import React from 'react'
import ManageNotification from '../Cards/ManageNotification'

const NotificationSidebar = () => {
    return (
        <div className="flex flex-col h-full w-full items-end overflow-y-auto">
            <ManageNotification />
        </div>
    )
}

export default NotificationSidebar