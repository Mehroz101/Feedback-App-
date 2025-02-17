import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/auth`;
export const SignUp = async (data) => {
  try {
   
    if (data.confirmPassword === data.password) {
      const response = await axios.post(`${API_URL}/signup`, data);
      console.log(response);
      return response.data;
    } else {
      return { success: false, message: "Password does not match" };
    }
  } catch (error) {
    console.log(error);
  }
};
export const SignIn = async (data) => {
  try {
  
    const response = await axios.post(`${API_URL}/signin`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    return { success: false, message: error.response.data.message };
    console.log(error);
  }
};
