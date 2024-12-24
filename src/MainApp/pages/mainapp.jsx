import React from "react";
import Navbar from "../components/Navbar";
import "../../styles/Mainapp.css";
import { Outlet } from "react-router-dom";
const mainapp = () => {
  return (
    <>
      <div className="mainpage">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default mainapp;
