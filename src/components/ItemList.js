import React from "react";

const ItemList = ({ items }) => {
  //   console.log("items", items);

  return (
    <div>
      {items.map((item) => {
        console.log("item", item);
        return (
          <div key={item?.card?.info?.id} className="p-2 m-2 border-b">
            <div>
              <span>{item?.card?.info?.name}</span>
              <span>{item?.card?.info?.name}</span>
            </div>
            <p>{item?.card?.info?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
