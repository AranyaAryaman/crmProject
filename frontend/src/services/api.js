import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchEmployees = () => API.get("/employees");
export const fetchDepartments = () => API.get("/departments");
export const addEmployee = (employee) => API.post("/employees", employee);
