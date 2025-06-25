import React from "react";
import ItemList from "./ItemList";

const ResCatogories = (props) => {
  return (
    <div>
      <div className=" bg-gray-50 w-6/12 shadow-lg  mx-auto my-4 p-4 ">
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {props?.data?.card?.title}
            {` (${props?.data?.card?.itemCards.length})`}
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={props?.data?.card?.itemCards} />
      </div>
    </div>
  );
};

export default ResCatogories;
