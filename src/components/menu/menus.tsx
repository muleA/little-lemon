import React, { useEffect, useState } from "react";
import FoodItem from "./menu-item";
import Skeleton from "@libs/ui/skeleton";
import { foodsData } from "@libs/utils/food-data";

const Foods: React.FC = () => {
  const [menuTab, setMenuTab] = useState("Breakfast");
  const [loading, setLoading] = useState(false);

  // Loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Food menu tab
  const handleMenuTabs = (type: string) => {
    setMenuTab(type);
  };

  return (
    <section className="my-12 max-w-screen-xl min-h-screen mx-auto px-6">
      {/* Food Menu tab */}
      <div className="flex items-center justify-center space-x-6">
        <button
          className={
            menuTab === "Breakfast"
              ? "active_menu_tab poppins bg-primary-900"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className={
            menuTab === "Lunch"
              ? "active_menu_tab poppins bg-primary-900"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Lunch")}
        >
          Lunch
        </button>
        <button
          className={
            menuTab === "Dinner"
              ? "active_menu_tab poppins bg-primary-900"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Dinner")}
        >
          Dinner
        </button>
      </div>

      {/* All foods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {foodsData
          .filter((item) => menuTab === item.foodType)
          .map((item) =>
            loading ? (
              <Skeleton key={item._id} />
            ) : (
              <FoodItem key={item._id} {...item} />
            )
          )}
      </div>
    </section>
  );
};

export default Foods;
