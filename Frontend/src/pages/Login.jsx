import React, { useEffect } from "react";
import "../styles/Auth.css";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "../Services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { notify } from "../utils/notification";
const Login = () => {
  const method = useForm();
  const navigate = useNavigate();
  const IsAdmin = new URLSearchParams(window.location.search).get("admin");
  const isAdmin = IsAdmin === "true" ? true : false;
  const SigninMutation = useMutation({
    mutationFn: (data) => SignIn(data),
    onSuccess: (data) => {
      if (data.success) {
        notify("success", data.message);
        localStorage.setItem("feedbackapptoken", data.token);
        localStorage.setItem("qwe2eDSA3r2", data.role);
        navigate("/");
      } else {
        notify("error", data.message);
      }
    },
    onError: (error) => {
      notify("error", error.message);
      console.log(error);
    },
  });
  const onsubmit = (data) => {
    if (isAdmin) {
      data.isAdmin = true;
    }
    SigninMutation.mutate(data);
  };

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
