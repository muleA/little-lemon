import { lazy } from "react";
const AboutUs = lazy(() => import("@components/about/AboutUs"));
export const  AboutUsPage=()=>{
  return (
    <>
      <AboutUs />
    </>
  );
}
