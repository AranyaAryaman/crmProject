import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}
