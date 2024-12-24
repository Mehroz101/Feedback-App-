import React from "react";
import "../styles/Auth.css";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const method = useForm();
  const onsubmit = (data) => console.log(data);
  return (
    <>
      <div className="loginpage">
        <div className="logincontainer">
          <h2>Signup</h2>
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
                name="email"
                control={method.control}
                label="Email"
                type="email"
                placeHolder="Enter your email"
              />
              <CustomTextInput
                name="password"
                control={method.control}
                label="Password"
                type="password"
                placeHolder="Enter your password"
              />
              <CustomTextInput
                name="confirmPassword"
                control={method.control}
                label="Confirm Password"
                type="password"
                placeHolder="Confirm your password"
              />

              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
