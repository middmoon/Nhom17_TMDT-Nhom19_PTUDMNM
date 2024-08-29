import React from "react";
import "../header/header.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/images/Logo.svg";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "../selectDrop/select";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row" >
            <div className=" col-lg-2 pb-3">
              <img src={Logo} alt="" />
            </div>
            {/* Header */}
            <div className=" col-lg-5 pb-3">
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

           <div className="col-lg-5 pb-3">
           <div className="loginNav">
              <NavDropdown
                className="navButton"
                title={
                  <>
                    <FontAwesomeIcon icon={faUserPlus} />{'  Login'} 
                  </>
                }
                id="basic-nav-dropdown"
              >
                <div className="navbtItems">
                  <NavDropdown.Item href="/User/order">Order</NavDropdown.Item>
                  <NavDropdown.Item href="">Setting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    log out
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
           </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
