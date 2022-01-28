import React from 'react';
import { ArchiveIcon, ChatAltIcon, ClockIcon, HeartIcon, MailIcon, TicketIcon, UserIcon } from '@heroicons/react/outline';

const CustomerSidebar = () => {
    return (
        <div className="flex flex-col col-span-3 rounded-sm shadow-gray-300 shadow-sm bg-white">
            <span className="account_util">
                <UserIcon className="h-5 text-gray-700"/>
                <p className="account_util1">My Wave Account</p>
            </span>
            <span className="account_util">
                <ArchiveIcon className="h-5 text-gray-700"/>
                <p onClick={() => router.push("/orders")} className="account_util1">Orders</p>
            </span>
            <span className="account_util">
                <MailIcon className="h-5 text-gray-700"/>
                <p className="account_util1">Inbox</p>
            </span>
            <span className="account_util">
                <ChatAltIcon className="h-5 text-gray-700"/>
                <p className="account_util1">Pending Reviews</p>
            </span>
            <span className="account_util">
                <HeartIcon className="h-5 text-gray-700"/>
                <p onClick={() => router.push("/wishlist")} className="account_util1">Saved Items</p>
            </span>
            <span className="account_util">
                <TicketIcon className="h-5 text-gray-700"/>
                <p className="account_util1">Wave Credit</p>
            </span>
            <span className="account_util border-b border-gray-200">
                <ClockIcon className="h-5 text-gray-700"/>
                <p className="account_util1">Recently Reviewed</p>
            </span>
            <span className="account_util">
                <p className="account_util1">Detailst</p>
            </span>
            <span className="account_util">
                <p onClick={() => router.push("/orders")} className="account_util1">Address Book</p>
            </span>
            <span className="account_util">
                <p className="account_util1">Change Password</p>
            </span>
            <span className="account_util">
                <p className="account_util1">Newsletter Preffernces</p>
            </span>
            <span className="flex items-center border-t hover:bg-gray-100 hover:cursor-pointer border-gray-200 justify-center py-1 px-5">
                <p className="text-orange-400 text-sm py-1">LOGOUT</p>
            </span>
        </div>
    )
};

export default CustomerSidebar;
