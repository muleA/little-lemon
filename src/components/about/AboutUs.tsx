import React from "react";
import AboutItem from "./AboutItem";
import aboutData from "@libs/utils/about-us-data";
import { About } from "models/about-item";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12 md:px-6 px-2">
      <h1 className="text-4xl poppins pb-4">Why Choose Us</h1>
      <p className="text-gray-500 text-md poppins  w-full mx-2">
        At Little Lemon, we believe that dining should be an experience that
        tantalizes all your senses. Our journey began twenty years ago when we
        set out to redefine the culinary landscape within our community. Since
        then, we've been on a relentless quest for excellence. We take pride in
        every aspect of what we do, from the selection of the finest, freshest
        ingredients to the meticulous craftsmanship of our dishes.
      </p>

      {/* About us cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {aboutData.map((item: About) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
