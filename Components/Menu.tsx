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
          <h2 className="text-2xl font-bold mb-4 p-4 bg-main w-full rounded-full text-center">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {category.items.map((item: any) => (
              <div
                key={item.name}
                className="bg-white p-4 rounded-lg shadow-2xl">
                <Image
                  width={500}
                  height={100}
                  src={`/Menuimg/${encodeURIComponent(item.name.toUpperCase())}.jpg`}
                  alt={item.name}
                  className="w-full object-cover mb-4 rounded-md"
                  onError={(e) => {
                    console.error(`Error loading image for ${item.name}:`, e);
                    if (e.currentTarget.src.includes(".jpg")) {
                      const alternativeImage = `/Menuimg/${encodeURIComponent(item.name.toUpperCase())}.png`;
                      fetch(alternativeImage)
                        .then((response) => {
                          if (response.ok) {
                            e.currentTarget.src = alternativeImage;
                          } else {
                            console.error(`Failed to fetch alternative image: ${alternativeImage}`);
                          }
                        })
                        .catch(() => {
                          console.error(`Error fetching alternative image: ${alternativeImage}`);
                        });
                    }
                  }}
                />
                <strong className="text-lg font-semibold">{item.name}</strong>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-green-600 font-semibold">
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
