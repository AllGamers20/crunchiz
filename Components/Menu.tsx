'use client';
import React from 'react';
import Image from "next/image";
import HeadLine from './HeadLine';
import menuData from '../Data/data';

const MenuPage = () => {
  return (
    <div className="container mx-auto md:w-full w-[500px]" id="Menu">
      <HeadLine title={"Menu"} />
      {menuData.Menudata.categories.map((category) => (
        <div key={category.category} className="mb-8 p-6">
          <h2 className="text-2xl font-bold mb-4 p-4 bg-main w-full rounded-full text-center font-RedPeapers">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="bg-white p-4 rounded-lg shadow-2xl"
              >
                
                <img
                  loading='lazy'
                  width={500}
                  height={100}
                  src={item.image}
                  alt={item.name}
                  className="w-full object-cover mb-4 rounded-md"
                />
                <strong className="text-lg font-semibold font-Oburger">
                  {item.name}
                </strong>
                <p className="text-gray-700 mb-2 font-FoodList">
                  {item.description}
                </p>
                <p className="text-green-600 font-semibold font-FoodList">
                  Price: {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
