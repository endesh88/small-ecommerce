import React from 'react';
import { FaShippingFast, FaTag, FaShieldAlt, FaHeadphones, FaUndo } from 'react-icons/fa';

const Information = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Fast & Free Delivery",
      description:
        "Enjoy free shipping on all orders above $50. Quick and reliable delivery straight to your doorstep.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-3xl text-red-600" />,
      title: "Secure Payments",
      description:
        "Your payments are protected with top-level encryption and trusted payment gateways.",
    },
    {
      id: 3,
      icon: <FaHeadphones className="text-3xl text-red-600" />,
      title: "24/7 Customer Support",
      description:
        "Our friendly support team is available 24/7 to help you with your queries or issues.",
    },
    {
      id: 4,
      icon: <FaUndo className="text-3xl text-red-600" />,
      title: "Easy Returns & Refunds",
      description:
        "Not satisfied with your purchase? Return it within 7 days for a hassle-free refund.",
    },
    {
      id: 5,
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Loyalty Rewards & Discounts",
      description:
        "Earn reward points on every purchase and redeem them for discounts on future orders.",
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md 
                       transform transition-transform duration-300 hover:scale-105"
          >
            {feature.icon}
            <h1 className="mt-4 text-xl font-semibold">{feature.title}</h1>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;