import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
    return (
        <div className="mx-auto lg:rounded-md lg:px-20 my-4">
            <div className="flex justify-between bg-teal-400 py-3 px-4 lg:rounded-t-md">
                <p className="text-white">Top Trends</p>
                <span className="flex space-x-2">
                    <p className="text-white hover:cursor-pointer">SEE ALL</p>
                    <ChevronRightIcon className="text-white h-6"/>
                </span>
            </div>
            <div className="product-feed">
                {products.slice(14, 20).map(({ image, category, description, price, title, id }) => (
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

            </div>
        </div>
    )
}

export default ProductFeed
