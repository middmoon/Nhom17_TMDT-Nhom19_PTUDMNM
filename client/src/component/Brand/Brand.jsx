import React from "react";
import "./Brand.css";
import Slider from "react-slick";
import BrandAPI from "../APIclone/BrandAPI";
const Brand = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="brandSection">
        <div className="container-fluid brandSectionCtn">
          <h2 className="hd">Top cửa hàng được tin dùng</h2>
          <div className="row">
            <div className="col-3">
              <div className="BrandMain-ads">
                <h1>Tiêu chí dựa vào thương hiệu và đánh giá từ khách hàng </h1>
                <p>Khám phá ngay</p>
                <img src="/IMG/Home/Brand.png" alt="" />
              </div>
            </div>

            <div className="col-9 ">
              <div className="Brand-List">
                <p>Dành cho nam</p>
              </div>{" "}
              <Slider {...settings} className="BrandMain">
                {BrandAPI.map((item) => {
                  return (
                    <div className="item" key={item.id}>
                      <img src={item.image_categories} alt="" />
                      <div className="BrandCtn">
                        <h1>{item.Name}</h1>
                        <p>Shop now</p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
