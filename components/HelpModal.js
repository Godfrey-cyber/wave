import { ChatAltIcon } from '@heroicons/react/outline';
import React from 'react';

const HelpModal = () => {
    return (
        <div className="flex flex-col bg-white shadow-gray-300 shadow-md rounded-sm absolute top-36 right-20 z-50">
            <span className="account_util">
                <p className="account_util1">Help Center</p>
            </span>
            <span className="account_util">
                <p className="account_util1">Place & Track Order</p>
            </span>
            <span className="account_util">
                <p className="account_util1">Order Cancelation</p>
            </span>
            <span className="account_util">
                <p className="account_util1">Returns & Refunds</p>
            </span>
            <span className="account_util">
                <p className="account_util1">Payment & Wave Account</p>
            </span>
            <span className="flex items-center border-t bg-orange-500 hover:bg-orange-400 space-x-3 transition-all duration-500 hover:cursor-pointer border-gray-200 justify-center py-1 px-5">
                <ChatAltIcon className="text-white h-5" />
                <p className="text-white text-sm py-1">LIVE HELP</p>
            </span>
        </div>
  )
};

export default HelpModal;
