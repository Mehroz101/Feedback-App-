import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";

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
    if (!data.className || !data.classImage || data.students.length === 0) {
      alert("Please fill all fields and add at least one student.");
      return;
    }

    console.log("Classroom Created:", data);
    alert("Classroom successfully created!");

    // Reset form after submission
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
    } else {
      alert("Please fill all student details.");
    }
  };

  return (
    <div className="create-room">
      <h1>Create a New Classroom</h1>

      {/* Classroom Information */}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Create Classroom</button>
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
        <CustomTextInput
          control={control}
          name="rollNo"
          label="Student Roll No"
          type="text"
          placeHolder="Enter student roll no"
          errorMessage="This field is required!"
        />
        <CustomTextInput
          control={control}
          name="role"
          label="Student Role"
          type="text"
          placeHolder="Enter student role"
          errorMessage="This field is required!"
        />

        <button type="submit" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
      {/* Display Students */}
      {fields.length > 0 && (
        <div className="student-list">
          <h3>Students Added:</h3>
          <ul>
            {fields.map((student, index) => (
              <li key={student.id}>
                {student.name} (Roll No: {student.rollNo}, Role: {student.role}){" "}
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
