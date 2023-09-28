import { lazy } from "react";
const Hero = lazy(() => import("@components/hero/hero"));
const WeekSpecials = lazy(() => import("@components/meals/WeekSpecials"));
const OurStory = lazy(() => import("@components/stories/our-story"));
const Testimonials = lazy(() => import("@components/testimonial/Testimonials"));

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

  
