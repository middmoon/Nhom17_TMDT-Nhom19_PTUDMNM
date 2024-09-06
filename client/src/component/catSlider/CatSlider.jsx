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
        <div className="container-fluid catSliderSectionCtn">
          <h2 className="hd">Best Deals</h2>
          <div className="row">
            <Slider {...settings} className=" cat_slider_Main">
              <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div>
              
              <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div> <div className="item">
                <div className="info">
                <img src="/IMG/Home/T.png" alt="" />
                <h5>Thời Trang Nam</h5>
                </div>
              </div>
            </Slider>
            
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
