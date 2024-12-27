const User = require("../models/User");

const DashboardData = async (req, res) => {
  try {
    const data = await User.find();
    const totalBoys = data.filter((user) => user.gender === "male").length;
    const totalGirls = data.filter((user) => user.gender === "female").length;
    const totalStudents = data.length;
    res.status(200).send({
      success: true,
      data: { totalBoys, totalGirls, totalStudents },
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
const GetAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    const sendData = data.map((user) => ({
      username: user.username,
      password: user.password,
      role: user.role,
      gender: user.gender ?? "none",
      rollno: user.rollno ?? "none",
      classRoom: user.classRoom ?? "none",
      university: user.university ?? "none",
    }));
    res.status(200).send({ success: true, data: sendData });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = { DashboardData, GetAllUsers };
