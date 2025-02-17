import React from "react";
import "../styles/Auth.css";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SignUp } from "../Services/AuthService";
import { notify } from "../utils/notification";

const Signup = () => {
  const method = useForm();
  const SignupMutation = useMutation({
    mutationFn: (data) => SignUp(data),
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        notify("success", data.message);
      } else {
        notify("error", data.message);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onsubmit = (data) => {
    SignupMutation.mutate(data);
  };
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
                rules={{ required: true }}
                placeHolder="Enter your username"
              />
              {/* <CustomTextInput
                name="email"
                control={method.control}
                label="Email"
                type="email"
                placeHolder="Enter your email"
              /> */}
              <CustomTextInput
                name="password"
                control={method.control}
                label="Password"
                type="password"
                rules={{ required: true }}
                placeHolder="Enter your password"
              />
              <CustomTextInput
                name="confirmPassword"
                control={method.control}
                label="Confirm Password"
                rules={{ required: true }}
                type="password"
                placeHolder="Confirm your password"
              />

              <button type="submit">Signup</button>
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
