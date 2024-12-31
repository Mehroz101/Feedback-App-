import axios from "axios";
const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${BASE_URL}/api/user`
export const GetUserDetail =async ()=>{
try {
     const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/getuserdetail`,config)
    return response.data
} catch (error) {
    console.log(error.message)
}
}
export const UpdateUserData =async (data)=>{
try {
     const token = localStorage.getItem("feedbackapptoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/updateuserdetail`,data,config)
    return response.data
} catch (error) {
    console.log(error.message)
}
}
