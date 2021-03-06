import { SearchIcon } from '@heroicons/react/solid'
import { UserIcon, QuestionMarkCircleIcon, ShoppingCartIcon, ChevronDownIcon, ChevronUpIcon, MenuIcon } from '@heroicons/react/outline'
import Image from "next/image"
import { selectItems } from "../slices/basketSlice"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import SideBarRow from "./SideBarRow"
// import SideBarRignt from "./SideBarRignt"

const MainHeader = ({close, setClose, modal, setModal, barOpen, setBarOpen}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const items = useSelector(selectItems)
    const handleClick = () => {
        setClose(prevState => !prevState)
    }
    const handleModal = () => {
        setModal(prev => !prev)
    }
    const handleBarOpen = () => {
        setBarOpen(prevState => !prevState)
    }

    //auth
        const [user, setUser] = useState(null);
useEffect(() => {
        const token = user?.token
        // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

        const value = localStorage.getItem("profile");
        const user = !!value ? JSON.parse(value) : undefined;
        setUser(JSON.parse(localStorage.getItem("profile")))
            console.log(user)
        // setUser(JSON.parse(localStorage.getItem("profile")))
    },[])               
    return (
        <section className="flex flex-col sticky w-full top-0 z-50 overflow-x-hidden py-2 lg:px-12 px-8 space-y-2 bg-white shadow-gray-200 shadow-b shadow-sm">
            <div className="flex items-center justify-between ">
                <div className="flex space-x-1 items-center">
                    <div onClick={handleBarOpen}><MenuIcon className="h-6 mt-2 text-gray-800 cursor-pointer" /></div>
                    <span onClick={() => router.push("/")} className="mt-2 flex items-center space-x-1 hover:cursor-pointer">
                        <p className="text-gray-800 text-2xl">Wave</p>
                        <div><ShoppingCartIcon className="h-6 text-gray-800" /></div>
                    </span>
                </div>
                    {/* search */}
                <div className="hidden lg:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-orange-400 hover:bg-orange-500">
                    <input className="p-2 w-6 flex-grow h-full flex-shrink rounded-l-md focus:outline-none px-4" placeholder="Search products, brands & categories" type="text" />
                    <SearchIcon className="h-12 p-4 text-white"/>
                </div>
                {/* utility icons */}
                <div className="flex space-x-4">
                    <div onClick={handleClick} className="mainHeader_divs group">
                            <UserIcon className="mainHeader_icon"/>
                            <p className="hidden lg:inline-flex mainHeader_p">{user ? `Hi, ${user.data.result.givenName}` : 'My Account'}</p>
                            {close ? (<ChevronDownIcon className=" hidden lg:inline-flex chevron_down" />) : (<ChevronUpIcon className=" hidden lg:inline-flex chevron_down" />)}
                    </div>
                    <div onClick={handleModal} className=" hidden lg:inline-flex mainHeader_divs group">
                        <QuestionMarkCircleIcon  className="mainHeader_icon"/>
                        <p className="mainHeader_p">Help</p>
                        { modal ? (<ChevronDownIcon className="chevron_down"/>) : (<ChevronUpIcon className="chevron_down"/>)}
                    </div>
                    <div onClick={() => router.push("/cart")} className="relative mainHeader_divs group">
                        <span className="absolute -top-2 -right-2 md:right-2 lg:right-6 h-5 w-5 bg-yellow-400 text-center align-center rounded-full text-white text-sm font-bold">{items.length}</span>
                        <ShoppingCartIcon className="mainHeader_icon" />
                        <p className="mainHeader_p hidden lg:inline-flex">Cart</p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex items-center h-10 rounded-full flex-grow cursor-pointer border border-gray-600">
                 <div><SearchIcon className="h-8 p-2 text-gray-700 ml-3"/></div>
                <input className="p-2 w-4/5 flex-grow h-full flex-shrink rounded-l-md border-0 mx-4 focus:outline-none px-2" placeholder="Search products, brands & categories" type="text" />
            </div>
        </section>
        // CLIENT_SECRET="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"
        // CLIENT_ID="943228039096-85874clgtl50rgj4bn4ook2tom7b4ni1.apps.googleusercontent.com"
        //March token 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
    )
}

export default MainHeader
