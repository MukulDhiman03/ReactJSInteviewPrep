import React from "react";

const RestaurantCard = (props) => {
  console.log("props", props.resData.info);
  let data = props.resData.info;
  // console.log(data);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.cloudinaryImageId
        }
        alt="food-logo"
      />
      <h3>{data.name}</h3>
      <h4>{data?.cuisines?.join(" , ")}</h4>
      <h4>{data.totalRatingsString}</h4>
      <h4>38 Mins</h4>
    </div>
  );
};

export default RestaurantCard;
