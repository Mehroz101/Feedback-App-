import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";
import { notify } from "../../utils/notification";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CDropdown from "../../components/FormComponents/CDropDown";
import { Dialog } from "primereact/dialog";
import { useMutation } from "@tanstack/react-query";
import { CreateClassRoom } from "../../Services/MainAppService";
const CreateRoom = () => {
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      className: "",
      imageUrl: "",
      universityName: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "students",
  });
  const ceateClassMutation = useMutation({
    mutationFn: CreateClassRoom,
  });
  const onSubmit = (data) => {
    console.log(data);
    // if (data.students.length === 0) {
    //   notify("warning", "Add atleast one student");
    //   return;
    // }
    ceateClassMutation.mutate({
      className: data.className,
      imageUrl: data.imageUrl,
      universityName: data.universityName,
    });
  };

  const handleAddStudent = () => {
    const studentName = control._formValues?.studentName;
    const rollNo = control._formValues?.rollNo;
    const role = control._formValues?.role;

    if (studentName && rollNo && role) {
      append({ name: studentName, rollNo, role });
      setValue("studentName", "");
      setValue("rollNo", "");
      setValue("role", "");
      notify("success", "Student added successfully");
    } else {
      notify("warning", "All fields are required");
    }
  };
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const roles = [
    { label: "Student", value: "STD" },
    { label: "CR", value: "CR" },
    { label: "GR", value: "GR" },
  ];
  return (
    <div className="create-room">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="page_top flex justify-content-between align-items-center">
          <h2>create room</h2>
          <button type="submit">Create</button>
        </div>
        {/* Classroom Information */}
        <div className="classroom-info">
          <div className="inputbox">
            <CustomTextInput
              control={control}
              name="className"
              label="Class name"
              type="text"
              rules={{ required: true }}
              placeholder="Enter classroom name"
              errorMessage="This field is required!"
            />
          </div>
          <div className="inputbox">
            <CustomTextInput
              control={control}
              name="universityName"
              label="University name"
              type="text"
              rules={{ required: true }}
              placeholder="Enter university name"
              errorMessage="This field is required!"
            />
          </div>
          <div className="inputbox">
            <CustomTextInput
              control={control}
              name="imageUrl"
              label="Class image URL"
              type="text"
              rules={{ required: true }}
              placeholder="Enter image URL"
              errorMessage="This field is required!"
            />
          </div>
          {/* <div className="inputbox">
            <CustomTextInput
              control={control}
              name="noOfStudents"
              label="No of students"
              type="text"
              rules={{ required: true }}
              placeholder="Total no students"
              errorMessage="This field is required!"
            />
          </div> */}
          {/* <div className="inputbox">
            <CustomTextInput
              control={control}
              name="rollNoPrefix"
              label="RollNo. prefix"
              type="text"
              rules={{ required: true }}
              placeholder="eg: MCEIT-20-"
              errorMessage="This field is required!"
            />
          </div> */}
        </div>
        {/* Submit Classroom */}
      </form>

      {/* Add Student Section */}
      {/* <div className="add-student">
        <h2>Add Students</h2>
        <CustomTextInput
          control={control}
          name="studentName"
          label="Student Name"
          type="text"
          placeHolder="Enter student name"
          errorMessage="This field is required!"
        />
        <CustomTextInput
          control={control}
          name="rollNo"
          label="Student Roll No"
          type="text"
          placeHolder="Enter student roll no"
          errorMessage="This field is required!"
          style={{ minWidth: "100px" }}
        />
        <div className="input-box flex gap-2 mb-4">
          <div className="w-full">
            <label>Gender</label>
            <CDropdown
              control={control}
              name="gender"
              optionLabel="label"
              optionValue="value"
              placeholder="Select a gender"
              options={genders}
              onChange={(e) => {
                method.setValue("gender", e.value);
              }}
              style={{ minWidth: "200px", width: "100%" }}
            />
          </div>
          <div className="w-full">
            <label>Role</label>
            <CDropdown
              control={control}
              name="role"
              optionLabel="label"
              optionValue="value"
              placeholder="Select a role"
              options={roles}
              onChange={(e) => {
                method.setValue("role", e.value);
              }}
              style={{ minWidth: "200px", width: "100%" }}
            />
          </div>
        </div>

        <button type="submit" onClick={handleAddStudent}>
          Add Student
        </button>
      </div> */}
      {/* Display Students */}
      {fields.length > 0 && (
        <div className="student-list">
          <h3>Students Added:</h3>
          <DataTable value={fields} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Student Name"></Column>
            <Column field="rollNo" header="Roll No"></Column>
            <Column field="role" header="Role"></Column>
            <Column
              header="Action"
              body={() => (
                <button
                  type="button"
                  onClick={(e) => {
                    console.log(e);
                  }}
                >
                  Remove
                </button>
              )}
            ></Column>
          </DataTable>
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
