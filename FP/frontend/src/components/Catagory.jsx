
import React from "react";
import HeroIcon from "../assets/Images/22138.jpg";
import ClothIcon from "../assets/Images/20148.jpg";

const Category = () => {
  const categories = [
    {
      name: "Electronics",
      image: HeroIcon, // You can replace this with a category image if needed
      products: [
        {
          title: "iPhone 14 Pro",
          price: 999.0,
          description: "Latest smartphone with advanced camera and A16 chip.",
          stock: 25,
          image: "https://example.com/images/electronics/iphone-14-pro.jpg",
        },
        {
          title: "Sony WH-1000XM5 Headphones",
          price: 349.0,
          description:
            "Noise-cancelling over-ear headphones with 30-hour battery.",
          stock: 42,
          image:
            "https://example.com/images/electronics/sony-wh1000xm5.jpg",
        },
        {
          title: "Dell XPS 13 Laptop",
          price: 1299.0,
          description: "Ultrabook with 13.4\" display and Intel Core i7.",
          stock: 18,
          image: "https://example.com/images/electronics/dell-xps-13.jpg",
        },
      ],
    },
    {
      name: "Clothing",
      image: ClothIcon ,
      products: [
        {
          title: "Levi's 501 Jeans",
          price: 69.5,
          description: "Classic straight-fit denim jeans in medium wash.",
          stock: 60,
          image: "https://example.com/images/clothing/levis-501-jeans.jpg",
        },
        {
          title: "Nike Air Max Sneakers",
          price: 120.0,
          description: "Cushioned running shoes with breathable mesh.",
          stock: 35,
          image: "https://example.com/images/clothing/nike-air-max.jpg",
        },
        {
          title: "Adidas Hoodie",
          price: 55.0,
          description: "Cozy fleece hoodie with logo embroidery.",
          stock: 48,
          image: "https://example.com/images/clothing/adidas-hoodie.jpg",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 
          transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12 text-white bg-black bg-opacity-40 p-2 rounded">
            <p className="text-xl font-bold">{category.name}</p>
            <p className="text-sm text-gray-200">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
