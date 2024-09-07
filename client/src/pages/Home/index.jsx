import React from "react";
import HomeSlider from "./Slider/Slider";
import CatSlider from "../../component/catSlider/CatSlider";
import Brand from "../../component/Brand/Brand";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <CatSlider />
      <Brand />
    </div>
  );
};

export default Home;
