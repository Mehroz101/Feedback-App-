import React from "react";
import { useForm } from "react-hook-form";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";
const ProfilePage = () => {
  const method = useForm({
    defaultValues: {
      name: "",
      rollno: "",
      email: "",
      password: "",
      role: "",
    },
  });
  const onsubmit = (data) => console.log(data);
  return (
    <>
      <div className="profile">
        <h3>Profile</h3>
        <form action="" onSubmit={method.handleSubmit(onsubmit)}>
          <CustomTextInput
            control={method.control}
            name="name"
            label="Name"
            type="text"
            placeholder="Enter your name"
          />
          <CustomTextInput
            control={method.control}
            name="rollno"
            label="Roll No"
            type="text"
            placeholder="Enter your roll no"
          />
          {/* <CustomTextInput
            control={method.control}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          /> */}
          <CustomTextInput
            control={method.control}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <CustomTextInput
            control={method.control}
            name="role"
            label="Role"
            type="text"
            placeholder="Enter your role"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
