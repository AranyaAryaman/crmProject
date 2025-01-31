import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(({ data }) => setEmployees(data));
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.firstName} {emp.lastName} - {emp.department?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
