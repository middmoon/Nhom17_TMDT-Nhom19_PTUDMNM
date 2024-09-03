import React, { useState } from "react";
import "../header/header.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/images/Logo.svg";
import {
  faCircleUser,
  faCartShopping,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "../selectDrop/select";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Nav from "./nav/nav.jsx";
const Header = () => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
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
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-lg-2 ">
              <img src={Logo} alt="" />
            </div>
            {/* Header */}
            <div className=" col-lg-5 ">
              <div className="headerSearch ">
                <Select data={categories} />

                <div className="search">
                  <input type="text" placeholder="Tìm kiếm sản phẩm" />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="searchIcon"
                  />
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
              <div className="btnNav">
                <div
                  className="loginNav"
                  onClick={() => setisOpenDropDown(!isOpenDropDown)}
                >
                  <div className="navButtonn">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      style={{ fontSize: "25px", paddingRight: "10px" }}
                    />{" "}
                    Tài khoản
                  </div>
                </div>
                {isOpenDropDown !== false && (
                  <ClickAwayListener
                    onClickAway={() => setisOpenDropDown(false)}
                  >
                    <ul className="dropdownMenu">
                      <li>Đăng nhập</li>
                      <li>Đơn hàng</li>
                      <li>Wishlist</li>
                      <li>Mã giảm giá</li>
                    </ul>
                  </ClickAwayListener>
                )}
              </div>

              <div className="loginNav">
                <div className="navButtonn">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ fontSize: "25px", paddingRight: "10px" }}
                  />{" "}
                  Giỏ hàng
                </div>
              </div>
              <div className="loginNav">
                <div className="navButtonn">
                  <FontAwesomeIcon
                    icon={faShop}
                    style={{ fontSize: "25px", paddingRight: "10px" }}
                  />{" "}
                  Bán hàng
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
};

export default Header;
