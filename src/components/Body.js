import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

import { resObj } from "../utils/constants";

const Body = () => {
  // whenever a state variable is change , react re renders the components.
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.totalRatingsString > 4)
            );
          }}
        >
          Top rated restaurants
        </button>
        <button
          onClick={() => {
            setListOfRestaurants(resObj);
          }}
        >
          Clear Filter
        </button>
      </div>

      <div className="res-container">
        {/* <RestaurantCard resData={resObj[1]} /> */}
        {listOfRestaurants.map((res) => {
          return <RestaurantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
