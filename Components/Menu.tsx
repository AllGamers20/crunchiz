'use client';
import React from 'react';
import data from "../Data/data.json"; // Import the JSON file
import Image from "next/image";
import HeadLine from './HeadLine';

const MenuPage = () => {
  return (
    <div className="container mx-auto my-8" id="Menu">
      <HeadLine title={"Menu"} />
      {data.Menudata.categories.map((category: any) => (
        <div key={category.category} className="mb-8 p-6">
          <h2 className="text-2xl font-bold mb-4 p-4 bg-main w-full rounded-full text-center font-RedPeapers">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {category.items.map((item: any) => (
              <div
                key={item.name}
                className="bg-white p-4 rounded-lg shadow-2xl"
              >
                <Image
                  width={500}
                  height={100}
                  src={`../Images/${encodeURIComponent(item.image)}.jpg`}
                  alt={item.name}
                  className="w-full object-cover mb-4 rounded-md"
                />
                <strong className="text-lg font-semibold font-Oburger">{item.name}</strong>
                <p className="text-gray-700 mb-2 font-FoodList">{item.description}</p>
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
