import React from "react";

const RestaurantCard = (props) => {
  console.log("Props ", props);
  let data = props.resData.info;
  return (
    <div className="bg-gray-100 w-56 p-4 border rounded-lg mx-4 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.cloudinaryImageId
        }
        alt="food-logo"
      />
      <h3 className="text-lg font-bold m-2">{data.name}</h3>
      <h4 className="m-2">{data?.cuisines?.join(" , ")}</h4>
      <h4 className="text-lg m-2">{data.totalRatingsString}</h4>
      <h4 className="text-lg m-2">38 Mins</h4>
    </div>
  );
};

// Higher Order Component
// takes input - RestaurantCard
// output - RestaurantCard Promoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
