import { MealCardProps } from "models/meal-card";
import React from "react";
import { useNavigate } from "react-router-dom";

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  const navigate = useNavigate();

  return (
    <article className="md:w-100 w-full mt-100 my-2 mb-2 h-full px-2 bg-[#edefee] ">
      <div className="bg-[#edefee] hover:cursor-pointer bg-palette-card/80 flex w-full flex-col rounded-md backdrop-blur-[10px] backdrop-filter">
        <img
          className="h-full w-full rounded-md object-cover transition-transform hover:scale-105 sm:h-48"
          src={meal.image}
          alt={meal.name}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h6 className="font-roboto-bold p-2 text-gray-900">{meal.name}</h6>
          <h6 className="mr-1 rounded-full text-[#ee9972] px-4 py-1">
            {meal.price}
          </h6>
        </div>
        <div className="font-roboto-light mb-2 text-center flex gap-6 rounded-lg p-2">
          <button
            onClick={() => navigate("/orderOnline")}
            className="inline-block rounded-full hover:bg-grayBackground hover:text-white hover:border-2	mt-8 px-4 py-2 bg-yellow-400 text-black border border-transparent hover:border-yellow-400 focus:border-yellow-400"
          >
            Order a delivery
          </button>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-3">
        <h6 className="p-2 text-sm text-gray-500">{meal.description}</h6>
      </div>
    </article>
  );
};

export default MealCard;
