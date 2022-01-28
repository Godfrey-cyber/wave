import { CurrencyDollarIcon, QuestionMarkCircleIcon, RefreshIcon} from '@heroicons/react/outline'
import React from 'react'

const SideBarRight = () => {
    return (
       <div className="sm:hidden md:inline-flex flex-col col-span-2">
            <div className="px-2 py-3 mt-5 bg-gray-100 rounded-md space-y-2">
                <div className="flex space-x-1 hover:cursor-pointer">
                    <span className="">
                        <QuestionMarkCircleIcon className="h-8 text-orange-300"/>
                    </span>
                    <div className="flex-col">
                        <p className="text-sm font-normal">HELP CENTER</p>
                        <p className="text-xs font-normal">Guide to Customer Care</p>
                    </div>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer">
                    <span className="">
                       <RefreshIcon className="h-8 text-orange-300"/>
                    </span>
                    <div className="flex-col">
                        <p className="text-sm font-normal">EASY RETURN</p>
                        <p className="text-xs font-normal">Quick Refund</p>
                    </div>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer">
                    <span className="">
                        <CurrencyDollarIcon className="h-8 text-orange-300"/>
                    </span>
                    <div className="flex-col">
                        <p className="text-sm font-normal">SELL ON JUMIA</p>
                        <p className="text-xs font-normal">Millions Of Visitors</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 rounded-md h-40 w-auto">
                <img className="rounded-md h-full" loading="lazy" objectfit="contain" src="https://ke.jumia.is/cms/2022/W02/HP/Sliders/KE_Electronics_SuperSaver_Afcon_0122_S.jpg" alt="helloimage"/>
            </div>
        </div>
    )
}

export default SideBarRight
