import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

import { resObj } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // whenever a state variable is change , react re renders the components.
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log("Body rendered");

  useEffect(() => {
    console.log("Render");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.8542626&lng=77.8880002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurantData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("allRestaurantData ", allRestaurantData);
              let filterData = allRestaurantData.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              });
              //   console.log("filterData ", filterData);
              setListOfRestaurants(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              allRestaurantData.filter((res) => res.info.totalRatingsString > 4)
            );
          }}
        >
          Top rated restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(resObj);
            setSearchInput("");
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
