import Hero from "@components/hero/hero";
import WeekSpecials from "@components/meals/WeekSpecials";
import OurStory from "@components/stories/our-story";
import Testimonials from "@components/testimonial/Testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <WeekSpecials />
      <Testimonials />
      <OurStory />
    </>
  );
};

