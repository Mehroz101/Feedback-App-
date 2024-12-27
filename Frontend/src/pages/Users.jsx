import { useMutation, useQuery } from "@tanstack/react-query";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { AddUser, GetAllUsers, deleteUser } from "../Services/DashboardApis";
import { use } from "react";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "primereact/dialog";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import CDropDown from "../components/FormComponents/CDropDown";
import CDropdown from "../components/FormComponents/CDropDown";
import { notify } from "../utils/notification";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: "contains" },
    username: { value: null, matchMode: "contains" },
    rollno: { value: null, matchMode: "contains" },
    classRoom: { value: null, matchMode: "contains" },
    university: { value: null, matchMode: "contains" },
    gender: { value: null, matchMode: "contains" },
    role: { value: null, matchMode: "contains" },
  });

  const method = useForm({
    defaultValues: {
      username: "",
      rollno: "",
      classRoom: "",
      university: "",
      gender: "",
      role: "",
    },
  });

  const {data:UsersData , refetch:refetchUserData , isLoading:loadingUserData} = useQuery({
    queryKey: ["users"],
    queryFn: GetAllUsers,
  });
  const AddUserMutation = useMutation({
    mutationFn: AddUser,
    onSuccess: (data) => {
      if (data.success) {
        notify("success", data.message);
        setVisible(false);
        method.resetField("username");
        method.resetField("rollno");
        method.resetField("gender");
        method.resetField("role");
        method.resetField("password");
        method.resetField("confirmPassword");
        refetchUserData();
      } else {
        notify("error", data.message);
      }
    },
    onError: (error) => {
      notify("error", error.message);
    },
  });
  const deleteMutation = useMutation({
    mutationFn:deleteUser,
    onSuccess:(data)=>{
      if(data.success){
        notify("success",data.message);
        refetchUserData();
      }
      else{
        notify("error",data.message);
      }
    },
    onError:(error)=>{
      notify("error",error.message);
    }
  })

  const onSubmit = (data) => {
    AddUserMutation.mutate({
      username: data.username,
      rollno: data.rollno,
      classRoom: data.classRoom,
      university: data.university,
      gender: data.gender,
      role: data.role,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };
  useEffect(() => {
    if (!loadingUserData) {
      console.log(UsersData)
      setUsers(UsersData);
    }
  }, [loadingUserData]);
  const columns = [
    { field: "username", header: "Username" },
    { field: "rollno", header: "Roll No" },
    { field: "classRoom", header: "Class Room" },
    { field: "university", header: "University" },
    { field: "gender", header: "Gender" },
    { field: "role", header: "Role" },
  ];
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const roles = [
    { label: "Admin", value: "ADMIN" },
    { label: "Student", value: "STD" },
    { label: "GR", value: "GR" },
    { label: "CR", value: "CR" },
  ];
  if (loadingUserData) return <h1>Loading...</h1>;
  return (
    <>
      <div className="usersPage">
        <div className="page_top flex justify-content-between align-items-center">
          <h1>Users</h1>
          <Button
            label="Add User"
            className="p-button-success"
            style={{ backgroundColor: "#0f7e01", border: "none" }}
            onClick={() => {
              setDialogType("Add");

              setVisible(true);
            }}
          />
        </div>
        <div className="table">
          <DataTable
            value={users}
            stripedRows
            tableStyle={{ minWidth: "50rem" }}
            filters={filters}
            filpaginator
            rows={10}
            dataKey="id"
            filterDisplay="row"
            loading={loadingUserData}
            globalFilterFields={[
              "username",
              "rollno",
              "classRoom",
              "university",
              "gender",
              "role",
            ]}
          >
            {columns.map((col, i) => (
              <Column
                key={i}
                field={col.field}
                header={col.header}
                filter
                filterPlaceholder={`Search by ${col.header} `}
                style={{ minWidth: "12rem" }}
                headerStyle={{
                  fontWeight: "bold",
                  backgroundColor: "#0f7e01",
                  color: "white",
                }}
              />
            ))}
            <Column
              header="Action"
              headerStyle={{
                fontWeight: "bold",
                backgroundColor: "#0f7e01",
                color: "white",
              }}
              body={(rowData) => (
                <>
                  <div className="buttons flex gap-2 align-items-center">
                    <Button
                      label=""
                      icon={<FontAwesomeIcon icon={faEye} />}
                      className="p-button-info p-button-sm "
                      style={{
                        backgroundColor: "transparent",
                        color: "#0485a5",
                        border: "1px solid #0485a5",
                      }}
                    />
                    <Button
                      label=""
                      icon={<FontAwesomeIcon icon={faTrash} />}
                      className="p-button-danger p-button-sm "
                      style={{
                        backgroundColor: "transparent",
                        color: "red",
                        border: "1px solid red",
                      }}
                      disabled={deleteMutation.isPending}
                      onClick={()=>{
                        console.log(rowData)
                        deleteMutation.mutate({userId: rowData._id})
                      }}
                    />
                    <Button
                      label=""
                      icon={<FontAwesomeIcon icon={faPencil} />}
                      className="p-button-success p-button-sm "
                      style={{
                        backgroundColor: "transparent",
                        color: "#0485a5",
                        border: "1px solid #0485a5",
                      }}
                      onClick={() => {
                        setDialogType("Edit");
                        setVisible(true);
                      }}
                    />
                  </div>
                </>
              )}
            />
          </DataTable>
        </div>
        <Dialog
          header={`${dialogType} User`}
          visible={visible}
          style={{ width: "100%", maxWidth: "600px" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <div className="inputfields flex flex-column gap-2">
            <CustomTextInput
              control={method.control}
              name="username"
              label="Username"
              type="text"
              rules={{ required: true }}
              placeholder="Enter your username"
            />
            <CustomTextInput
              control={method.control}
              name="rollno"
              label="Roll No"
              type="text"
              placeholder="Enter your roll no"
            />
            <CustomTextInput
              control={method.control}
              name="classRoom"
              label="Class Room"
              type="text"
              placeholder="Enter your class room"
            />
            <CustomTextInput
              control={method.control}
              name="university"
              label="University"
              type="text"
              placeholder="Enter your university"
            />
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

            <label>Role</label>
            <CDropdown
              control={method.control}
              name="role"
              optionLabel="label"
              optionValue="value"
              placeholder="Select a role"
              options={roles}
              required={true}
              onChange={(e) => {
                method.setValue("role", e.value);
              }}
            />
            <CustomTextInput
              control={method.control}
              name="password"
              label="Password"
              type="password"
              rules={{ required: true }}

              placeholder="Enter your password"
            />
            <CustomTextInput
              control={method.control}
              name="confirmPassword"
              label="Confirm Password"
              rules={{ required: true }}

              type="password"
              placeholder="Enter your password"
            />
            <Button
              label="Submit"
              className="p-button-success"
              style={{ backgroundColor: "#0f7e01", border: "none" }}
              onClick={method.handleSubmit(onSubmit)}
            />
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Users;
