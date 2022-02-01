import { ChatAltIcon } from '@heroicons/react/outline';
import React from 'react';
import { useRouter }   from "next/router"

const Pending = () => {
    const router = useRouter()
  return (  
    <div className="flex flex-col col-span-12 lg:col-span-9 rounded-sm shadow-gray-300 shadow-sm bg-white">
        <span className="border-b border-gray-200 py-2">
            <p className="text-gray-700 px-3">PENDING REVIEWS</p>
        </span>
        <div className="flex flex-col justify-center items-center m-auto">
            <span className="flex p-6 bg-orange-200 rounded-full items-center">
                <ChatAltIcon className="h-8 text-gray-600 font-thin"/>
            </span>
            <p className="text-gray-800 text-sm my-3">Currently there are no orders waiting for reviews</p>
            <p className="text-gray-800 text-xs my-2">All your pending reviews will appear here fro review</p>
            <button onClick={() => router.push("/")} className="button">START SHOPPING</button>
        </div>
    </div>
   )
};

export default Pending;