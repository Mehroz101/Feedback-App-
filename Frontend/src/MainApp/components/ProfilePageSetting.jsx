import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";
import { useMutation, useQuery } from "@tanstack/react-query";
import { notify } from "../../utils/notification";
import {
  GetAllClasses,
  GetAllClassesDropDown,
  GetAllUniversityDropDown,
  GetUserDetail,
  UpdateUserData,
} from "../../Services/MainAppService";
import CDropdown from "../../components/FormComponents/CDropDown";
const ProfilePage = () => {
  const method = useForm({
    defaultValues: {
      userName: "",
      rollNo: "",
      gender: "",
      university: "",
      className: "",
      classID: null,
      password: "",
      cPassword: "",
    },
  });
  const userData = useQuery({
    queryKey: ["UserData"],
    queryFn: GetUserDetail,
  });
  const { data: ClassRoomData } = useQuery({
    queryKey: ["getallclassdropdown"],
    queryFn: GetAllClassesDropDown,
  });
  const { data: UniversityData } = useQuery({
    queryKey: ["getalluniversitydropdown"],
    queryFn: GetAllUniversityDropDown,
  });
  const updateUserMutation = useMutation({
    mutationFn: UpdateUserData,
    onSuccess: (data) => {
      if (data.success) {
        userData.refetch();
        notify("success", data.message);
      } else {
        notify("error", data.message);
      }
    },
    onError: (error) => {
      console.log(error);
      notify("error", "something wents wrong");
    },
  });
  const onsubmit = (data) => {
    console.log(data);
    if (data.password === data.cPassword) {
      updateUserMutation.mutate({
        classID: data.classID,
        className: data.className,
        userName: data.userName,
        rollNo: data.rollNo,
        gender: data.gender,
        university: data.university,
        password: data.password,
      });
    } else {
      notify("error", "password does not match");
    }
  };
  useEffect(() => {
    console.log("ClassRoomData", ClassRoomData);
    if (userData.data) {
      method.setValue("classID", userData.data.data?.classID || "");
      method.setValue("className", userData.data.data?.className || "");
      method.setValue("userName", userData.data.data?.userName || "");
      method.setValue("rollNo", userData.data.data?.rollNo || "");
      method.setValue("gender", userData.data.data?.gender || "");
      method.setValue("university", userData.data.data?.university || "");
      method.setValue("password", userData.data.data?.password || "");
    }
  }, [userData]);
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  return (
    <>
      <div className="profile">
        <h3>Profile</h3>
        <form action="" onSubmit={method.handleSubmit(onsubmit)}>
          <CustomTextInput
            control={method.control}
            name="userName"
            label="Name"
            type="text"
            placeholder="Enter your name"
          />
          <CustomTextInput
            control={method.control}
            name="rollNo"
            label="Roll No"
            type="text"
            placeholder="Enter your roll no"
          />
          {/* <CustomTextInput
            control={method.control}
            name="university"
            label="University"
            type="text"
            placeholder="Enter your university name"
          /> */}
          <div className="inputbox">
            <label>University</label>
            <CDropdown
              control={method.control}
              name="university"
              optionLabel="universityName"
              optionValue="universityName"
              placeholder="Select a university"
              options={UniversityData}
              onChange={(e) => {
                console.log(e);
                method.setValue("university", e.label);
              }}
            />
          </div>
          <div className="inputbox">
            <label>Class name</label>
            <CDropdown
              control={method.control}
              name="classID"
              optionLabel="className"
              optionValue="classID"
              placeholder="Select a class"
              options={ClassRoomData}
              onChange={(e) => {
                console.log(e);
                method.setValue("className", e.label);
                method.setValue("classID", e.value);
              }}
            />
          </div>
          <div className="inputbox">
            <label>Gender</label>
            <CDropdown
              control={method.control}
              name="gender"
              optionLabel="label"
              optionValue="value"
              placeholder="Select a gender"
              options={genders}
              onChange={(e) => {
                method.setValue("gender", e.value);
              }}
            />
          </div>
          <CustomTextInput
            control={method.control}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <CustomTextInput
            control={method.control}
            name="cPassword"
            label="Confirm Password"
            type="password"
            placeholder="confirm password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
