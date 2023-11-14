'use client';
import React from 'react';
import { Menudata } from '../Data/Menudata';
import Image from 'next/image';
import HeadLine from './HeadLine';

const MenuPage = () => {
  return (
    <div className="container mx-auto my-8" id='Menu'>
        <HeadLine title={"Menu"}/>
      {Menudata.categories.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <div key={item.name} className="bg-main p-4 rounded-lg shadow-md">
                <Image
                  width={200}
                  height={100}
                  src={`/Menuimg/${item.name.toUpperCase()}.jpg`}
                  alt={item.name}
                  className="w-full  object-cover mb-4 rounded-md"
                  onError={(e) => {
                    // Handle image loading error
                    if (e.currentTarget.src.includes('.jpg')) {
                      // If JPG image fails to load, try loading PNG
                      e.currentTarget.src = `/Menuimg/${item.name.toUpperCase()}.png`;
                    }
                  }}
                />
                <strong className="text-lg font-semibold">{item.name}</strong>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-green-600 font-semibold">Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
