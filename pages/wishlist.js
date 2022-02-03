import React from 'react';
import Head from "next/head"
import {useSelector} from "react-redux"
import {selectItems} from "../slices/wishlistSlice"
import {selectTotal} from "../slices/basketSlice"
import Image from 'next/image'
import Currency from "react-currency-formatter"
import { ShoppingBagIcon } from '@heroicons/react/solid';
import Header from '../components/Header';
import SmallHeader from '../components/SmallHeader';
import MainHeader from '../components/MainHeader';
import { useRouter } from "next/router"
import { useState } from "react"
import AccountModal from '../components/AccountModal';
import HelpModal from '../components/HelpModal';
import { HeartIcon } from '@heroicons/react/outline';
import WishlistProduct from '../components/WishlistProduct'

const Wishlist = () => {
  const items = useSelector(selectItems)
  // const total = useSelector(selectTotal)
  const router = useRouter()
  const [close, setClose] = useState(true)
  const [modal, setModal] = useState(true)
  
  return (
      <div className="bg-gray-200 h-screen w-screen overflow-x-hidden">
        <Head>
          <title>Wave Kenya | Online Shopping for Groceries, Electronics, Households, Clothings, Foods and so much more</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SmallHeader />
      <MainHeader setClose={setClose} modal={modal} setModal={setModal} close={close}/>
      {!close && <AccountModal />}
      {!modal && <HelpModal />}
        <main className="flex flex-col my-4 max-w-5xl mx-auto ">
        <p className="text-gray-900 text-md font-bold p-4">Items &nbsp;({items.length})</p>
        {items.length == 0 ?
          <div className="flex flex-col content-between items-center p-6 gap-y-6 bg-white rounded-md shadow-md">
            <HeartIcon className="h-20 w-auto text-gray-200"/> 
            <p className="text-md text-gray-700">Your Wishlist is empty</p>
            <button onClick={() => router.push("/")} className="button mt-4">View Our Products</button>
          </div> : 
        items.map((item, i) => (
          <WishlistProduct 
            key={i}
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
          />
        ))
        }
        {/* <div className="flex flex-col bg-white p-5 shadow-md max-w-5xl mx-auto mt-4">
          {items.length > 0 && (
            <>
                <h2 className="whitespace-nowrap">Subtotal ({items.length} items:{""})
                    <span className="font-bold">
                        <Currency quantity={total} currency="KES"/>
                    </span>
                </h2>
                <button role="link" className="button mt-2">Sign In to Checkout</button>
            </>
          )}
        </div> */}
        </main>
      </div>
    );
};

export default Wishlist;

