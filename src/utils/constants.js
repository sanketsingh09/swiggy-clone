export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png";

export const DELIVERY_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png";

export const INSTAMART_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png";

export const DINEOUT_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png";

export const DENI_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png";

export const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

export const SWIGGY_APIS = {
  GET_RESTAURANTS:
    CORS_PROXY +
    encodeURIComponent(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4549833&lng=77.0387868&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ),

  GET_RESTAURANT_DETAILS:
    CORS_PROXY +
    encodeURIComponent(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4549833&lng=77.0387868&catalog_qa=undefined&restaurantId="
    ),
};
