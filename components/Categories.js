import React from 'react';
import {  SearchIcon, ChevronRightIcon, ShoppingCartIcon, ChatIcon, HeartIcon, SparklesIcon, ShieldCheckIcon, BadgeCheckIcon, ChatAlt2Icon } from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'

const Categories = () => {
    return (
        <div className="flex flex-col lg:col-span-3 col-span-12">
                            <div className="flex flex-col rounded-sm shadow-sm bg-white py-1 mt-6">
                                <span className="border-b border-gray-200 py-2">
                                    <p className="text-gray-700 px-3">CATEGORY</p>
                                </span>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Computing</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Electronics</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Phones & Tablets</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gaming</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Baby Products</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Sporting</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Health & Beauty</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Automobile</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Home & Office</p>
                                <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Fashion</p>
                          </div>
                          <div className="flex flex-col shadow-sm bg-white py-1">
                                <span className="border-t border-gray-200 py-2">
                                    <p className="text-gray-700 px-3">BRAND</p>
                                </span>
                                <div className="flex-1 flex items-center my-1 mx-3 h-10 space-x-3 border border-gray-400 rounded-full text-gray-500 focus:border-orange-400 font-normal px-1 justify-between">
                                    <SearchIcon className="h-6 cursor-pointer text-gray-600 mx-1"/>
                                    <input type="text" placeholder="Search by brand" className="w-full border-0 mx-2 h-8 focus:outline-none" />
                                </div>
                                <div className="flex flex-col hover:overflow-y-scroll transition-all duration-500 scrollbar-hide h-40">
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Calvin Klein</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Adidas</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Hewlet Packard</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">HP</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Lenovo</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Bruhm</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">LG</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Bic</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-Blue">Blue Band</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Ceres</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Huawei</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Tecno</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Samsung</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Amara</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Amana</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Colgate</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Daawat</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Dark & Lovely</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Nice & Lovely</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Dettol</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Diva</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Kiwi</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Elianto</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Toshiba</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Apple</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Geisha</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gental</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gental Care</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gillette</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Generic</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gnomis</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Golden</p>
                                </div>
                            </div>
                            {/* product rating */}
                            <div className="flex flex-col mt-4 rounded-sm shadow-sm bg-white">
                                <span className="flex border-b border-gray-300">
                                    <h2 className="text-sm text-gray-700 font-normal p-2">PRODUCT RATING</h2>
                                </span>
                                <div className="flex flex-col border-b border-gray-300 py-3 space-y-3">
                                    <span className="flex items-center px-2 space-x-3 hover:cursor-pointer">
                                        <div className="flex space-x-1">
                                            <StarIcon className="h-4 text-orange-400" />           <StarIcon className="h-4 text-orange-400" />           <StarIcon className="h-4 text-orange-400" />           <StarIcon className="h-4 text-orange-400" />           <StarIcon className="h-4 text-gray-400" />
                                        </div>
                                        <p className="text-sm text-gray-600">& above</p>
                                    </span>
                                    <span className="flex items-center px-2 space-x-3 hover:cursor-pointer">
                                        <div className="flex space-x-1">
                                            <StarIcon className="h-4 text-orange-400" />                                            <StarIcon className="h-4 text-orange-400" />                                            <StarIcon className="h-4 text-orange-400" />                                            <StarIcon className="h-4 text-gray-400" />                                              <StarIcon  className="h-4 text-gray-400" />
                                        </div>
                                        <p className="text-sm text-gray-600">& above</p>
                                    </span>
                                    <span className="flex items-center px-2 space-x-3 hover:cursor-pointer">
                                        <div className="flex space-x-1">
                                            <StarIcon className="h-4 text-orange-400" />                                            <StarIcon className="h-4 text-orange-400" />                                            <StarIcon className="h-4 text-gray-400" />                                          <StarIcon className="h-4 text-gray-400" />                                            <StarIcon className="h-4 text-gray-400" />
                                        </div>
                                        <p className="text-sm text-gray-600">& above</p>
                                    </span>
                                    <span className="flex items-center px-2 space-x-3 hover:cursor-pointer">
                                        <div className="flex space-x-1">
                                            <StarIcon className="h-4 text-orange-400" />                                            <StarIcon className="h-4 text-gray-400" />                                            <StarIcon className="h-4 text-gray-400" />                                          <StarIcon className="h-4 text-gray-400" />                                            <StarIcon className="h-4 text-gray-400" />
                                        </div>
                                        <p className="text-sm text-gray-600">& above</p>
                                    </span>
                                </div>
                            </div>
                            {/* size */}
                            <div className="flex flex-col shadow-sm bg-white py-1">
                                <span className=" py-2">
                                    <p className="text-gray-700 px-3">SIZE</p>
                                </span>
                                <div className="flex-1 flex items-center my-1 mx-3 h-10 space-x-3 border border-gray-400 rounded-full text-gray-500 focus:border-orange-400 font-normal px-1 justify-between">
                                    <SearchIcon className="h-6 cursor-pointer text-gray-600 mx-1"/>
                                    <input type="text" placeholder="Search by brand" className="w-full border-0 mx-2 h-8 focus:outline-none" />
                                </div>
                                <div className="flex flex-col overflow-y-scroll scrollbar-hide h-40">
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">XS</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">SM</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">MD</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">L</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">XL</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">XXL</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">XXL</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">L/XXL</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-Blue">Blue Band</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Ceres</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Huawei</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Tecno</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Samsung</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Amara</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Amana</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Colgate</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Daawat</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Dark & Lovely</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Nice & Lovely</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Dettol</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Diva</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Kiwi</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Elianto</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Toshiba</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Apple</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Geisha</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gental</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gental Care</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gillette</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Generic</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Gnomis</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Golden</p>
                                </div>
                            </div>
                            {/* gender */}
                            <div className="flex flex-col border-t border-gray-200 shadow-sm bg-white py-1">
                                <span className=" py-2">
                                    <p className="text-gray-700 px-3">GENDER</p>
                                </span>
                                <div className="flex-1 flex items-center my-1 mx-3 h-10 space-x-3 border border-gray-400 rounded-full text-gray-500 focus:border-orange-400 font-normal px-1 justify-between">
                                    <SearchIcon className="h-6 cursor-pointer text-gray-600 mx-1"/>
                                    <input type="text" placeholder="Search by brand" className="w-full border-0 mx-2 h-8 focus:outline-none" />
                                </div>
                                <div className="flex flex-col hover:overflow-y-scroll scrollbar-hide h-40">
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-Blue">Boys</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Girls</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Male</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Men</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Women</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Female</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Unisex</p>
                                    <p className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-200">Unisexe</p>
                                </div>
                            </div>
                            {/* chat */}
                            <div className="flex flex-col border-t border-gray-200 shadow-sm bg-white">
                                <span className="">
                                    <p className="text-gray-800 text-sm p-2">SHIPPED FROM</p>
                              </span>
                              <span className="flex space-x-3">
                                    <p className="text-gray-800 text-sm p-2">Shipped from Kenya</p>
                              </span>
                            </div>
                        </div>
        );
};

export default Categories;
