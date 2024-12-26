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
  const [showFilter, setShowFilter] = useState(false);

  const method = useForm({
    defaultValues: {
      name: "",
    },
  });

  const filterClassroomsByUniversity = () => {
    const filteredClasses = classrooms.filter((classroom) => {
      if (selectedUniversity.length === 0) return true;
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
  const applyFilters = (name) => {
    const filteredClasses = classrooms.filter((classroom) => {
      const matchesName = classroom.title
        .toLowerCase()
        .includes(name.toLowerCase());
      const matchesUniversity =
        selectedUniversity.length === 0 ||
        selectedUniversity.some((university) =>
          classroom.location.toLowerCase().includes(university.toLowerCase())
        );
      return matchesName && matchesUniversity;
    });
    setFilterClassrooms(filteredClasses);
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
        <div className="search-filter-container">
          <div className="searchbox">
            <CustomTextInput
              control={method.control}
              name="name"
              type="text"
              placeHolder="Enter classroom name"
              onChange={(e) => {
                applyFilters(e.target.value);
              }}
            />
          </div>
          <div className="filter-dropdown">
            <button
              className="filter-toggle"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              Filter by University
            </button>
            {showFilter && (
              <div className="dropdown-content">
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
              </div>
            )}
          </div>
        </div>
        <div className="classrooms">
          {filteredClassrooms.map((classroom, index) => (
            <ClassRoomCard key={index} classroom={classroom} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;