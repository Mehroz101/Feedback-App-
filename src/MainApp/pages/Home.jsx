import React, { useEffect, useState } from "react";
import ClassRoomCard from "../components/ClassRoomCard";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";

const Home = () => {
  const classroomsData = [
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 1",
      location: "Emerson University, Multan",
      numberofstudent: 85,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 2",
      location: "Emerson University, Multan",
      numberofstudent: 92,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 3",
      location: "Emerson University, Multan",
      numberofstudent: 78,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 4",
      location: "Oxford University, London",
      numberofstudent: 88,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 5",
      location: "Oxford University, London",
      numberofstudent: 95,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 6",
      location: "Harvard University, Cambridge",
      numberofstudent: 90,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 7",
      location: "Harvard University, Cambridge",
      numberofstudent: 80,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Classroom 8",
      location: "Emerson University, Multan",
      numberofstudent: 85,
    },
  ];

  const [classrooms, setClassrooms] = useState(classroomsData);
  const [filteredClassrooms, setFilterClassrooms] = useState(classroomsData);
  const [selectedUniversity, setSelectedUniversity] = useState([]);

  const method = useForm({
    defaultValues: {
      name: "",
    },
  });

  const filterClassroomsByName = (name) => {
    const filteredClasses = classrooms.filter((classroom) =>
      classroom.title.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filteredClasses)
    setFilterClassrooms(filteredClasses);
  };

  const filterClassroomsByUniversity = () => {
    const filteredClasses = classrooms.filter((classroom) => {
      if (selectedUniversity.length === 0) return true; // Show all if no university is selected
      return selectedUniversity.some((university) =>
        classroom.location.toLowerCase().includes(university.toLowerCase())
      );
    });
    setFilterClassrooms(filteredClasses);
  };

  const handleUniversityChange = (event) => {
    const { value, checked } = event.target;
    setSelectedUniversity((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((university) => university !== value)
    );
  };

  useEffect(() => {
    filterClassroomsByUniversity();
  }, [selectedUniversity]);

  useEffect(() => {
    setClassrooms(classroomsData);
    setFilterClassrooms(classroomsData);
  }, []);
    
  return (
    <>
      <div className="classroompage">
        <h1>Classrooms</h1>
        <div className="searchfilter">
        <div className="searchbox">
          <CustomTextInput
            control={method.control}
            name="name"
            type="text"
            placeHolder="Enter classroom name"
            onChange={(e) => {
              filterClassroomsByName(e.target.value);
              // filterClassroomsByUniversity();
            }}
          />
        </div>
        <div className="dropdown">
        <p>select university</p>
          {/* <select name="uni" id="uni">
            <option value="emu">emu</option>
            <option value="gc">GC</option>
            <option value="SU">SU</option>
          </select> */}
        </div>
        </div>
       
        <div className="classrooms">
          {/* <div className="Classroomfilter">
            <div className="universitybox">
              <input
                type="checkbox"
                name="emerson"
                id="emerson"
                value="Emerson University"
                onChange={handleUniversityChange}
              />
              <label htmlFor="emerson">Emerson University</label>
            </div>
            <div className="universitybox">
              <input
                type="checkbox"
                name="oxford"
                id="oxford"
                value="Oxford University"
                onChange={handleUniversityChange}
              />
              <label htmlFor="oxford">Oxford University</label>
            </div>
            <div className="universitybox">
              <input
                type="checkbox"
                name="harvard"
                id="harvard"
                value="Harvard University"
                onChange={handleUniversityChange}
              />
              <label htmlFor="harvard">Harvard University</label>
            </div>
          </div> */}
          {filteredClassrooms.map((classroom, index) => (
            <ClassRoomCard key={index} classroom={classroom} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
