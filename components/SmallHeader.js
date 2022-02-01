import React from 'react'
import {ShieldCheckIcon, ShoppingBagIcon, SparklesIcon, TruckIcon} from "@heroicons/react/solid"

const SmallHeader = () => {
    return (
        <div className="hidden w-full py-2 h-8 bg-jumia-bg_sm_header justify-around items-center">
            <div className="flex items-center space-x-1">
                <SparklesIcon className="icon"/>
                <p className="text-xs text-orange-300 whitespace-nowrap hover:underline">Sell on Wave</p>
            </div>
            <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                    <p className="link">Foods</p>
                    <ShoppingBagIcon className="icon"/>
                </div>
                <div className="flex items-center space-x-1">
                    <p className="link">Pay</p>
                    <ShieldCheckIcon className="icon"/>
                </div>
                <div className="flex items-center space-x-1">
                    <p className="link">Logistics</p>
                    <TruckIcon className="icon"/>
                </div>
            </div>
            <div className="">
                <p></p>
            </div>
        </div>
    )
}

export default SmallHeader
