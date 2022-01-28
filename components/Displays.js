import React from 'react';
import Image from "next/image"
const Displays = ({image, category, id }) => {
  return (
    <div key={id} className="flex flex-col m-2 rounded-md hover:cursor-pointer hover:bg-gray-100 hover:shadow-sm hover:shadow-gray-200">
        <Image src={image} className="" objectFit='contain' height={80} width={80} />
        <span className="py-2 bg-white">
            <p className="text-center text-sm mb-1 italic text-gray-700">{category}</p>
        </span>
    </div>
    );
};



export default Displays;

