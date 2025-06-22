import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    console.log("Render");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const json = await data.json();
    console.log("Data is ", json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurantData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("listOfRestaurants ", listOfRestaurants);

  let onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="p-2 m-2 flex">
        <div className="mx-2">
          <input
            type="text"
            className="border-2"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="mx-2 bg-gray-200 border rounded-lg px-2 hover:bg-gray-400"
            onClick={() => {
              // console.log("allRestaurantData ", allRestaurantData);
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
          className="mx-2 bg-gray-200 border rounded-lg px-2 hover:bg-gray-400"
          onClick={() => {
            setListOfRestaurants(
              allRestaurantData.filter((res) => res.info.totalRatingsString > 4)
            );
          }}
        >
          Top rated restaurants
        </button>
        <button
          className="mx-2 bg-gray-200 border rounded-lg px-2 hover:bg-gray-400"
          onClick={() => {
            setListOfRestaurants(resObj);
            setSearchInput("");
          }}
        >
          Clear Filter
        </button>
      </div>

      <div className="flex flex-wrap">
        {/* <RestaurantCard resData={resObj[1]} /> */}
        {listOfRestaurants.map((res) => {
          return (
            <Link
              to={"/restaurants/" + res.info.id}
              key={res.info.id}
              className="custom-link"
            >
              {console.log(res)}
              {/* {res.info.aggregatedDiscountInfoV3.header ? (
                <RestaurantCardPromoted resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )} */}
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
