import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/routes/About";
import ContactUs from "./components/routes/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
// import RestaurantCard from "./components/RestaurantCard";
import RestaurantCardShimmer from "./components/Shimmers/RestaurantCardShimmer";
import App from "./App";
// import Cart from "./components/Cart";

const Cart = lazy(() => import("./components/routes/Cart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<RestaurantCardShimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
