import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Error from "./screens/Error";
import Dashboard from "./screens/Dashboard";
import AddEmployee from "./screens/AddEmployee";
import EmployeeDetail from "./screens/EmployeeDetail";
import UpdateEmployee from "./screens/UpdateEmployee";
import { Navigate } from 'react-router-dom'

function App() {


const PrivateRoute = ({children}) => {
  return localStorage.getItem("valid") ? children : <Navigate to="/" />
}

  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       {/* home */}
    //       <Route path="/" exact element={<Login />} />
    //       {/* signup */}
    //       <Route path="/signup" element={<Register />} />

    //       {/* all emp */}

    //       {/* <Route path="/employees" element={<PrivateRoute><Dashboard /></PrivateRoute>} > */}
    //         {/* add emp */}
    //         {/* <Route path="/employees" element={<AddEmployee />} /> */}
    //         {/* emp detail */}
    //         {/* <Route path="/employees/:eid" element={<EmployeeDetail />} /> */}
    //         {/* update emp */}
    //         {/* <Route path="/employees/:eid" element={<UpdateEmployee />} /> */}
    //       {/* </Route> */}
    //       <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    //       {/* add emp */}
    //       {/* <Route index element={<Dashboard/> } /> */}
    //       <Route path="/employees" element={<AddEmployee />} />
    //       {/* emp detail */}
    //       <Route path="/employees/:eid" element={<EmployeeDetail />} />
    //       {/* update emp */}
    //       <Route path="/employees/:eid" element={<UpdateEmployee />} />


    //       {/* error */}
    //       <Route path="*" element={<Error />} />
    //     </Routes>
    //   </Router>
    // </div>

    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<AddEmployee />} />
          <Route path="/employees/detail" element={<EmployeeDetail />} />
          <Route path="/employees/:eid" element={<UpdateEmployee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
