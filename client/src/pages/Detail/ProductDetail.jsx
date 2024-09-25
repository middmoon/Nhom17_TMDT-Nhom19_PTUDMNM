import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import Header from "../../component/header/header";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import { ProdctImG } from "../../pages/Detail/ProductIMG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faCartShopping,
  faShare,
  faTag,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
const ProductDetail = () => {
  //all state
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);

  const [product, setProduct] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [quantity, setQuantity] = useState(0);
  ///Lay cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const accessToken = getCookie("accessToken");
  //Biến môi trường
  ///////
  const { id } = useParams();
  //Slide
  ///////
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const goto = (url) => {
    setZoomImage(url);
  };

  //fetchProductDetail
  ////////////
  useEffect(() => {
    if (!id) {
      setProduct(null);
      return;
    }
    const fetchProductDetail = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const response = await axios.get(
          `http://localhost:3030/api/v1/p/products/${id}`,
          { headers }
        );

        setProduct(response.data.metadata.product);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu", error);
        setProduct(null);
      }
    };

    fetchProductDetail();
  }, [id]);
  //Add to card
  ///////////
  const handleAddToCart = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      };

      const payload = {
        productId: product._id,
        quantity,
      };

      const response = await axios.post(
        "http://localhost:3030/api/v1/customer/cart",
        payload,
        {
          headers,
        }
      );
      if (response.status === 201) {
        setShowMessage2(true);
        setTimeout(() => {
          setShowMessage2(false);
        }, 1000);
        console.log(payload);
      } else {
        console.log("Data sent false");
        setShowMessage3(true);
        setTimeout(() => {
          setShowMessage3(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng", error);
      setShowMessage1(true);
      setTimeout(() => {
        setShowMessage1(false);
      }, 1000);
    }
  };

  // Cập nhật số lượng sản phẩm khi người dùng nhập vào
  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };
  ///ảnh zoom
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setZoomImage(product.images[0].url);
    }
  }, [product]);
  ////test log

  //share
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  return (
    <div>
      <Header />
      <section className="detailsPage">
        <div className="container-fluid deatailProdct">
          <div className="row">
            <div className="col-md-10 part11">
              <div className="row">
                {/*Ảnh Sản phẩm */}
                <div className="col-md-6 ">
                  <div className="productZoom">
                    {" "}
                    <InnerImageZoom zoomScale={2} src={zoomImage} />
                  </div>

                  <Slider {...settings} className="ZoomSlider">
                    {product &&
                      product.images.map((image) => (
                        <div className="item" key={image._id}>
                          <img
                            src={image.url}
                            alt="Product"
                            onClick={() => goto(image.url)}
                          />
                        </div>
                      ))}
                  </Slider>
                </div>
                {/*  */}
                {/* Thông tin sản phẩm */}
                <>
                  {product ? (
                    <div className="col-md-6 productInfo">
                      <span className="Sale_rpc">Sale</span>
                      <div>
                        <h1>{product?.name || "Sản phẩm không có tên"}</h1>
                        <p className="quantity_inf">
                          Thương hiệu:{" "}
                          <span>
                            {product?.brand?.name || "Không có thương hiệu"}
                          </span>
                        </p>
                        <p className="quantity_inf">
                          Danh mục:
                          <span>
                            {product?.categories &&
                            product.categories.length > 0
                              ? product.categories.map((category, index) => (
                                  <span key={index}>
                                    {category.name}
                                    {index < product.categories.length - 1 &&
                                      ", "}
                                  </span>
                                ))
                              : "Không có danh mục"}
                          </span>
                        </p>
                        <p className="quantity_inf">
                          Số lượng còn lại:{" "}
                          {product?.stock_quantity || "Không có thông tin"}
                        </p>
                      </div>
                      {/* Giá */}
                      {product?.sale_price && product?.price ? (
                        <div>
                          <p className="priceif">Giá ưu đãi</p>
                          <div className="priceSelec">
                            <span className="rPrice">
                              {product.sale_price.toLocaleString("vi-VN")} VND
                            </span>
                            <div className="ml-2">
                              <span className="oPrice">
                                {product.price.toLocaleString("vi-VN")} VND
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p>Giá không khả dụng</p>
                      )}
                      {/* Ưu đãi */}
                      <div className="OfferAvai">
                        <p className="priceif" style={{ paddingBottom: "5px" }}>
                          Ưu đãi đi kèm
                        </p>
                        <p className="OfferAvaiItem">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "#54c963" }}
                          />{" "}
                          Giảm giá thêm 15% khi mua qua zaloPay{" "}
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </p>
                        <p className="OfferAvaiItem">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "#54c963" }}
                          />{" "}
                          Bảo hành có cam kết trong 12 tháng{" "}
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </p>
                        <p className="OfferAvaiItem">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "#54c963" }}
                          />{" "}
                          Bảo hành chính hãng 1 năm tại các trung tâm bảo hành
                          hãng <FontAwesomeIcon icon={faCircleInfo} />
                        </p>
                        <p className="OfferAvaiItem">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "#54c963" }}
                          />{" "}
                          Giao hàng tận nhà nhanh chóng{" "}
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </p>
                      </div>
                      {/* specials */}
                      <p
                        style={{
                          paddingBottom: "5px",
                          margin: "0",
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        Thông tin về sản phẩm:
                      </p>
                      <div className="If_Decreption">
                        <p>{product?.description || "Không có mô tả"}</p>
                      </div>
                      {/* addcard */}
                      <div className="AddCardSection">
                        <div className="CounterSec">
                          <input
                            type="number"
                            placeholder="0"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                          />
                        </div>
                        <div className="AddCard" onClick={handleAddToCart}>
                          <FontAwesomeIcon icon={faCartShopping} />
                          <p>Thêm vào giỏ hàng</p>
                        </div>
                        <div className="Share" onClick={handleShare}>
                          <FontAwesomeIcon icon={faShare} />
                          <p>Chia sẻ</p>
                        </div>
                        {showMessage && (
                          <div className="copy-message">
                            Đã sao chép liên kết thành công
                          </div>
                        )}
                        {showMessage1 && (
                          <div className="Alert-message">
                            Hãy đăng nhập tài khoản
                          </div>
                        )}
                        {showMessage2 && (
                          <div className="addCart-message">
                            Thêm vào giỏ thành công
                          </div>
                        )}
                        {showMessage3 && (
                          <div className="error-message">
                            Lỗi ! Thử lại sau nhé
                          </div>
                        )}
                      </div>
                      {/* sell detail */}
                      <p
                        style={{
                          paddingBottom: "5px",
                          margin: "0",
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        Thông tin về người bán:
                      </p>
                      <div className="SellInfo">
                        <img src={product.shop.img_url} alt="" />
                        <div className="SellInfoName">
                          <p style={{ fontSize: "20px", fontWeight: "600" }}>
                            {product.shop.name}
                          </p>
                          <p
                            style={{
                              fontSize: "10px",
                              fontWeight: "600",
                              color: "gray",
                            }}
                          >
                            Hoạt động 2 phút trước
                          </p>
                        </div>
                        <div className="SellAnother">
                          <p>
                            tỉ lệ phản hồi: <span>99%</span>
                          </p>
                          <p>
                            thời gian phản hồi: <span>Trong vài giờ</span>
                          </p>
                        </div>
                        <div className="SellAnother">
                          <p>
                            tham gia: <span>24h</span>
                          </p>
                          <p>
                            Người theo dõi: <span>12</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Đang tìm sản phẩm</p>
                  )}
                </>
                {/* End */}
              </div>
            </div>
            <div className="col-md-2 part22 ">
              <div className="prodctAdv">
                <img src="/IMG/detailPdct/adv.png" alt="" />
              </div>
              <div className="prodctAdv">
                <img src="/IMG/detailPdct/adv2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
