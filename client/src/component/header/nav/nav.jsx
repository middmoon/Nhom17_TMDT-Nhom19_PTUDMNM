import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="nav-bars container-fluid ">
        <div className="row">
          <div className="col-sm-9 part1">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Link>Trang chính</Link>
                </li>
                <li className="list-inline-item">
                  <Link>About</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Shop</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Nhà cung cấp</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Blog</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Trang</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Liên hệ</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-3 part2"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
