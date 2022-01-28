import { DeviceMobileIcon, ShoppingBagIcon, SparklesIcon, TruckIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from "next/router"
import React from 'react'

const SmallComponent = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push("/waveEats")} className="flex mx-auto justify-around justify-items-stretch my-1 px-6 w-full bg-orange-300">
            <div className="flex space-x-4 items-center hover:cursor-pointer  rounded-md p-2 px-4 bg-white">
                <SparklesIcon className="h-12 p-2 text-white rounded-full bg-green-400" />
                <p>Wave Eats</p>
            </div>
            <div onClick={() => router.push("/officialStore")} className="flex space-x-4 items-center hover:cursor-pointer  rounded-md p-2 px-4 bg-white">
                <ShoppingBagIcon className="h-12 p-2 text-white rounded-full bg-blue-400"/>
                <p>Official Brands</p>
            </div>
            <div onClick={() => router.push("/deliveries")} className="flex space-x-4 items-center hover:cursor-pointer  rounded-md p-2 px-4 bg-white">
                <TruckIcon className="h-12 p-2 text-white rounded-full bg-red-400"/>
                <p>Free Deliveries</p>
            </div>
            <div className="flex space-x-4 items-center hover:cursor-pointer  rounded-md p-2 px-4 bg-white">
                
                <DeviceMobileIcon className="h-12 p-2 text-white rounded-full bg-yellow-400"/>
                <p>Airtime & Bills</p>
            </div>
        </div>
    )
}

export default SmallComponent
