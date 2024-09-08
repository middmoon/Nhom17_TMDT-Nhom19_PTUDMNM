import React, { useEffect, useState } from "react";
import axios from "axios";
import "../header/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../pages/Access/Request/Request.js";
import { faCircleUser, faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "../selectDrop/select";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Nav from "./nav/nav.jsx";
const Header = () => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [curentUser, setCurentUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [categories, setCategories] = useState([
    "Tất cả",
    "Điện thoại",
    "Thời trang",
    "Thiết bị điện tử",
    "Thú cưng",
    "Nội thất",
    "Chăm sóc sắc đẹp",
    "Thực phẩm",
  ]);
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        };
        const response = await axios.get(" http://localhost:3030/api/v1/customer/profile", { headers });
        setCurentUser(response.data.metadata.user);
        console.log(curentUser);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu", error);
        setCurentUser(null);
      }
    };
    if (accessToken) fetchUser();
  }, [accessToken]);

  // tạo shop

  const handleLogout = () => {
    logoutUser(navigate, setError);
  };
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-lg-2 ">{/* <img src={Logo} alt="" /> */}</div>
            {/* Header */}
            <div className=" col-lg-5 ">
              <div className="headerSearch ">
                <Select data={categories} />

                <div className="search">
                  <input type="text" placeholder="Tìm kiếm sản phẩm" />
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
                </div>
              </div>
            </div>
            {/* Header */}

            <div
              className="col-lg-5"
              style={{
                position: "relative",
                display: "flex",
              }}
            >
              {/*User login*/}
              {curentUser ? (
                <>
                  <div className="btnNav">
                    <div className="loginNav" onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                      <div className="navButtonn">
                        <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "25px", paddingRight: "10px" }} /> {curentUser.email}
                      </div>
                    </div>
                    {isOpenDropDown !== false && (
                      <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                        <ul className="dropdownMenu">
                          <li>
                            <Link to="/my-profile" className="full-link">
                              Thông tin cá nhân
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="full-link" onClick={handleLogout}>
                              Đăng xuất
                            </Link>
                          </li>
                          <li>
                            <Link to="/Login" className="full-link">
                              Đơn hàng
                            </Link>
                          </li>
                          <li>
                            <Link to="/Login" className="full-link">
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to="/Login" className="full-link">
                              Mã giảm giá
                            </Link>
                          </li>
                        </ul>
                      </ClickAwayListener>
                    )}
                  </div>
                  <div className="loginNav">
                    <div className="navButtonn">
                      <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "25px", paddingRight: "10px" }} /> Giỏ hàng
                    </div>
                  </div>

                  <div className="loginNav">
                    <div className="navButtonn">
                      <FontAwesomeIcon icon={faShop} style={{ fontSize: "25px", paddingRight: "10px" }} />{" "}
                      {curentUser.isSeller ? "Bán hàng" : "Tạo gian hàng"}
                    </div>
                  </div>
                </>
              ) : (
                <div className="btnNav">
                  <div className="loginNav" onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                    <div className="navButtonn">
                      <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "25px", paddingRight: "10px" }} /> Tài khoản
                    </div>
                  </div>
                  {isOpenDropDown !== false && (
                    <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                      <ul className="dropdownMenu">
                        <li>
                          <Link to="/Login" className="full-link">
                            Đăng nhập
                          </Link>
                        </li>
                        <li>
                          <Link to="/Register" className="full-link">
                            Đăng ký
                          </Link>
                        </li>
                        <li>
                          <Link to="/Login" className="full-link">
                            Đơn hàng
                          </Link>
                        </li>
                        <li>
                          <Link to="/Login" className="full-link">
                            Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="/Login" className="full-link">
                            Mã giảm giá
                          </Link>
                        </li>
                      </ul>
                    </ClickAwayListener>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
};

export default Header;
