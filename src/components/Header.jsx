import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName, setBtnName] = useState("Sign in");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="bg-custom-orange py-8 flex justify-center align-center">
      <div className="flex justify-between align-center w-4/5">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={LOGO_URL} width={160} height={48} />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex justify-center items-center gap-8 text-base font-semibold tracking-tight">
            <li className="text-white">
              <Link to="/swiggy-clone">Home</Link>
            </li>
            <li className="text-white">
              <Link to="/about"> About Us</Link>
            </li>
            <li className="text-white px-3 py-2 border rounded-xl outline-white">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            {/* <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li> */}
            <button
              className="px-7 rounded-2xl py-3 text-white bg-black "
              onClick={() => {
                btnName === "Sign in"
                  ? setBtnName("Logout")
                  : setBtnName("Sign in");
              }}>
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
