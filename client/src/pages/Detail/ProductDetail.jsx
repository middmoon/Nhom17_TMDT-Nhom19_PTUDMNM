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
import { faCartShopping, faShare } from "@fortawesome/free-solid-svg-icons";
const ProductDetail = () => {
  //all state

  const [showMessage, setShowMessage] = useState(false);
  const [bigImageSize, setBigImgSize] = useState();
  const [product, setProduct] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  //Biến môi trường
  ///////
  const zoomSlider = useRef();
  const { id } = useParams();
  //Slide
  ///////
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const goto = (url) => {
    setZoomImage(url);
  };

  //fetchProductDetail
  ////////////
  useEffect(() => {
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
      }
    };

    fetchProductDetail();
  }, [id]);

  ///ảnh zoom
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setZoomImage(product.images[1].url);
    }
  }, [product]);
  ////test log
  console.log(product);

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
                    {ProdctImG.map((product) => (
                      <div className="item" key={product.id}>
                        <img
                          src={product.image}
                          alt=""
                          onClick={() => goto(product.image)}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                {/*  */}
                {/* Thông tin sản phẩm */}
                <div className="col-md-6 productInfo">
                  <span className="Sale_rpc">Sale</span>
                  <h1>
                    Fastrack Revoltt FS1 Pro|World's First,1.96" Super
                    AMOLED|Highest Resolution|BT Calling Smartwatch (Black
                    Strap, Free Size)
                  </h1>
                  <div className="priceSelec">
                    <span className="rPrice">10.000 VND</span>
                    <div className="ml-2">
                      <span className="oPrice">15.000 VND</span>
                    </div>
                  </div>
                  <div className="If_Decreption">
                    <p>
                      You can experience the utmost convenience and
                      functionality with the Fastrack Revoltt FS1 Pro
                      Smartwatch. Featuring up to a 4.978 cm (1.96) Super AMOLED
                      arched display, this smartwatch offers a clear and vivid
                      visual experience. This smartwatch delivers an exceptional
                      visual experience by rendering bold colours with a high
                      pixel resolution. Furthermore, with its arched design,
                      this smartwatch provides an optimal viewing experience
                      that is both immersive and visually appealing. Product
                      Description You can experience the utmost convenience and
                      functionality with the Fastrack Revoltt FS1 Pro
                      Smartwatch. Featuring up to a 4.978 cm (1.96) Super AMOLED
                      arched display, this smartwatch offers a clear and vivid
                      visual experience. This smartwatch delivers an exceptional
                      visual experience by rendering bold colours with a high
                      pixel resolution. Furthermore, with its arched design,
                      this smartwatch provides an optimal viewing experience
                      that is both immersive and visually appealing. Product
                      Description You can experience the utmost convenience and
                      functionality with the Fastrack Revoltt FS1 Pro
                      Smartwatch. Featuring up to a 4.978 cm (1.96) Super AMOLED
                      arched display, this smartwatch offers a clear and vivid
                      visual experience. This smartwatch delivers an exceptional
                      visual experience by rendering bold colours with a high
                      pixel resolution. Furthermore, with its arched design,
                      this smartwatch provides an optimal viewing experience
                      that is both immersive and visually appealing. Product
                      Description
                    </p>
                  </div>
                  <div className="AddCardSection">
                    <div className="CounterSec">
                      <input type="number" placeholder="0" min="1" />
                    </div>
                    <div className="AddCard">
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
                  </div>
                </div>
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
