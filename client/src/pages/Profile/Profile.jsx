import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import {
  apiGetPublicDistrict,
  apiGetPublicProvince,
  apiGetPublicWard,
} from "../Access/Request/Request";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  ///state
  const [curentUser, setCurentUser] = useState();
  const [open, setOpen] = useState(false);
  const [stre, setStre] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [address, setAddress] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
  const [formData, setFormData] = useState({
    address: "",
    phone_number: "",
  });
  const navigate = useNavigate();
  ///Lay cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const accessToken = getCookie("accessToken");
  ///Hien thi thong tin nguoi dung
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        };
        const response = await axios.get(
          " http://localhost:3030/api/v1/customer/profile",
          { headers }
        );
        setCurentUser(response.data.metadata.user);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu", error);
        setCurentUser(null);
      }
    };
    if (accessToken) fetchUser();
  }, [accessToken]);
  //Mở thẻ
  const handleOpen = () => {
    setOpen(true);
  };

  //Đường thành phố
  //provine
  useEffect(() => {
    const fetchData = async () => {
      const provinceResponse = await apiGetPublicProvince();
      setStre(provinceResponse.data.metadata.province);

      if (province) {
        const districtResponse = await apiGetPublicDistrict(province);
        setDistricts(districtResponse.data.metadata.district);
      }
    };

    fetchData();
  }, [province]);

  // DistrictAPI
  useEffect(() => {
    const fetchPublicDistrict = async () => {
      try {
        if (province) {
          const response = await apiGetPublicDistrict(province);
          setDistricts(response.data.metadata.district);
        } else {
          setDistricts([]); // Clear districts if province is not selected
        }
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchPublicDistrict();
  }, [province]);

  // DistrictWardAPI
  useEffect(() => {
    const fetchPublicDistrictWard = async () => {
      const response = await apiGetPublicWard(district);
      setWards(response.data.metadata.ward);
    };
    province && fetchPublicDistrictWard(district);
  }, [district]);
  /////////////
  ///HandleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3030/api/v1/customer/shipping-address",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Data sent successfully", formData);

        window.location.reload();
      } else {
        console.log("Data sent successfully", formData);
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to send data to the server", formData);
    }
  };
  /////////////
  //handlechange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Lấy tên đầy đủ của tỉnh/thành
    if (name === "province") {
      const selectedProvinceName =
        event.target.options[event.target.selectedIndex].text; // Lấy tên tỉnh/thành
      if (selectedProvinceName) {
        setFormData((prevData) => ({
          ...prevData,
          province: selectedProvinceName, // Lưu tên đầy đủ thay vì mã
        }));
      }
    }

    // Lấy tên đầy đủ của quận/huyện
    if (name === "district") {
      const selectedDistrictName =
        event.target.options[event.target.selectedIndex].text; // Lấy tên quận/huyện
      if (selectedDistrictName) {
        setFormData((prevData) => ({
          ...prevData,
          district: selectedDistrictName, // Lưu tên đầy đủ thay vì mã
        }));
      }
    }

    if (name === "ward") {
      const selectedOption = event.target.options[event.target.selectedIndex];
      const selectedWardName = selectedOption.text;
      const selectedWardCode = selectedOption.getAttribute("data-code");

      if (selectedWardName) {
        setFormData((prevData) => ({
          ...prevData,
          ward: selectedWardName,
          ward_code: selectedWardCode,
        }));
      }
    }
  };

  //lấy thêm mã cho province - district
  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    handleChange(e);
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    handleChange(e);
  };
  //Lấy địa chỉ
  useEffect(() => {
    const addres = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        };
        const response = await axios.get(
          "http://localhost:3030/api/v1/customer/shipping-addresses",
          { headers }
        );
        setAddress(response.data.metadata.shipping_ddresses);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu", error);
      }
    };

    addres();
  }, []);
  // testLog
  console.log(address);

  return (
    <div>
      {/* PopUP thêm địa chỉ */}
      {open && (
        <div className="Featured-popUp" onClick={() => setOpen(false)}>
          <div
            className="FeaturedWrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="Address_Wrapper">
              <div className="Address_L">
                <img src="/IMG/Home/map.png" alt="" />
              </div>
              <form onSubmit={handleSubmit}>
                <h1 style={{ fontSize: "20px" }}>Cập nhật địa chỉ</h1>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  Lưu ý: ghi thông tin địa chỉ chính xác và số điện thoại
                </p>
                <div className="imput-box">
                  <input
                    onChange={handleChange}
                    name="address"
                    type="text"
                    id="form3Example3c"
                    className="form-control"
                    placeholder="Địa chỉ"
                  />

                  <input
                    onChange={handleChange}
                    name="phone_number"
                    type="text"
                    id="form3Example4c"
                    className="form-control"
                    placeholder="Số điện thoại"
                  />

                  <select
                    value={province}
                    onChange={handleProvinceChange}
                    name="province"
                    className="form-control"
                  >
                    <option value="">Chọn Thành Phố / Tỉnh</option>
                    {stre &&
                      stre.map((st) => (
                        <option value={st.code} key={st.code}>
                          {st.full_name}
                        </option>
                      ))}
                  </select>

                  <select
                    value={district}
                    onChange={handleDistrictChange}
                    name="district"
                    className="form-control"
                  >
                    <option value="">Chọn Thành Quận / Huyện</option>
                    {districts &&
                      districts.map((dst) => (
                        <option
                          value={dst.code}
                          key={dst.code}
                          data-province-code={dst.code}
                        >
                          {dst.full_name}
                        </option>
                      ))}
                  </select>

                  <select
                    value={ward}
                    onChange={handleChange}
                    name="ward"
                    className="form-control"
                  >
                    <option value="">Chọn Xã / Phường</option>
                    {wards &&
                      wards.map((wt) => (
                        <option
                          value={wt.code}
                          key={wt.code}
                          data-code={wt.code}
                        >
                          {wt.full_name}
                        </option>
                      ))}
                  </select>

                  <button type="submit" className="btn btn-primary btn-lg">
                    Tạo Tài Khoản
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* main chính */}
      <div className="Profile_section">
        <div className="container-fluid ProfileSectionCtn">
          <h2 className="hd">Thông tin cá nhân </h2>
          <div className="User_info">
            {curentUser ? (
              <>
                <div className="User_img">
                  <img src={curentUser.image_url} alt="Profile" />
                </div>
                <div className="User_inf">
                  <div>
                    <h4>Tên hiển thị</h4>
                    <p>{curentUser.user_name}</p>
                    <h4>Tên họ</h4>
                    <p>{curentUser.first_name}</p>
                    <h4>Tên đệm</h4>
                    <p>{curentUser.last_name}</p>
                    <h4>Email</h4>
                    <p>{curentUser.email}</p>
                    <h4>Số diện thoại</h4>
                    <p>{curentUser.phone_number}</p>
                  </div>
                </div>
              </>
            ) : (
              <p>Không có thông tin người dùng</p>
            )}
          </div>
          <div className="user_update">
            <button>Chỉnh sửa thông tin cá nhân</button>
          </div>
          <h2 className="hd">Địa chỉ giao hàng</h2>
          <div className="User_address">
            <div className="Address_ctn">
              {address.map((item) => {
                return <p key={item._id}>{item.address}</p>;
              })}
            </div>
          </div>
          <div className="user_update">
            <button onClick={handleOpen}>Thêm địa chỉ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
