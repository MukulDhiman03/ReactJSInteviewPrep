import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

// named import
import { resObj } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // whenever a state variable is change , react re renders the components.
  // always create a state variable inside the function only that too on the top only
  // never create a state varaible inside if else or for loop
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
    console.log("Data is ", json);
    setListOfRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurantData(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  let onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline</h1>;
  }

  if (listOfRestaurants.length === 0) {
    console.log("LEngth is ", listOfRestaurants);
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
          return (
            <Link
              to={"/restaurants/" + res.info.id}
              key={res.info.id}
              className="custom-link"
            >
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
