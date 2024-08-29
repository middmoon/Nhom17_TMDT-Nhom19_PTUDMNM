import React, { useState } from "react";
import "../selectDrop/select.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Select = () => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState("Tất cả");
  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index,name) => {
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  };
  return (
    <>
      <div className="selectDrop">
        <span className="openSelect" onClick={openSelect}>
          {selectedItem}{" "}
          <FontAwesomeIcon icon={faCaretDown} style={{ padding: " 0px 5px" }} />
        </span>
        {isOpenSelect === true && (
          <div className="selectDropp">
            <div className="searchField">
              <input type="text" />
            </div>
            <ul className="searchResults">
              <li
                onClick={() => closeSelect(0,'Tất cả')}
                className={`${selectedIndex === 0 ? `active` : ``}`}
              >
                Tất cả
              </li>
              <li
                onClick={() => closeSelect(1,'Điện thoại')}
                className={`${selectedIndex === 1 ? `active` : ``}`}
              >
                Điện thoại
              </li>
              <li
                onClick={() => closeSelect(2,'Thời trang')}
                className={`${selectedIndex === 2 ? `active` : ``}`}
              >
                Thời trang
              </li>
              <li
                onClick={() => closeSelect(3,'Thiết bị điện tử')}
                className={`${selectedIndex === 3 ? `active` : ``}`}
              >
                Thiết bị điện tử
              </li>
              <li
                onClick={() => closeSelect(4,'Thú cưng')}
                className={`${selectedIndex === 4 ? `active` : ``}`}
              >
                Thú cưng
              </li>
              <li
                onClick={() => closeSelect(5,'Nội thất')}
                className={`${selectedIndex === 5 ? `active` : ``}`}
              >
                Nội thất
              </li>
              <li
                onClick={() => closeSelect(6,'Chăm sóc sắc đẹp')}
                className={`${selectedIndex === 6 ? `active` : ``}`}
              >
                Chăm sóc sắc đẹp
              </li>
              <li
                onClick={() => closeSelect(7,'Thực phẩm')}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                Thực phẩm
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
