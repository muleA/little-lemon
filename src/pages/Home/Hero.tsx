import React from 'react';
import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';

const Hero: React.FC = () => {
  return (
    <section className="pt-[1.875rem] bg-[#495E57] mx-auto overflow-hidden">
    <div className="container grid grid-cols-1 mx-36 md:grid-cols-2  mb-[9.375rem]">
      <div className="col-span-1 md:col-span-1">
        <h1 className="text-secondary text-4xl">Little Lemon</h1>
      <h2 className="text-white text-2xl mt-2">Chicago</h2>
      <p className="text-white mt-6 md:w-3/4 lg:w-2/3">
        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
      </p>
  
        <Link
          to="/bookings"
          className="inline-block mt-[2rem] px-6 py-3 text-white bg-[#F4CE14] rounded-lg hover:border-[#F4CE14] hover:bg-transparent hover:text-[#F4CE14] border-2 border-transparent transition duration-300"
        >
          Reserve a table
        </Link>
      </div>
  
      <div className="col-span-1">
        <img
          className="w-1/2 h-[24rem] mb-[-4.375rem] justify-self-end rounded-lg object-cover"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </div>
  </section>
  
  );
};

export default Hero;
