const express = require("express");
const Department = require("../models/Department");
const router = express.Router();

// Get all departments
router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

// Add a new department
router.post("/", async (req, res) => {
  const department = new Department({ name: req.body.name });
  await department.save();
  res.json(department);
});

module.exports = router;
