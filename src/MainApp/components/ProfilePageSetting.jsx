import React from "react";
import { useForm } from "react-hook-form";

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
          <div className="inputbox">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...method.register("name", { required: true })}
            />
          </div>
          <div className="inputbox">
            <label htmlFor="rollno">Roll No</label>
            <input
              type="text"
              {...method.register("rollno", { required: true })}
            />
          </div>
          <div className="inputbox">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...method.register("email", { required: true })}
            />
          </div>
          <div className="inputbox">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...method.register("password", { required: true })}
            />
          </div>
          <div className="inputbox">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              {...method.register("role", { required: true })}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
