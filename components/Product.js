import React, { useState } from 'react'
import Image from "next/image"
import Currency from "react-currency-formatter"
import { StarIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"


const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({ image, category, description, price, title, id }) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
    )
    const [hasPrime] = useState(
        Math.random() < 0.5
    )
    
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/product/${id}`)} key={id} className="flex flex-col m-2 bg-white z-30 p-2 hover:cursor-pointer rounded-md hover:bg-gray-100">
            <p className="text-center text-xs mb-1 italic text-gray-400">{category}</p>
            <Image src={image} objectFit='contain' height={80} width={80} alt="product-image" />
            <h4 className="my-1 text-xs md:text-sm line-clamp-1">{title}</h4>
            <div className="flex">
                {/* {Array(rating).fill().map((_, i) => (
                    <StarIcon key={id} className="h-5 text-yellow-500"/>
                ))} */}
            </div>
            <p className="text-xs line-clamp-1">{description}</p>
            <div className="mb-1">
                <Currency
                    quantity={price} 
                    currency="KES"
                />
            </div>
            {/* {hasPrime && (
                <div className="flex items-center space-x-2 mt-1">
                <img loading="lazy" className="w-8" src="https://links.papareact.com/fdw" alt="few"/>
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            <button  className="mt-auto button">Add to Basket</button> */}
        </div>
    )
}

export default Product
