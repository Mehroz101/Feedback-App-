import React from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";

const StdProfile = () => {
  return (
    <>
      <div className="stdprofile">
        <div className="StdNav">
          <ul>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/profile/createroom"}>Create Room</Link>
            </li>
            <li>
              <Link to={"/profile/setting"}>Settings</Link>
            </li>
          </ul>
        </div>
        <div className="profilecontainer">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StdProfile;
