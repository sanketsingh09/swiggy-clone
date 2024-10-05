import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-3/5 mx-auto my-1 mt-4 bg-gray-50 shadow-lg p-4 rounded-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}>
        <span className="font-bold text-l">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⌄</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default ResCategory;
