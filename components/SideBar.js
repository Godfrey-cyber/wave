import React, { useState } from 'react'
import SideBarRow from './SideBarRow'
import { CalendarIcon, ChevronDownIcon, ClockIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import { DesktopComputerIcon, DeviceMobileIcon, HomeIcon } from '@heroicons/react/outline'

const SideBarLeft = () => {
    
    return (
        <div className="col-span-2 absolute lg:top-16 lg:left-20 top-0 left-0 h-full z-50">
            <div className="p-2 mt-5 max-w-[200px] xl:min-w-[200px] bg-gray-100 rounded-md">
                <SideBarRow Icon={UsersIcon} title="Supermarket"/>
                <SideBarRow Icon={UserGroupIcon} title="Health & Beauty"/>
                <SideBarRow Icon={HomeIcon} title="Home & Office"/>
                <SideBarRow Icon={DeviceMobileIcon} title="Phone & Tablets"/>
                <SideBarRow Icon={DesktopComputerIcon} title="Computing"/>
                <SideBarRow Icon={ClockIcon} title="Electronics"/>
                <SideBarRow Icon={UsersIcon} title="Fashion"/>
                <SideBarRow Icon={UserGroupIcon} title="Gaming"/>
                <SideBarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
                <SideBarRow Icon={CalendarIcon} title="Baby Products"/>
                <SideBarRow Icon={CalendarIcon} title="Sporting Goods"/>
                <SideBarRow Icon={ClockIcon} title="Garden & Outdoors"/>
                <SideBarRow Icon={ChevronDownIcon} title="See More Categories"/>
            </div>
        </div>
    )
}

export default SideBarLeft

