import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";
import { notify } from "../../utils/notification";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const CreateRoom = () => {
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      className: "",
      classImage: "",
      students: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "students",
  });

  const onSubmit = (data) => {
    console.log(data);
    if (data.students.length === 0) {
     notify("warning","Add atleast one student")
      return;
    }

    

    reset({
      className: "",
      classImage: "",
      students: [],
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
      notify("success","Student added successfully")
    } else {
      notify("warning", "All fields are required")
    }
  };

  return (
    <div className="create-room">
    <form action="" onSubmit={handleSubmit(onSubmit)}>
     <div className="page_top flex justify-content-between align-items-center">

      <h2>Create a New Classroom</h2>
      <button type="submit" >Create Room</button>
     </div>
      {/* Classroom Information */}
        <div className="classroom-info">
          <CustomTextInput
            control={control}
            name="className"
            label="Class Name"
            type="text"
            rules={{ required: true }}
            placeHolder="Enter classroom name"
            errorMessage="This field is required!"
          />
          <CustomTextInput
            control={control}
            name="classImage"
            label="Class Image URL"
            type="text"
            rules={{ required: true }}
            placeHolder="Enter image URL"
            errorMessage="This field is required!"
          />
        </div>
        {/* Submit Classroom */}
        </form>
      {/* Add Student Section */}
      <div className="add-student">
        <h2>Add Students</h2>
        <CustomTextInput
          control={control}
          name="studentName"
          label="Student Name"
          type="text"
          placeHolder="Enter student name"
          errorMessage="This field is required!"
        />
        <div className="input-box flex gap-2">
        <CustomTextInput
          control={control}
          name="rollNo"
          label="Student Roll No"
          type="text"
          placeHolder="Enter student roll no"
          errorMessage="This field is required!"
          style={{minWidth:"100px"}}
        />
        <CustomTextInput
          control={control}
          name="role"
          label="Student Role"
          type="text"
          placeHolder="Enter student role"
          errorMessage="This field is required!"

        />
        </div>
       

        <button type="submit" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
      {/* Display Students */}
      {fields.length > 0 && (
        <div className="student-list">
          <h3>Students Added:</h3>
          <DataTable value={fields} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Student Name"></Column>
                <Column field="rollNo" header="Roll No"></Column>
                <Column field="role" header="Role"></Column>
                <Column header="Action" body={() => <button type="button" onClick={(e) => {console.log(e)} }>Remove</button>}></Column>
            </DataTable>
          
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
