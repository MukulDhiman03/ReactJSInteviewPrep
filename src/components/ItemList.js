import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //   console.log("items", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        console.log("item", item);
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.price / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2 bg-black text-white rounded-lg shadow-lg "
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>
              <img
                className="w-48 p-4"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
