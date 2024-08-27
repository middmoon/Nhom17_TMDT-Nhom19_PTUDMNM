import React from "react";
import "../header/header.css";
import Logo from "../../assets/images/Logo.svg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "../selectDrop/select";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-3 col-lg-2">
              <img src={Logo} alt="" />
            </div>
            {/* Header */}
            <div className="col-md-4 col-lg-5">
              <div className="headerSearch ">
                <Select />

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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
