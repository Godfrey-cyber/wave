import { DeviceMobileIcon, ShoppingBagIcon, SparklesIcon, TruckIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from "next/router"
import React from 'react'

const SmallComponent = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push("/waveEats")} className="flex mx-auto justify-around justify-items-stretch my-1 px-6 w-full bg-orange-300 overflow-x-hidden">
            <div className="lg:flex flex-col justify-center space-y-2 lg:space-x-4 items-center hover:cursor-pointer md:rounded-md sm:rounded-full sm:p-5 md:p-2 px-4 lg:bg-white">
                <SparklesIcon className="h-12 p-2 text-white rounded-full bg-green-400" />
                <p className="hidden md:inline-flex lg:text-gray-800 text-white">Wave Eats</p>
            </div>
            <div onClick={() => router.push("/officialStore")} className="lg:flex flex-col justify-center space-y-2 lg:space-x-4 items-center hover:cursor-pointer md:rounded-md sm:rounded-full sm:p-5 md:p-2 px-4 lg:bg-white">
                <ShoppingBagIcon className="h-12 p-2 text-white rounded-full bg-blue-400"/>
                <p className="hidden md:inline-flex lg:text-gray-800 text-white">Official Brands</p>
            </div>
            <div onClick={() => router.push("/deliveries")} className="lg:flex flex-col justify-center space-y-2 lg:space-x-4 items-center hover:cursor-pointer md:rounded-md sm:rounded-full sm:p-5 md:p-2 px-4 lg:bg-white">
                <TruckIcon className="h-12 p-2 text-white rounded-full bg-red-400"/>
                <p className="hidden md:inline-flex lg:text-gray-800 text-white">Free Deliveries</p>
            </div>
            <div className="lg:flex flex-col justify-center space-y-2 lg:space-x-4 items-center hover:cursor-pointer md:rounded-md sm:rounded-full sm:p-5 md:p-2 px-4 lg:bg-white ">
                
                <DeviceMobileIcon className="h-12 p-2 text-white rounded-full bg-yellow-400"/>
                <p className="hidden md:inline-flex lg:text-gray-800 text-white">Airtime & Bills</p>
            </div>
        </div>
    )
}

export default SmallComponent
