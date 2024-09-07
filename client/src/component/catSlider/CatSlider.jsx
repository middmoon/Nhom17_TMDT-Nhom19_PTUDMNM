import React from "react";
import "./CatSlider.css";
import Slider from "react-slick";
import CategoryAPI from "../APIclone/CategoryAPI";
const CatSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
  };

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid catSliderSectionCtn">
          <h2 className="hd">Danh sách các loại mặt hàng</h2>
          <div className="row">
            <Slider {...settings} className=" cat_slider_Main">
              {CategoryAPI.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <div className="info">
                      <img src={item.image_categories} alt="" />
                      <h5>{item.Name}</h5>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <br />
          <h2 className="hd">Thực phẩm tiêu dùng</h2>
          <div className="catFood_Container">
            <div className=" catFood" style={{ backgroundColor: "#fde4f7" }}>
              <div className="catF_Content">
                <h1>Chúng tôi còn cung cấp cả thực phẩm thay đổi mỗi ngày</h1>
                <p>Mua ngay</p>
              </div>
              <div className="catF_img">
                <img src="IMG/Home/fruit.png" alt="" />
              </div>
            </div>
            <div className=" catFood" style={{ backgroundColor: "#e4fafd" }}>
              <div className="catF_Content">
                <h1>Làm cho cuộc sống của bạn trở nên đơn giản hơn</h1>
                <p>Mua ngay</p>
              </div>
              <div className="catF_img">
                <img src="IMG/Home/milk2.png" alt="" />
              </div>
            </div>
            <div className=" catFood" style={{ backgroundColor: "#fdfde4" }}>
              <div className="catF_Content">
                <h1>Một trong những sàn bán đồ hiệu tốt nhất</h1>
                <p>Mua ngay</p>
              </div>
              <div className="catF_img">
                <img src="IMG/Home/vege1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
