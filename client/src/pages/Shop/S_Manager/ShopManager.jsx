import React from "react";
import "./ShopManage.css";
import Slidebar from "../S_component/slideBar";
import { Navigate, Outlet } from "react-router-dom";
const ShopManager = () => {
  return (
    <div className="ShopManagerContainer">
      {/* left component */}
      <div className="ShopM-l">
        <Slidebar />
      </div>

      {/* right component */}
      <div className="Shop-r">
        <Outlet />
      </div>
    </div>
  );
};

export default ShopManager;
