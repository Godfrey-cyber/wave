import React from 'react'

const SideBarRow = ({ Icon, title }) => {
    return (
        <div className="flex items-center space-x-2 px-2 py-1 hover:text-orange-400 transition-all duration-400 cursor-pointer">
            {Icon && <Icon className="h-5 w-5 text-orange-500" />}
            <p className="hidden sm:inline-flex text-xs">{title}</p>
        </div>
    )
}

export default SideBarRow
