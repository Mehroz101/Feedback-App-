import React from "react";
import "../styles/Auth.css";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const method = useForm();
  const onsubmit = (data) => console.log(data);
  return (
    <>
      <div className="loginpage">
        <div className="logincontainer">
          <h2>Login</h2>
          <div className="loginForm">
            <form onSubmit={method.handleSubmit(onsubmit)}>
              <CustomTextInput
                control={method.control}
                name="username"
                label="Username"
                type="text"
                placeHolder="Enter your username"
              />
              <CustomTextInput
                name="password"
                control={method.control}
                label="Password"
                type="password"
                placeHolder="Enter your password"
              />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
