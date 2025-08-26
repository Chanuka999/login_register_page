import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./models/Employees.js";

const app = express();
app.use(express.json());

app.use(cors());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.status(200).json({ success: true, message: "success" });
      } else {
        res.status(401).json({ success: false, message: "password incorrect" });
      }
    } else {
      res.status(404).json({ success: false, message: "user does not exist" });
    }
  });
});

app.post("/register", async (req, res) => {
  const employee = req.body;

  const newEmployee = new EmployeeModel(employee);
  try {
    await newEmployee.save();
    res.status(200).json({ success: true, data: newEmployee });
  } catch (error) {
    console.log("faild to create employee", error.message);

    res.status(500).json({ success: false, message: "server error" });
  }
});

const connectDb = async () => {
  try {
    const MONGOURL = "mongodb://localhost:27017/employee1";
    mongoose.connect(MONGOURL);
    console.log("mongodb connected successfull");
  } catch (error) {
    console.log("mongodb connected fail");
  }
};

app.listen(3001, () => {
  console.log(`server is running on 3001`);
  connectDb();
});
