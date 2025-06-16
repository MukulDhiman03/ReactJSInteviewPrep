import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  //   console.log(resId);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.8542626&lng=77.8880002&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    // console.log("Data is ", json?.data?.cards);
    //    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    setRestaurantInfo(json?.data?.cards);
  };

  if (restaurantInfo === null) return <Shimmer />;

  const restaurantName = restaurantInfo[0]?.card?.card?.text;
  const dataToIterate =
    restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="menu-container">
      {console.log("restaurantInfo", restaurantInfo)}
      {console.log("dataToIterate", dataToIterate)}
      <h1>{restaurantName}</h1>
      <div className="menus">
        {dataToIterate.map((item, index) => {
          {
            /* console.log("Item is ", item); */
          }
          return (
            <div key={index + 1} className="menu-container-card">
              <img
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
              {/* {item?.card?.info?.addons?.map((addon) => {
              console.log("Addon", addon);
            })} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
