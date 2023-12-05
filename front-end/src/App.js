import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Error from "./screens/Error";
import Dashboard from "./screens/Dashboard";
import AddEmployee from "./screens/AddEmployee";
import EmployeeDetail from "./screens/EmployeeDetail";
import UpdateEmployee from "./screens/UpdateEmployee";
import AuthRoute from "./components/AuthRoute" 

function App() {


  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" element={<Register />} />

            <Route path="/dashboard" element={<AuthRoute component={Dashboard} />} />
            <Route path="/employees" element={<AuthRoute component={AddEmployee} />} />
            <Route path="/employees/:id/detail" element={<AuthRoute component={EmployeeDetail} />} />
            <Route path="/employees/:id" element={<AuthRoute component={UpdateEmployee} />} />


          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
