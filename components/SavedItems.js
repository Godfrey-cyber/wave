import { HeartIcon } from '@heroicons/react/outline';
import {selectItems} from "../slices/wishlistSlice"
import WishlistProduct from '../components/WishlistProduct'
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router"

const SavedItems = () => {
    const items = useSelector(selectItems)
    const router = useRouter()
  return (  
    <div className="flex flex-col col-span-12 lg:col-span-9 rounded-sm shadow-gray-300 shadow-sm bg-white">
        <span className="border-b border-gray-200 py-2">
            <p className="text-gray-700 px-3">SAVED ITEMS</p>
        </span>
          {!items.length ? 
            <div className="flex flex-col justify-center items-center m-auto">
            <span className="flex p-6 bg-orange-200 rounded-full items-center">
                <HeartIcon className="h-8 text-gray-600 font-thin"/>
            </span>
            <p className="text-gray-800 text-sm my-3">You have no saved items yet</p>
            <p className="text-gray-800 text-xs my-2">Your saved items will appear here</p>
            <button onClick={() => router.push("/")} className="button">START SHOPPING</button>
          </div> : 
                  items.map((item, i) => (
                    < WishlistProduct
                        key={i}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        title={item.title}
                      />
                ))
        }
    </div>
   )
};

export default SavedItems;