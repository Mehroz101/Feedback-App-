import axios from "axios";
const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${BASE_URL}/api`;
export const GetUserDetail = async () => {
  try {
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/user/getuserdetail`, config);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const UpdateUserData = async (data) => {
  try {
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_URL}/user/updateuserdetail`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const CreateClassRoom = async (data) => {
  try {
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_URL}/class/createclassroom`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetClassDetail = async (data) => {
  try {
    console.log(data);
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `${API_URL}/class/getclassroomdetail`,
      config
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const GetAllClasses = async (data) => {
  try {
    console.log(data);
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/class/getallclasses`, config);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetAllClassesDropDown = async (data) => {
  try {
    console.log(data);
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `${API_URL}/class/getclassdropdown`,
      config
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const GetAllUniversityDropDown = async (data) => {
  try {
    console.log(data);
    const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `${API_URL}/class/getuniversitydropdown`,
      config
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
