import React from "react";
import { DELIVERY_URL, DENI_URL, DINEOUT_URL, INSTAMART_URL } from "../utils/constants";

const HomePageBanner = () => {
  return (
    <div className="bg-custom-orange pt-16 pb-8 flex flex-col items-center">
      <div className="w-3/5 flex justify-center align-center">
        <div className="text-white pl-3 text-center text-5xl leading-10 tracking-tight">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
      </div>
      <div className="flex justify-center py-3 gap-4 w-full mt-6">
        <div className="w-1/4 px-4 py-4 flex items-center justify-between text-gray-400 bg-white border border-gray-300 rounded-2xl">
          <div>📍 Patel Nagar, Gurugram </div>
          <div>⬇</div>
        </div>
        <div className="w-2/5 px-4 py-4 flex items-center justify-between text-gray-500 bg-white border border-gray-300 rounded-2xl">
          <div>Search for restaurant, item or more</div>
          <div>🔍</div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
        <div className="w-1/5">
          <img src={DELIVERY_URL} alt="1" />
        </div>
        <div className="w-1/5">
          <img src={INSTAMART_URL} alt="2" />
        </div>
        <div className="w-1/5">
          <img src={DINEOUT_URL} alt="3" />
        </div>
        <div className="w-1/5">
          <img src={DENI_URL} alt="4" />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
