import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container mx-36 overflow-hidden">
      <div className="grid grid-cols-3 grid-rows-[auto,auto] gap-5">
        <div className="col-span-3 md:col-span-2 week-specials-header flex justify-between items-center mb-6">
          <h2 className="text-2xl font-normal leading-none font-markazi">
            This week specials!
          </h2>
          <Link
            to="/orderOnline"
            className="button-primary"
          >
            Online Menu
          </Link>
        </div>
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default WeekSpecials;
