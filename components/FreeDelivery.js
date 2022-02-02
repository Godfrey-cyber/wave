import React, { useState } from 'react'
import Image from "next/image"
import Currency from "react-currency-formatter"
import { StarIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { useDispatch } from 'react-redux'
import {addToBasket} from "../slices/basketSlice"

const MAX_RATING = 5
const MIN_RATING = 1

const FreeDelivery = ({ image, category, description, price, title, id }) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
    )
    const [hasPrime] = useState(
        Math.random() < 0.5
    )

    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, hasPrime, rating }
        dispatch(addToBasket(product))
    }
    const router = useRouter()
  return (
        <div className="flex flex-col m-2 group bg-white z-30 p-2 md:h-56 hover:cursor-pointer rounded-md hover:bg-gray-100">
            <Image onClick={() => router.push(`/product/${id}`)} key={id} src={image} objectFit='contain' height={80} width={80} alt="delivery-image"/>
            <h4 className="my-1 text-sm line-clamp-1">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={id} className="h-5 text-yellow-500"/>
                ))}
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
            )}*/}
            <button onClick={addItemToBasket} className="hidden group-hover:inline-flex transition-all duration-300 button">Add to Cart</button> 
        </div>
    );
};

export default FreeDelivery;
