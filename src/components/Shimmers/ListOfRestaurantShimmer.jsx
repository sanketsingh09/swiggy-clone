import React from "react";

import RestaurantCardShimmer from "./RestaurantCardShimmer";

function ListOfRestaurantShimmer() {
  return (
    <div className="res-container mt-7 mb-7">
      <RestaurantCardShimmer />
      <RestaurantCardShimmer />
      <RestaurantCardShimmer />
      <RestaurantCardShimmer />
      <RestaurantCardShimmer />
      <RestaurantCardShimmer />
    </div>
  );
}

export default ListOfRestaurantShimmer;
