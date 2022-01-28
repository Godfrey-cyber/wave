import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
    return (
        <div className="mx-auto rounded-md px-20 my-4">
            <div className="flex justify-between bg-red-600 py-3 px-4 rounded-t-md">
                <p className="text-white">Top Trends</p>
                <span className="flex space-x-2 hover:cursor-pointer">
                    <p className="text-white">SEE ALL</p>
                    <ChevronRightIcon className="text-white h-6"/>
                </span>
            </div>
            <div className=" bg-white rounded-b-md grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto transition-all duration-100">
                {products.slice(0, 4).map(({ image, category, description, price, title, id }) => (
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
