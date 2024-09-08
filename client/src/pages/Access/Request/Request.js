import axios from "axios";
import Cookies from "js-cookie";
const urlLogin = "http://localhost:3030/api/v1/access/login";
const loginHeaders = {
  "Content-Type": "application/json",
};

axios.defaults.withCredentials = true;

export const loginUser = async (user, setError, navigate) => {
  try {
    const r = await axios.post(urlLogin, user, loginHeaders);
    const data = {
      message: r.data.message,
      statusCode: r.data.statusCode,
      metadata: {
        user: r.data.metadata.user,
        accessToken: r.data.metadata.accessToken,
      },
    };
    navigate("/");
    return data;
  } catch (error) {
    // Xử lý lỗi
    setError("Tên tài khoản hoặc mật khẩu không đúng");
  }
};
