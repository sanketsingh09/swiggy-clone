import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName } =
    resData?.info;

  const { slaString } = sla;

  return (
    <div className="mb-7 mt-7 w-[273px] shadow-md hover:shadow-2xl bg-white rounded-xl">
      <img
        className="w-[273px] h-[182px] object-cover rounded-t-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-3">
        <h3 className="font-bold py-1 text-lg truncate">{name}</h3>
        <div className="flex gap-1 text-base font-medium">
          <h5 className="font-extralight tracking-tight">⭐️ {avgRating} </h5> ·
          <h5>{slaString}</h5>
        </div>
        <h5 className="font-extralight tracking-tighter text-base text-custom-black truncate">
          {cuisines.join(", ")}
        </h5>
        <h5 className="text-custom-black">{areaName}</h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
