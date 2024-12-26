import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/auth`;
export const SignUp = async (data) => {
  try {
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (data.confirmPassword === data.password) {
      const response = await axios.post(`${API_URL}/signup`, data, config);
      console.log(response);
    } else {
      return { success: false, message: "Password does not match" };
    }
  } catch (error) {
    console.log(error);
  }
};
export const SignIn = async (data) => {
  try {
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/signin`, data, config);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
