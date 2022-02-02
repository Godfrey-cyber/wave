import React, { useState } from 'react'
// import { useRouter} from "next/router"
import Header from "../../components/Header"
import SmallHeader from "../../components/SmallHeader"
import MainHeader from "../../components/MainHeader"
// import Currency from "react-currency-formatter"
import Image from "next/image"
import { TruckIcon, RefreshIcon, QuestionMarkCircleIcon, ChevronRightIcon, ExclamationCircleIcon, StarIcon, DocumentTextIcon, ViewListIcon, AnnotationIcon, ShoppingCartIcon, ChatIcon, HeartIcon, SparklesIcon, ShieldCheckIcon, BadgeCheckIcon, ChatAlt2Icon } from '@heroicons/react/outline'
import RecentlyLiked from '../../components/RecentlyLiked'
import AlsoLike from '../../components/AlsoLike'
import RecentViews from '../../components/RecentViews'
import MoreItems from '../../components/MoreItems'
import Sponsered from '../../components/Sponsered'
import RecentReviews from '../../components/RecentViews'
import Currency from "react-currency-formatter"
import AccountModal from '../../components/AccountModal';
import HelpModal from '../../components/HelpModal'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../../slices/wishlistSlice'
import { addToBasket } from '../../slices/basketSlice'

const MAX_RATING = 5
const MIN_RATING = 1

const ProductPage = ({products, single}) => {
    const [close, setClose] = useState(true)
  const [modal, setModal] = useState(true)
    // const router = useRouter()
const dispatch = useDispatch()
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
    )
    const [hasPrime] = useState(
        Math.random() < 0.5
    )
    console.log(single)
    const { title, image, id, category, description, price } = single
    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, hasPrime, rating }
        dispatch(addToBasket(product))
        
    }

    const addItemToWishlist = ()  => {
        const product = {
            id, title, price,  image 
        }
        dispatch(addToWishlist(product))
    }
    return (
        <div className="bg-gray-100 w-screen h-screen overflow-x-hidden">
            <Header />
            <SmallHeader />
            <MainHeader setClose={setClose} modal={modal} setModal={setModal} close={close}/>
            {!close && <AccountModal />}
            {!modal && <HelpModal />}
                <main className="grid grid-cols-12 lg:space-x-1 lg:mx-auto my-10 lg:px-16 w-full">
                    {/* Product segment */}
                <div className="flex flex-col mb-0 md:mb-4 col-span-12 lg:col-span-9">
                    <div className="grid grid-cols-12 items-start rounded-sm lg:mx-5 shadow-sm bg-white p-2 lg:p-4 space-x-5">
                        <div className="grid gap-y-14 flex-col content-between col-span-12 lg:col-span-4 ">
                            <img src={image} objectfit="contain" loading="lazy" className="hover:cursor-grabbing h-36 w-auto" />
                            <div className="text-sm border-t p-2 border-gray-200">
                                <p className="text-sm text-gray-500">SHARE THIS PRODUCT</p>
                                <span className="span flex space-x-3">
                                    <p className="text-xm text-blue-700">Facebook</p>
                                    <p className="text-xm text-blue-600">Twitter</p>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-blue-600 hover:underline hover:cursor-pointer text-xs">Report incorrect product information</p>
                            </div>
                        </div>
                        {/* div-2 */}
                        <div className="flex flex-col col-span-12 lg:col-span-8 lg:px-5">
                            <span onClick={addItemToWishlist} className="flex justify-between items-center">
                                <p className="text-md">{title.split("").splice(0, 20).join("")}...</p>
                                <HeartIcon className="h-9 text-orange-400 hover:bg-pink-200 lg:p-2 rounded-full transition-all duration-100"/>
                            </span>
                            <span className="flex flex-col space-x-2">
                                <p className="text-xs text-gray-700">Category: {category} |</p>
                                <p className="text-xs text-blue-700 hover:underline hover:cursor-pointer">Similar products from {category}</p>
                            </span>
                            <div className="flex items-center space-x-3 mb-1 border-b border-gray-200">
                                <span className="flex space-x-1 mb-1">
                                    <StarIcon className="h-4 hover:cursor-pointer text-gray-300"/>
                                    <StarIcon className="h-4 hover:cursor-pointer text-gray-300"/>
                                    <StarIcon className="h-4 hover:cursor-pointer text-gray-300"/>
                                    <StarIcon className="h-4 hover:cursor-pointer text-gray-300"/>
                                    <StarIcon className="h-4 hover:cursor-pointer text-gray-300"/>
                                </span>
                                <p className="text-gray-400 text-xs">Rating: {""} {single.rating.rate} {""} ({single.rating.count})</p>
                            </div>
                            <span className="flex-col flex space-y-3 mb-4">
                                <div className="mb-1 text-lg font-bold">
                                    <Currency
                                        quantity={price} 
                                        currency="KES"
                                    />
                                </div>
                                <p className="lg:text-xs  text-sm text-gray-700">+ shipping from KSh 97 to CBD - UON/Globe/Koja/River Road</p>
                                <button onClick={addItemToBasket} className="flex items-center p-2  justify-between bg-orange-500 rounded-sm text-xs text-white shadow-sm shadow-gray-600">
                                    <ShoppingCartIcon className="h-6 text-white" />
                                    <p className="text-sm text-white">ADD TO CART</p>
                                    <p></p>
                                </button> 
                            </span>
                            <div className="flex flex-col space-y-2 border-t border-gray-200">
                                <h4 className="text-sm lg:p-2 text-gray-700">PROMOTIONS</h4>
                                <span className="text-sm flex space-x-3">
                                    <div><SparklesIcon className="h-5 text-orange-400 "/></div>
                                    <p className="text-blue-600 hover:underline hover:cursor-pointer text-xs">Free delivery in Nairobi on orders above Kshs 1000 (excluding large items)</p>
                                </span>
                                <span className="text-sm flex space-x-3">
                                    <div><ShieldCheckIcon className="h-5 text-orange-400 "/></div>
                                    <p className="text-blue-600 hover:underline hover:cursor-pointer text-xs">Easier and safer payments via WavePay app</p>
                                </span>
                                <span className="text-sm flex space-x-3">
                                    <div><BadgeCheckIcon className="h-5 text-orange-400 "/></div>
                                    <p className="text-blue-600 hover:underline hover:cursor-pointer text-xs">Get 20% off with code WELCOME capped at Ksh 300 for your first order</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* product details */}
                    <div className="flex flex-col rounded-sm shadow-sm bg-white mt-4 lg:mx-5">
                        <span className="flex items-center justify-between border-b border-gray-300">
                            <h2 className="text-sm text-gray-700 font-normal p-2">PRODUCT DETAILS</h2>
                            <ChevronRightIcon className="h-6 text-gray-700"/>
                        </span>
                        <div className="flex space-x-3 p-4">
                            <span className="text-sm" >•</span>
                            <p className="text-gray-800 text-xs">{description}</p>
                        </div>
                    </div>
                
                    {/* specifications */}
                    <div className="flex flex-col rounded-sm shadow-sm bg-white mt-4 lg:mx-5">
                        <span className="flex items-center justify-between border-b border-gray-200">
                            <h2 className="text-sm text-gray-700 font-normal p-2">SPECIFICATIONS</h2>
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="flex flex-col border border-gray-200 rounded-sm m-4">
                                <span className="border-b rounded-sm border-gray-200">
                                    <h3 className="text-sm p-2 text-gray-700"> KEY FEATURES</h3>
                                </span>
                                <div className="flex flex-col p-2 ">
                                    <div className="flex space-x-3 p-1">
                                        <span className="text-sm" >•</span>
                                        <p className="text-gray-800 text-xs">Specially added LED backlight, with monochromatic or mixed light options, showing its elegant temperament.
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 p-1">
                                        <span className="text-sm" >•</span>
                                        <p className="text-gray-800 text-xs">Gaming buttons rated at up to 10 million-clicks, With a thick keyboard with responsive keys.
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 p-1">
                                        <span className="text-sm" >•</span>
                                        <p className="text-gray-800 text-xs">Compatibility – Windows7 /Windows 8 / Windows10.
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 p-1">
                                        <span className="text-sm" >•</span>
                                        <p className="text-gray-800 text-xs">Categories: Gaming Accessories, Gaming Keyboad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col border border-gray-200 rounded-sm m-4">
                                <span className="border-b rounded-sm border-gray-300">
                                    <h3 className="text-sm p-2 text-gray-700">WHAT&apos;S IN THE BOX</h3>
                                </span>
                                <span className="flex flex-col p-2 ">
                                    <p className="text-sm text-gray-700">{title}</p>
                                </span>
                            </div>
                            <div className="flex flex-col border border-gray-200 rounded-sm m-4">
                                <span className="border-b rounded-sm border-gray-300">
                                    <h3 className="text-sm p-2 text-gray-700">SPECIFICATIONS</h3>
                                </span>
                                {!description ? <span className="flex flex-col p-2 ">
                                    <p className="text-sm text-gray-700"><span className="font-bold">SKU</span>: HP246EA12SGZ3NAFAMZ</p>
                                    <p className="text-sm text-gray-700"><span className="font-bold">Model</span>: K500F</p>
                                    <p className="text-sm text-gray-700"><span className="font-bold">Weight (kg)</span>: 0.25</p>
                                    <p className="text-sm text-gray-700"><span className="font-bold">Main Material</span>: PVC</p>
                                    <p className="text-sm text-gray-700"><span className="font-bold">Shop Type</span>: Wave Mall</p>
                                </span> :
                                    <span>
                                        <p className="py-1 px-2 text-sm text-gray-700">{title}</p>
                                        <span className="px-2 pb-1 text-sm flex text-gray-700">
                                            <p className="font-bold">Shop Type</p>
                                            <p className="font-normal">:{""}Wave mall</p>
                                        </span>
                                </span>}
                            </div>
                        </div>
                    </div>
                    {/* <RecentlyLiked /> */}
                    <RecentlyLiked products={products} />
                    {/* you may also like */}
                    <AlsoLike products={products}/>
                    <div className="flex flex-col rounded-sm shadow-sm bg-white mt-4 mb-4 lg:mb-1  lg:mx-5">
                        <span className="flex items-center justify-between border-b border-gray-200">
                            <h2 className="text-sm text-gray-900 p-2">Customer Feedback</h2>
                        </span>
                        <span className="flex flex-col items-center justify-center p-5" >
                            <ChatAlt2Icon className="h-16 text-gray-300" />
                            <p className="text-sm text-gray-800">This products has no ratings yet</p>
                        </span>
                    </div>
                </div>
                {/* </div> */}
                {/* return & deliverlies div */}
                <div className="flex flex-col col-span-12 lg:col-span-3">
                    <div className="flex flex-col rounded-sm shadow-sm lg:mx-5 bg-white">
                        <span className="divide-y divide-slate-200">
                            <h2 className="text-sm text-gray-600 font-normal p-2">DELIVERY & RETURNS</h2>
                            <h2 className="text-md text-gray-600 font-normal p-2">Choose your location</h2> 
                        </span>
                        <form className="grid p-2" action="">
                            <select type="text" className="flex-1 my-1 h-10 lg:h-8 border border-gray-400 rounded-sm bg-white text-gray-500 focus:border-orange-400 focus:outline-none font-normal">
                                <option className="text-gray-500 font-normal" value="Nairobi">Nairobi</option>
                                <option value="Nairobi">Kiambu</option>
                                <option value="Nairobi">Nyeri</option>
                            </select>
                            <select type="text" className="flex-1 my-1 h-10 lg:h-8 border border-gray-400 rounded-sm bg-white text-gray-500 focus:border-orange-400 focus:outline-none font-normal">
                                <option className="bg-gray-200 hover:text-orange-400 font-normal" value="Nairobi">Embakasi</option>
                                <option value="Nairobi">Thika</option>
                                <option value="Nairobi">Tetu</option>
                            </select>
                        </form>
                        <div className="flex flex-col p-2 space-y-2">
                            <div className="flex flex-row space-x-3">
                                <div><TruckIcon className="h-8 text-gray-500" /></div>
                                <span className="flex flex-col">
                                    <h3 className="lg:text-sm text-md">Door Delivery</h3>
                                    <p className="lg:text-xs text-sm">Shipping Ksh 128</p>
                                    <p className="lg:text-xs text-sm">Ready for delivery between 20 January & 21 January when you order within next 22hrs 2mins</p>
                                </span>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <div><QuestionMarkCircleIcon className="h-8 text-gray-500" /></div>
                                <span className="flex flex-col">
                                    <h3 className="lg:text-sm text-md">Pickup Station</h3>
                                    <p className="lg:text-xs text-sm">Shipping KSh 97</p>
                                    <p className="lg:text-xs text-sm">Ready for pickup between 20 January & 21 January when you order within next 22hrs 2mins</p>
                                </span>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <div><RefreshIcon className="h-8 text-gray-500" /></div>
                                <span className="flex flex-col">
                                    <h3 className="lg:text-sm text-md">Return Policy</h3>
                                    <p className="lg:text-xs text-sm">Easy Return, Quick Refund. <span className="text-blue-600 hover:underline hover:cursor-pointer">See more</span> </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* seller information */}
                    <div className="flex flex-col mt-4 rounded-sm shadow-sm lg:mx-5 bg-white">
                        <span className="flex items-center justify-between border-b border-gray-300">
                            <h2 className="text-sm text-gray-700 font-normal p-2">SELLER INFORMATION</h2>
                            <ChevronRightIcon className="h-6 text-gray-700"/>
                        </span>
                        <div className="flex justify-start flex-col border-b border-gray-300">
                            <p className="text-sm px-2 mt-1 text-gray-700">
                                Clemens Store
                            </p>
                            <div className="flex items-center justify-between p-2">
                                <span className="flex-col flex">
                                    <p className="text-xs text-gray-600">98% Seller Score</p>
                                    <p className="text-xs text-gray-600">2 Followers</p>
                                </span>
                                <button className="p-2 bg-orange-500 rounded-sm text-xs text-white shadow-sm shadow-gray-600">FOLLOW</button>
                            </div>
                        </div>
                        <div className="flex justify-start flex-col ">
                            <span className="flex items-center space-x-2 text-sm px-2 mt-1 text-gray-800">
                                <p className="text-xs text-gray-600 hover:cursor-pointer">Seller Performance</p>
                                <ExclamationCircleIcon className="h-6 text-gray-600"/>
                            </span>
                            <div className="flex-col flex">
                                <span className="flex items-center space-x-2 px-2 mb-2 text-gray-600">
                                    <StarIcon className="h-6 border border-orange-500 rounded-full p-1 text-green-600" />
                                    <p className="text-xs text-gray-600">Order Fullfilment Rate: Excellent</p>
                                </span>
                                <span className="flex items-center space-x-2 px-2 mb-2 text-gray-600">
                                    <StarIcon className="h-6 border border-orange-500 rounded-full p-1 text-green-600" />
                                    <p className="text-xs text-gray-600">Quality Score: Excellent</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* product details */}
                    <div className="flex justify-start flex-col mt-4 rounded-sm lg:mx-5 shadow-sm bg-white">
                        <span className="flex space-x-4 p-1 items-center hover:bg-gray-100 text-sm text-gray-800">
                            <DocumentTextIcon className="h-6 text-gray-600"/>
                            <p className="text-xs text-gray-600 p-2">Product Details</p>
                        </span>
                        <span className="flex space-x-4 p-1 items-center hover:bg-gray-100 text-sm text-gray-800 border-y border-gray-200">
                            <ViewListIcon className="h-6 text-gray-600"/>
                            <p className="text-xs text-gray-600 p-2">Specifications</p>
                        </span>
                        <span className="flex space-x-4 p-1 items-center hover:bg-gray-100 text-sm text-gray-800">
                            <AnnotationIcon className="h-6 text-gray-600"/>
                            <p className="text-xs text-gray-600 p-2">Customer Feedback</p>
                        </span>
                    </div>
                    {/* product */}
                    <div className="flex flex-col align-items-center justify-between lg:mx-5 mt-4 p-2 rounded-sm shadow-sm bg-white">
                        <div className="mb-1 flex space-y-3">
                            <Image src={image} height={80} width={100} objectfit="contain"/>
                            <span className="flex flex-col p-2">
                                <p className="text-sm text-gray-600 line-clamp-1">{title}</p>
                                <div className="mb-1">
                                    <Currency
                                        quantity={price} 
                                        currency="KES"
                                    />
                                </div>    
                            </span>
                        </div>
                        <button onClick={addItemToBasket} className="flex items-center p-2 justify-between bg-orange-500 rounded-sm text-xs text-white shadow-sm shadow-gray-600">
                            <ShoppingCartIcon className="h-6 text-white" />
                            <p className="text-sm text-white">ADD TO CART</p>
                            <p></p>
                        </button>  
                    </div>
                    {/* chat */}
                    <div className="flex flex-col align-items-center justify-between mt-4 p-2 lg:mx-5 rounded-sm shadow-sm bg-white">
                        <div className="mb-1 flex flex-col items-center justify-center space-y-3 p-2">
                            <p className="text-sm text-gray-600 line-clamp-1">Questions about this product?</p>
                            <span className="flex space-x-3 items-center text-sm hover:bg-pink-100 hover:rounded-sm hover:cursor-pointer p-1">
                                <ChatIcon className="h-6 text-orange-400" />
                                <p className="text-sm text-orange-400">CHAT</p>
                            </span>
                        </div>   
                    </div>
                </div>
                {/* returns & deliveries */}
                
                <div className="flex flex-col col-span-12 mt-4 lg:mx-2">
                    <MoreItems products={products} />
                    <Sponsered products={products} />
                    <RecentReviews products={products} />
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const { id } = params
    const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json())
    const single = await fetch(`http://fakestoreapi.com/products/${id}`).then((res) => res.json());
    
    return {
        props: {
            products,
            single
        }
    }
}
export default ProductPage

