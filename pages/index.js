import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MainHeader from '../components/MainHeader'
import SmallHeader from '../components/SmallHeader'
import SideBarRight from '../components/SideBarRight'
import SideBarLeft from '../components/SideBarLeft'
import SmallComponent from '../components/SmallComponent'
import ProductFeed from '../components/ProductFeed'
import ProductFeed2 from '../components/ProductFeed2'
import ProductFeed3 from '../components/ProductFeed3'
import ProductFeed4 from '../components/ProductFeed4'
import ProductFeed5 from '../components/ProductFeed5'
import ProductFeed6 from '../components/ProductFeed6'
import ProductFeed7 from '../components/ProductFeed7'
import ProductFeed8 from '../components/ProductFeed8'
import Adverts from '../components/Adverts'
import {useState} from 'react'
import AccountModal from '../components/AccountModal'
import HelpModal from '../components/HelpModal'

export default function Home({products}) {
  const [close, setClose] = useState(true)
  const [modal, setModal] = useState(true)
  return (
      <div className="bg-orange-300 relative">
       <Head>
        <title>Jumia Kenya | Online Shopping for Groceries, Electronics, Households, Clothings, Foods and so much more</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SmallHeader />
      <MainHeader setClose={setClose} modal={modal} setModal={setModal} close={close}/>
      {!close && <AccountModal />}
      {!modal && <HelpModal />}
      <main className="grid grid-cols-12 w-full px-20 space-x-3 py-2 max-w-screen-2xl mx-auto">
        <SideBarLeft/>
         <Banner />
        <SideBarRight/>
      </main>
      <SmallComponent />
      <ProductFeed products={products} />
      <Adverts/>
      <ProductFeed2 products={products} />
      <ProductFeed3 products={products} />
      <Adverts />
      <ProductFeed4 products={products} />
      <ProductFeed5 products={products} />
      <Adverts />
      <ProductFeed6 products={products} />
      <ProductFeed7 products={products} />
      <Adverts/>
      <ProductFeed8 products={products} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json())
  
  return {
    props: {
      products
    }
  }
}