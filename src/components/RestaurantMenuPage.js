import { useParams } from "react-router-dom";
import React from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuPage = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) return <Shimmer />;

  const restaurantName = restaurantInfo[0]?.card?.card?.text;
  const dataToIterate =
    restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="mt-4 p-4">
      <h1 className="text-center font-bold text-3xl">{restaurantName}</h1>
      <div className="menus flex flex-wrap ">
        {dataToIterate.map((item, index) => {
          return (
            <div
              key={index + 1}
              className="p-4 m-4 border rounded-lg hover:bg-gray-50 w-[20%]"
            >
              <img
                className="border rounded-lg "
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  item?.card?.info?.imageId
                }
              />
              <p>{item?.card?.info?.name}</p>

              <h2>
                <span style={{ color: "green" }}>Category- </span>
                {item?.card?.info?.category}
              </h2>
              <p>{item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
