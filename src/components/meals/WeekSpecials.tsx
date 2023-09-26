import { Link } from "react-router-dom";

import MealCard from "./MealCard";
import { meals } from "@libs/utils/meals";

const WeekSpecials = () => {
  return (
    <section className="md:mx-36 mx-2  mb-2">
      <div className="flex  mb-4 justify-between items-center">
        <h2 className="text-2xl font-normal font-markazi leading-none">
          This week specials!
        </h2>
        <Link
          className="inline-block rounded-full mr-12 hover:bg-grayBackground hover:text-white hover:border-2
    mt-8 px-4 py-2 bg-yellow-400 text-black border
    border-transparent hover:border-yellow-400 focus:border-yellow-400"
          to={"orderOnline"}
        >
          Online Menu
        </Link>
      </div>

      <div className=" grid  grid-cols- md:grid-cols-3 gap-4">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default WeekSpecials;
