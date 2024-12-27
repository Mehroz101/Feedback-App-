import { useQuery } from "@tanstack/react-query";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { GetAllUsers } from "../Services/DashboardApis";
import { use } from "react";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "primereact/dialog";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";

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

  const UsersData = useQuery({
    queryKey: ["users"],
    queryFn: GetAllUsers,
  });
  useEffect(() => {
    if (!UsersData.isPending) {
      console.log("data");
      console.log(UsersData.data);
      setUsers(UsersData.data);
    }
  }, [UsersData.isPending]);
  const columns = [
    { field: "username", header: "Username" },
    { field: "rollno", header: "Roll No" },
    { field: "classRoom", header: "Class Room" },
    { field: "university", header: "University" },
    { field: "gender", header: "Gender" },
    { field: "role", header: "Role" },
  ];
  if (UsersData.isPending) return <h1>Loading...</h1>;
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
            loading={UsersData.isLoading}
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
          style={{ width: "50vw" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <div className="inputfields">
            <CustomTextInput
              control={method.control}
              name="username"
              label="Username"
              type="text"
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
            <CustomTextInput
              control={method.control}
              name="gender"
              label="Gender"
              type="text"
              placeholder="Enter your gender"
            />
            <CustomTextInput
              control={method.control}
              name="role"
              label="Role"
              type="text"
              placeholder="Enter your role"
            />
            <CustomTextInput
              control={method.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <CustomTextInput
              control={method.control}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Enter your password"
            />
            <Button
              label="Submit"
              className="p-button-success"
              style={{ backgroundColor: "#0f7e01", border: "none" }}
              onClick={method.handleSubmit(onsubmit)}
            />
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Users;
