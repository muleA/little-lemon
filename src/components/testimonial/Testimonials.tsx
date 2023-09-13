import { customers } from "@libs/utils/customers";
import TestimonialCard from "./TestimonialCard";

/* eslint-disable @typescript-eslint/no-explicit-any */

const Testimonials = () => {
  return (
    <section className="bg-[#495E57] py-[1.875rem]  ">
      <div className=" grid grid-cols-1 gap-4  md:gap-4  md:grid-cols-4 grid-rows-auto  md:mx-36 mx-2">
        <h2 className="font-bold text-2xl col-span-1 md:col-span-4 row-span-1 mb-7 text-white lg:col-span-4 md:col-span-3 sm:col-span-2">
          What people say about us!
        </h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer as any} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
