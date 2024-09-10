import React, { useEffect, useState } from "react";
import "./ShopProduct.css";
import axios from "axios";
const ShopProduct = () => {
  //state
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [Product, SetProduct] = useState([]);
  const [Cate, setCate] = useState([]);
  const [selectedCate, setSelectedCate] = useState([]);
  const [brands, setBrands] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    sale_price: "",
    stock_quantity: "",
    brand_id: "",
  });
  // Lấy cookies
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const accessToken = getCookie("accessToken");
  //mở thẻ
  const handleOpen = (i) => {
    setOpen(true);
  };
  const handleOpen1 = (i) => {
    setOpen1(true);
  };
  //Lấy Categories
  useEffect(() => {
    const fetchCate = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const response = await axios.get(
          "http://localhost:3030/api/v1/p/categories",
          { headers }
        );
        setCate(response.data.metadata.categories);
      } catch (error) {
        console.error("Lỗi khi lấy dữ", error);
      }
    };

    fetchCate();
  }, []);
  //Lấy brand
  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const response = await axios.get(
          " http://localhost:3030/api/v1/p/brands",
          { headers }
        );
        setBrands(response.data.metadata.brands);
      } catch (error) {
        console.error("Lỗi khi lấy dữ", error);
      }
    };

    fetchBrand();
  }, []);

  ////////////
  //HandleInputChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //HandleChange
  const handleCateChange = (id) => {
    if (selectedCate.includes(id)) {
      setSelectedCate(selectedCate.filter((cateId) => cateId !== id));
    } else {
      setSelectedCate([...selectedCate, id]);
    }
  };
  //Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Cập nhật formData với danh mục đã chọn
      const updatedFormData = { ...formData, category_ids: selectedCate };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      };

      const response = await axios.post(
        "http://localhost:3030/api/v1/shop/products",
        updatedFormData,
        { headers }
      );

      if (response.status === 200) {
        console.log("Sản phẩm được thêm thành công");

        setOpen(false);
        window.location.reload();
      } else {
        console.error("Không thể thêm sản phẩm");
      }
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu", error);
    }
  };
  ///////////
  //Lấy sản phẩm
  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        };
        const response = await axios.get(
          "http://localhost:3030/api/v1/shop/profile",
          { headers }
        );
        SetProduct(response.data.metadata.shop.products);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu", error);
      }
    };
    FetchProduct();
  }, []);
  //
  //test log
  console.log();
  return (
    <div className="container-fluid">
      <div className="Product_Header">
        <h1>Sản phẩm của shop</h1>
        <button onClick={() => handleOpen()}>Thêm sản phẩm</button>
      </div>
      <div className="ShopProduct_content">
        <div className="SC_left">
          {Product.map((item) => {
            return (
              <div className="SC_item" key={item._id}>
                <img src="/IMG/Home/T.png" alt="" />
                <div className="SC_descipt">
                  <h1>{item.name}</h1>

                  <h1>Giá: {item.price}VND</h1>
                  <h1
                    style={{
                      color: "red",
                      fontSize: "15px",
                      paddingTop: "20px",
                    }}
                  >
                    Sale: {item.sale_price}VND
                  </h1>
                  <h1 style={{ fontSize: "15px" }}>
                    Kho: {item.stock_quantity}
                  </h1>
                </div>
                <button onClick={() => handleOpen1()}>
                  Chỉnh sửa sản phẩm
                </button>
              </div>
            );
          })}
        </div>
        <div className="SC_right"></div>
      </div>
      {open && (
        <div className="CreateProoduct" onClick={() => setOpen(false)}>
          <form
            className="CreateProduct-Content"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onSubmit={handleSubmit}
          >
            <p style={{ margin: "0" }}>Tên sản phẩm</p>
            <input
              name="name"
              type="Type"
              id="form3Example4c"
              onChange={handleChange}
              className="form-control"
            />
            <p style={{ margin: "0" }}>Chú thích</p>
            <input
              name="description"
              type="Type"
              id="form3Example4c"
              onChange={handleChange}
              className="form-control"
            />
            <p style={{ margin: "0" }}>Giá tiền VND (Không dấu không cách)</p>
            <input
              name="price"
              type="Type"
              onChange={handleChange}
              id="form3Example4c"
              className="form-control"
            />

            <p style={{ margin: "0" }}>Giá giảm VND (Không dấu không cách)</p>
            <input
              name="sale_price"
              type="Type"
              id="form3Example4c"
              onChange={handleChange}
              className="form-control"
            />
            <p style={{ margin: "0" }}>Số lượng (ghi bằng số)</p>
            <input
              name="stock_quantity"
              type="Type"
              id="form3Example4c"
              onChange={handleChange}
              className="form-control"
            />
            <select
              onChange={handleChange}
              name="brand_id"
              className="form-control"
            >
              <option value="">Chọn thương hiệu</option>
              {brands &&
                brands.map((i) => (
                  <option value={i._id} key={i._id}>
                    {i.name}
                  </option>
                ))}
            </select>

            <p style={{ margin: "0" }}>Danh mục</p>
            <div className="cateList">
              <ul>
                {Cate ? (
                  Cate.map((item) => (
                    <li key={item._id}>
                      <input
                        type="checkbox"
                        checked={selectedCate.includes(item._id)}
                        onChange={() => handleCateChange(item._id)}
                      />
                      {item.name}
                    </li>
                  ))
                ) : (
                  <p>Loading categories...</p>
                )}
              </ul>
            </div>
            <button type="submit" className="btn btn-primary ">
              Tạo sản phẩm
            </button>
          </form>
        </div>
      )}
      {open1 && (
        <div className="CreateProoduct" onClick={() => setOpen1(false)}>
          <form
            className="CreateProduct-Content1"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onSubmit={handleSubmit}
          ></form>
        </div>
      )}
    </div>
  );
};

export default ShopProduct;
