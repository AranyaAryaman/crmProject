const express = require("express");
const Employee = require("../models/Employee");
const router = express.Router();

// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find().populate("department");
  res.json(employees);
});

// Add a new employee
router.post("/", async (req, res) => {
  const { firstName, lastName, department } = req.body;
  const employee = new Employee({ firstName, lastName, department });
  await employee.save();
  res.json(employee);
});

module.exports = router;
