import { Link } from "react-router-dom";
import bruschettaImage from "./assets/bruschetta.jpg";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonDessertImage from "./assets/lemon-dessert.jpg";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="mx-36">
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

      <div className=" grid  grid-cols-1 md:grid-cols-3 gap-4">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default WeekSpecials;
