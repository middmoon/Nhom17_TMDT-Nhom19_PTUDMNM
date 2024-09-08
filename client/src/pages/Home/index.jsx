import React from "react";
import HomeSlider from "./Slider/Slider";
import CatSlider from "../../component/catSlider/CatSlider";
import Brand from "../../component/Brand/Brand";
import "./style.css";
import Cookies from "js-cookie";
import axios from "axios";
const Home = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const accessToken = getCookie("accessToken");
  console.log(accessToken);
  return (
    <div>
      <HomeSlider />
      <CatSlider />
      <Brand />
      <section className="homeProducts">
        <div className="container-fluid homeProductsCtn">
          <h2 className="hd">Sản phẩm bán chạy</h2>
          <ul className="list list-inline ml-auto filterTab">
            <li className="list-inline-item">
              <a href="">Tất cả</a>
            </li>
            <li className="list-inline-item">
              <a href="">Thời trang</a>
            </li>
            <li className="list-inline-item">
              <a href="">Điện thoại</a>
            </li>
            <li className="list-inline-item">
              <a href="">Laptop</a>
            </li>
            <li className="list-inline-item">
              <a href="">Giày dép</a>
            </li>
            <li className="list-inline-item">
              <a href="">Thực phẩm</a>
            </li>
            <li className="list-inline-item">
              <a href="">Đồng hồ</a>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
