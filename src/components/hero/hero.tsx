import React from "react";
import { Link } from "react-router-dom";
const restaurantFoodImage = "./assets/restaurant-food.jpg";

const Hero: React.FC = () => {
  return (
    <section className="pt-4  bg-grayBackground">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-auto gap-14 mb-37.5 md:mx-36 mx-10 ">
        <div className="md:col-span-1  col-span-3">
          <h1 className="text-yellow-400 text-4xl mt-4 ">Little Lemon</h1>
          <h2 className="text-white text-2xl mt-2">Addis Ababa</h2>
          <p className="text-white mt-6">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link
            to="/bookings"
            className="inline-block rounded-full hover:bg-grayBackground hover:text-white hover:border-2	mt-8 px-4 py-2 bg-yellow-400 text-black border border-transparent hover:border-yellow-400 focus:border-yellow-400"
          >
            Reserve a table
          </Link>
        </div>

        <div className="md:col-span-1 col-span-3">
          <img
            className="md:w-1/2 w-full h-[20rem]  justify-self-end rounded-lg object-cover"
            src={restaurantFoodImage}
            alt="Restaurant food"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
