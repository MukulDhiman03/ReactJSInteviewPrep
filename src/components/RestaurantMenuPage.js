import { useParams } from "react-router-dom";
import React from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCatogories from "./ResCatogories";

const RestaurantMenuPage = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);
  console.log("restaurantInfo ", restaurantInfo);

  if (restaurantInfo === null) return <Shimmer />;

  const restaurantName = restaurantInfo[0]?.card?.card?.text;

  const categories =
    restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  // console.log("Category", categories);

  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-3xl my-6">{restaurantName}</h1>
      {/* categories accordian */}
      {categories.map((categorie, index) => {
        return <ResCatogories data={categorie?.card} key={index} />;
      })}
    </div>
  );
};

export default RestaurantMenuPage;
