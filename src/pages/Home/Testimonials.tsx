/* eslint-disable @typescript-eslint/no-explicit-any */
import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#495E57] py-[1.875rem]  ">
      <div className=" grid gap-4 grid grid-cols-4 grid-rows-auto gap-5 mx-36 ">
        <h2 className='  font-bold text-2xl col-span-4 row-span-1 mb-7 text-white lg:col-span-4 md:col-span-3 sm:col-span-2'>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer as any} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
