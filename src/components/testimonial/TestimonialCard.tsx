import { TestimonialCardProps } from "models/testimonial";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ratingLevels: { [key: string]: any } = { "0.5": FaStarHalf, "1": FaStar };

const TestimonialCard: React.FC<TestimonialCardProps> = ({ customer }) => {
  return (
    <article className="min-h-[22.75rem] flex flex-col p-4 bg-white rounded-lg grid-cols-1 lg:grid-cols-auto lg:grid-rows-auto">
      <img
        className="w-32 mx-auto my-2 rounded-full"
        src={customer.image}
        alt={customer.fullName}
      />
      <h4 className="text-center mb-4">{customer.fullName}</h4>
      <span className="flex flex-row text-xl mb-2">
        {customer.rating.map((ratingPoint, index) => (
          <FaStar
            className="text-yellow-500 "
            size={16}
            key={index}
            icon={ratingLevels[ratingPoint]}
          />
        ))}
      </span>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
