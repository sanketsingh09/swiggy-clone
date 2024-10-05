import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_APIS } from "../utils/constants";
import ListOfRestaurantShimmer from "./Shimmers/ListOfRestaurantShimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import HomePageBanner from "./HomePageBanner";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_APIS.GET_RESTAURANTS);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        "Looks like you're offline!! Please check your internet connection"
      </h1>
    );

  return (
    <div className="body">
      <HomePageBanner />
      {listOfRestaurants.length === 0 ? (
        <ListOfRestaurantShimmer />
      ) : (
        <div className="res-container justify-center flex flex-wrap pl-3">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}>
              {/* restaurant.data.promoted ? (
      <RestaurantCardPromoted resData={restaurant} />
      ) : */}
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
  // return listOfRestaurants.length === 0 ? (
  //   <ListOfRestaurantShimmer />
  // ) : (
  //   <div className="body">
  //     {/* <div className=" bg-custom-orange filter flex justify-between items-center pr-4">
  //       <div className="search m-4 p-4">
  //         <input
  //           type="text"
  //           className="border border-slate-300 rounded "
  //           value={searchText}
  //           onChange={(e) => {
  //             //batching
  //             console.log(e)
  //             setSearchText(e.target.value);
  //             // const filteredRestaurant = listOfRestaurants.filter((res) =>
  //             //   res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
  //             // );
  //             // setFilteredRestaurant(filteredRestaurant);
  //           }}
  //         />
  //         <button
  //           className="px-4 py-0 bg-sky-200 rounded  m-4"
  //           onClick={() => {
  //             const filteredRestaurant = listOfRestaurants.filter((res) =>
  //               res.info.name.toLowerCase().includes(searchText.toLowerCase())
  //             );
  //             setFilteredRestaurant(filteredRestaurant);
  //           }}>
  //           search
  //         </button>
  //       </div>

  //       <button
  //         className="px-3 py-1 bg-sky-400/10 rounded-full hover:bg-sky-400/20 text-sky-600 dark:text-sky"
  //         onClick={() => {
  //           const filteredList = listOfRestaurants.filter(
  //             (res) => res.info.avgRating > 4.2
  //           );
  //           setFilteredRestaurant(filteredList);
  //         }}>
  //         Top Rated Restaurants
  //       </button>
  //     </div> */}
  //     <div className="res-container flex flex-wrap pl-3">
  //       {filteredRestaurant.map((restaurant) => (
  //         <Link
  //           key={restaurant.info.id}
  //           to={"/restaurants/" + restaurant.info.id}>
  //           {/* restaurant.data.promoted ? (
  //           <RestaurantCardPromoted resData={restaurant} />
  //           ) : */}
  //           <RestaurantCard resData={restaurant} />
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Body;
