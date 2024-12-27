import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/dashboard`;
export const getDashboardData = async () => {
  const token = localStorage.getItem("qwe2eDSA3r2");
  if (!token || token === false) return;
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
    return {success:false , message : error.response.data.message}

  }
};

export const GetAllUsers = async () => {
  const token = localStorage.getItem("qwe2eDSA3r2");
  if (!token || token === false) return;
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
    return {success:false , message : error.response.data.message}

  }
};
export const AddUser = async (data) => {
  const token = localStorage.getItem("qwe2eDSA3r2");
  if (!token || token === false) return;
  const tokensend = localStorage.getItem("feedbackapptoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokensend}`,
    },
  };
  try {
    const response = await axios.post(`${API_URL}/adduser`, data, config);
    return response?.data;
  } catch (error) {
    console.error(error);
    return {success:false , message : error.response.data.message}
  }
};

export const deleteUser = async ({userId})=>{
  try {
    const sendData = {
      userId:userId
    }
    const token = localStorage.getItem("qwe2eDSA3r2");
    if (!token || token === false) return;
    const tokensend = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokensend}`,
      },
    };
    const response = await axios.post(`${API_URL}/deleteuser`, sendData, config);
    return response?.data;

  } catch (error) {
    return {success:false , message : error.response.data.message}
 
  }
}
