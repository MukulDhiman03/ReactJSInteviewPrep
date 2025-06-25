import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCatogories = ({ data, showItemList, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" bg-gray-50 w-6/12 shadow-lg  mx-auto my-4 p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data?.card?.title}
            {` (${data?.card?.itemCards.length})`}
          </span>
          <span>⬇️</span>
        </div>
        {showItemList && <ItemList items={data?.card?.itemCards} />}
      </div>
    </div>
  );
};

export default ResCatogories;
