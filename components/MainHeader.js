import { SearchIcon } from '@heroicons/react/solid'
import { UserIcon, QuestionMarkCircleIcon, ShoppingCartIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Image from "next/image"
import { selectItems } from "../slices/basketSlice"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { useRouter } from 'next/router'

const MainHeader = ({close, setClose, modal, setModal}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const items = useSelector(selectItems)
    const handleClick = () => {
        setClose(prevState => !prevState)
    }
    const handleModal = () => {
        setModal(prev => !prev)
    }

    return (
        <section className="flex items-center justify-between overflow-x-hidden py-2 px-12 bg-white shadow-gray-200 shadow-b shadow-sm">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                    onClick={() => router.push("/")}
                    src="http://links.papareact.com/f90"
                    width={150}
                    height={40}
                    className="cursor-pointer"
                />
             </div>
                {/* search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-orange-400 hover:bg-orange-500">
                    <input className="p-2 w-6 flex-grow h-full flex-shrink rounded-l-md focus:outline-none px-4" placeholder="Search products, brands & categories" type="text" />
                    <SearchIcon className="h-12 p-4 text-white"/>
                </div>
                {/* utility icons */}
            <div className="flex space-x-4">
                <div onClick={handleClick} className="mainHeader_divs group">
                        <UserIcon className="mainHeader_icon"/>
                        <p className="mainHeader_p">Account</p>
                        {close ? (<ChevronDownIcon className="chevron_down" />) : (<ChevronUpIcon className="chevron_down" />)}
                </div>
                <div onClick={handleModal} className="mainHeader_divs group">
                    <QuestionMarkCircleIcon  className="mainHeader_icon"/>
                    <p className="mainHeader_p">Help</p>
                    { modal ? (<ChevronDownIcon className="chevron_down"/>) : (<ChevronUpIcon className="chevron_down"/>)}
                </div>
                <div onClick={() => router.push("/cart")} className="  relative mainHeader_divs group">
                    <span className="absolute -top-2 -right-2 md:right-10 h-5 w-5 bg-yellow-400 text-center align-center rounded-full text-white text-sm font-bold">{items.length}</span>
                    <ShoppingCartIcon className="mainHeader_icon" />
                    <p className="mainHeader_p">Cart</p>
                </div>
            </div>
        </section>
        // CLIENT_SECRET="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"
        // CLIENT_ID="943228039096-85874clgtl50rgj4bn4ook2tom7b4ni1.apps.googleusercontent.com"
        //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
    )
}

export default MainHeader
