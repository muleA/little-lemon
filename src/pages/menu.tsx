import { lazy } from "react";
const Foods = lazy(() => import("@components/menu/menus"));
export const Menus = () => {
  return (
    <>
      <Foods />
    </>
  );
};
