const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
