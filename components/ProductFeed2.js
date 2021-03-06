import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
    return (
        <div className="mx-auto lg:rounded-md lg:px-20 my-4">
            <div className="flex justify-between bg-blue-400 py-3 px-4 lg:rounded-t-md">
                <p className="text-gray-800">Jewelery | Style up</p>
                <span className="flex space-x-2">
                    <p className="text-gray-800 hover:cursor-pointer">SEE ALL</p>
                    <ChevronRightIcon className="text-gray-800 h-6"/>
                </span>
            </div>
            <div className="product-feed">
                {products.slice(4, 10).map(({ image, category, description, price, title, id }) => (
                <Product 
                    id={id}
                    key={id}
                    image={image}
                    category={category}
                    description={description}
                    price={price}
                    title={title}
                    />
                ))}
                {/* <img src="https://links.papareact.com/dyz" className="md:col-span-full" alt="image" /> */}
                
                {/* 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 */}
                {/* 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 */}
                {/* githug personal access token */}
   {/* bg-white rounded-md grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto transition-all duration-100 scrollbar-hide */}
            </div>
        </div>
    )
}

export default ProductFeed
