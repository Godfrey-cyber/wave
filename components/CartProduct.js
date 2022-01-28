import React from 'react';
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/outline';
import {useRouter} from "next/router"

const CartProduct = ({ id, title, price, image }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const addItemToBasket = ()  => {
        const product = {
            id, title, price,  image 
        }
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id,}))
    }
  return (
        <main className="flex flex-col mt-4 mx-auto">
            
          <div className="flex bg-white shadow-sm rounded-sm p-4  items-center justify-between border-gray-200">
                <div className="flex items-center justify-between space-x-3">
                  <Image src={image} objectfit="contain" width={80} height={100} />
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-xs">Seller: {""} Newton Digital</p>
                        <h3 onClick={() => router.push(`/product/${id}`)} className="text-gray-900 text-md hover:text-orange-400 line-clamp-1 hover:cursor-pointer">{title.split("").splice(0, 30).join("")}...</h3>
                        <div className="flex space-x-4">
                            <span className="flex space-x-2 mt-2 items-center text-sm text-orange-400">
                                <ShoppingCartIcon className="h-5 text-orange-400"/>
                                <p className="text-sm text-orange-400 hover:cursor-pointer">ADD TO CART</p>
                            </span>
                            <span className="flex space-x-2 mt-2 items-center text-sm text-orange-400">
                                <TrashIcon className="h-5 text-orange-400"/>
                                <p className="text-sm text-orange-400 hover:cursor-pointer">REMOVE</p>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 my-auto justify-self-end">
                        <button onClick={addItemToBasket} className="button">Add to Cart</button>
                        <button onClick={removeItemFromBasket} className="button">Remove from Cart</button>
                  </div>
                  <span className="font-bold">
                        <Currency quantity={price} currency="KES"/>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default CartProduct;
