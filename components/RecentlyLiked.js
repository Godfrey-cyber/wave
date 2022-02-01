import React from 'react';
import Product from './Product';

const AlsoLike = ({products}) => {
    return (
        <div className="flex flex-col rounded-sm shadow-sm bg-white mt-4 mx-5">
            <span className="flex bg-white rounded-t-md p-2">
                <p className="text-gray-800">Customers who viewed this product also viewed</p>
            </span>
            <div className="product-feed">
                {products.slice(4, 8).map(({ image, category, description, price, title, id }) => (
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

export default AlsoLike;