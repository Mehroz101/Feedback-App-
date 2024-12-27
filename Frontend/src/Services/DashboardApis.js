import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/dashboard`;
export const getDashboardData = async () => {
  const token = localStorage.getItem("qwe2eDSA3r2");
  if (!token) return;
  const tokensend = localStorage.getItem("feedbackapptoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokensend}`,
    },
  };
  try {
    const response = await axios.get(`${API_URL}/dashboarddata`, config);
    console.log(response?.data);
    if (response?.data.success === true) {
      return response?.data?.data;
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetAllUsers = async () => {
  const token = localStorage.getItem("qwe2eDSA3r2");
  if (!token) return;
  const tokensend = localStorage.getItem("feedbackapptoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokensend}`,
    },
  };
  try {
    const response = await axios.get(`${API_URL}/users`, config);
    console.log(response?.data);
    if (response?.data.success === true) {
      return response?.data?.data;
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
