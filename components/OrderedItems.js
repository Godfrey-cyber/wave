import { TruckIcon } from '@heroicons/react/outline';
import React from 'react';
import { useRouter }   from "next/router"

const OrderedItems = () => {
    const router = useRouter()
  return (  
    <div className="flex flex-col col-span-12 lg:col-span-9 rounded-sm shadow-gray-300 mb-6 shadow-sm bg-white">
        <span className="border-b border-gray-200 py-2">
            <p className="text-gray-700 px-3">ORDERS</p>
        </span>
        <div className="flex flex-col justify-center items-center m-auto py-6">
            <span className="flex p-6 bg-orange-200 rounded-full items-center">
                <TruckIcon className="h-8 text-gray-600 font-thin"/>
            </span>
            <p className="text-gray-800 text-sm my-3">Ther are no orders currently</p>
            <p className="text-gray-800 text-xs my-2">Your orders will appear here</p>
            <button onClick={() => router.push("/")} className="button mb-4">START SHOPPING</button>
        </div>
    </div>
   )
};

export default OrderedItems;