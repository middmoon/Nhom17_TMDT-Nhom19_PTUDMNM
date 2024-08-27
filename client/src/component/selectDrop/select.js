import React, { useState } from "react";
import "../selectDrop/select.css";
const Select = () => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  return (
    <>
      <div className="selectDrop">
        <span className="openSelect" onClick={openSelect}>
          Tất cả
        </span>
        {isOpenSelect === true && (
          <div className="selectDropp">
            <div className="searchField">
              <input type="text" />
            </div>
            <ul className="searchResults">
              <li onClick={() => setisOpenSelect(false)}>Điện thoại</li>
              <li onClick={() => setisOpenSelect(false)}>Thời trang</li>
              <li onClick={() => setisOpenSelect(false)}>Thiết bị điện tử</li>
              <li onClick={() => setisOpenSelect(false)}>Thú cưng</li>
              <li onClick={() => setisOpenSelect(false)}>Nội thất</li>
              <li onClick={() => setisOpenSelect(false)}>Chăm sóc sắc đẹp</li>
              <li onClick={() => setisOpenSelect(false)}>Thực phẩm</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
