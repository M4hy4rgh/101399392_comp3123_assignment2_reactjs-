import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Error from "./screens/Error";
import Dashboard from "./screens/Dashboard";
import AddEmployee from "./screens/AddEmployee";
import EmployeeDetail from "./screens/EmployeeDetail";
import UpdateEmployee from "./screens/UpdateEmployee";
function App() {
  
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signup"  element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employee-detail/:id" element={<EmployeeDetail />} />
          <Route path="/employee-detail/:id/edit" element={<UpdateEmployee />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
    </div>);
}

export default App;
