import React from "react";
import "./CatSlider.css";
import Slider from "react-slick";
const CatSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Best Deals</h2>
          <div className="row">
            <Slider {...settings} className="col-11 cat_slider_Main">
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item">b</div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </Slider>
            <div className="col-1">ádasd</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default CatSlider;
