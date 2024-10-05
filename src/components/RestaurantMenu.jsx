import React from "react";
import { useParams } from "react-router-dom";
import RestaurantCardShimmer from "./Shimmers/RestaurantCardShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <RestaurantCardShimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { slaString } = sla;

  const card =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const itemCards = (card.itemCards || card.carousel).map((item) => {
    return {
      id: item.card?.info.id || item.dish?.info.id,
      name: item.card?.info.name || item.dish?.info.name,
      price:
        item.card?.info.price ||
        item.card?.info.defaultPrice ||
        item.dish?.info.price ||
        item.dish?.info.defaultPrice,
    };
  });

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-2xl tracking-tight py-3 w-3/5">
          {name}
        </h1>
        <div
          className="px-3 pb-3 w-3/5 rounded-b-xl"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
          }}>
          <div className="border border-slate-400 rounded-xl  bg-white flex items-start flex-col p-4">
            <p className="font-bold">
              ⭐️ {avgRating} ({totalRatingsString}) {" · "} {costForTwoMessage}
            </p>
            <p>{cuisines.join(", ")}</p>
            <div className="mx-5 py-1 flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                <div className="w-px h-6 bg-neutral-400 "></div>
                <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
              </div>
              <div className="flex flex-col justify-center ml-3 pr-4">
                <div className="font-bold text-sm tracking-tight">Outlet</div>
                <div className="flex mt-2 ">
                  <div className="font-bold text-sm tracking-tight">
                    {slaString}
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3 border border-slate-400"></hr>
          </div>
        </div>
      </div>
      {categories.map((category) => (
        <ResCategory
          key={category.card.card.title}
          data={category?.card?.card}
        />
      ))}
    </>
  );
};

export default RestaurantMenu;
