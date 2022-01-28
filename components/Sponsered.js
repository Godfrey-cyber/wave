import React from 'react';
import Product from './Product';

const Sponsered = ({products}) => {
    return (
        <div className="flex flex-col rounded-sm shadow-sm bg-white mt-4 mx-4">
            <span className="flex bg-white rounded-t-md p-2">
                <p className="text-gray-800">Sponsered Products</p>
            </span>
            <div className=" bg-white mt-2 mx-4  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-100">
                {products.slice(16, 20).map(({ image, category, description, price, title, id }) => (
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

export default Sponsered;
