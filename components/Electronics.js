import React from 'react';
import Product from './Product';

const Electronics = ({products}) => {
    return (
        <div className="flex flex-col col-span-12 rounded-sm shadow-sm bg-white mt-6 mx-1">
            <span className="flex bg-white rounded-t-md p-2">
                <p className="text-gray-800">Electronics & Accessories</p>
            </span>
            <div className="product-feed">
                {products.slice(0, 6).map(({ image, category, description, price, title, id }) => (
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
            </div>
        </div>
    );
};

export default Electronics;
