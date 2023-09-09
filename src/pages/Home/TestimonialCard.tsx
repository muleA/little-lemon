import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import './TestimonialCard.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ratingLevels: { [key: string]: any } = { '0.5': FaStarHalf, '1': FaStar };

interface TestimonialCardProps {
  customer: {
    image: string;
    fullName: string;
    rating: string[];
    says: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <span>
        {customer.rating.map((ratingPoint, index) => (
          <FaStar size={10} key={index} icon={ratingLevels[ratingPoint]}  />
        ))}
      </span>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
