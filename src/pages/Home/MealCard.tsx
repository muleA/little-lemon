import React from 'react';
import {FaTruck} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './MealCard.css';

interface MealCardProps {
  meal: {
    image: string;
    name: string;
    price: string;
    description: string;
  };
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <article className="meal-card overflow-hidden">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
        <Link to={('orderOnline')}>
          Order a delivery <FaTruck />
        </Link>
      </div>
    </article>
  );
};

export default MealCard;
